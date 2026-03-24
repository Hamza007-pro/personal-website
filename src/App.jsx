import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Vision from "./components/Vision";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#0a0a0f] text-slate-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Vision />
      <Contact />
    </div>
  );
}
