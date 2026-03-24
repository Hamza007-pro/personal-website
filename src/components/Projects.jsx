import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "InciFlow",
    subtitle: "Incident Management System",
    description:
      "Enterprise-grade ITSM platform for tracking, managing, and resolving incidents. Built with Clean Architecture, REST API, and a fully typed React frontend.",
    tags: ["ASP.NET Core", "React", "TypeScript", "TailwindCSS", "SQL Server"],
    gradient: "from-indigo-500/20 to-blue-500/10",
    border: "hover:border-indigo-500/40",
    glow: "hover:shadow-indigo-500/10",
    github: "https://github.com/Hamza007-pro",
  },
  {
    title: "FLYMATE",
    subtitle: "Airport AI Chatbot",
    description:
      "AI-powered airport assistant handling flight info, gate queries, and passenger support in real time using LangChain agents and multi-platform interfaces.",
    tags: ["LangChain", "LangGraph", "NestJS", "React", "FastAPI"],
    gradient: "from-cyan-500/20 to-teal-500/10",
    border: "hover:border-cyan-500/40",
    glow: "hover:shadow-cyan-500/10",
    github: "https://github.com/Hamza007-pro",
  },
  {
    title: "Codespect",
    subtitle: "Low-Code Platform",
    description:
      "A product-style drag-and-drop low-code builder enabling non-technical users to create workflows and applications visually — no code required.",
    tags: ["React", "JavaScript", "Node.js"],
    gradient: "from-violet-500/20 to-purple-500/10",
    border: "hover:border-violet-500/40",
    glow: "hover:shadow-violet-500/10",
    github: "https://github.com/Hamza007-pro",
  },
  {
    title: "CV Generator",
    subtitle: "Resume Builder App",
    description:
      "Full-stack resume builder where users fill in their details and export polished PDFs. Demonstrates working outside the main stack with Angular + Spring Boot.",
    tags: ["Angular", "Spring Boot", "Java", "SQL"],
    gradient: "from-fuchsia-500/20 to-pink-500/10",
    border: "hover:border-fuchsia-500/40",
    glow: "hover:shadow-fuchsia-500/10",
    github: "https://github.com/Hamza007-pro",
  },
  {
    title: "Extra Food",
    subtitle: "Food Ordering Website",
    description:
      "Classic full-stack food ordering platform with cart management, order tracking, and an admin dashboard — built on fundamental web technologies.",
    tags: ["PHP", "HTML", "CSS", "Bootstrap", "MySQL"],
    gradient: "from-orange-500/20 to-amber-500/10",
    border: "hover:border-orange-500/40",
    glow: "hover:shadow-orange-500/10",
    github: "https://github.com/Hamza007-pro",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            What I've Built
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/10 ${project.border} p-6 transition-all duration-300 shadow-xl ${project.glow} hover:shadow-2xl hover:-translate-y-1 flex flex-col`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-0.5 font-medium">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white transition-all"
                    aria-label="GitHub"
                  >
                    <img src="/github-svgrepo-com.svg" alt="GitHub" className="w-[15px] h-[15px] invert opacity-70" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white transition-all"
                    aria-label="Open project"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Hamza007-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors duration-200 group"
          >
            View all on GitHub
            <ExternalLink
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
