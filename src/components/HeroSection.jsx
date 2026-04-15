import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function HeroSection({ profile }) {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-white/70 px-6 pb-10 pt-28 shadow-soft backdrop-blur xl:px-10 dark:border-white/10 dark:bg-white/5">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-coral/15 via-transparent to-teal/15" />

      <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-coral">
            {profile.location}
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl font-display text-5xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-6xl xl:text-7xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl"
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
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950"
            >
              Explore LinkedIn
              <FiArrowUpRight />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-coral hover:text-coral dark:border-white/15 dark:text-slate-200"
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
          className="glass-panel rounded-[2rem] p-6"
        >
          <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-white">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Quick Connect</p>
            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
              >
                <FiMail />
                <span className="truncate">{profile.email}</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
              >
                <FiLinkedin />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={profile.resumeLink}
                className="flex items-center justify-between rounded-2xl border border-coral/30 bg-coral/10 px-4 py-3 font-semibold text-coral transition hover:bg-coral/20"
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
