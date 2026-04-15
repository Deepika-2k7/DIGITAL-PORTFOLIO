import { motion } from "framer-motion";
import { HiCodeBracketSquare, HiCommandLine, HiServerStack } from "react-icons/hi2";
import SectionHeading from "./SectionHeading";

const iconMap = {
  frontend: HiCodeBracketSquare,
  backend: HiServerStack,
  tools: HiCommandLine
};

function SkillsSection({ categories }) {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Technical skillset organized for clarity"
        description="Core technologies grouped by focus area so the stack is easy to scan at a glance."
      />

      <div className="section-grid">
        {categories.map((category, index) => {
          const Icon = iconMap[category.icon] || HiCodeBracketSquare;

          return (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="card-hover rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                <Icon className="text-2xl" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                {category.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
