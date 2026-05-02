import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-8 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Vishwa Nuwan. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:vishwanuwan261@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};
