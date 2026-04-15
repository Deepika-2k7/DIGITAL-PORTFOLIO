import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

function CodingPracticeSection({ codingPractice }) {
  return (
    <section id="coding-practice" className="section-shell">
      <SectionHeading
        eyebrow="Coding Practice"
        title="Consistency across problem solving platforms"
        description="A compact view of ranking signals and solved problem counts from competitive practice profiles."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {codingPractice.map((entry, index) => (
          <motion.a
            key={entry.platform}
            href={entry.profileLink}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="card-hover rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-slate-900/60"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {entry.platform}
              </h3>
              <FiArrowUpRight className="text-lg text-coral" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-4 dark:bg-slate-950/70">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Ranking
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                  {entry.ranking}
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 dark:bg-slate-950/70">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Solved
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                  {entry.problemsSolved}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default CodingPracticeSection;
