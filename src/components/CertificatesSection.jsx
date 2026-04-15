import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

function CertificatesSection({ certificates }) {
  return (
    <section id="certificates" className="section-shell">
      <SectionHeading
        eyebrow="Certificates"
        title="Continuous learning with verifiable credentials"
        description="A curated selection of online certifications across frontend, problem solving, and cloud fundamentals."
      />

      <div className="section-grid">
        {certificates.map((certificate, index) => (
          <motion.a
            key={certificate.title}
            href={certificate.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="card-hover group rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-slate-900/60"
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-coral">
              {certificate.issuer}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
              {certificate.title}
            </h3>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition group-hover:text-coral dark:text-slate-200">
              View Certificate
              <FiArrowUpRight />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default CertificatesSection;
