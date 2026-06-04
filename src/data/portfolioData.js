export const projectsData = [
  {
    id: 1,
    title: "Zero-Trust Agentic Pricing Engine",
    short_desc: "AI-driven pricing orchestration utilizing zero-trust principles for dynamic enterprise modeling.",
    tech_stack: ["LangGraph", "Llama 3.2", "XGBoost", "Microsoft Agent Governance"],
    github_link: "https://github.com/lawrenceemenike",
    youtube_link: "https://www.youtube.com/embed/PLACEHOLDER_ID",
    case_study: {
      executive_summary: "Deployed a local, multi-agent inference engine that replaces static pricing matrices with dynamic, mathematically constrained pricing orchestration.",
      business_problem: "Commercial teams lacked visibility into pricing anomalies across regions, resulting in margin erosion and slow reaction times to market shifts.",
      why_it_matters: "Pricing is the most direct lever for P&L impact. Automating this with deterministic guardrails protects margins while scaling operational throughput.",
      my_role: [
        { role: "AI Architect", action: "Designed the decoupled cognitive and mathematical execution layers." },
        { role: "Product Owner", action: "Defined the unit-economic constraints and managed the 90-day deployment sprint." }
      ],
      discovery_process: "Conducted stakeholder interviews with commercial directors to map existing manual pricing workflows and identify latency bottlenecks in their decision matrix.",
      solution_architecture: "Decoupled architecture: LangGraph orchestrates the reasoning agents (Llama 3.2), while XGBoost handles the deterministic mathematical execution and pricing output.",
      governance_security: "Engineered under strict Zero-Trust principles. Implemented robust prompt-injection defense layers, strict RBAC for human-in-the-loop approvals, and audit trails for every pricing inference.",
      commercial_intel_layer: "Signals collected include real-time competitor API feeds and internal inventory metrics. The reasoning process forecasts demand elasticity before generating a final, governable pricing output.",
      results: "Simulated outcomes demonstrate a 40% reduction in decision latency and a distinct protection of baseline margins through anomaly avoidance.",
      lessons_learned: "Non-deterministic models cannot be trusted with financial math. Decoupling the LLM's reasoning from the actual mathematical calculation is mandatory for enterprise safety."
    }
  },
  // Automatically generate the 15 placeholders for the 4x4 grid
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 2,
    title: "Next Terminal Compiling...",
    short_desc: "Architectural blueprint in progress. System deployment scheduled.",
    tech_stack: ["Awaiting Stack"],
    isPlaceholder: true
  }))
];

export const journeyData = [
  { year: "2025 - PRESENT", role: "AI Strategist & Architect", company: "Nelc Digital" },
  { year: "2024 - 2025", role: "AI Engineer", company: "Omdena" },
  { year: "2022 - 2024", role: "Cognitive Experience Analyst", company: "Ricoh Europe Plc" },
  { year: "2018 - 2022", role: "Commercial Analyst", company: "Ricoh Europe Plc" },
  { year: "2020 - 2021", role: "Co-Founder", company: "Botbank.io" },
  { year: "2018", role: "Business Improvement & Monitoring Officer", company: "London Borough of Tower Hamlets" },
  { year: "2018", role: "Data Analyst", company: "S2M Ltd" },
  { year: "2017", role: "Principal Consultant", company: "Nextzon Business Services" },
  { year: "2016", role: "SA to CEO (Strategic Planning & Cost Control)", company: "Enikkom Construction Limited" },
  { year: "2009 - 2013", role: "Commercial Banking Officer", company: "Access Bank Plc" }
];

export const portfolioData = {
  header: {
    name: "Lawrence Emenike",
    headline: "Chief AI Officer | AI Architect & Engineer | Builder",
    subtext: "Building for commercial intelligence and deploying deterministic AI systems across enterprise sectors."
  },
  socials: {
    email: "clen.emenike@gmail.com",
    linkedin: "https://linkedin.com/in/emeniken",
    github: "https://github.com/lawrenceemenike"
  },

  focus: {
    title: "Commercial Intelligence",
    description: "My thesis centers on bridging the gap between traditional corporate strategy and modern AI orchestration. I build deterministic, high-trust AI systems that prioritize measurable business outcomes, moving beyond prototyping into enterprise-grade deployment."
  },

  lxwrvnx: [
    {
      category: "AI Art",
      title: "Generative Horizons",
      description: "Exploring latent spaces and algorithmic aesthetics."
    },
    {
      category: "AI Music",
      title: "Neural Soundscapes",
      description: "Harmonizing code and audio through generative models."
    },
    {
      category: "Street Art Photography",
      title: "Urban Textures",
      description: "Capturing raw, unfiltered moments in urban environments."
    }
  ],
  blog: [
    {
      title: "The Architecture of Commercial Intelligence",
      date: "Oct 2023",
      link: "#"
    },
    {
      title: "Deploying Deterministic AI in Enterprise",
      date: "Sep 2023",
      link: "#"
    },
    {
      title: "Generative Art: A Data Engineer's Perspective",
      date: "Aug 2023",
      link: "#"
    },
    {
      title: "Why Zero-Trust Agentic Systems Win",
      date: "Jul 2023",
      link: "#"
    },
    {
      title: "From Corporate Banking to AI Architect",
      date: "Jun 2023",
      link: "#"
    }
  ]
};
