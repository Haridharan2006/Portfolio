import { motion } from "framer-motion";

function Card({
  children,
  className = "",
  hover = true,
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.01,
            }
          : {}
      }
      transition={{
        duration: 0.3,
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/40
        backdrop-blur-xl
        p-8
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:shadow-[0_20px_60px_rgba(59,130,246,.15)]
        before:absolute
        before:inset-0
        before:bg-gradient-to-br
        before:from-white/[0.04]
        before:to-transparent
        before:pointer-events-none
        ${className}
      `}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default Card;