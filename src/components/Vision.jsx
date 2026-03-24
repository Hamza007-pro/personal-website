import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Lightbulb, Target, Zap, Terminal } from "lucide-react";

const pillars = [
  {
    icon: <Target size={20} />,
    title: "Identify the Gap",
    desc: "Every great company starts with an unsolved problem. I'm constantly scanning industries for the critical inefficiency worth building around.",
  },
  {
    icon: <Zap size={20} />,
    title: "Build to Scale",
    desc: "I engineer solutions with growth in mind — clean architecture, modular systems, and code that won't collapse under real-world pressure.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Create a Legacy",
    desc: "The goal isn't just a product. It's a company that outlasts the trend — one that reshapes how an industry operates.",
  },
];

const COMMANDS = {
  whoami:
    '> "Software Engineer at heart. Entrepreneur by soul. Building from Marrakech."',
  skills: `> {
  "backend":   ["ASP.NET Core", "Java / Spring Boot", "NestJS", "FastAPI"],
  "frontend":  ["React", "TypeScript", "Angular", "TailwindCSS"],
  "ai":        ["LangChain", "LangGraph"],
  "infra":     ["Docker", "Linux", "Oracle SQL", "MySQL"],
  "tools":     ["Git", "GitHub", "CI/CD"]
}`,
  projects: `> [
  "InciFlow          — Incident Management (.NET + React)",
  "FLYMATE           — Airport AI Chatbot (LangChain + NestJS)",
  "Codespect         — Low-Code Platform (React + Node.js)",
  "CV Generator      — Resume Builder (Angular + Spring Boot)",
  "Extra Food        — Food Ordering (PHP + MySQL)"
]`,
  vision:
    '> Mission: Turn the right problem into an industry-changing company.\n> Status: Looking for that problem. 🔍',
  help: '> Available commands: whoami | skills | projects | vision | clear',
  clear: "__CLEAR__",
};

function TerminalWidget() {
  const [lines, setLines] = useState([
    { type: "system", text: 'Type a command. Try: whoami | skills | projects | vision | help' },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const run = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setHistory((h) => [trimmed, ...h]);
    setHistIdx(-1);

    if (trimmed === "clear") {
      setLines([{ type: "system", text: 'Terminal cleared. Type help for commands.' }]);
      return;
    }

    const result = COMMANDS[trimmed];
    const output = result ?? `> command not found: "${trimmed}". Type help.`;

    setLines((prev) => [
      ...prev,
      { type: "input", text: `$ ${trimmed}` },
      { type: "output", text: output },
    ]);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      const idx = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(idx);
      setInput(history[idx] ?? "");
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? "" : history[idx]);
      e.preventDefault();
    }
  };

  return (
    <div
      className="rounded-xl overflow-hidden border border-white/10 bg-[#0c0c14] shadow-2xl shadow-black/40 font-mono text-sm cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-slate-500 text-xs">hamza@portfolio ~ </span>
      </div>

      {/* Output area */}
      <div className="px-4 py-4 h-52 overflow-y-auto space-y-1.5 scrollbar-thin">
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              line.type === "input"
                ? "text-indigo-400"
                : line.type === "system"
                ? "text-slate-600 italic"
                : "text-emerald-400 whitespace-pre-wrap"
            }
          >
            {line.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div className="flex items-center gap-2 px-4 pb-4 border-t border-white/5 pt-3">
        <span className="text-indigo-400 shrink-0">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          className="flex-1 bg-transparent text-slate-200 outline-none placeholder-slate-700 caret-indigo-400"
          placeholder="type a command..."
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </div>
  );
}

export default function Vision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="py-28 px-6 bg-[#0d0d16] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-violet-500/30 pointer-events-none" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            The Mission
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            The Lab
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            I don't just want a job — I want to create value. I'm constantly
            scanning for the right problem, the one worth building a company around.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {pillars.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 hover:bg-white/[0.07] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                {icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Terminal size={16} className="text-indigo-400" />
            <span className="text-slate-400 text-sm font-medium">
              Interactive Terminal — explore me
            </span>
          </div>
          <TerminalWidget />
        </motion.div>
      </div>
    </section>
  );
}
