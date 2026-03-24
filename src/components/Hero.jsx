import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Mail, Zap } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const stats = [
  { value: "20+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
  { value: "CS", label: "Engineering Degree" },
  { value: "AI", label: "Current Focus" },
];

const floatingTech = [
  { label: ".NET", x: "-38%", y: "10%", delay: 0, dur: 3.2 },
  { label: "React", x: "40%", y: "8%", delay: 0.15, dur: 4.1 },
  { label: "LangChain", x: "-42%", y: "62%", delay: 0.3, dur: 3.7 },
  { label: "Docker", x: "38%", y: "65%", delay: 0.2, dur: 4.5 },
  { label: "TypeScript", x: "-20%", y: "85%", delay: 0.1, dur: 3.9 },
  { label: "Spring Boot", x: "22%", y: "88%", delay: 0.25, dur: 4.3 },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Parallax glow blobs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-indigo-700/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] bg-violet-700/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-800/10 rounded-full blur-[80px]" />
      </motion.div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating tech badges */}
      {floatingTech.map(({ label, x, y, delay, dur }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 + delay }}
          style={{ left: `calc(50% + ${x})`, top: y }}
          className="absolute hidden lg:block"
        >
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: delay }}
            className="inline-block px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-xs font-mono backdrop-blur-sm shadow-lg"
          >
            {label}
          </motion.span>
        </motion.div>
      ))}

      <motion.div style={{ y: contentY }} className="relative z-10 max-w-3xl mx-auto w-full">
        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight"
        >
          Hamza{" "}
          <span className="gradient-text">Benrahhou</span>
        </motion.h1>

        {/* Title */}
        <motion.p {...fadeUp(0.32)} className="text-xl md:text-2xl text-slate-300 font-medium mb-3">
          Software Engineer
          <span className="text-slate-600 mx-2">·</span>
          <span className="text-indigo-400">Tech Entrepreneur</span>
        </motion.p>

        {/* Subtitle */}
        <motion.p {...fadeUp(0.42)} className="text-slate-500 text-base md:text-lg max-w-xl mx-auto mb-8">
          Engineering Degree in Computer Science & Networks · Building
          scalable software and turning ideas into companies from Marrakech.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.52)} className="flex flex-wrap gap-4 justify-center mb-10">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:scale-95"
          >
            View My Solutions
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 rounded-lg border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm active:scale-95"
          >
            Let's Build Together
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.62)} className="flex items-center justify-center gap-4 mb-14">
          {[
            { icon: <img src={`${import.meta.env.BASE_URL}github-svgrepo-com.svg`} alt="GitHub" className="w-[18px] h-[18px] invert opacity-70" />, href: "https://github.com/Hamza007-pro", label: "GitHub" },
            { icon: <img src={`${import.meta.env.BASE_URL}linkedin-svgrepo-com.svg`} alt="LinkedIn" className="w-[18px] h-[18px] invert opacity-70" />, href: "https://www.linkedin.com/in/hamza-benrahhou-0316aa206", label: "LinkedIn" },
            { icon: <Mail size={18} />, href: "mailto:hamzabenrahhou3@gmail.com", label: "Email" },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors duration-200"
              aria-label={label}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10 max-w-2xl mx-auto"
        >
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 + i * 0.08 }}
              className="flex flex-col items-center py-4 px-2 bg-[#0a0a0f] hover:bg-white/[0.03] transition-colors duration-200"
            >
              <span className="text-xl font-bold gradient-text">{value}</span>
              <span className="text-slate-600 text-xs mt-0.5">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently building */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-600"
        >
          <Zap size={12} className="text-yellow-500/60" />
          <span>Currently building:</span>
          <span className="text-slate-500 font-medium">FLYMATE — Airport AI Chatbot </span>
        </motion.div>
      </motion.div>

      {/* Scroll arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-700"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
