import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function HeroSection({ profile }) {
  return (
    <section className="hero-section relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/70 px-4 pb-8 pt-24 shadow-soft backdrop-blur sm:px-6 sm:pb-10 sm:pt-28 xl:px-10 dark:border-white/10 dark:bg-white/5">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-coral/15 via-transparent to-teal/15" />

      <div className="hero-content relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div className="hero-copy">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-coral sm:text-sm sm:tracking-[0.4em]">
            {profile.location}
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl font-display text-[clamp(2.5rem,12vw,4.75rem)] font-semibold leading-[1.05] text-slate-900 dark:text-white"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8"
          >
            {profile.headline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-4 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto dark:bg-white dark:text-slate-950"
            >
              Explore LinkedIn
              <FiArrowUpRight />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-coral hover:text-coral sm:w-auto dark:border-white/15 dark:text-slate-200"
            >
              View GitHub
              <FiGithub />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="hero-quick glass-panel rounded-[2rem] p-4 sm:p-6"
        >
          <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-5 text-white sm:p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 sm:text-sm sm:tracking-[0.35em]">Quick Connect</p>
            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex min-h-11 items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 max-md:items-center max-md:justify-center"
              >
                <FiMail />
                <span className="min-w-0 break-words">{profile.email}</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 max-md:justify-center"
              >
                <FiLinkedin />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={profile.resumeLink}
                className="flex min-h-11 items-center justify-between gap-3 rounded-2xl border border-coral/30 bg-coral/10 px-4 py-3 font-semibold text-coral transition hover:bg-coral/20 max-md:justify-center"
              >
                <span>{profile.resumeLabel}</span>
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
