import { portfolioData } from '../data/portfolioData';

export default function MyFocus() {
  return (
    <section id="focus" className="section-padding border-t border-white/10 bg-surface/30">
      <div className="container-max">
        <h2 className="text-3xl font-serif font-bold mb-8">{portfolioData.focus.title}</h2>
        <p className="font-sans text-lg text-gray-400 leading-relaxed max-w-3xl">
          {portfolioData.focus.description}
        </p>
      </div>
    </section>
  );
}
