import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import MyFocus from './components/MyFocus';
import Projects from './components/Projects';
import Lxwrvnx from './components/Lxwrvnx';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <MyFocus />
        <Projects />
        <Lxwrvnx />
        <Blog />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-gray-600 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Lawrence Emenike. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
