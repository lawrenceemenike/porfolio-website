import { articlesData } from '../data/portfolioData';

const Insights = () => {
  return (
    <section id="blog" className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32 border-t border-borderMuted">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Writing</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight">Insights & Memos</h2>
        </div>
        <a 
          href="https://medium.com/@lawrenceemenike" 
          target="_blank" 
          rel="noreferrer" 
          className="font-mono text-xs text-gray-400 hover:text-white uppercase tracking-widest transition-colors border-b border-gray-600 hover:border-white pb-1"
        >
          Read all on Medium &rarr;
        </a>
      </div>

      {/* Editorial List */}
      <div className="flex flex-col">
        {articlesData.map((article, index) => (
          <a 
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noreferrer"
            className={`group block py-8 border-t border-borderMuted hover:bg-[#0A0A0A] transition-colors -mx-6 px-6 md:-mx-8 md:px-8 ${index === articlesData.length - 1 ? 'border-b' : ''}`}
          >
            <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 items-start md:items-center w-full">
              
              {/* Column 1: Date */}
              <div className="md:col-span-2 font-mono text-xs text-gray-500 uppercase tracking-widest">
                {article.date}
              </div>
              
              {/* Column 2: Category */}
              <div className="md:col-span-2 font-mono text-[10px] text-accentGold uppercase tracking-widest">
                {article.category}
              </div>
              
              {/* Column 3: Title */}
              <div className="md:col-span-6 font-serif text-xl md:text-2xl text-white group-hover:text-gray-300 transition-colors leading-tight">
                {article.title}
              </div>
              
              {/* Column 4: CTA */}
              <div className="md:col-span-2 font-mono text-xs text-gray-600 uppercase tracking-widest md:text-right group-hover:text-white transition-colors mt-4 md:mt-0">
                Read article <span className="inline-block transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>

            </div>
          </a>
        ))}
      </div>

    </section>
  );
};

export default Insights;
