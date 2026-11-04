const techStackItems = [
  {
    name: "C++",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0" aria-hidden="true">
        <path
          fill="#00599C"
          d="M24 3L6 13.4v21.2L24 45l18-10.4V13.4L24 3z"
        />
        <path
          fill="#004482"
          d="M42 13.4L24 24v21l18-10.4V13.4z"
        />
        <path
          fill="#659AD2"
          d="M24 3L6 13.4 24 24l18-10.6L24 3z"
        />
        <path
          fill="#FFFFFF"
          d="M21.5 15.2c-4.9 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8c3 0 5.7-1.5 7.3-3.9l-3.4-2c-.9 1.3-2.3 2.1-3.9 2.1-2.7 0-4.9-2.2-4.9-5s2.2-5 4.9-5c1.6 0 3 .8 3.9 2.1l3.4-2c-1.6-2.4-4.3-3.9-7.3-3.9zm10.3 6.3v2h-2v2h2v2h2v-2h2v-2h-2v-2h-2zm6.5 0v2h-2v2h2v2h2v-2h2v-2h-2v-2h-2z"
        />
      </svg>
    ),
  },
  {
    name: "C#",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0" aria-hidden="true">
        <path
          fill="#68217A"
          d="M24 3L6 13.4v21.2L24 45l18-10.4V13.4L24 3z"
        />
        <path
          fill="#9B4F96"
          d="M24 3L6 13.4 24 24l18-10.6L24 3z"
        />
        <path
          fill="#FFFFFF"
          d="M21.2 15.2c-4.9 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8c3 0 5.6-1.5 7.2-3.8l-3.4-2c-.9 1.2-2.2 2-3.8 2-2.7 0-4.9-2.2-4.9-5s2.2-5 4.9-5c1.6 0 3 .8 3.8 2l3.4-2c-1.6-2.3-4.2-3.8-7.2-3.8zm10.8 4.3l-.5 2.5h-1.8v1.8h1.5l-.4 2.2h-1.8v1.8h1.5l-.5 2.5h1.9l.5-2.5h2.1l-.5 2.5h1.9l.5-2.5H40V26h-1.6l.4-2.2H40V22h-1.3l.5-2.5h-1.9l-.5 2.5h-2.1l.5-2.5H32zm2.2 4.3h2.1l-.4 2.2h-2.1l.4-2.2z"
        />
      </svg>
    ),
  },
  {
    name: "HTML5",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0" aria-hidden="true">
        <path fill="#E34F26" d="M7 5l3.1 34.4L24 43l13.9-3.6L41 5H7z" />
        <path fill="#EF652A" d="M24 8v31.9l11.2-2.9L37.7 8H24z" />
        <path
          fill="#FFFFFF"
          d="M24 21h-5.7l-.4-4.5H24V12H13l1.2 13.5H24V21zm0 11.6l-4.9-1.3-.3-3.6h-4.5l.6 7.1 9.1 2.5V32.6z"
        />
        <path
          fill="#FFFFFF"
          d="M24 21v4.5h5.3l-.5 5.8-4.8 1.3v4.7l9.1-2.5.9-10.3H24V21zm0-9v4.5h10.6l.4-4.5H24z"
        />
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0" aria-hidden="true">
        <path fill="#1572B6" d="M7 5l3.1 34.4L24 43l13.9-3.6L41 5H7z" />
        <path fill="#33A9DC" d="M24 8v31.9l11.2-2.9L37.7 8H24z" />
        <path
          fill="#FFFFFF"
          d="M24 20.5h10.2l.4-4.5H13.4l.4 4.5H24zm0 4.5H14.3l.4 4.5H24V25zm0 7.6l-4.9-1.3-.3-3.5h-4.5l.6 7 9.1 2.5v-4.7z"
        />
        <path
          fill="#FFFFFF"
          d="M24 20.5V25h5.5l-.5 6.3-5 1.3v4.7l9.1-2.5 1.3-14.3H24z"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0" aria-hidden="true">
        <rect x="5" y="5" width="38" height="38" rx="6" fill="#F7DF1E" />
        <path
          fill="#111827"
          d="M25.2 35.1c.9 1.5 2.1 2.6 4.3 2.6 1.8 0 3-.9 3-2.1 0-1.5-1.2-2-3.2-2.9l-1.1-.5c-3.2-1.4-5.3-3.1-5.3-6.7 0-3.3 2.5-5.8 6.5-5.8 2.8 0 4.8 1 6.3 3.5l-3.4 2.2c-.8-1.4-1.6-1.9-2.9-1.9-1.3 0-2.1.8-2.1 1.9 0 1.3.8 1.9 2.7 2.7l1.1.5c3.7 1.6 5.8 3.2 5.8 6.9 0 4-3.1 6.1-7.3 6.1-4.1 0-6.7-1.9-8-4.4l3.6-2.1zm-13.2.4c.7 1.2 1.3 2.2 2.8 2.2 1.4 0 2.3-.6 2.3-2.7V20h4.3v15.1c0 4.6-2.7 6.7-6.6 6.7-3.5 0-5.6-1.8-6.6-4l3.8-2.3z"
        />
      </svg>
    ),
  },
  {
    name: "React.js",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0" aria-hidden="true">
        <circle cx="24" cy="24" r="3.8" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="2.4" fill="none">
          <ellipse cx="24" cy="24" rx="19" ry="7.4" />
          <ellipse
            cx="24"
            cy="24"
            rx="19"
            ry="7.4"
            transform="rotate(60 24 24)"
          />
          <ellipse
            cx="24"
            cy="24"
            rx="19"
            ry="7.4"
            transform="rotate(120 24 24)"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0" aria-hidden="true">
        <path
          fill="#38BDF8"
          d="M24 12c-5.3 0-8.7 2.7-10 8 2-2.7 4.3-3.7 7-3 1.5.4 2.6 1.5 3.8 2.7 2 2 4.3 4.3 9.2 4.3 5.3 0 8.7-2.7 10-8-2 2.7-4.3 3.7-7 3-1.5-.4-2.6-1.5-3.8-2.7-2-2-4.3-4.3-9.2-4.3zM14 24c-5.3 0-8.7 2.7-10 8 2-2.7 4.3-3.7 7-3 1.5.4 2.6 1.5 3.8 2.7 2 2 4.3 4.3 9.2 4.3 5.3 0 8.7-2.7 10-8-2 2.7-4.3 3.7-7 3-1.5-.4-2.6-1.5-3.8-2.7-2-2-4.3-4.3-9.2-4.3z"
        />
      </svg>
    ),
  },
  {
    name: "PHP",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0" aria-hidden="true">
        <ellipse cx="24" cy="24" rx="21" ry="12" fill="#777BB4" />
        <path
          fill="#FFFFFF"
          d="M11.6 28.5l2.1-10.3h4.9c2.2 0 3.6 1.2 3.2 3.3-.4 2.3-2.1 3.6-4.5 3.6h-2.4l-.7 3.4h-2.6zm4.2-5.3h1.8c1.1 0 1.9-.6 2.1-1.6.2-1-.4-1.5-1.5-1.5h-1.8l-.6 3.1zm7.2 5.3l2.6-12.8h2.5l-.8 3.9h2.2c2 0 3 1 2.6 2.9l-1.2 6h-2.6l1.1-5.4c.2-.9-.2-1.4-1.1-1.4h-1.5l-1.4 6.8H23zm9.5 2.5l2.6-12.8H40c2.2 0 3.6 1.2 3.2 3.3-.4 2.3-2.1 3.6-4.5 3.6h-2.4l-1.2 5.9h-2.6zm4.2-7.8h1.8c1.1 0 1.9-.6 2.1-1.6.2-1-.4-1.5-1.5-1.5h-1.8l-.6 3.1z"
        />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0" aria-hidden="true">
        <path
          fill="#3776AB"
          d="M23.8 5C15.9 5 16.4 8.4 16.4 8.4v3.6h7.6v1.2H13.3S8 12.6 8 20.5s4.6 7.6 4.6 7.6h2.8v-3.7s-.1-4.6 4.5-4.6h7.8s4.4.1 4.4-4.2V8.9S32.8 5 23.8 5zm-4.3 2.9c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z"
        />
        <path
          fill="#FFD43B"
          d="M24.2 43c7.9 0 7.4-3.4 7.4-3.4V36H24v-1.2h10.7S40 35.4 40 27.5s-4.6-7.6-4.6-7.6h-2.8v3.7s.1 4.6-4.5 4.6h-7.8s-4.4-.1-4.4 4.2v6.7S15.2 43 24.2 43zm4.3-2.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
        />
      </svg>
    ),
  },
  {
    name: "MySQL / SQL Server",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0" aria-hidden="true">
        <ellipse cx="24" cy="11" rx="15" ry="5.5" fill="#00758F" />
        <path
          fill="#00758F"
          d="M9 14.5v7c0 3 6.7 5.5 15 5.5s15-2.5 15-5.5v-7c-2.8 2.4-8.5 4-15 4s-12.2-1.6-15-4z"
        />
        <path
          fill="#F29111"
          d="M9 25v7.5c0 3 6.7 5.5 15 5.5s15-2.5 15-5.5V25c-2.8 2.4-8.5 4-15 4s-12.2-1.6-15-4z"
        />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0" aria-hidden="true">
        <path
          fill="#F05032"
          d="M42.7 21.7L26.3 5.3c-1.3-1.3-3.3-1.3-4.6 0l-3.5 3.5 4.4 4.4c1-.3 2.2-.1 3 .7.8.8 1.1 2 .7 3l4.2 4.2c1-.4 2.2-.1 3 .7 1.1 1.1 1.1 2.9 0 4-1.1 1.1-2.9 1.1-4 0-.8-.8-1.1-2-.7-3l-3.9-3.9v10.3c.3.1.6.3.8.6 1.1 1.1 1.1 2.9 0 4-1.1 1.1-2.9 1.1-4 0-1.1-1.1-1.1-2.9 0-4 .3-.3.6-.5 1-.6V18.6c-.4-.1-.7-.3-1-.6-.8-.8-1.1-2-.7-3l-4.3-4.3-11.4 11.4c-1.3 1.3-1.3 3.3 0 4.6l16.4 16.4c1.3 1.3 3.3 1.3 4.6 0l16.4-16.4c1.3-1.3 1.3-3.3 0-4.6z"
        />
      </svg>
    ),
  },
  {
    name: "VS Code",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0" aria-hidden="true">
        <path
          fill="#0065A9"
          d="M34.8 5.4L17.9 21.8 8.3 14.5 5 16.3v15.4l3.3 1.8 9.6-7.3 16.9 16.4 8.2-4V9.4l-8.2-4z"
        />
        <path
          fill="#007ACC"
          d="M34.8 5.4v37.2l8.2-4V9.4l-8.2-4z"
        />
        <path
          fill="#1F9CF0"
          d="M34.8 5.4L8.3 33.5 5 31.7V16.3l3.3-1.8 26.5 28.1V5.4z"
        />
      </svg>
    ),
  },
];

export default function TechMarquee({ className = "" }) {
  const repeatedItems = [...techStackItems, ...techStackItems];

  return (
    <div
      className={`relative w-full overflow-hidden py-5 select-none marquee-mask ${className}`}
      aria-label="Technologies and tools marquee"
    >
      {/* Left & Right Soft Edge Gradient Fade Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent" />

      {/* Seamless Infinite Scrolling Track */}
      <div className="flex w-max items-center gap-6 sm:gap-8 pr-6 sm:pr-8 animate-marquee hover:[animation-play-state:paused]">
        {repeatedItems.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="group flex items-center gap-3 cursor-pointer bg-white/90 border border-slate-200/80 text-slate-700 shadow-sm px-4 py-2 rounded-xl dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-300 transition-all duration-300 hover:scale-105 hover:border-brand-500/40 dark:hover:border-brand-400/40 hover:text-slate-900 dark:hover:text-white hover:shadow-md"
          >
            {tech.icon}
            <span className="text-sm sm:text-base font-bold tracking-tight whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
