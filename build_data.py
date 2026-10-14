import re, json, sys
src, out = sys.argv[1], sys.argv[2]
lines = open(src, encoding='utf-8').read().splitlines()
MAP = [("governmental bodies","Government & Policy"),("ai policy and governance","Government & Policy"),
 ("public & ngo","Initiatives"),("global collaboration","Partnerships"),("tools & platforms","Tools & Platforms"),
 ("ai infrastructure","Infrastructure"),("published papers","Published Papers"),("directory of ai startups","Startups"),
 ("ai learning content","Learning Content"),("sectoral ai adoptions","Sector Applications"),("hackathons","Events & Hackathons"),
 ("events","Events & Hackathons"),("datasets","Datasets"),("benchmarks","Benchmarks & APIs"),("api libraries","Benchmarks & APIs"),
 ("innovation highlights","Innovation"),("major national achievement","Awards"),("local awards","Awards"),
 ("neurips","Conference Papers"),("iclr","Conference Papers"),("acl","Conference Papers"),("deep learning indaba","Conference Papers"),("eacl","Conference Papers")]
def clean(s): return re.sub(r'[*_`]|\[|\]\([^)]*\)', '', s).strip()
def parse_link(s, i):
    # s[i]=='[' ; returns name,url,end
    depth=0; j=i
    while j < len(s):
        if s[j]=='[': depth+=1
        elif s[j]==']':
            depth-=1
            if depth==0: break
        j+=1
    name=s[i+1:j]
    if j+1>=len(s) or s[j+1]!='(': return None
    k=j+2; d=1
    while k<len(s) and d>0:
        if s[k]=='(': d+=1
        elif s[k]==')': d-=1
        k+=1
    return name, s[j+2:k-1], k
cat=None; sub=None; venue=None; items=[]; section=None
for ln in lines:
    if ln.startswith('## '):
        section=ln[3:].lower(); cat="Learning Series" if 'learning series' in section else None; sub=None; continue
    h=re.match(r'^\s*[*-]?\s*#{3,4}\s*(.*)', ln)
    if h:
        title=clean(h.group(1)).lower(); cat=None
        for k,v in MAP:
            if title.startswith(k): cat=v; break
        venue=clean(h.group(1)) if cat=="Conference Papers" else None; sub=None; continue
    if not cat: continue
    m=re.match(r'^\s*-\s+(.*)$', ln)
    if not m: continue
    body=m.group(1).strip()
    ep=re.match(r'Episode (\d+):\s*', body)
    pre=""
    if ep: pre=f"Ep {ep.group(1)}: "; body=body[ep.end():]
    if not body.startswith('['):
        if cat=="Sector Applications": sub=clean(body)
        continue
    r=parse_link(body,0)
    if not r: continue
    name,url,end=r
    name=pre+clean(name).rstrip(':').strip()
    desc=body[end:].strip().lstrip('-–—:').strip()
    desc=re.sub(r'\(\[[^\]]*\]\([^)]*\)\)','',desc)
    desc=clean(desc)
    if cat=="Sector Applications" and sub: desc=(sub+(": "+desc if desc else ""))
    if cat=="Conference Papers" and venue: desc=venue+(" · "+desc if desc else "")
    if cat=="Learning Series" and not desc: desc="AI Collective Learning Series episode."
    if len(desc)>230: desc=desc[:227].rsplit(' ',1)[0]+'…'
    items.append([cat,name,url,desc])
cats=[]
for c in ["Tools & Platforms","Startups","Published Papers","Datasets","Government & Policy","Initiatives","Partnerships","Infrastructure","Benchmarks & APIs","Conference Papers","Sector Applications","Learning Series","Learning Content","Events & Hackathons","Innovation","Awards"]:
    if any(i[0]==c for i in items): cats.append(c)
from collections import Counter
cnt=Counter(i[0] for i in items)
with open(out,'w',encoding='utf-8') as f:
    f.write("// AUTO-GENERATED from README.md — re-run tools/build_data.py after editing the README.\n")
    f.write("// Format: [category, name, link, short description]\n")
    f.write("const CATEGORIES = "+json.dumps(cats,ensure_ascii=False)+";\n")
    f.write("const RESOURCES = [\n"+",\n".join("  "+json.dumps(i,ensure_ascii=False) for i in items)+"\n];\n")
for c in cats: print(cnt[c], c)
print(len(items),'total')
