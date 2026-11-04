export default function ToastContainer({ toasts }) {
  return (
    <div
      id="toast-container"
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          style={{
            opacity: toast.exiting ? 0 : 1,
            transform: toast.exiting ? 'translateY(8px)' : 'translateY(0)',
          }}
          className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl border border-slate-700 dark:border-slate-200 text-sm font-medium transition-all duration-300"
        >
          <i className={`fa-solid ${toast.icon} text-brand-400 dark:text-brand-600`}></i>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
