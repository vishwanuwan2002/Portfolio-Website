import { motion, Variants, Transition } from "framer-motion";
import { Code2, Cpu, Layers } from "lucide-react";

const floatingVariants: Variants = {
  float: (i: number) => ({
    y: [0, -10, 0, 10, 0],
    x: [0, 5, 0, -5, 0],
    transition: {
      duration: 4 + i * 0.5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  }),
};

const CodeSnippet = () => (
  <motion.div
    custom={1}
    variants={floatingVariants}
    animate="float"
    className="absolute -bottom-8 -left-12 sm:-bottom-10 sm:-left-16 w-56 sm:w-64"
  >
    <div className="glass rounded-lg shadow-xl overflow-hidden border border-white/10">
      <div className="h-7 flex items-center gap-1.5 px-3 bg-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
      </div>
      <div className="p-3 text-xs sm:text-sm font-mono text-left">
        <p className="text-gray-400">// dev mode: ON</p>
        <p>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">dev</span> = {"{"}
        </p>
        <p className="pl-4">
          <span className="text-blue-400">code:</span>{" "}
          <span className="text-green-400">'∞'</span>,
        </p>
        <p className="pl-4">
          <span className="text-blue-400">coffee:</span>{" "}
          <span className="text-orange-400">true</span>,
        </p>
        <p>{"};"}</p>
      </div>
    </div>
  </motion.div>
);

const Tag = ({
  icon,
  label,
  className,
  custom,
}: {
  icon: React.ReactNode;
  label: string;
  className: string;
  custom: number;
}) => (
  <motion.div
    custom={custom}
    variants={floatingVariants}
    animate="float"
    className={`absolute glass rounded-full px-3 py-1.5 text-xs sm:text-sm flex items-center gap-2 border border-white/10 shadow-lg ${className}`}
  >
    {icon}
    <span>{label}</span>
  </motion.div>
);

export const HeroImage = ({ profileImage }: { profileImage: string }) => {
  const transition: Transition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
    delay: 0.5,
  };

  const glowTransition: Transition = {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={transition}
      className="relative hidden lg:block w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] mx-auto"
    >
      {/* Glowing background */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={glowTransition}
        className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl"
      />

      {/* Image */}
      <div className="absolute inset-0 p-2">
        <img
          src={profileImage}
          alt="Vishwa Nuwan"
          className="w-full h-full object-cover rounded-full border-4 border-black"
        />
      </div>

      {/* Floating Elements */}
      <Tag
        icon={<Code2 size={14} className="text-sky-400" />}
        label="<React/>"
        className="top-8 -right-8"
        custom={2}
      />
      <Tag
        icon={<Cpu size={14} className="text-green-400" />}
        label="AI/ML"
        className="top-1/2 -left-10"
        custom={3}
      />
      <Tag
        icon={<Layers size={14} className="text-orange-400" />}
        label="Full-Stack"
        className="bottom-8 -right-10"
        custom={4}
      />
      <CodeSnippet />
    </motion.div>
  );
};
