import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useReveal(selector = ".reveal, .reveal-x") {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    let io: IntersectionObserver | undefined;
    const timers: number[] = [];

    const observeVisibleContent = () => {
      io?.disconnect();
      const els = document.querySelectorAll<HTMLElement>(selector);
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("is-visible");
            else e.target.classList.remove("is-visible");
          });
        },
        { threshold: 0.15 }
      );

      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-visible");
        }
        io?.observe(el);
      });
    };

    // Con AnimatePresence la nuova pagina arriva dopo l'exit: riosserva anche dopo la transizione.
    [0, 120, 480].forEach((delay) => {
      timers.push(window.setTimeout(observeVisibleContent, delay));
    });

    return () => {
      timers.forEach(window.clearTimeout);
      io?.disconnect();
    };
  }, [pathname, selector]);
}
