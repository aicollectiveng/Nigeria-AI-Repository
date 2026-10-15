// ============================================================
// MONTHLY DIGESTS — add a new entry here each time a PDF is uploaded
// to the "Monthly Digest" folder. Newest first is not required:
// the page sorts by `sort` (YYYY-MM).
// file:  exact PDF file name inside "Monthly Digest/"
// cover: first-page thumbnail (used only if no design image is found)
// image: (optional) design image file. If left out, the page looks for an image in the
//        "Monthly Digest" folder with the SAME name as the PDF, ending in .png or .jpg
//        e.g. "July 2026 Monthly Digest.pdf"  ->  "July 2026 Monthly Digest.png"
// ============================================================

const DIGEST_FOLDER = "https://github.com/aicollectiveng/Nigeria-AI-Repository/blob/main/Monthly%20Digest/";
const DIGEST_RAW    = "https://raw.githubusercontent.com/aicollectiveng/Nigeria-AI-Repository/main/Monthly%20Digest/";

const DIGESTS = [
  { title: "Deep Learning Indaba 2026", edition: "Special", label: "DLI 2026 Edition", sort: "2026-08", pages: 54,
    file: "DLI 2026 EDITION Special Digest.pdf", cover: "dli-2026-edition-special-digest.jpg",
    highlights: ["Africa's Deep Learning Indaba comes to Nigeria for the first time", "1,271 participants from 66 countries gather in Lagos", "Nigeria launches the Pan-African ATLAS Network"] },
  { title: "July 2026", edition: "Monthly", label: "Month ending July 2026", sort: "2026-07", pages: 18,
    file: "July 2026 Monthly Digest.pdf", cover: "july-2026-monthly-digest.jpg",
    highlights: ["IMF names Nigeria among Sub-Saharan Africa's top five AI economies", "Nigeria tops Africa on the 2026 Global Index on Responsible AI", "Bosun Tijani named founding member of the ITU's AI for Good Global Commission"] },
  { title: "June 2026", edition: "Monthly", label: "Month ending June 2026", sort: "2026-06", pages: 27,
    file: "June 2026 Monthly Digest.pdf", cover: "june-2026-monthly-digest.jpg",
    highlights: ["Nigeria inaugurates AI Scaling Hub with $7.5m Gates Foundation fund", "UNESCO launches Nigeria's AI Readiness Assessment Report", "Vision for a National AI Trust unveiled in London"] },
  { title: "May 2026", edition: "Monthly", label: "Month ending May 2026", sort: "2026-05", pages: 23,
    file: "May 2026 Monthly Digest.pdf", cover: "may-2026-monthly-digest.jpg",
    highlights: ["Kasi Cloud launches West Africa's first hyperscale AI-ready data centre", "Nigeria AI Collective opens GPU compute access for researchers and startups", "FactCheckAfrica unveils AI civic tools ahead of 2027 elections"] },
  { title: "April 2026", edition: "Monthly", label: "Month ending April 2026", sort: "2026-04", pages: 18,
    file: "April Monthly Digest 2026.pdf", cover: "april-monthly-digest-2026.jpg",
    highlights: ["VP Shettima launches AI University Innovation Pods at UNILAG", "CJID launches the AI Advocacy Project", "Toward comprehensive AI regulation as the Digital Economy Bill nears passage"] },
  { title: "India AI Impact Summit 2026", edition: "Special", label: "Special edition · March 2026", sort: "2026-03", pages: 24,
    file: "India AI Impact Summit 2026 Special Digest.pdf", cover: "india-ai-impact-summit-2026-special-digest.jpg",
    highlights: ["Nigeria AI Collective amplifies the national AI ecosystem in New Delhi", "Google & Ipsos: 93% of Nigerians use AI for complex learning", "Nigerian startup Decide ranks 4th globally for spreadsheet AI accuracy"] },
  { title: "November 2025", edition: "Monthly", label: "Month ending November 2025", sort: "2025-11", pages: 18,
    file: "November Monthly Digest.pdf", cover: "november-monthly-digest.jpg",
    highlights: ["Qhala Kenya and Data Science Nigeria train policymakers on AI in Lagos", "Nigeria demands global equity in AI governance at the G20 Summit", "TD Africa and Schneider Electric to build AI-powered data centres"] },
  { title: "October 2025", edition: "Monthly", label: "Month ending October 2025", sort: "2025-10", pages: 12,
    file: "October Monthly Digest.pdf", cover: "october-monthly-digest.jpg",
    highlights: ["DAWN AI study pioneers neuro-inclusive AI for neurodivergent learners", "Africa's first OpenAI Academy launches at UNILAG", "EU and Nigeria forge a new AI research partnership"] },
  { title: "September 2025", edition: "Monthly", label: "Month ending September 2025", sort: "2025-09", pages: 12,
    file: "September Monthly Digest.pdf", cover: "september-monthly-digest.jpg",
    highlights: ["Nigeria unveils N-ATLAS to digitise indigenous languages", "UNGA 2025 sets the stage for responsible global AI governance", "New AI learning platform for rural girls in Ondo"] },
  { title: "August 2025", edition: "Monthly", label: "Month ending August 2025", sort: "2025-08", pages: 11,
    file: "August Monthly Digest.pdf", cover: "august-monthly-digest.jpg",
    highlights: ["Minister Bosun Tijani named on TIME's AI influence list", "TRCN and GMind AI launch a nationwide AI learning platform", "Google & GOMYCODE launch \"Build with AI\" training"] },
  { title: "July 2025", edition: "Monthly", label: "Month ending July 2025", sort: "2025-07", pages: 13,
    file: "July Monthly Digest.pdf", cover: "july-monthly-digest.jpg",
    highlights: ["Six Nigerian startups in Google AI Accelerator's Africa top 15", "Nigeria unveils AI-powered business registration portal", "US court ruling on Anthropic sets AI copyright benchmark"] },
  { title: "June 2025", edition: "Monthly", label: "Month ending June 2025", sort: "2025-06", pages: 9,
    file: "June Monthly Digest.pdf", cover: "june-monthly-digest.jpg",
    highlights: ["Nigerian Government and Gates Foundation partner on AI Scaling Hub", "Insights from African innovation leaders", "Linux Foundation: open-source AI drives cost savings and growth"] }
];
