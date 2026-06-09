import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import MyFocus from './components/MyFocus';
import Projects from './components/Projects';
import Lxwrvnx from './components/Lxwrvnx';
import Insights from './components/Insights';
import Contact from './components/Contact';
import LxwrvnxGallery from './components/LxwrvnxGallery';
import LxwrvnxAudio from './components/LxwrvnxAudio';

function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <MyFocus />
        <Projects />
        <Lxwrvnx />
        <Insights />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-gray-600 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Lawrence Emenike. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lxwrvnx/audio-synthesis" element={<LxwrvnxAudio />} />
        <Route path="/lxwrvnx/:slug" element={<LxwrvnxGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
