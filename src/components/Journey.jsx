import { useRef } from 'react';
import { journeyData } from '../data/portfolioData';

const Journey = () => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add('cursor-grabbing');
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="journey" className="max-w-6xl mx-auto px-6 md:px-8 pt-12 pb-20 md:pt-16 md:pb-32 border-t border-borderMuted overflow-hidden">
      
      {/* Section Header */}
      <div className="flex justify-between items-end mb-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Experience</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight italic">The journey</h2>
        </div>
        <span className="font-mono text-xs text-gray-500 tracking-widest uppercase hidden md:inline-block">
          Drag to explore &rarr;
        </span>
      </div>

      {/* Horizontal Scroll Container with Drag Events */}
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="relative w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab"
      >
        
        {/* The Continuous Horizontal Line */}
        <div className="absolute top-[9px] left-0 w-[2800px] h-[1px] bg-borderMuted"></div>

        {/* The Nodes */}
        <div className="flex w-max space-x-12 px-1">
          {journeyData.map((item, index) => (
            <div key={index} className="relative flex flex-col w-56 group select-none">
              
              {/* Circle Node */}
              <div className="w-5 h-5 rounded-full border-2 border-borderMuted bg-[#0A0A0A] z-10 group-hover:border-white transition-colors duration-300 mb-6"></div>
              
              {/* Text Content */}
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
      
      {/* Quick instruction for mobile users */}
      <p className="font-mono text-[10px] text-gray-600 mt-4 text-center md:hidden uppercase tracking-widest">
        Swipe to explore &harr;
      </p>

    </section>
  );
};

export default Journey;
