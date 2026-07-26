import { motion } from "framer-motion";

function FloatingBadge({ children, className = "" }) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        rounded-full
        border
        border-slate-700
        bg-slate-900/80
        backdrop-blur-md
        px-4
        py-2
        text-sm
        font-semibold
        shadow-xl
        ${className}
      `}
    >
      {children}
    </motion.div>
);
}

export default FloatingBadge;