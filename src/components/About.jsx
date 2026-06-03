export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32 border-t border-borderMuted">
      
      {/* Kicker */}
      <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6">About</p>
      
      {/* Headline */}
      <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight tracking-tight mb-16 max-w-4xl">
        Commercially driven architect bridging <span className="italic text-gray-300">corporate finance & deterministic AI</span>
      </h2>
    
      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Abstract Image Placeholder (replaces the headshot) */}
        <div className="md:col-span-5 h-[400px] md:h-[500px] bg-cardBg border border-borderMuted flex flex-col justify-end p-6 group overflow-hidden relative">
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
           {/* Note to dev: In production, this will be an img tag pointing to an abstract architectural street photo */}
           <span className="font-mono text-xs text-gray-500 z-20 uppercase tracking-widest group-hover:text-accentGold transition-colors">Visual Matrix // lxwrvnx</span>
        </div>
    
        {/* Right Column: The Copy */}
        <div className="md:col-span-7 space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-sans">
          <p>
            I build and ship systems at the intersection of <strong className="text-white font-medium">commercial finance, machine learning, and zero-trust governance</strong> — deploying enterprise control architectures. I hold an MSc in Finance and am an ACCA-credentialed strategist, alongside being a certified AI Engineer. That dual lens — rigorous financial unit economics and advanced multi-agent orchestration — shapes every system I build.
          </p>
          <p>
            As the Founder and Lead AI Consultant at <strong className="text-white font-medium">Nelc Digital</strong>, I operate as a Forward Deployed Engineer, helping executives in BFSI, Retail, and Logistics operationalize their data. I own the end-to-end pipeline: from setting boardroom AI strategy to deploying commercial intelligence engines that are secure, auditable, and inherently cash-positive.
          </p>
        </div>
    
      </div>
    </section>
  );
}
