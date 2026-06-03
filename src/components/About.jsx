export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-8 pt-12 pb-20 md:pt-16 md:pb-32 border-t border-borderMuted">
      
      {/* Kicker */}
      <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6">About</p>
      
      {/* Headline */}
      <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight tracking-tight mb-16 max-w-4xl">
        Building systems that help organizations <span className="italic text-gray-300">see what others miss</span>
      </h2>
    
      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Abstract Image Placeholder (replaces the headshot) */}
        <div className="md:col-span-5 h-[400px] md:h-[500px] bg-cardBg border border-borderMuted flex flex-col justify-end p-6 group overflow-hidden relative">
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
           {/* Note to dev: In production, this will be an img tag pointing to an abstract architectural street photo */}
           <span className="font-mono text-xs text-gray-500 z-20 uppercase tracking-widest group-hover:text-accentGold transition-colors">Visual Matrix // lxwrvnx</span>
        </div>
    
        {/* Right Column: The Final Copy */}
        <div className="md:col-span-7 space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-sans">
          <p>
            I build commercial intelligence systems that help organizations navigate complexity, uncertainty, and change. My work sits at the intersection of <strong className="text-white font-medium">AI engineering, strategic analysis, and enterprise governance</strong>, where data becomes intelligence and intelligence becomes action.
          </p>
          <p>
            With foundations in finance and advanced AI systems, I specialize in designing governed, secure, and auditable intelligence architectures that support decision-making across industries. From <strong className="text-white font-medium">multi-agent workflows to executive intelligence platforms</strong>, my focus is not simply automation, but building systems that improve how organizations perceive, reason, and act.
          </p>
          <p>
            As Founder and Lead AI Consultant at <strong className="text-white font-medium">Nelc Digital</strong>, I work with leaders across sectors to translate fragmented information into structured commercial intelligence, deploying AI systems that are operationally useful, strategically aligned, and measurable in business impact.
          </p>
        </div>
    
      </div>
    </section>
  );
}
