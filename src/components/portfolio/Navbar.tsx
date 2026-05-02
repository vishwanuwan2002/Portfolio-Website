import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const navItemVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border" : "py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.a
          href="#home"
          className="font-mono font-bold text-lg flex items-center gap-2"
          variants={navItemVariants}
        >
          <span className="text-primary">{'<'}</span>
          <span>Vishwa<span className="text-primary">.</span></span>
          <span className="text-primary">{'/>'}</span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.li
              key={l.href}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 * (i + 1) }}
            >
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                <span className="mono text-primary mr-1 opacity-60">#</span>
                {l.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/40 text-primary text-sm font-mono hover:bg-primary hover:text-white transition-all"
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          Hire Me
        </motion.a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full inset-x-0 bg-background/95 backdrop-blur-xl border-b border-border"
        >
          <ul className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary transition-colors block py-2"
                >
                  <span className="mono text-primary mr-2">#</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};
