import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-white/10">
      <div className="container-max">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          <a 
            href={`mailto:${portfolioData.socials.email}`}
            className="text-gray-400 hover:text-white transition-colors text-lg"
          >
            {portfolioData.socials.email}
          </a>
          <span className="hidden sm:inline text-gray-600">/</span>
          <a 
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-lg"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
