import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[9999]"
    >
      <motion.h1
        initial={{ scale: .8 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        className="text-4xl font-bold"
      >
        HB
      </motion.h1>
    </motion.div>
  );
}

export default Loader;