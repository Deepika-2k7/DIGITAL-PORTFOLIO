import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";

function Sidebar({ isOpen, onClose, links }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close navigation overlay"
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="fixed left-0 top-0 z-50 flex h-full w-[min(88vw,22rem)] max-w-sm flex-col bg-slate-950 px-4 pb-8 pt-6 text-white shadow-2xl sm:px-5"
          >
            <div className="mb-10 flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-3xl font-semibold">Navigate</p>
                <p className="mt-1 text-sm text-slate-400">Jump to any section</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                aria-label="Close navigation menu"
              >
                <HiOutlineX className="text-xl" />
              </button>
            </div>

            <nav className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto pr-1">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base font-semibold text-slate-100 transition hover:border-coral/50 hover:bg-white/10"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default Sidebar;
