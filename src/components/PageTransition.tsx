import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

/**
 * Transizione di pagina: flip 3D leggero su desktop, fade su mobile.
 * Usa una rilevazione mobile sincrona per evitare flash di contenuto ruotato.
 */
const getIsMobile = () =>
  typeof window !== "undefined" && window.innerWidth < 768;

const PageTransition = ({ children }: Props) => {
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile);

  useEffect(() => {
    const onResize = () => setIsMobile(getIsMobile());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const variants = isMobile
    ? {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -4 },
      }
    : {
        initial: { opacity: 0, rotateY: 20, scale: 0.97 },
        animate: { opacity: 1, rotateY: 0, scale: 1 },
        exit: { opacity: 0, rotateY: -20, scale: 0.97 },
      };

  return (
    <div style={{ perspective: isMobile ? undefined : 1400 }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={{
            duration: isMobile ? 0.25 : 0.4,
            ease: [0.65, 0, 0.35, 1],
          }}
          onAnimationComplete={() => {
            // Garantisce che il contenuto resti visibile anche se l'animazione viene interrotta
            window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
          }}
          style={{
            transformOrigin: "center center",
            willChange: "transform, opacity",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;