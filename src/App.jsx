import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';
import ToastContainer from './components/ToastContainer';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Sync dark mode class on <html>
  useEffect(() => {
    const htmlEl = document.documentElement;
    if (isDark) {
      htmlEl.classList.add('dark');
    } else {
      htmlEl.classList.remove('dark');
    }
  }, [isDark]);

  // Sync body overflow when CV modal opens/closes
  useEffect(() => {
    document.body.style.overflow = isCvModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCvModalOpen]);

  // Active Navigation Highlight on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('main section[id]');
      let current = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toast Notification Helper
  const showToast = useCallback((message, icon = 'fa-circle-check') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, icon, exiting: false }]);

    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
      );
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 300);
    }, 3000);
  }, []);

  // Copy to Clipboard Helper
  const copyText = useCallback(
    async (text, label) => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
          showToast(`${label} copied: ${text}`);
          return;
        }
      } catch {
        // Fallback to textarea below
      }

      const tempInput = document.createElement('textarea');
      tempInput.value = text;
      tempInput.style.position = 'fixed';
      tempInput.style.opacity = '0';
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand('copy');
        showToast(`${label} copied: ${text}`);
      } catch {
        showToast(`Could not copy ${label}`, 'fa-circle-info');
      }
      document.body.removeChild(tempInput);
    },
    [showToast]
  );

  return (
    <>
      <ToastContainer toasts={toasts} />

      <Navbar
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        activeSection={activeSection}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      <main className="no-print">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact
          onCopyText={copyText}
          onShowToast={showToast}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />
      </main>

      <Footer />

      <CvModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </>
  );
}
