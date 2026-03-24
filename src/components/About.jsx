import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Globe } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "5+" },
  { label: "Technologies", value: "10+" },
  { label: "Engineering Degree", value: "CS" },
];

const highlights = [
  {
    icon: <Code2 size={18} />,
    title: "Engineering Degree — Computer Science & Networks",
    desc: "Graduated with an Engineering Degree in Computer Science and Networks, built on a foundation of technical training and hands-on development.",
  },
  {
    icon: <Globe size={18} />,
    title: "@ Office National Des Aéroports",
    desc: "Designing and maintaining scalable, AI-powered applications to optimize passenger experiences at Moroccan airports.",
  },
  {
    icon: <Rocket size={18} />,
    title: "Entrepreneur at Heart",
    desc: "Driven to identify critical market gaps and build software companies from the ground up — turning innovative ideas into a legacy.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I'm{" "}
              <span className="text-white font-medium">Hamza Benrahhou</span>,
              a Software Engineer based in{" "}
              <span className="text-white font-medium">Marrakech</span>.
              Holding an Engineering Degree in Computer Science & Networks,
              I build digital experiences that bridge complex problems with
              user-friendly solutions.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              My workflow is grounded in industry best practices and a commitment
              to operational efficiency. I don't just write code — I design
              systems built to scale. And while I'm a{" "}
              <span className="text-white font-medium">Software Engineer</span>{" "}
              by trade, I'm an{" "}
              <span className="text-indigo-400 font-medium">entrepreneur</span>
              {" "}at heart.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-slate-500 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {highlights.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className="mt-0.5 text-indigo-400 shrink-0 group-hover:scale-110 transition-transform duration-200">
                  {icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
