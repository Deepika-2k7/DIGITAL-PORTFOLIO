import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function AchievementsSection({ achievements }) {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeading
        eyebrow="Achievements"
        title="Milestones that reflect growth and consistency"
        description="Highlights from hackathons, contests, and community contributions presented in a simple visual timeline."
      />

      <div className="relative ml-2 border-l border-slate-300 pl-6 dark:border-white/10">
        {achievements.map((achievement, index) => (
          <motion.article
            key={`${achievement.title}-${achievement.year}`}
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative pb-10 last:pb-0"
          >
            <span className="absolute -left-[2.05rem] top-1 h-4 w-4 rounded-full border-4 border-sand bg-coral dark:border-slate-950" />
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-slate-900/60">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {achievement.title}
                </h3>
                <span className="badge">{achievement.year}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {achievement.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default AchievementsSection;
