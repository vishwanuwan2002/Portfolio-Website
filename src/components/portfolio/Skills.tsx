import { motion } from "framer-motion";
import {
  Code, Palette, Database, GitBranch, Cpu, Layout, Smartphone, Brain, Plug, Boxes,
} from "lucide-react";

const skills = [
  { icon: Layout, name: "Full-Stack Web Dev", desc: "End-to-end app architecture" },
  { icon: Code, name: "HTML · CSS · JS", desc: "Core web fundamentals" },
  { icon: Boxes, name: "React", desc: "Component-based UIs" },
  { icon: Palette, name: "UI/UX Design", desc: "User-centered interfaces" },
  { icon: Smartphone, name: "Responsive Design", desc: "Mobile-first layouts" },
  { icon: Cpu, name: "Software Engineering", desc: "Clean, scalable code" },
  { icon: Brain, name: "Problem Solving", desc: "Algorithms & data structures" },
  { icon: Database, name: "SQL Databases", desc: "Schema design & queries" },
  { icon: GitBranch, name: "Git & GitHub", desc: "Version control workflows" },
  { icon: Plug, name: "API Integration", desc: "REST & third-party APIs" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardHoverVariants = {
  hover: {
    y: -6,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mono text-primary text-sm mb-3">// 02. skills & tech</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tools I <span className="text-gradient">work with</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A growing toolkit for crafting modern, performant, and accessible digital products.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {skills.map((s) => (
            <motion.div
              key={s.name}
              variants={itemVariants}
              whileHover="hover"
              className="group glass rounded-2xl p-5 border border-transparent hover:border-primary/40 transition-colors duration-300 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <s.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm">{s.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
