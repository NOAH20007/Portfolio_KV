import { aboutHighlights, profileData } from "../data/portfolioData";
import aboutImg from "../assets/pro.png";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-white dark:bg-slate-900/60 border-y border-slate-200/70 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Get To Know Me
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            A quick introduction to my background, what I study, and what I
            enjoy building.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Dark-Themed Profile Summary Card */}
          <div className="lg:col-span-4 h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl text-center">
            <div>
              {/* Centered Portrait Photo Frame */}
              <div className="w-full max-w-[280px] sm:max-w-[300px] aspect-[4/5] mx-auto rounded-3xl overflow-hidden bg-white shadow-xl border-2 border-slate-700/60">
                {" "}
                <img
                  src={aboutImg}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/300x340/ffffff/0f172a?text=Khorn+Vuthy";
                  }}
                />
              </div>

              {/* Name & Role Header */}
              <h3 className="text-xl font-bold text-white mt-4">Khorn Vuthy</h3>
              <p className="text-sm font-medium text-blue-400 mt-1">
                Software Engineering Student
              </p>
            </div>

            <div className="w-full">
              {/* Divider */}
              <div className="border-t border-slate-800 my-4"></div>

              {/* Info Rows */}
              <div className="space-y-3.5 text-sm w-full px-1 text-left">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate-400 shrink-0">Location:</span>
                  <span className="font-bold text-white text-right">
                    Toul Kork, Phnom Penh
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate-400 shrink-0">University:</span>
                  <span className="font-bold text-white text-right">
                    BELTEI Int&apos;l University
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate-400 shrink-0">Current Year:</span>
                  <span className="font-bold text-white text-right">
                    Year 2, Semester 2
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate-400 shrink-0">Availability:</span>
                  <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-right">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.85)]"></span>
                    Open to Work
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Main About Bio Card & 3 Feature Cards */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-6">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Passionate about coding, helpful technology, and continuous
                learning
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Hello! My name is <strong>{profileData.name}</strong>. I am
                currently studying for my Bachelor's degree in Software
                Engineering at <strong>{profileData.university}</strong> in
                Phnom Penh. I enjoy learning how websites and software
                applications work from the inside out.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                My skills cover <strong>front-end development</strong>,{" "}
                <strong>basic back-end coding</strong>,{" "}
                <strong>IT support</strong>, and using modern{" "}
                <strong>AI tools</strong> to work faster and solve problems. I
                also have experience as a digital content creator, which taught
                me how to communicate clearly and understand what people like
                online.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Right now, my main goal is to gain more real-world experience
                through an internship or junior role where I can help a team,
                practice what I have learned, and keep improving every day.
              </p>
            </div>

            {/* 3 Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {aboutHighlights.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${item.iconBgClass} flex items-center justify-center mb-3`}
                  >
                    <i className={`${item.icon} text-lg`}></i>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
