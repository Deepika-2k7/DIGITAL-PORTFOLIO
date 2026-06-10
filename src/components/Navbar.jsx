import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiMoon, HiSun } from "react-icons/hi2";

function Navbar({ onMenuClick, isDarkMode, onToggleTheme, isSidebarOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-[1.5rem] px-4 py-3 shadow-soft sm:rounded-full">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:scale-105 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            aria-label="Open navigation menu"
            aria-expanded={isSidebarOpen}
          >
            <HiOutlineMenuAlt2 className="text-xl" />
          </button>
          <div className="min-w-0">
            <p className="font-display text-[clamp(1.1rem,4vw,1.5rem)] font-semibold leading-none text-slate-900 dark:text-white">
              Portfolio
            </p>
            <p className="hidden text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 sm:block">
              Creative Developer
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:scale-105 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <HiSun className="text-lg" /> : <HiMoon className="text-lg" />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
