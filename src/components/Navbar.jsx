import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
      <div className="container-max flex items-center justify-between h-16">
        <a href="#home" className="text-white font-serif font-semibold text-lg tracking-wider">
          {portfolioData.header.name}
        </a>
        <div className="hidden md:flex items-center gap-8 font-mono uppercase tracking-widest text-xs text-gray-400">
          <a href="#journey" className="hover:text-white transition-colors duration-300">Journey</a>
          <a href="#focus" className="hover:text-white transition-colors duration-300">My Focus</a>
          <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
          <a href="#lxwrvnx" className="hover:text-white transition-colors duration-300">lxwrvnx</a>
          <a href="#blog" className="hover:text-white transition-colors duration-300">Blog</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}
