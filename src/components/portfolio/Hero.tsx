import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Activity, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { HeroImage } from "./HeroImage";
const profile = "https://i.postimg.cc/bNfthYgs/photo-2026-05-01-21-07-44.jpg";

const ROLES = [
  "Software Engineering Undergraduate",
  "Full-Stack Developer",
  "AI / ML Enthusiast",
  "Problem Solver",
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 py-0"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative blurred orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-glow" />

      {/* Subtle gradient mesh lines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{
             backgroundImage:
               "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
             backgroundSize: "60px 60px",
             maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent 80%)",
           }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center"
      >
        {/* Left: Text */}
        <div className="space-y-7">
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mono text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-muted-foreground">Available for internships</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mono text-xs text-muted-foreground">
              <MapPin size={12} className="text-accent" />
              Sri Lanka
            </div>
          </motion.div>

          <div className="space-y-3">
            <motion.p
              variants={itemVariants}
              className="mono text-primary text-sm md:text-base flex items-center gap-2 py-0"
            >
              <Activity size={14} /> {'> hello_world.exe'}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Hi, I'm <br />
              <span className="text-gradient">Vishwa Nuwan</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mono text-base md:text-lg text-muted-foreground pt-2 min-h-[1.75rem]"
            >
              &gt;{" "}
              <span className="text-accent">{displayed}</span>
              <span className="animate-blink">|</span>
            </motion.p>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground max-w-xl"
          >
            I transform complex problems into elegant digital solutions. I'm
            passionate about building fast, responsive, and beautiful web
            applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full bg-primary shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all duration-300"
            >
              Let's Talk <ArrowRight size={16} />
            </a>
            <a
              href="/Vishwa-Nuwan-CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full glass border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              Download CV <Download size={16} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-5 pt-4">
            <a
              href="https://github.com/vishwanuwan2002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishwa-nuwan-07947633a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:vishwanuwan@outlook.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>

        {/* Right: Image */}
        <HeroImage profileImage={profile} />
      </motion.div>
    </section>
  );
};
