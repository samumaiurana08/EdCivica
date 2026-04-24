import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useReveal } from "@/hooks/useReveal";

const Layout = () => {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Bolle di colore di sfondo per esaltare l'effetto liquid glass */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-50"
             style={{ background: "hsl(130 70% 55%)" }} />
        <div className="absolute top-1/3 -right-40 w-[460px] h-[460px] rounded-full blur-3xl opacity-40"
             style={{ background: "hsl(80 80% 60%)" }} />
        <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] rounded-full blur-3xl opacity-35"
             style={{ background: "hsl(160 65% 50%)" }} />
      </div>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
