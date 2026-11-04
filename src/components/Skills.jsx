import { skillsData } from '../data/portfolioData';
import TechMarquee from './TechMarquee';

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            What I Know
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            My Skills
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Skills I have learned from my university classes, practical training, and personal
            projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.title}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-500/40 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl ${skill.iconBoxClass} flex items-center justify-center text-xl`}
                >
                  <i className={skill.icon}></i>
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${skill.badgeClass}`}
                >
                  {skill.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{skill.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {skill.description}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex justify-between text-xs font-medium mb-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Comfort Level</span>
                  <span className={skill.percentTextClass}>{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${skill.barColorClass} rounded-full`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Skills Tech Stack Marquee */}
        <div className="mt-12 pt-6 border-t border-slate-200/60 dark:border-slate-800/70">
          <TechMarquee />
        </div>
      </div>
    </section>
  );
}
