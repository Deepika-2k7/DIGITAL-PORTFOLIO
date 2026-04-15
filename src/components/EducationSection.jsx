import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function EducationSection({ education }) {
  return (
    <section id="education" className="section-shell">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation with practical focus"
        description="A concise snapshot of formal learning, technical depth, and the mindset behind my development work."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.article
            key={`${item.degree}-${index}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="card-hover rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-slate-900/60"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {item.degree}
                </h3>
                {item.gpa ? (
                  <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                    GPA: <span className="font-semibold text-coral">{item.gpa}</span>
                  </p>
                ) : null}
              </div>
              <span className="badge">{item.duration}</span>
            </div>
            <p className="mt-3 text-base font-medium text-coral">{item.institution}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
