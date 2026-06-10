import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-coral sm:text-xs sm:tracking-[0.35em]">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(1.8rem,5vw,2.75rem)] font-semibold leading-[1.1] text-slate-900 dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

export default SectionHeading;
