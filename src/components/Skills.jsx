import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    label: "Backend",
    color: "from-indigo-500 to-blue-500",
    glow: "shadow-indigo-500/20",
    skills: [".NET / C#", "ASP.NET Core", "Java", "Spring Boot", "NestJS", "REST APIs"],
  },
  {
    label: "Frontend & Mobile",
    color: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/20",
    skills: ["React", "TypeScript", "JavaScript", "Angular", "TailwindCSS", "Flutter"],
  },
  {
    label: "Data & AI",
    color: "from-cyan-500 to-teal-500",
    glow: "shadow-cyan-500/20",
    skills: ["LangChain", "LangGraph", "FastAPI", "Oracle SQL", "MySQL", "SQL Server"],
  },
  {
    label: "DevOps & Tools",
    color: "from-fuchsia-500 to-pink-500",
    glow: "shadow-fuchsia-500/20",
    skills: ["Docker", "Linux", "Git", "GitHub", "CI/CD", "PHP"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 px-6 bg-[#0d0d16]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            What I Work With
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map(({ label, color, glow, skills }, catIdx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className={`relative rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-white/20 transition-all duration-300 shadow-xl ${glow}`}
            >
              <div
                className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${color} text-white mb-5`}
              >
                {label}
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: catIdx * 0.15 + i * 0.06,
                    }}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm hover:text-white hover:border-white/25 hover:bg-white/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
