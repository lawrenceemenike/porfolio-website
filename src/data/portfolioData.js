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
  // Automatically generate the 14 placeholders for the 4x4 grid
  ...Array.from({ length: 14 }, (_, i) => ({
    id: i + 2,
    title: "Next Terminal Compiling...",
    short_desc: "Architectural blueprint in progress. System deployment scheduled.",
    tech_stack: ["Awaiting Stack"],
    isPlaceholder: true
  })),
  {
    id: 16,
    title: "Customer Lifetime Value Predictor",
    short_desc: "Agentic MLOps forecasting engine combining structured telemetry with local LLM evaluation to eliminate corporate financial planning blind spots.",
    tech_stack: [
      "Python",
      "LangGraph",
      "Ollama",
      "Gemma 12B",
      "XGBoost",
      "MLflow",
      "ChromaDB"
    ],
    github_link: "https://github.com/lawrenceemenike/Agentic-CLV-Engine",
    screenshots_link: "https://github.com/lawrenceemenike/Agentic-CLV-Engine/tree/main/screenshots",
    case_study: {
      executive_summary: "Architected and deployed a stateful multi-agent LangGraph engine that dynamically calculates forward-looking Customer Lifetime Value (CLV). By integrating a local Gemma 12B LLM via Ollama for unstructured qualitative reasoning alongside a deterministic XGBoost quantitative baseline, the system successfully bounds non-deterministic LLM output within strict financial mathematical constraints.",
      business_problem: "Enterprise B2B organizations suffer from 'Silent Churn', where Financial Planning & Analysis (FP&A) teams rely on lagging historical metrics. By the time utilization drops register on the general ledger, the account is already unrecoverable, causing severe cash-flow forecasting variance and bloated Customer Acquisition Costs (CAC).",
      why_it_matters: "Accurate, real-time CLV forecasting directly dictates capital allocation efficiency. By shifting from reactive to predictive churn modeling, the organization can dynamically enforce CAC ceilings and deploy targeted Customer Success interventions, defending product margins and protecting the recurring revenue multiples critical to corporate valuation.",
      my_role: [
        {
          role: "AI Product Manager",
          action: "Authored the core product requirements encompassing four main Epics: Epic 1 (Multimodal Data Ingestion & Feature Engineering), Epic 2 (Agentic Cognitive Graph Orchestrator), Epic 3 (Security & Governance Pipeline), and Epic 4 (Observability & Continuous Evaluation). Defined the user stories for quantitative telemetry limits, unstructured RAG staging, and dynamic CAC constraints."
        },
        {
          role: "AI Architect",
          action: "Designed a decoupled multi-agent topology combining a statistical Quant Node (XGBoost) and a cognitive Context Node (Ollama/Gemma 12B). Architected the strict Security & Governance layer integrating NER/Regex PII masking, a deterministic mathematical clipping gate, a Human-In-The-Loop (HITL) pause queue for >30% Tier-1 financial shifts, and a cryptographic SHA-256 audit ledger."
        },
        {
          role: "AI Engineer",
          action: "Implemented the local Ollama/Gemma integration, configured the HuggingFace/ChromaDB RAG vector space, built the custom regex/NER text pre-processing pipelines, and wired the MLflow evaluation tracing."
        }
      ],
      discovery_process: "A deep-dive audit of historical subscription records and raw CRM text logs uncovered a hidden but highly predictive pattern: an early correlation between feature utility decay, isolated support ticket spikes, and eventual revenue contraction. The data proved that qualitative account executive notes often signaled churn months before quantitative telemetry did.",
      solution_architecture: "A highly decoupled LangGraph state machine workflow: the 'Quant Node' initially processes structured telemetry (tenure, fee, user ratio) through an XGBoost regression model to establish a Baseline CLV. The state then routes to the 'Context Node', which utilizes ChromaDB RAG retrieval and a local Gemma 12B instance to generate a qualitative risk score (0.0 - 1.0). The final 'Orchestrator Node' mathematically synthesizes these variables, adjusting the baseline valuation downwards if severe churn sentiment is detected.",
      governance_security: "To achieve production readiness, a rigorous 'security_governance.py' module intercepts the final LangGraph state. Raw CRM ingestion is sanitized by a Regex/SpaCy NER pipeline that strips emails, phone numbers, and redacts [PERSON]/[ORG] entities to prevent PII leakage. Post-inference, a deterministic mathematical clipping layer applies hard floors, and a Human-In-The-Loop (HITL) gate automatically pauses execution and queues the payload if a Tier-1 account experiences a valuation shift >30%. Finally, all payloads generate a SHA-256 cryptographic audit trail aligned with the NIST AI RMF.",
      commercial_intel_layer: "Real-time product telemetry signals (like feature utilization rates) and unstructured CRM logs are continuously synthesized by the graph orchestrator. This produces a unified, human-readable Account Vulnerability Score and computes a live 'Dynamic CAC Limit', instantly telling the commercial team exactly how much capital is safe to deploy to save the account.",
      results: "The engine demonstrated immediate clarity over traditional FP&A forecasts. For 'Vanguard Logistics', the quantitative baseline predicted a $76,650 CLV. However, the Context Node flagged a severe risk score of 0.75 due to a resigned technical champion and integration stalls. The cognitive graph overrode the baseline, compressing the forward CLV to $49,822 and violently restricting the Dynamic CAC Cap to $7,473 to prevent cash burn. Conversely, for 'Apex Financial Corp', the orchestrator validated a healthy risk score of 0.1, boosting the CLV to $215,942 with a $32,391 CAC Cap. This proves the system's ability to stabilize ledger forecasting variance using real-time qualitative context.",
      lessons_learned: "Non-deterministic LLM models cannot be blindly trusted to execute raw financial calculations. By forcefully decoupling the math from the language generation—and embedding a cryptographic SHA-256 audit trail alongside SHAP explainability matrices directly into the pipeline's MLflow artifacts—we transformed an unpredictable AI experiment into a hardened, boardroom-ready financial engine."
    }
  }
];

