import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Academic Background
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            My school and university timeline.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-brand-500/30 dark:border-brand-500/40 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
          {educationData.map((item) => (
            <div key={item.degree} className="relative group">
              <span
                className={
                  item.isCurrent
                    ? 'absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-600 ring-4 ring-brand-100 dark:ring-brand-950'
                    : 'absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-slate-400 dark:bg-slate-600 ring-4 ring-slate-100 dark:ring-slate-900'
                }
              ></span>
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span
                    className={
                      item.isCurrent
                        ? 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-500/10 text-brand-600 dark:text-brand-400'
                        : 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }
                  >
                    <i className="fa-regular fa-calendar"></i>
                    {item.period}
                  </span>
                  <span
                    className={
                      item.isCurrent
                        ? 'text-xs font-semibold text-emerald-600 dark:text-emerald-400'
                        : 'text-xs text-slate-500 dark:text-slate-400'
                    }
                  >
                    {item.status}
                  </span>
                </div>
                <h3
                  className={`${
                    item.isCurrent ? 'text-xl' : 'text-lg'
                  } font-bold text-slate-900 dark:text-white`}
                >
                  {item.degree}
                </h3>
                <p
                  className={`text-sm font-medium ${
                    item.isCurrent
                      ? 'text-brand-600 dark:text-brand-400'
                      : 'text-slate-500 dark:text-slate-400'
                  } mt-0.5`}
                >
                  {item.institution}
                </p>
                <p
                  className={`${
                    item.isCurrent ? 'mt-3' : 'mt-2'
                  } text-sm text-slate-600 dark:text-slate-400 leading-relaxed`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
