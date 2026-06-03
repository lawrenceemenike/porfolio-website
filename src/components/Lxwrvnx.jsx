import { portfolioData } from '../data/portfolioData';

export default function Lxwrvnx() {
  return (
    <section id="lxwrvnx" className="section-padding border-t border-white/10 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="container-max">
        <h2 className="text-3xl font-bold mb-4 tracking-widest uppercase">lxwrvnx</h2>
        <p className="text-gray-500 mb-12">The Generative Lab</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.lxwrvnx.map((item, index) => (
            <div 
              key={index}
              className="p-8 border border-white/5 bg-black/40 hover:border-white/10 transition-all duration-500"
            >
              <div className="text-xs tracking-widest text-gray-500 uppercase mb-4">
                {item.category}
              </div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
