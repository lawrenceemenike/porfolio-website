import { lxwrvnxData } from '../data/portfolioData';

const Lxwrvnx = () => {
  return (
    <section id="lxwrvnx" className="max-w-6xl mx-auto px-6 md:px-8 pt-12 pb-20 md:pt-16 md:pb-32 border-t border-borderMuted">
      
      {/* Kicker & Header */}
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-accentGold mb-4">
          [ Alter Ego // Latent Workspace ]
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight mb-4">
          lxwrvnx
        </h2>
        <p className="text-gray-400 font-sans text-base max-w-xl leading-relaxed">
          Exploring visual philosophy, esotericism, and architectural geometry across unmapped generative nodes.
        </p>
      </div>

      {/* Media Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lxwrvnxData.map((item) => (
          <a 
            key={item.id}
            href={`/lxwrvnx/${item.slug}`} 
            className="border border-borderMuted bg-[#0A0A0A] p-6 rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-accentGold hover:shadow-2xl hover:shadow-accentGold/5 flex flex-col group block"
          >
            
            {/* Media Placeholder Box */}
            <div className="w-full aspect-video bg-[#121212] border border-borderMuted rounded-sm mb-6 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-accentGold/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              {/* Note to dev: img/video tags will replace this span in production */}
              <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest z-20 group-hover:text-accentGold transition-colors">
                {item.mediaType} Placeholder
              </span>
            </div>

            {/* Card Copy */}
            <div className="flex-grow">
              <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-accentGold transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                {item.desc}
              </p>
            </div>

            {/* Action Link */}
            <div className="font-mono text-[10px] text-gray-600 uppercase tracking-widest border-t border-borderMuted pt-4 flex justify-between items-center group-hover:border-accentGold/30 transition-colors">
              <span>Enter Workspace</span>
              <span className="text-accentGold opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
            </div>

          </a>
        ))}
      </div>

    </section>
  );
};

export default Lxwrvnx;
