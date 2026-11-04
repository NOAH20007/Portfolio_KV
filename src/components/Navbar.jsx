import { useState } from "react";
import { navLinks, profileData } from "../data/portfolioData";

export default function Navbar({
  isDark,
  onToggleTheme,
  activeSection,
  onOpenCvModal,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 dark:bg-slate-900/85 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-brand-500 shadow-sm flex-shrink-0 bg-slate-200 dark:bg-slate-800">
            <img
              src={profileData.avatarSrc}
              alt={profileData.name}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/100x100/2563eb/ffffff?text=KV";
              }}
            />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              {profileData.name}
            </span>
            <span className="hidden sm:block text-xs text-slate-500 dark:text-slate-400">
              {profileData.shortRole}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isCurrent = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={
                  isCurrent
                    ? "nav-link px-3 py-2 rounded-lg text-sm font-medium text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 transition-colors"
                    : "nav-link px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                }
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & CV Button */}
        <div className="flex items-center gap-2">
          <button
            id="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle Dark/Light Theme"
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
          >
            {isDark ? (
              <i
                id="theme-icon-sun"
                className="fa-solid fa-sun text-amber-400"
              ></i>
            ) : (
              <i
                id="theme-icon-moon"
                className="fa-solid fa-moon text-slate-700"
              ></i>
            )}
          </button>

          <button
            type="button"
            onClick={onOpenCvModal}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-sm shadow-brand-600/20 transition-all"
          >
            <i className="fa-regular fa-file-lines"></i>
            <span> View CV</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Open Menu"
            className="md:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <i
              id="mobile-menu-icon"
              className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"} text-lg`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-2"
        >
          {navLinks.map((link) => {
            const isCurrent = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleMobileNavClick}
                className={
                  isCurrent
                    ? "mobile-nav-link block px-3 py-2.5 rounded-xl text-base font-medium text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60"
                    : "mobile-nav-link block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800"
                }
              >
                {link.mobileLabel}
              </a>
            );
          })}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-sm"
            >
              <i className="fa-solid fa-print"></i>
              <span>Download CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
