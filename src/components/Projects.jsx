import { useState, useEffect } from 'react';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [selectedProject]);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-8 pt-12 pb-20 md:pt-16 md:pb-32 border-t border-borderMuted relative">
      
      <div className="mb-12"><h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">Projects</h2></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            onClick={() => project.isPlaceholder ? null : setSelectedProject(project)}
            className={`border border-borderMuted bg-[#0A0A0A] p-6 rounded-md transition-all duration-300 flex flex-col justify-between min-h-[250px] group ${project.isPlaceholder ? 'opacity-40 cursor-default border-dashed' : 'cursor-pointer hover:-translate-y-2 hover:border-gray-500 hover:shadow-2xl hover:shadow-white/5'}`}
          >
            <div>
              <h3 className="font-serif text-xl text-white mb-3 leading-tight group-hover:text-gray-200">{project.title}</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">{project.short_desc}</p>
            </div>
            {!project.isPlaceholder && (
              <div className="font-mono text-[10px] text-gray-600 uppercase tracking-widest flex flex-wrap gap-2">
                {project.tech_stack.slice(0, 3).map((tech, i) => (
                  <span key={i} className="bg-borderMuted/30 px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full">
        <a href="https://github.com/lawrenceemenike" target="_blank" rel="noreferrer" className="font-mono text-sm text-gray-400 hover:text-white border-b border-gray-600 hover:border-white transition-all pb-1 uppercase tracking-widest">
          View all on GitHub &rarr;
        </a>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative bg-[#121212] border border-borderMuted w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl z-10 custom-scrollbar">
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white font-mono text-sm tracking-widest z-20"
            >
              [CLOSE]
            </button>

            <div className="p-8 md:p-12">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 pr-12">{selectedProject.title}</h2>
              
              <div className="font-mono text-xs text-accentGold uppercase tracking-widest mb-8 flex gap-4">
                <a href={selectedProject.github_link} target="_blank" rel="noreferrer" className="hover:text-white border-b border-accentGold/30 pb-1">Master Repo &rarr;</a>
              </div>

              {selectedProject.youtube_link && (
                <div className="relative w-full aspect-video mb-10 bg-black border border-borderMuted rounded-md overflow-hidden">
                  <iframe 
                    src={selectedProject.youtube_link} 
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                    title={`${selectedProject.title} Demo`}
                  ></iframe>
                </div>
              )}

              <div className="max-w-3xl mx-auto space-y-12 mt-12 text-gray-300 font-sans text-base leading-relaxed">
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-2">1. Executive Summary</h4>
                    <p>{selectedProject.case_study?.executive_summary}</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-2">2. Business Problem</h4>
                    <p>{selectedProject.case_study?.business_problem}</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-2">3. Why It Matters</h4>
                    <p>{selectedProject.case_study?.why_it_matters}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-2xl text-white mb-4">4. My Role</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.case_study?.my_role?.map((r, idx) => (
                      <div key={idx} className="bg-[#1A1A1A] border border-borderMuted p-4 rounded-md">
                        <span className="font-mono text-xs text-accentGold uppercase tracking-widest block mb-2">{r.role}</span>
                        <span className="text-sm">{r.action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-2">5. Discovery Process</h4>
                    <p>{selectedProject.case_study?.discovery_process}</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-2">6. Solution Architecture</h4>
                    <p>{selectedProject.case_study?.solution_architecture}</p>
                  </div>
                </div>

                <div className="space-y-6 p-6 border-l-2 border-accentGold bg-accentGold/5">
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-2">7. Governance & Security</h4>
                    <p>{selectedProject.case_study?.governance_security}</p>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-serif text-2xl text-white mb-2">8. Commercial Intelligence Layer</h4>
                    <p>{selectedProject.case_study?.commercial_intel_layer}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-2">9. Results</h4>
                    <p className="font-medium text-white">{selectedProject.case_study?.results}</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-2">10. Lessons Learned</h4>
                    <p>{selectedProject.case_study?.lessons_learned}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
