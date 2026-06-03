import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-white/10">
      <div className="container-max">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl font-bold">Projects</h2>
          <a 
            href={portfolioData.socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            View all on GitHub →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              className="block p-6 rounded-lg border border-white/10 bg-surface/20 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIdx) => (
                  <span 
                    key={techIdx} 
                    className="text-xs font-medium text-gray-500 bg-white/5 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
