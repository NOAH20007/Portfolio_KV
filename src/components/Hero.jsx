import { profileData } from "../data/portfolioData";
import TechMarquee from "./TechMarquee";

export default function Hero({ onOpenCvModal }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-14 sm:py-20 lg:py-28"
    >
      {/* Subtle Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4"></span>
              <span>{profileData.statusText}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-500 dark:from-brand-400 dark:to-indigo-400">
                {profileData.name}
              </span>
            </h1>

            <p className="mt-3 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
              {profileData.role}
            </p>

            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I am a Year 2 Software Engineering student at{" "}
              <strong>{profileData.university}</strong>. I am looking for
              opportunities to use my skills in real projects and keep learning
              new technologies.
            </p>

            {/* Quick Skill Tags */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
              {profileData.quickSkillTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <span>My Experience</span>
                <i className="fa-solid fa-arrow-right text-sm"></i>
              </a>
              <a
                href={profileData.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-semibold bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 shadow-sm hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <i className="fa-regular fa-paper-plane text-brand-500"></i>
                <span>Contact Me</span>
              </a>
              <button
                type="button"
                onClick={onOpenCvModal}
                className="px-5 py-3.5 rounded-xl font-semibold bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 transition-all flex items-center gap-2"
              >
                <i className="fa-solid fa-print text-brand-500"></i>
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Icon Buttons Row */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-1">
                Follow me:
              </span>
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900"
              >
                <i className="fa-brands fa-github text-lg"></i>
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] dark:hover:bg-[#0A66C2] dark:hover:text-white dark:hover:border-[#0A66C2]"
              >
                <i className="fa-brands fa-linkedin-in text-lg"></i>
              </a>
              <a
                href={profileData.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] dark:hover:bg-[#1877F2] dark:hover:text-white dark:hover:border-[#1877F2]"
              >
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Animated 2D Flat Vector Developer Illustration */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[480px] aspect-square flex items-center justify-center group">
              {/* Theme-Adaptive Radial Glow & Circular Backdrop */}
              <div className="absolute inset-2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16)_0%,rgba(99,102,241,0.10)_45%,rgba(255,255,255,0)_75%)] dark:bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.28)_0%,rgba(37,99,235,0.25)_42%,rgba(15,23,42,0)_74%)] blur-2xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-blue-100/80 via-indigo-50 to-cyan-100/70 border border-blue-200/60 shadow-xl shadow-blue-500/10 dark:from-slate-900 dark:via-blue-950/60 dark:to-slate-900 dark:border-slate-800 dark:shadow-[0_0_70px_-10px_rgba(6,182,212,0.35)] pointer-events-none"></div>

              {/* Main 2D Flat Vector Developer SVG Illustration */}
              <svg
                viewBox="45 85 660 550"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 w-full h-full drop-shadow-[0_12px_24px_rgba(59,130,246,0.14)] dark:drop-shadow-[0_16px_28px_rgba(2,6,23,0.45)] select-none"
                role="img"
                aria-label="Animated developer workspace illustration with monitor, code editor, smartphone, floating UI badges, and rotating gears"
              >
                <defs>
                  {/* Reusable 8-Tooth Mechanical Gear Centered at (0,0) */}
                  <path
                    id="dev-gear-shape"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M 74.47 -15.15 L 99.03 -13.92 L 99.03 13.92 L 74.47 15.15 A 76 76 0 0 1 63.38 41.95 L 79.86 60.18 L 60.18 79.86 L 41.95 63.38 A 76 76 0 0 1 15.15 74.47 L 13.92 99.03 L -13.92 99.03 L -15.15 74.47 A 76 76 0 0 1 -41.95 63.38 L -60.18 79.86 L -79.86 60.18 L -63.38 41.95 A 76 76 0 0 1 -74.47 15.15 L -99.03 13.92 L -99.03 -13.92 L -74.47 -15.15 A 76 76 0 0 1 -63.38 -41.95 L -79.86 -60.18 L -60.18 -79.86 L -41.95 -63.38 A 76 76 0 0 1 -15.15 -74.47 L -13.92 -99.03 L 13.92 -99.03 L 15.15 -74.47 A 76 76 0 0 1 41.95 -63.38 L 60.18 -79.86 L 79.86 -60.18 L 63.38 -41.95 A 76 76 0 0 1 74.47 -15.15 Z M -44 0 A 44 44 0 1 0 44 0 A 44 44 0 1 0 -44 0 Z"
                  />

                  {/* Ambient SVG Radial Glow */}
                  <radialGradient
                    id="heroBackdropGlow"
                    cx="50%"
                    cy="50%"
                    r="50%"
                  >
                    <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.28" />
                    <stop offset="52%" stopColor="#3B82F6" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
                  </radialGradient>

                  {/* Background Mechanical Gear Gradients */}
                  <linearGradient
                    id="bgGearGrad"
                    x1="-100"
                    y1="-100"
                    x2="100"
                    y2="100"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.9" />
                    <stop
                      offset="100%"
                      stopColor="#94a3b8"
                      stopOpacity="0.72"
                    />
                  </linearGradient>

                  {/* Monitor Screen Gradient */}
                  <linearGradient
                    id="monitorScreenGrad"
                    x1="176"
                    y1="264"
                    x2="564"
                    y2="472"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#4652F2" />
                    <stop offset="55%" stopColor="#637CF7" />
                    <stop offset="100%" stopColor="#8CA8FF" />
                  </linearGradient>

                  {/* Monitor Chin & Stand Gradients */}
                  <linearGradient
                    id="monitorChinGrad"
                    x1="158"
                    y1="486"
                    x2="582"
                    y2="548"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#CBE4FF" />
                    <stop offset="100%" stopColor="#9BC5F8" />
                  </linearGradient>
                  <linearGradient
                    id="monitorNeckGrad"
                    x1="370"
                    y1="546"
                    x2="370"
                    y2="570"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#8EBEFA" />
                    <stop offset="100%" stopColor="#CCE3FF" />
                  </linearGradient>
                  <linearGradient
                    id="monitorBaseGrad"
                    x1="270"
                    y1="566"
                    x2="470"
                    y2="578"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#7FB2F5" />
                    <stop offset="100%" stopColor="#B8D8FC" />
                  </linearGradient>
                  <linearGradient
                    id="chinLogoGrad"
                    x1="357"
                    y1="504"
                    x2="383"
                    y2="530"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#69A1F4" />
                    <stop offset="100%" stopColor="#8FC0F9" />
                  </linearGradient>

                  {/* Teal / Cyan Card Gradients */}
                  <linearGradient
                    id="tealCardGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#63E6FC" />
                    <stop offset="55%" stopColor="#35D7D4" />
                    <stop offset="100%" stopColor="#1DD3B0" />
                  </linearGradient>

                  <linearGradient
                    id="tealCardTranslucentGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6AE8FD" stopOpacity="0.92" />
                    <stop
                      offset="100%"
                      stopColor="#1ED4B5"
                      stopOpacity="0.92"
                    />
                  </linearGradient>

                  {/* Smartphone Screen Gradient */}
                  <linearGradient
                    id="phoneScreenGrad"
                    x1="500"
                    y1="420"
                    x2="618"
                    y2="586"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#4F52F0" />
                    <stop offset="60%" stopColor="#637BF7" />
                    <stop offset="100%" stopColor="#7DA0FF" />
                  </linearGradient>

                  {/* Soft Drop Shadow Filter for Floating Cards & Editor */}
                  <filter
                    id="cardDropShadow"
                    x="-20%"
                    y="-20%"
                    width="145%"
                    height="145%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="10"
                      stdDeviation="11"
                      floodColor="#091E42"
                      floodOpacity="0.38"
                    />
                  </filter>
                  <filter
                    id="softGlowShadow"
                    x="-25%"
                    y="-25%"
                    width="150%"
                    height="150%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="8"
                      stdDeviation="9"
                      floodColor="#06B6D4"
                      floodOpacity="0.28"
                    />
                  </filter>
                </defs>

                {/* Subtle Inner SVG Radial Glow */}
                <circle
                  cx="375"
                  cy="365"
                  r="265"
                  fill="url(#heroBackdropGlow)"
                />

                {/* Floor Shadows Under Monitor & Smartphone */}
                <ellipse
                  cx="370"
                  cy="579"
                  rx="228"
                  ry="18"
                  fill="#94A3B8"
                  fillOpacity="0.22"
                />
                <ellipse
                  cx="559"
                  cy="606"
                  rx="92"
                  ry="12"
                  fill="#94A3B8"
                  fillOpacity="0.26"
                />

                {/* Decorative Horizontal Code-Stream Bars on Left Backdrop */}
                <g fill="#CBD5E1" fillOpacity="0.35">
                  <rect x="68" y="177" width="304" height="9" rx="4.5" />
                  <rect x="68" y="204" width="304" height="9" rx="4.5" />
                  <rect x="68" y="231" width="180" height="9" rx="4.5" />
                  <rect x="68" y="258" width="160" height="9" rx="4.5" />
                  <rect x="68" y="285" width="150" height="9" rx="4.5" />
                  <rect x="68" y="312" width="140" height="9" rx="4.5" />
                  <rect x="68" y="339" width="140" height="9" rx="4.5" />
                  <rect x="68" y="366" width="140" height="9" rx="4.5" />
                  <rect x="68" y="393" width="140" height="9" rx="4.5" />
                </g>

                {/* =========================================================
                    THREE ROTATING BACKGROUND MECHANICAL GEARS
                   ========================================================= */}
                {/* Gear 1: Large Top-Right Gear behind Monitor & Cloud Card */}
                <g
                  transform="translate(505, 225) scale(1.16)"
                  className="text-slate-300 dark:text-slate-300/80"
                >
                  <g className="animate-gear-cw">
                    <use href="#dev-gear-shape" fill="currentColor" />
                  </g>
                </g>

                {/* Gear 2: Medium-Large Bottom-Left Gear behind Monitor */}
                <g
                  transform="translate(168, 482) scale(0.86)"
                  className="text-slate-300 dark:text-slate-300/80"
                >
                  <g className="animate-gear-ccw">
                    <use href="#dev-gear-shape" fill="currentColor" />
                  </g>
                </g>

                {/* Gear 3: Smaller Middle-Right Gear behind Cloud Card */}
                <g
                  transform="translate(638, 330) scale(0.53)"
                  className="text-slate-300 dark:text-slate-300/80"
                >
                  <g className="animate-gear-cw-slow">
                    <use href="#dev-gear-shape" fill="currentColor" />
                  </g>
                </g>

                {/* =========================================================
                    CENTRAL DESKTOP COMPUTER MONITOR
                   ========================================================= */}
                <g id="desktop-monitor">
                  {/* Monitor Stand Neck */}
                  <path
                    d="M 316 546 L 424 546 L 434 568 L 306 568 Z"
                    fill="url(#monitorNeckGrad)"
                  />
                  {/* Monitor Stand Base */}
                  <path
                    d="M 278 566 H 462 A 10 10 0 0 1 472 576 V 578 H 268 V 576 A 10 10 0 0 1 278 566 Z"
                    fill="url(#monitorBaseGrad)"
                  />

                  {/* Monitor Outer Dark Navy Frame (Top & Sides) */}
                  <rect
                    x="158"
                    y="246"
                    width="424"
                    height="302"
                    rx="20"
                    fill="#33396C"
                  />

                  {/* Monitor Active Screen Area */}
                  <rect
                    x="176"
                    y="264"
                    width="388"
                    height="200"
                    rx="4"
                    fill="url(#monitorScreenGrad)"
                  />

                  {/* Subtle UI Elements Inside Monitor Wallpaper */}
                  <g fill="#3E54E8" opacity="0.85">
                    {/* Three square widgets on bottom-right of monitor screen */}
                    <rect x="372" y="410" width="32" height="32" rx="3" />
                    <rect x="416" y="410" width="32" height="32" rx="3" />
                    <rect x="460" y="410" width="32" height="32" rx="3" />
                    {/* Three horizontal lines on middle-right of monitor screen */}
                    <rect x="502" y="334" width="46" height="4.5" rx="2.25" />
                    <rect x="502" y="346" width="46" height="4.5" rx="2.25" />
                    <rect x="502" y="358" width="46" height="4.5" rx="2.25" />
                  </g>

                  {/* Monitor Lower Chin (Light Sky-Blue) */}
                  <path
                    d="M 158 486 H 582 V 528 A 20 20 0 0 1 562 548 H 178 A 20 20 0 0 1 158 528 V 486 Z"
                    fill="url(#monitorChinGrad)"
                  />

                  {/* Monitor Center Chin Button / Emblem */}
                  <circle cx="370" cy="517" r="13" fill="url(#chinLogoGrad)" />
                </g>

                {/* =========================================================
                    CENTRAL CODE EDITOR WINDOW (OVER MONITOR)
                   ========================================================= */}
                <g filter="url(#cardDropShadow)" className="animate-float">
                  {/* Glowing Cyan/Teal Outer Frame */}
                  <rect
                    x="226"
                    y="224"
                    width="260"
                    height="172"
                    rx="13"
                    fill="url(#tealCardGrad)"
                  />
                  {/* Dark Navy Code Canvas */}
                  <rect
                    x="239"
                    y="238"
                    width="234"
                    height="142"
                    rx="3"
                    fill="#313568"
                  />

                  {/* Colorful Syntax Lines inside Code Editor */}
                  {/* Section 1 Header (Gold/Amber) */}
                  <rect
                    x="265"
                    y="256"
                    width="24"
                    height="4.5"
                    rx="2.25"
                    fill="#FFC72C"
                  />
                  <rect
                    x="297"
                    y="256"
                    width="50"
                    height="4.5"
                    rx="2.25"
                    fill="#FFC72C"
                  />

                  {/* Indented Code Lines (White + Cyan-Blue) */}
                  <rect
                    x="275"
                    y="270"
                    width="25"
                    height="4.5"
                    rx="2.25"
                    fill="#FFFFFF"
                  />
                  <rect
                    x="307"
                    y="270"
                    width="142"
                    height="4.5"
                    rx="2.25"
                    fill="#1898FF"
                  />

                  <rect
                    x="275"
                    y="282"
                    width="25"
                    height="4.5"
                    rx="2.25"
                    fill="#FFFFFF"
                  />
                  <rect
                    x="307"
                    y="282"
                    width="142"
                    height="4.5"
                    rx="2.25"
                    fill="#1898FF"
                  />

                  <rect
                    x="275"
                    y="294"
                    width="25"
                    height="4.5"
                    rx="2.25"
                    fill="#FFFFFF"
                  />
                  <rect
                    x="307"
                    y="294"
                    width="142"
                    height="4.5"
                    rx="2.25"
                    fill="#1898FF"
                  />

                  <rect
                    x="275"
                    y="306"
                    width="25"
                    height="4.5"
                    rx="2.25"
                    fill="#FFFFFF"
                  />
                  <rect
                    x="307"
                    y="306"
                    width="142"
                    height="4.5"
                    rx="2.25"
                    fill="#1898FF"
                  />

                  {/* Section 2 Header (Gold/Amber) */}
                  <rect
                    x="265"
                    y="320"
                    width="24"
                    height="4.5"
                    rx="2.25"
                    fill="#FFC72C"
                  />
                  <rect
                    x="297"
                    y="320"
                    width="50"
                    height="4.5"
                    rx="2.25"
                    fill="#FFC72C"
                  />

                  {/* Bottom Code Rows (Blue + Dual White Columns) */}
                  <rect
                    x="307"
                    y="334"
                    width="92"
                    height="4.5"
                    rx="2.25"
                    fill="#FFFFFF"
                  />
                  <rect
                    x="405"
                    y="334"
                    width="44"
                    height="4.5"
                    rx="2.25"
                    fill="#FFFFFF"
                  />

                  <rect
                    x="291"
                    y="346"
                    width="9"
                    height="4.5"
                    rx="2.25"
                    fill="#1898FF"
                  />
                  <rect
                    x="307"
                    y="346"
                    width="92"
                    height="4.5"
                    rx="2.25"
                    fill="#FFFFFF"
                  />
                  <rect
                    x="405"
                    y="346"
                    width="44"
                    height="4.5"
                    rx="2.25"
                    fill="#FFFFFF"
                  />

                  <rect
                    x="275"
                    y="358"
                    width="25"
                    height="4.5"
                    rx="2.25"
                    fill="#1898FF"
                  />
                  <rect
                    x="307"
                    y="358"
                    width="92"
                    height="4.5"
                    rx="2.25"
                    fill="#FFFFFF"
                  />
                  <rect
                    x="405"
                    y="358"
                    width="44"
                    height="4.5"
                    rx="2.25"
                    fill="#FFFFFF"
                  />
                </g>

                {/* =========================================================
                    FLOATING UI CARDS AROUND THE MONITOR
                   ========================================================= */}

                {/* 1. Top-Left Small Code Snippet Card */}
                <g
                  className="animate-float-card-1"
                  filter="url(#cardDropShadow)"
                >
                  <rect
                    x="96"
                    y="166"
                    width="102"
                    height="102"
                    rx="14"
                    fill="url(#tealCardGrad)"
                  />
                  <rect
                    x="108"
                    y="178"
                    width="78"
                    height="78"
                    rx="3"
                    fill="#313568"
                  />
                  {/* Mini syntax lines */}
                  <rect
                    x="121"
                    y="193"
                    width="9"
                    height="4"
                    rx="2"
                    fill="#FFFFFF"
                  />
                  <rect
                    x="134"
                    y="193"
                    width="38"
                    height="4"
                    rx="2"
                    fill="#1898FF"
                  />

                  <rect
                    x="121"
                    y="204"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#FFFFFF"
                  />
                  <rect
                    x="137"
                    y="204"
                    width="39"
                    height="4"
                    rx="2"
                    fill="#1898FF"
                  />

                  <rect
                    x="115"
                    y="215"
                    width="9"
                    height="4"
                    rx="2"
                    fill="#FFFFFF"
                  />
                  <rect
                    x="128"
                    y="215"
                    width="4"
                    height="4"
                    rx="2"
                    fill="#FFFFFF"
                  />
                  <rect
                    x="136"
                    y="215"
                    width="44"
                    height="4"
                    rx="2"
                    fill="#1898FF"
                  />

                  <rect
                    x="121"
                    y="226"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#FFFFFF"
                  />
                  <rect
                    x="137"
                    y="226"
                    width="32"
                    height="4"
                    rx="2"
                    fill="#1898FF"
                  />

                  <rect
                    x="121"
                    y="237"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#FFFFFF"
                  />
                  <rect
                    x="137"
                    y="237"
                    width="36"
                    height="4"
                    rx="2"
                    fill="#1898FF"
                  />
                </g>

                {/* 2. Middle-Left Settings Gear Icon Badge */}
                <g
                  className="animate-float-card-2"
                  filter="url(#cardDropShadow)"
                >
                  <rect
                    x="96"
                    y="292"
                    width="102"
                    height="102"
                    rx="14"
                    fill="url(#tealCardTranslucentGrad)"
                    stroke="#A5F3FC"
                    strokeOpacity="0.45"
                    strokeWidth="1.5"
                  />
                  <g transform="translate(147, 343) scale(0.31)">
                    <use href="#dev-gear-shape" fill="#FFFFFF" />
                  </g>
                </g>

                {/* 3. Bottom-Left < /> Code Brackets Badge */}
                <g
                  className="animate-float-card-3"
                  filter="url(#cardDropShadow)"
                >
                  <rect
                    x="187"
                    y="416"
                    width="128"
                    height="86"
                    rx="13"
                    fill="url(#tealCardTranslucentGrad)"
                    stroke="#A5F3FC"
                    strokeOpacity="0.4"
                    strokeWidth="1.5"
                  />
                  {/* Left Angle Bracket < */}
                  <path
                    d="M 232 444 L 213 460 L 232 476"
                    stroke="#FFFFFF"
                    strokeWidth="7.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Forward Slash / */}
                  <path
                    d="M 257 436 L 245 484"
                    stroke="#FFFFFF"
                    strokeWidth="7.5"
                    strokeLinecap="round"
                  />
                  {/* Right Angle Bracket > */}
                  <path
                    d="M 270 444 L 289 460 L 270 476"
                    stroke="#FFFFFF"
                    strokeWidth="7.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                {/* 4. Top-Right Teal Cloud-Download Icon Card */}
                <g
                  className="animate-float-card-4"
                  filter="url(#cardDropShadow)"
                >
                  <rect
                    x="514"
                    y="172"
                    width="142"
                    height="142"
                    rx="16"
                    fill="url(#tealCardTranslucentGrad)"
                    stroke="#A5F3FC"
                    strokeOpacity="0.45"
                    strokeWidth="1.5"
                  />
                  {/* White Cloud Shape */}
                  <path
                    d="M 532 238 C 532 224 543 216 555 217 C 561 202 577 194 593 197 C 607 199 617 209 620 221 C 631 221 640 228 640 238 H 532 Z"
                    fill="#FFFFFF"
                  />
                  {/* White Downward Download Arrow */}
                  <path
                    d="M 581 247 H 591 V 269 H 603 L 586 287 L 569 269 H 581 V 247 Z"
                    fill="#FFFFFF"
                  />
                </g>

                {/* =========================================================
                    SMARTPHONE IN BOTTOM-RIGHT FOREGROUND
                   ========================================================= */}
                <g id="foreground-smartphone" filter="url(#cardDropShadow)">
                  {/* Phone Body (Dark Navy Bezel) */}
                  <rect
                    x="500"
                    y="400"
                    width="118"
                    height="204"
                    rx="14"
                    fill="#373D73"
                  />
                  {/* Top Earpiece Speaker Slot */}
                  <rect
                    x="542"
                    y="411"
                    width="34"
                    height="4.5"
                    rx="2.25"
                    fill="#4E5696"
                  />
                  {/* Smartphone Display Screen */}
                  <rect
                    x="500"
                    y="420"
                    width="118"
                    height="166"
                    fill="url(#phoneScreenGrad)"
                  />

                  {/* Teal Checkmark Badge on Smartphone Screen */}
                  <g filter="url(#softGlowShadow)">
                    <rect
                      x="516"
                      y="462"
                      width="86"
                      height="86"
                      rx="14"
                      fill="url(#tealCardGrad)"
                    />
                    <circle
                      cx="559"
                      cy="505"
                      r="29"
                      stroke="#FFFFFF"
                      strokeWidth="6.5"
                    />
                    <path
                      d="M 548 505 L 556 513 L 571 497"
                      stroke="#FFFFFF"
                      strokeWidth="6.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Hero Tech Stack Marquee */}
        <div className="mt-12 pt-6 border-t border-slate-200/60 dark:border-slate-800/70">
          <TechMarquee />
        </div>
      </div>
    </section>
  );
}
