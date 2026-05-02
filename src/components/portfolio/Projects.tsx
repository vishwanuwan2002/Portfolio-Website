import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import projectHostel from "@/assets/project-hostel.jpg";
import projectReact from "@/assets/project-react.jpg";
import projectJarvis from "@/assets/project-jarvis.jpg";
import projectMlops from "@/assets/project-mlops.jpg";

const projects = [
  {
    title: "Hostel Management System",
    type: "Full-Stack Project",
    year: "2025",
    desc: "Modern responsive website built with React, focused on component-based architecture and reusable UI.",
    tech: ["React", "Node.js", "MySQL", "Express"],
    image: projectHostel,
    accent: "from-primary/20 to-accent/10",
  },
  {
    title: "Full-Stack React Website",
    type: "Web Development",
    year: "2025",
    desc: "Modern responsive website built with React, focused on component-based architecture and reusable UI.",
    tech: ["React", "Tailwind", "REST API"],
    image: projectReact,
    accent: "from-accent/20 to-primary/10",
  },
  {
    title: "Jarvis AI Assistant",
    type: "Personal Project",
    year: "2024",
    desc: "AI-powered assistant designed for automation and personal productivity tasks with voice interaction.",
    tech: ["Python", "NLP", "Speech API"],
    image: projectJarvis,
    accent: "from-primary/20 to-accent/10",
  },
  {
    title: "Churn MLOps Project",
    type: "Machine Learning",
    year: "2024",
    desc: "ML-based churn prediction system covering data analysis, model training, and full deployment workflow.",
    tech: ["Python", "Scikit-learn", "MLOps", "Docker"],
    image: projectMlops,
    accent: "from-accent/20 to-primary/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="mono text-primary text-sm mb-3">// 03. portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A selection of academic and personal projects exploring full-stack engineering, AI, and product design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={itemVariants}
              className="group glass gradient-border rounded-3xl overflow-hidden relative hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10] bg-secondary">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute top-4 right-4 mono text-xs px-3 py-1.5 rounded-full bg-background/80 backdrop-blur border border-border text-foreground">
                  {p.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-7 md:p-8 relative">
                <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <p className="mono text-xs text-muted-foreground mb-1">{p.type}</p>
                      <h3 className="text-xl font-bold text-gradient">{p.title}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={20} />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>

                  <ul className="flex flex-wrap items-center gap-3">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="px-3 py-1 rounded-full bg-secondary/70 border border-border text-xs text-muted-foreground mono"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
