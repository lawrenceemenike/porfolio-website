import { useParams, Link } from 'react-router-dom';

// Temporary local data bridging - can be moved to portfolioData.js later
const galleryContent = {
  "street-photography": {
    title: "Street Photography",
    subtitle: "URBAN TEXTURES // NIGERIA & BEYOND",
    // Array of placeholder heights to simulate masonry interlocking
    items: ['h-[400px]', 'h-[600px]', 'h-[300px]', 'h-[500px]', 'h-[450px]', 'h-[700px]'] 
  },
  "visual-art": {
    title: "Visual Philosophy",
    subtitle: "LATENT SPACE EXPLORATIONS",
    items: ['h-[500px]', 'h-[350px]', 'h-[600px]', 'h-[400px]', 'h-[650px]', 'h-[300px]', 'h-[450px]']
  }
};

const LxwrvnxGallery = () => {
  const { slug } = useParams();
  const content = galleryContent[slug];

  if (!content) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white font-mono text-sm">Terminal not found.</div>;

  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-32 px-6 md:px-12">
      
      {/* Minimalist Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <Link to="/" className="font-mono text-xs text-gray-500 hover:text-white uppercase tracking-widest transition-colors mb-12 inline-block border-b border-transparent hover:border-white pb-1">
          &larr; Return to Main Matrix
        </Link>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight mb-4">
          {content.title}
        </h1>
        <p className="font-mono text-xs md:text-sm text-accentGold uppercase tracking-widest">
          {content.subtitle}
        </p>
      </div>

      {/* CSS Masonry Grid */}
      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {content.items.map((heightClass, index) => (
          <div 
            key={index} 
            className={`break-inside-avoid relative group overflow-hidden bg-[#121212] border border-borderMuted ${heightClass}`}
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6 cursor-pointer">
               <span className="font-mono text-[10px] text-white uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 View Node_{index + 1}
               </span>
            </div>
            
            {/* Image Placeholder - Ready for actual <img src="..." /> */}
            <div className="w-full h-full bg-[#1a1a1a] group-hover:scale-105 transition-transform duration-700"></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LxwrvnxGallery;
