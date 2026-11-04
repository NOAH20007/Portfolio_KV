import { projectsData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-white dark:bg-slate-900/60 border-y border-slate-200/70 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Hands-On Background
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Experience &amp; Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Real projects, training, and practical work I have done so far.
          </p>
        </div>

        {/* Experience & Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${project.badgeClass}`}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {project.organization}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <i
                        className={`fa-solid fa-check ${project.checkColorClass} mt-1 text-xs`}
                      ></i>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-slate-800 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
