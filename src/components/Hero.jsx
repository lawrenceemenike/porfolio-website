import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="pt-40 pb-24 md:pt-48 md:pb-32 flex flex-col justify-center min-h-[80vh]">
      <div className="container-max">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          {portfolioData.header.headline}
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
          {portfolioData.header.subtext}
        </p>
      </div>
    </section>
  );
}
