import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardHoverVariants = {
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-14">
          <p className="mono text-primary text-sm mb-3">// 01. about me</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Get to <span className="text-gradient">know me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 glass gradient-border rounded-2xl p-8 md:p-10"
          >
            <p className="mono text-xs text-muted-foreground mb-4">~/about/bio.md</p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold">
              A passionate Software Engineering undergraduate with a strong interest in full-stack development,
              UI/UX design, and emerging web technologies, and enjoys building modern digital
              solutions that are both functional and visually engaging.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4 font-semibold">
              Continuously improving skills in programming, system design, and creative
              problem-solving, driven by curiosity and innovation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            <InfoCard
              icon={<GraduationCap className="text-primary" size={22} />}
              label="Education"
              title="BSc (Hons) Software Engineering"
              meta="SLTC Research University    (2022 — 2026)"
            />
            <InfoCard
              icon={<Briefcase className="text-accent" size={22} />}
              label="Status"
              title="Seeking Internship"
              meta="Software Development & Full-Stack Engineering"
            />
            <InfoCard
              icon={<Code2 className="text-primary" size={22} />}
              label="Focus"
              title="Full-Stack · UI/UX · AI/ML"
              meta="Modern web solutions & intelligent systems"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const InfoCard = ({ icon, label, title, meta }: { icon: React.ReactNode; label: string; title: string; meta: string }) => (
  <motion.div
    variants={cardHoverVariants}
    whileHover="hover"
    className="glass rounded-2xl p-5 flex items-center gap-4 border border-transparent hover:border-primary/40 transition-colors duration-300"
  >
    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors shrink-0">
      {icon}
    </div>
    <div>
      <p className="mono text-xs text-muted-foreground">{label}</p>
      <p className="font-semibold text-sm">{title}</p>
      <p className="text-xs text-muted-foreground">{meta}</p>
    </div>
  </motion.div>
);
