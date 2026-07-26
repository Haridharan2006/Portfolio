import { motion } from "framer-motion";

function SectionTitle({
  eyebrow,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24 max-w-4xl"
    >
      {/* Eyebrow */}

      <div
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-blue-500/20
          bg-blue-500/10
          px-4
          py-2
          backdrop-blur-xl
        "
      >
        <div className="h-2 w-2 rounded-full bg-blue-400" />

        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-blue-400
          "
        >
          {eyebrow}
        </span>
      </div>

      {/* Title */}

      <h2
        className="
          mt-8
          max-w-4xl
          text-4xl
          font-black
          leading-tight
          tracking-tight
          text-white
          sm:text-5xl
          lg:text-6xl
        "
      >
        {title}
      </h2>

      {/* Description */}

      <p
        className="
          mt-8
          max-w-3xl
          text-lg
          leading-9
          text-slate-400
        "
      >
        {description}
      </p>
    </motion.div>
  );
}

export default SectionTitle;