import { useParams, Link } from 'react-router-dom';

// Temporary local data bridging - can be moved to portfolioData.js later
const galleryContent = {
  "street-photography": {
    title: "Street Photography",
    subtitle: "URBAN TEXTURES // NIGERIA & BEYOND",
    philosophy: "I don't just document the street; I map the unspoken geometry of the city. Every shadow, line, and structure acts as a deterministic variable in an otherwise chaotic environment. These frames are engineered to isolate the signal from the noise.",
    // 4 Hero Items
    heroItems: [
      { height: 'h-[450px]', imgSrc: "" },
      { height: 'h-[550px]', imgSrc: "" },
      { height: 'h-[450px]', imgSrc: "" },
      { height: 'h-[550px]', imgSrc: "" }
    ],
    // 50 Masonry Items with alternating heights to maintain the staggered look
    items: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      height: ['h-[300px]', 'h-[450px]', 'h-[600px]', 'h-[400px]', 'h-[700px]'][i % 5],
      imgSrc: "" 
    }))
  },
  "visual-art": {
    title: "Visual Philosophy",
    subtitle: "LATENT SPACE EXPLORATIONS",
    philosophy: "These visual nodes are engineered, not just generated. By manipulating diffusion architectures and mathematical prompts, I visualize the complex, minimalist metaphysical concepts that sit at the boundary of code and consciousness.",
    heroItems: [
      { height: 'h-[500px]', imgSrc: "" },
      { height: 'h-[400px]', imgSrc: "" },
      { height: 'h-[500px]', imgSrc: "" },
      { height: 'h-[400px]', imgSrc: "" }
    ],
    items: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      height: ['h-[500px]', 'h-[350px]', 'h-[600px]', 'h-[400px]', 'h-[650px]'][i % 5],
      imgSrc: ""
    }))
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

      {/* ACT 1: The Hero Highlights (4-Column Grid) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 md:mb-32">
         {content.heroItems.map((item, index) => (
            <div key={`hero-${index}`} className={`w-full bg-[#121212] border border-borderMuted relative group overflow-hidden ${item.height}`}>
               {item.imgSrc ? (
                 <img src={item.imgSrc} alt={`Hero ${index}`} className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
               ) : (
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
               )}
               <span className="absolute bottom-6 left-6 font-mono text-[10px] text-gray-500 uppercase tracking-widest z-20 group-hover:text-accentGold transition-colors">Hero Node_{index + 1}</span>
            </div>
         ))}
      </div>

      {/* ACT 2: The Narrative / Artist's Note */}
      <div className="max-w-4xl mx-auto mb-20 md:mb-32 border-l-2 border-accentGold pl-6 md:pl-10">
        <p className="font-mono text-xs text-accentGold uppercase tracking-widest mb-6">Artist's Note</p>
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white leading-[1.2] tracking-tight">
          {content.philosophy}
        </h2>
      </div>

      {/* ACT 3: The Main Masonry Grid */}
      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
        {content.items.map((item, index) => (
          <div 
            key={index} 
            className={`break-inside-avoid relative group overflow-hidden bg-[#121212] border border-borderMuted ${item.height}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6 cursor-pointer">
               <span className="font-mono text-[10px] text-white uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 View Node_{item.id}
               </span>
            </div>
            {item.imgSrc ? (
               <img src={item.imgSrc} alt={`Node ${item.id}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            ) : (
               <div className="w-full h-full bg-[#1a1a1a] group-hover:scale-105 transition-transform duration-700"></div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default LxwrvnxGallery;
