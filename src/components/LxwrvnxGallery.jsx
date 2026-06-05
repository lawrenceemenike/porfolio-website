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
    })),
    outro: {
      headline: "The inverse of determinism.",
      body: [
        "My daily operations are governed by strict unit economics, zero-trust architectures, and mathematical guardrails. But true intelligence—both human and artificial—requires a space for unstructured exploration.",
        "This lab is where the enterprise guardrails come off. Whether mapping the raw geometry of the street or navigating the latent spaces of a diffusion model, I use these mediums to bypass logic and capture unfiltered signals."
      ],
      ctaText: "Explore Visual Philosophy",
      ctaLink: "/lxwrvnx/visual-art"
    }
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
    })),
    outro: {
      headline: "Finding signal in the noise.",
      body: [
        "I spent years in high-level finance enforcing strict unit economics, followed by architecting deterministic AI systems. But the most complex systems are the ones we cannot easily quantify.",
        "These visual experiments are my way of processing the non-deterministic variables of the world. By refining each output, I am searching for the exact moment the aesthetic feeling lands and nothing more needs to be said."
      ],
      ctaText: "Explore Generative Music",
      ctaLink: "/lxwrvnx/audio-synthesis"
    }
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

      {/* ACT 4: Outro & CTA */}
      <div className="max-w-7xl mx-auto mt-32 border-t border-borderMuted pt-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-5 space-y-6 md:pr-8">
          <p className="font-mono text-xs text-accentGold uppercase tracking-widest">Artist Statement</p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight tracking-tight mb-8">
            {content.outro?.headline}
          </h2>
          <div className="space-y-6 font-sans text-sm md:text-base text-gray-400 leading-relaxed mb-10">
            {content.outro?.body?.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <div className="pt-4">
            <Link to={content.outro?.ctaLink} 
              className="font-mono text-xs md:text-sm text-white hover:text-accentGold transition-colors border-b border-white hover:border-accentGold pb-2 uppercase tracking-widest inline-flex items-center gap-3"
            >
              {content.outro?.ctaText} <span className="text-accentGold text-lg leading-none">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
          
          <div className="space-y-4 md:space-y-6 pt-12 md:pt-20">
            <div className="w-full h-[250px] md:h-[300px] bg-[#121212] border border-borderMuted hover:border-accentGold transition-colors relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <span className="absolute bottom-4 left-4 font-mono text-[10px] text-gray-600 group-hover:text-accentGold z-20">OUTRO_NODE_1</span>
            </div>
            <div className="w-full h-[350px] md:h-[450px] bg-[#121212] border border-borderMuted hover:border-accentGold transition-colors relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <span className="absolute bottom-4 left-4 font-mono text-[10px] text-gray-600 group-hover:text-accentGold z-20">OUTRO_NODE_2</span>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <div className="w-full h-[350px] md:h-[450px] bg-[#121212] border border-borderMuted hover:border-accentGold transition-colors relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <span className="absolute bottom-4 left-4 font-mono text-[10px] text-gray-600 group-hover:text-accentGold z-20">OUTRO_NODE_3</span>
            </div>
            <div className="w-full h-[250px] md:h-[300px] bg-[#121212] border border-borderMuted hover:border-accentGold transition-colors relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <span className="absolute bottom-4 left-4 font-mono text-[10px] text-gray-600 group-hover:text-accentGold z-20">OUTRO_NODE_4</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default LxwrvnxGallery;
