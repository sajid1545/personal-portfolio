import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** Smooth height animation without auto flicker */
export default function Collapsible({ isOpen, children, duration = 0.35 }) {
  const ref = useRef(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    // Measure once and whenever content size changes
    const el = ref.current;
    const ro = new ResizeObserver(() => setH(el.scrollHeight));
    ro.observe(el);
    setH(el.scrollHeight);
    return () => ro.disconnect();
  }, [children]);

  return (
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? h : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
      style={{ overflow: "hidden", willChange: "height, opacity" }}
    >
      <div
        ref={ref}
        aria-hidden={!isOpen}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
