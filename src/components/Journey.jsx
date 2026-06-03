import { journeyData } from '../data/portfolioData';

const Journey = () => {
  return (
    <section id="journey" className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32 border-t border-borderMuted overflow-hidden">
      
      <div className="flex justify-between items-end mb-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Experience</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight italic">The journey</h2>
        </div>
        <span className="font-mono text-xs text-gray-500 tracking-widest uppercase hidden md:inline-block">
          Scroll timeline &rarr;
        </span>
      </div>

      <div className="relative w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing">
        
        <div className="absolute top-[9px] left-0 w-[2800px] h-[1px] bg-borderMuted"></div>

        <div className="flex w-max space-x-12 px-1">
          {journeyData.map((item, index) => (
            <div key={index} className="relative flex flex-col w-56 group">
              
              <div className="w-5 h-5 rounded-full border-2 border-borderMuted bg-[#0A0A0A] z-10 group-hover:border-white transition-colors duration-300 mb-6"></div>
              
              <span className="font-mono text-xs text-gray-500 mb-2 uppercase tracking-widest">{item.year}</span>
              <h3 className="font-sans font-medium text-white text-base leading-tight mb-1 group-hover:text-gray-200 transition-colors">
                {item.role}
              </h3>
              <span className="font-sans text-sm text-gray-400">
                {item.company}
              </span>
              
            </div>
          ))}
        </div>
      </div>
      
      <p className="font-mono text-[10px] text-gray-600 mt-4 text-center md:hidden uppercase tracking-widest">
        Swipe to explore &harr;
      </p>

    </section>
  );
};

export default Journey;
