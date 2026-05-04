import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Props {
  children: ReactNode;
}

/**
 * Transizione di pagina stile flip 3D (cubo).
 * Su mobile usa un fade leggero per performance e leggibilità.
 */
const PageTransition = ({ children }: Props) => {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  const variants = isMobile
    ? {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
      }
    : {
        initial: { opacity: 0, rotateY: 35, scale: 0.95, transformPerspective: 1400 },
        animate: { opacity: 1, rotateY: 0, scale: 1, transformPerspective: 1400 },
        exit: { opacity: 0, rotateY: -35, scale: 0.95, transformPerspective: 1400 },
      };

  return (
    <div style={{ perspective: 1400, transformStyle: "preserve-3d" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={{
            duration: isMobile ? 0.3 : 0.45,
            ease: [0.65, 0, 0.35, 1],
          }}
          style={{ transformOrigin: "center center", willChange: "transform, opacity" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;