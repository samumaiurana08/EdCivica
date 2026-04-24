import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useReveal(selector = ".reveal, .reveal-x") {
  const { pathname } = useLocation();

  useEffect(() => {
    // Riparte ad ogni cambio rotta: porta lo scroll in alto
    // e ri-osserva gli elementi della nuova pagina.
    window.scrollTo({ top: 0, behavior: "auto" });

    // Piccolo delay per assicurarsi che il DOM della nuova pagina sia montato
    const id = window.setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(selector);
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("is-visible");
            else e.target.classList.remove("is-visible");
          });
        },
        { threshold: 0.15 }
      );
      els.forEach((el) => io.observe(el));
      // Salva l'observer per il cleanup
      (window as unknown as { __revealIO?: IntersectionObserver }).__revealIO = io;
    }, 0);

    return () => {
      window.clearTimeout(id);
      const io = (window as unknown as { __revealIO?: IntersectionObserver }).__revealIO;
      io?.disconnect();
    };
  }, [pathname, selector]);
}
