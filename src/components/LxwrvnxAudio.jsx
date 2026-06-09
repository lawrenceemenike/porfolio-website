import { Link } from 'react-router-dom';
import { audioData } from '../data/portfolioData'; // Adjust path if needed

const LxwrvnxAudio = () => {
  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-32 px-6 md:px-12">
      
      {/* ACT 1: Minimalist Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <Link to="/" className="font-mono text-xs text-gray-500 hover:text-white uppercase tracking-widest transition-colors mb-12 inline-block border-b border-transparent hover:border-white pb-1">
          &larr; Return to Main Matrix
        </Link>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight mb-4">
          {audioData.title}
        </h1>
        <p className="font-mono text-xs md:text-sm text-accentGold uppercase tracking-widest">
          {audioData.subtitle}
        </p>
      </div>

      {/* ACT 2: Artist's Note */}
      <div className="max-w-4xl mx-auto mb-20 md:mb-32 border-l-2 border-accentGold pl-6 md:pl-10">
        <p className="font-mono text-xs text-accentGold uppercase tracking-widest mb-6">Artist's Note</p>
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white leading-[1.2] tracking-tight">
          {audioData.philosophy}
        </h2>
      </div>

      {/* ACT 3: The 12-Track Matrix (3-Column Grid) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {audioData.tracks.map((track) => (
          <div key={track.id} className="bg-[#121212] border border-borderMuted group hover:border-accentGold transition-colors duration-500 flex flex-col">
            
            {/* Cover Art Placeholder (Square) */}
            <div className="w-full aspect-square bg-[#1a1a1a] relative overflow-hidden">
              {track.coverSrc ? (
                <img src={track.coverSrc} alt={track.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-black to-[#1a1a1a]">
                  <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest group-hover:text-accentGold transition-colors">Visual Matrix Missing</span>
                </div>
              )}
            </div>

            {/* Track Meta Data */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-white group-hover:text-accentGold transition-colors">{track.title}</h3>
                  <span className="font-mono text-xs text-gray-500">{track.duration}</span>
                </div>
                <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-6">
                  Stack: <span className="text-gray-300">{track.tech}</span>
                </p>
              </div>

              {/* Embedded Player Placeholder */}
              <div className="w-full h-24 bg-black border border-borderMuted rounded overflow-hidden relative">
                {/* In production, replace this overlay with actual iframe src from data */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs text-gray-600">Audio Player Standby</span>
                </div>
                <iframe 
                  width="100%" 
                  height="100%" 
                  scrolling="no" 
                  frameBorder="no" 
                  allow="autoplay" 
                  src={track.embedUrl}
                  className="relative z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  title={track.title}
                ></iframe>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default LxwrvnxAudio;
