import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 md:px-8 pt-24 pb-16 md:pt-32 md:pb-20 flex flex-col justify-start md:justify-center min-h-[75vh]">
      
      {/* The Kicker: Margin-bottom tightened to mb-4 to group it logically with the header */}
      <p className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400 mb-4 md:mb-5">
        Chief AI Officer <span className="mx-2 text-gray-600">|</span> AI Architect & Engineer <span className="mx-2 text-gray-600">|</span> Builder
      </p>

      {/* The Main Thesis: Scaled down to lg:text-5xl for proportion, keeping the max-width constraint */}
      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-8 md:mb-10 max-w-4xl">
        Architecting <span className="italic text-gray-300">secure, governed</span> commercial intelligence systems that translate cross-sector complexity into <span className="italic text-gray-300">structured intelligence</span> for strategic decision-making.
      </h1>

      {/* Action Footprint: Now visible above the fold */}
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
