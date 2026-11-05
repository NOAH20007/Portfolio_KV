import { useState } from "react";
import { profileData } from "../data/portfolioData";

const TELEGRAM_BOT_TOKEN =
  import.meta.env.VITE_TELEGRAM_BOT_TOKEN ||
  "9257663207:AAFEnZ22PYM1vKZfsFQ2PmeRBUL8pUjQiA4";

// Reminder: Fill in your numerical CHAT_ID in your .env file (VITE_TELEGRAM_CHAT_ID)
// or as the fallback string below. You can get your numerical ID by sending a message to @userinfobot in Telegram.
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || "";

export default function Contact({ onCopyText, onShowToast, onOpenCvModal }) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!TELEGRAM_CHAT_ID || TELEGRAM_CHAT_ID.trim() === "") {
      setStatus({
        type: "error",
        message:
          "Telegram CHAT_ID is missing. Please add VITE_TELEGRAM_CHAT_ID to your .env file (send a message to @userinfobot in Telegram to get your numerical ID).",
      });
      return;
    }

    const escapeMarkdown = (str) => str.replace(/([_*`\[])/g, "\\$1");

    const name = escapeMarkdown(formData.name.trim());
    const contact = escapeMarkdown(formData.contact.trim());
    const subject = escapeMarkdown(formData.subject.trim());
    const message = escapeMarkdown(formData.message.trim());

    const text = `📩 *New Portfolio Contact Message*
━━━━━━━━━━━━━━━━━━━━
👤 *From:* ${name}
📞 *Contact:* ${contact}
📌 *Subject:* ${subject}
💬 *Message:*
${message}
━━━━━━━━━━━━━━━━━━━━`;

    setIsSending(true);

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID.trim(),
            text,
            parse_mode: "Markdown",
          }),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(
          data.description || "Failed to send message via Telegram Bot API.",
        );
      }

      setStatus({
        type: "success",
        message: "Message sent to Telegram successfully!",
      });
      if (onShowToast) {
        onShowToast("Message sent to Telegram successfully!");
      }
      setFormData({
        name: "",
        contact: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus((prev) =>
          prev.type === "success" ? { type: "", message: "" } : prev,
        );
      }, 3000);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Network error: Could not send message to Telegram. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-white dark:bg-slate-900/60 border-t border-slate-200/70 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Contact Me
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Feel free to call, message me on Telegram, or send an email. I would
            love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Contact Cards with Copy Buttons & Social Links */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Phone Number
                  </p>
                  <a
                    href={`tel:${profileData.phoneClean}`}
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    {profileData.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  onCopyText(profileData.phoneClean, "Phone number")
                }
                className="px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1.5"
                title="Copy Phone"
              >
                <i className="fa-regular fa-copy"></i>
                <span>Copy</span>
              </button>
            </div>

            {/* Telegram / Phone 2 Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-brands fa-telegram"></i>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Telegram / Phone
                  </p>
                  <a
                    rel="noopener noreferrer"
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-sky-500"
                  >
                    {profileData.telegram}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  onCopyText(profileData.telegramClean, "Telegram number")
                }
                className="px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1.5"
                title="Copy Telegram Number"
              >
                <i className="fa-regular fa-copy"></i>
                <span>Copy</span>
              </button>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="block truncate text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    {profileData.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onCopyText(profileData.email, "Email address")}
                className="px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1.5 flex-shrink-0"
                title="Copy Email"
              >
                <i className="fa-regular fa-copy"></i>
                <span>Copy</span>
              </button>
            </div>

            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Home Address
                  </p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {profileData.fullAddress}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  onCopyText(profileData.fullAddressCopy, "Address")
                }
                className="px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1.5 flex-shrink-0"
                title="Copy Address"
              >
                <i className="fa-regular fa-copy"></i>
                <span>Copy</span>
              </button>
            </div>

            {/* Connect & Follow Me Social Bar Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between gap-3.5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Connect &amp; Follow Me
                </p>
                {/* <span className="text-xs text-slate-400 dark:text-slate-500">
                  @KhornVuthy
                </span> */}
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-slate-900 hover:text-white hover:border-slate-900 dark:hover:bg-white dark:hover:text-slate-900 dark:hover:border-white"
                >
                  <i className="fa-brands fa-github text-lg"></i>
                </a>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] dark:hover:bg-[#0A66C2] dark:hover:text-white dark:hover:border-[#0A66C2]"
                >
                  <i className="fa-brands fa-linkedin-in text-lg"></i>
                </a>
                <a
                  href={profileData.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] dark:hover:bg-[#1877F2] dark:hover:text-white dark:hover:border-[#1877F2]"
                >
                  <i className="fa-brands fa-facebook-f text-lg"></i>
                </a>
                <a
                  href={profileData.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                  className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] dark:hover:bg-[#FF0000] dark:hover:text-white dark:hover:border-[#FF0000]"
                >
                  <i className="fa-brands fa-youtube text-lg"></i>
                </a>
                <a
                  href={profileData.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  title="Telegram"
                  className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-[#26A5E4] hover:text-white hover:border-[#26A5E4] dark:hover:bg-[#26A5E4] dark:hover:text-white dark:hover:border-[#26A5E4]"
                >
                  <i className="fa-brands fa-telegram text-lg"></i>
                </a>
                <a
                  href={profileData.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  title="TikTok"
                  className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white"
                >
                  <i className="fa-brands fa-tiktok text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send Me a Message
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out this quick form to prepare a message for me.
              </p>

              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="sender-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="sender-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. soknary"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sender-contact"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5"
                    >
                      Your Email or Phone
                    </label>
                    <input
                      type="text"
                      id="sender-contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      placeholder="e.g. name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="sender-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="sender-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Internship Opportunity / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sender-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="sender-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hi Vuthy, we would like to invite you for an interview..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  ></textarea>
                </div>

                {status.message && (
                  <div
                    role="alert"
                    className={`px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2.5 border transition-all ${
                      status.type === "success"
                        ? "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300"
                        : "bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-300"
                    }`}
                  >
                    <i
                      className={`fa-solid ${
                        status.type === "success"
                          ? "fa-circle-check text-emerald-600 dark:text-emerald-400"
                          : "fa-circle-exclamation text-red-600 dark:text-red-400"
                      }`}
                    ></i>
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="px-6 py-3.5 rounded-xl font-semibold bg-brand-600 hover:bg-brand-500 disabled:opacity-60 disabled:cursor-not-allowed text-white shadow-md shadow-brand-600/20 transition-all flex items-center gap-2"
                  >
                    {isSending ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <i className="fa-regular fa-paper-plane"></i>
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                  <a
                    href="https://pay.ababank.com/oRF8/423p9aa6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-xl font-semibold bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-2 text-sm"
                  >
                    <i className="fa-solid fa-mug-hot text-brand-500"></i>
                    <span>KHQR</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
