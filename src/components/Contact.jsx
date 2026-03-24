import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "hamzabenrahhou3@gmail.com",
    href: "mailto:hamzabenrahhou3@gmail.com",
  },
  {
    icon: <img src={`${import.meta.env.BASE_URL}github-svgrepo-com.svg`} alt="GitHub" className="w-[18px] h-[18px] invert opacity-70" />,
    label: "GitHub",
    value: "github.com/Hamza007-pro",
    href: "https://github.com/Hamza007-pro",
  },
  {
    icon: <img src={`${import.meta.env.BASE_URL}linkedin-svgrepo-com.svg`} alt="LinkedIn" className="w-[18px] h-[18px] invert opacity-70" />,
    label: "LinkedIn",
    value: "linkedin.com/in/hamza-benrahhou-0316aa206",
    href: "https://www.linkedin.com/in/hamza-benrahhou-0316aa206",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Marrakech, Morocco",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 px-6 bg-[#0d0d16] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-indigo-500/30 pointer-events-none" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Let's Talk
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            Get In Touch
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            Whether it's a project, an opportunity, or just a conversation — my
            inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {contactLinks.map(({ icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform duration-200">
                  {icon}
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-medium mb-0.5">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-slate-200 text-sm hover:text-indigo-400 transition-colors duration-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-slate-200 text-sm">{value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl bg-white/5 border border-white/10 p-6"
          >
            <h3 className="text-white font-semibold mb-4 text-sm">
              Send a Message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:hamzabenrahhou3@gmail.com?subject=${encodeURIComponent(
                  e.target.subject.value
                )}&body=${encodeURIComponent(e.target.message.value)}`;
              }}
              className="flex flex-col gap-4"
            >
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-200"
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-200"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your message..."
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-200 resize-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
              >
                <Send size={15} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20 pt-8 border-t border-white/5"
        >
          <p className="text-slate-600 text-sm">
            Designed & built by{" "}
            <span className="text-slate-400 font-medium">Hamza Benrahhou</span>{" "}
            · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
