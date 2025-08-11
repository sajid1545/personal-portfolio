// src/components/Modal.jsx
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const SIZE_CLASS = {
  sm: "max-w-2xl",
  md: "max-w-3xl",
  lg: "max-w-4xl",
  xl: "max-w-5xl",
};

export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle, // <-- NEW
  children,
  size = "md",
  contentClassName = "",
}) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
        >
          <motion.button
            type="button"
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label="Close dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className={`relative w-full ${SIZE_CLASS[size]} rounded-2xl
                        border border-white/10 bg-[#0b121bd9]/90 backdrop-blur-2xl
                        shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] ring-1 ring-white/5
                        overflow-hidden ${contentClassName}`}
            initial={{ y: 22, scale: 0.985, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 16, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-6 top-0 h-px rounded-full
                         bg-gradient-to-r from-brand-400 via-fuchsia-400 to-cyan-400 opacity-70"
              style={{
                mask: "linear-gradient(90deg,transparent,black 8%,black 92%,transparent)",
                WebkitMask:
                  "linear-gradient(90deg,transparent,black 8%,black 92%,transparent)",
              }}
            />

            {/* Header with optional subtitle */}
            <div className="flex items-start justify-between gap-4 px-4 sm:px-5 pt-4 sm:pt-5 pb-3 border-b border-white/10">
              <div className="min-w-0">
                <h3
                  id="modal-title"
                  className="font-display text-base sm:text-lg md:text-xl truncate"
                >
                  {title}
                </h3>
                {subtitle && (
                  <p className="mt-0.5 text-xs sm:text-[13px] text-white/60">
                    {subtitle}
                  </p>
                )}
              </div>
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 border border-white/10 hover:bg-white/15"
                onClick={onClose}
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            <div
              className="px-4 sm:px-6 py-4 max-h[70vh] sm:max-h-[75vh] overflow-y-auto
                            scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
