import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="max-w-5xl mx-auto px-6 py-32 md:py-48 flex flex-col justify-center min-h-[85vh]">
      
      {/* The Kicker: Small, widely tracked monospace font for the roles */}
      <p className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400 mb-8">
        Chief AI Officer <span className="mx-2 text-gray-600">|</span> AI Architect & Engineer <span className="mx-2 text-gray-600">|</span> Builder
      </p>

      {/* The Main Thesis: Massive, serif, tightly tracked with strategic italics */}
      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-12">
        Architecting <span className="italic text-gray-300">secure, governed</span> commercial intelligence systems that translate cross-sector complexity into <span className="italic text-gray-300">structured intelligence</span> for strategic decision-making.
      </h1>

      {/* Action Footprint: High-contrast minimalist buttons */}
      <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs uppercase tracking-widest">
        <a 
          href="#contact" 
          className="bg-white text-black px-8 py-4 text-center hover:bg-gray-200 transition-colors duration-300"
        >
          Get in Touch
        </a>
        <a 
          href="#projects" 
          className="border border-white/20 text-white px-8 py-4 text-center hover:border-white transition-colors duration-300"
        >
          See My Work
        </a>
      </div>

    </section>
  );
}
