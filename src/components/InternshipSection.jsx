import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function InternshipSection({ internship }) {
  return (
    <section id="internship" className="section-shell">
      <SectionHeading
        eyebrow="Internship"
        title="Industry experience with product-facing impact"
        description="A summary of hands-on work, collaboration, and delivered improvements during internship experience."
      />

      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="card-hover rounded-[2rem] border border-slate-200/80 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-slate-900/60 md:p-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-coral">
              {internship.company}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
              {internship.role}
            </h3>
          </div>
          <span className="badge">{internship.duration}</span>
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
          {internship.description}
        </p>
      </motion.article>
    </section>
  );
}

export default InternshipSection;
