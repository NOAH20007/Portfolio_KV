import { useEffect } from "react";
import { cvData, profileData } from "../data/portfolioData";

export default function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="cv-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6"
    >
      <div className="cv-modal-card relative w-full max-w-3xl bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-4">
        {/* Modal Top Controls (Hidden when printing) */}
        <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-2.5">
            <i className="fa-regular fa-file-lines text-brand-400 text-lg"></i>
            <span className="font-bold text-sm sm:text-base">
              {profileData.name} - CV
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white flex items-center gap-2 transition-colors"
            >
              <i className="fa-solid fa-print"></i>
              <span>Print &amp; Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Modal"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>

        {/* Printable Standard CV Sheet */}
        <div
          id="cv-print-area"
          className="p-6 sm:p-10 bg-white text-slate-800 flex flex-col justify-between min-h-[980px]"
        >
          <div className="space-y-6">
            {/* CV Header */}
            <div className="border-b-2 border-slate-900 pb-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900">
                {profileData.name}
              </h1>
              <p className="text-sm sm:text-base font-bold text-blue-600 uppercase tracking-wider mt-0.5">
                {profileData.shortRole}
              </p>
              <div className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <div>
                  <strong className="text-slate-900">Location:</strong>{" "}
                  {profileData.fullAddressCopy}
                </div>
                <div>
                  <strong className="text-slate-900">Phone:</strong>{" "}
                  {profileData.phone} / {profileData.telegram} ( Telegram )
                </div>
                <div>
                  <strong className="text-slate-900">Email:</strong>{" "}
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-slate-600 hover:underline"
                  >
                    {profileData.email}
                  </a>
                </div>
                <div>
                  <strong className="text-slate-900">Portfolio:</strong>{" "}
                  <a
                    href={profileData.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Click
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-2.5">
                Professional Summary
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {cvData.summary}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-3">
                Education
              </h2>
              <div className="space-y-3.5 text-sm">
                {cvData.education.map((edu) => (
                  <div key={edu.institution}>
                    <div className="flex flex-wrap justify-between gap-2 font-bold text-slate-900">
                      <span>{edu.institution}</span>
                      <span className="text-slate-600 font-semibold">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium">{edu.degree}</p>
                    <ul className="list-disc pl-5 text-slate-700 mt-1 space-y-1">
                      {edu.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Proficiencies */}
            <div>
              <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-2.5">
                Skills &amp; Proficiencies
              </h2>
              <div className="space-y-1.5 text-sm text-slate-700">
                {cvData.skills.map((skill) => (
                  <div
                    key={skill.category}
                    className="grid grid-cols-1 sm:grid-cols-[180px_1fr] print:grid-cols-[180px_1fr] gap-0.5 sm:gap-4 print:gap-4"
                  >
                    <strong className="text-slate-900">{skill.category}</strong>
                    <span>{skill.items}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Experience & Academic Projects */}
            <div>
              <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-3">
                Practical Experience &amp; Academic Projects
              </h2>
              <div className="space-y-4 text-sm">
                {cvData.experience.map((exp) => (
                  <div key={exp.title}>
                    <div className="flex flex-wrap justify-between gap-2 font-bold text-slate-900">
                      <span>{exp.title}</span>
                      <span className="text-slate-600 font-semibold">
                        {exp.organization}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium">{exp.role}</p>
                    <ul className="list-disc pl-5 text-slate-700 mt-1 space-y-1">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CV Page Footer */}
          <div className="pt-4 mt-10 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
            {/* <span>Curriculum Vitae — {profileData.name}</span> */}
            {/* <span>Page 1 of 1</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
