import { motion } from "framer-motion";
import { FiArrowUpRight, FiLinkedin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

function LinkedInSection({ profile }) {
  return (
    <section id="linkedin" className="section-shell">
      <SectionHeading
        eyebrow="LinkedIn"
        title="Professional presence beyond the portfolio"
        description="A quick pathway to connect, review experience, and explore additional work and recommendations."
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="rounded-[2rem] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 p-5 text-white sm:p-6 md:p-8"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <FiLinkedin className="text-2xl" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold sm:text-2xl">Let&apos;s connect on LinkedIn</h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
                Explore detailed experience, education, endorsements, and recent activity through my LinkedIn profile.
              </p>
            </div>
          </div>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
          >
            Open LinkedIn
            <FiArrowUpRight />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default LinkedInSection;
