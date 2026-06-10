import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiBookOpen, FiGithub, FiX } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

function ProjectsSection({ projects }) {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected builds with product and technical context"
        description="Each project combines thoughtful interface design, pragmatic engineering choices, and clear documentation."
      />

      <div className="section-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="card-hover flex h-full flex-col rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-5 sm:p-6 dark:border-white/10 dark:bg-slate-900/60"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950"
              >
                <FiGithub />
                GitHub
              </a>
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-coral hover:text-coral dark:border-white/15 dark:text-slate-200"
              >
                <FiBookOpen />
                View Tech Doc
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {activeProject ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm"
              aria-label="Close tech document modal"
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.25 }}
              className="tech-doc-modal fixed left-1/2 top-1/2 z-[60] max-h-[calc(100vh-1.5rem)] w-[calc(100%-1rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[2rem] border border-white/10 bg-slate-950 p-5 text-white shadow-2xl sm:p-6"
            >
              <div className="tech-doc-modal-header flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-coral">
                    Tech Doc
                  </p>
                  <h3 className="mt-2 font-display text-[clamp(1.7rem,5vw,2.25rem)] font-semibold leading-tight">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                  aria-label="Close modal"
                >
                  <FiX />
                </button>
              </div>
              <p className="tech-doc-modal-body mt-6 text-sm leading-7 text-slate-300">
                {activeProject.techDocSummary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {activeProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={activeProject.techDocLink}
                target="_blank"
                rel="noreferrer"
                className="tech-doc-modal-link mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-semibold text-white transition hover:bg-coral/90"
              >
                Open Full Documentation
                <FiArrowUpRight />
              </a>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default ProjectsSection;
