import { portfolioData } from '../data/portfolioData';

export default function Blog() {
  return (
    <section id="blog" className="section-padding border-t border-white/10">
      <div className="container-max">
        <h2 className="text-3xl font-bold mb-12">Selected Essays</h2>
        
        <div className="flex flex-col">
          {portfolioData.blog.map((post, index) => (
            <a 
              key={index}
              href={post.link}
              className="group py-6 border-b border-white/10 last:border-0 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 -mx-6 px-6 transition-colors duration-300"
            >
              <h3 className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                {post.title}
              </h3>
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {post.date}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
