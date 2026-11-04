import { profileData } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 text-center text-sm text-slate-500 dark:text-slate-400 no-print">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          {/* <img
            src={profileData.avatarSrc}
            alt={profileData.name}
            className="w-7 h-7 rounded-full object-cover object-top border border-brand-500"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/60x60/2563eb/ffffff?text=KV";
            }}
          /> */}
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {profileData.name}
          </span>
          <span>•</span>
          <span>Software Engineering Portfolio</span>
        </div>
        <p>© 2026 {profileData.name}</p>
      </div>
    </footer>
  );
}
