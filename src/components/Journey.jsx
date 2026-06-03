import { portfolioData } from '../data/portfolioData';

export default function Journey() {
  return (
    <section id="journey" className="section-padding border-t border-white/10">
      <div className="container-max">
        <h2 className="text-3xl font-serif font-bold mb-12">Journey</h2>
        <div className="space-y-8">
          {portfolioData.journey.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 hover:bg-white/5 p-6 -mx-6 rounded-lg transition-colors duration-300"
            >
              <div className="font-mono uppercase tracking-widest text-xs text-gray-500 w-32 shrink-0 mt-1">
                {item.period}
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                  {item.role}
                </h3>
                <div className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-3">{item.company}</div>
                <p className="font-sans text-gray-400 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
