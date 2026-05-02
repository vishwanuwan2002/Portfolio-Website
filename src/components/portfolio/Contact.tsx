import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    const serviceID = "service_cffhamf";
    const templateID = "template_j4wtuz8";
    const publicKey = "0cLsD7d4J6FJbr1XH";

    if (formRef.current) {
      emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
        () => {
          toast.success("Message sent! I'll get back to you soon.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message. Please try again later.");
        }
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="section-padding relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-14 text-center">
          <p className="mono text-primary text-sm mb-3">// 04. contact</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-gradient">build together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Open to internship opportunities, collaborations, or just a friendly chat about tech.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            <ContactItem icon={<Mail size={18} />} label="Email" value="vishwanuwan261@gmail.com" href="mailto:vishwanuwan261@gmail.com" />
            <ContactItem icon={<Phone size={18} />} label="Phone" value="+94 71 795 3103" href="tel:+94717953103" />
            <ContactItem icon={<Github size={18} />} label="GitHub" value="@vishwanuwan2002" href="https://github.com/vishwanuwan2002" />
            <ContactItem icon={<Linkedin size={18} />} label="LinkedIn" value="Vishwa Nuwan" href="https://www.linkedin.com/in/vishwa-nuwan-07947633a" />
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="lg:col-span-3 glass gradient-border rounded-3xl p-7 md:p-10 space-y-5"
          >
            <Field label="Name" id="name">
              <input
                id="name"
                name="from_name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email" id="email">
              <input
                id="email"
                type="email"
                name="from_email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Message" id="message">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </Field>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:scale-[1.02] transition-transform shadow-[var(--shadow-elevated)] w-full md:w-auto"
            >
              Send Message
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

const Field = ({ label, id, children }: { label: string; id: string; children: React.ReactNode }) => (
  <div>
    <label htmlFor={id} className="mono text-xs text-muted-foreground mb-2 block">
      <span className="text-primary">$</span> {label.toLowerCase()}
    </label>
    {children}
  </div>
);

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) => (
  <motion.a
    href={href}
    whileHover={{ y: -4 }}
    className="glass rounded-2xl p-5 flex items-center gap-4 border border-transparent hover:border-primary/40 transition-colors duration-300 group"
  >
    <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
      {icon}
    </div>
    <div>
      <p className="mono text-xs text-muted-foreground">{label}</p>
      <p className="font-medium text-sm">{value}</p>
    </div>
  </motion.a>
);