export const lxwrvnxData = [
  {
    id: 1,
    title: "Street Photography",
    slug: "street-photography",
    desc: "High-contrast urban structural captures. Framing shadow, geometry, and the unfiltered truth of real-world environment layers.",
    mediaType: "Photo Matrix",
  },
  {
    id: 2,
    title: "Visual Philosophy / Art",
    slug: "visual-art",
    desc: "Custom Diffusion architectures and fine-tuned latent spaces engineered to visualize complex, minimalist metaphysical concepts.",
    mediaType: "Generative Canvas",
  },
  {
    id: 3,
    title: "Generative Music",
    slug: "audio-synthesis",
    desc: "Multi-stem electronic composition and rhythmic mathematical synthesis exploring dark ambient soundscapes.",
    mediaType: "Audio Workspace",
  }
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

export const audioData = {
  title: "Generative Music",
  subtitle: "AUDIO SYNTHESIS // NEURAL SOUNDSCAPES",
  philosophy: "Music is applied mathematics. In this workspace, I explore the intersection of deterministic sequencing and non-deterministic audio generation. By orchestrating algorithmic synthesis and neural models, I produce dark ambient soundscapes and rhythmic structures—bypassing traditional instrumentation to sculpt sound directly from logic.",
  tracks: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Latent Frequency 0${i + 1}`,
    duration: "03:45", // Placeholder
    tech: "Diffusion + Logic Pro",
    coverSrc: "", // For future public/lxwrvnx/music/cover-xx.jpg
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/PLACEHOLDER&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false" // Standard SoundCloud minimal iframe format
  }))
};

export const articlesData = [
  {
    id: 1,
    date: "OCT 12, 2026",
    category: "AI STRATEGY",
    title: "The Economics of Generative AI in Enterprise Environments",
    link: "https://medium.com/@lawrenceemenike"
  },
  // Automatically generate 5 more placeholders
  ...Array.from({ length: 5 }, (_, i) => ({
    id: i + 2,
    date: "TBD",
    category: "SYSTEM ARCHITECTURE",
    title: "Compiling Executive Memo...",
    link: "https://medium.com/@lawrenceemenike"
  }))
];
