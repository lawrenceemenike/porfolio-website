const MyFocus = () => {
  return (
    <section id="focus" className="max-w-6xl mx-auto px-6 md:px-8 pt-12 pb-20 md:pt-16 md:pb-32 border-t border-borderMuted">
      
      {/* Text Container: Constrained to max-w-4xl for optimal reading measure */}
      <div className="max-w-4xl">
        
        {/* Kicker */}
        <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6">
          My Focus
        </p>
        
        {/* Main Header */}
        <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight tracking-tight mb-12">
          Making Sense of <span className="italic text-gray-300">Complexity</span>
        </h2>

        {/* Body Copy */}
        <div className="space-y-6 font-sans text-gray-400 text-base md:text-lg leading-relaxed">
          <p>
            We live in a world overflowing with data, signals, opinions, forecasts, and competing narratives. Yet the scarcest resource inside most organizations is not information, it's <strong className="text-white font-medium">clarity</strong>.
          </p>
          <p>
            My work focuses on <strong className="text-white font-medium">Commercial Intelligence</strong> because it sits at the intersection of strategy, economics, finance, technology, and decision-making. It is the discipline of transforming fragmented information into actionable understanding.
          </p>
          <p>
            Whether the challenge is market dynamics, customer behavior, operational performance, emerging technologies, or geopolitical shifts, organizations increasingly need systems that can synthesize complexity and surface what matters most.
          </p>
          <p>
            I build AI-native commercial intelligence systems that help organizations move beyond dashboards and reporting toward <strong className="text-white font-medium">structured insight, strategic awareness, and better decisions</strong>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MyFocus;
