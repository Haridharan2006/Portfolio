import { motion } from "framer-motion";

function Card({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        glass
        p-8
        transition-all
        duration-300
        hover:border-sky-400/30
        hover:shadow-[0_0_40px_rgba(56,189,248,.08)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default Card;