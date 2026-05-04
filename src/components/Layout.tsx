import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlassFilter from "./GlassFilter";
import { useReveal } from "@/hooks/useReveal";
import SceneBackground from "./three/SceneBackground";
import PageTransition from "./PageTransition";

const Layout = () => {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <GlassFilter />
      {/* Scena 3D di sfondo, condivisa tra tutte le pagine */}
      <SceneBackground />
      <Navbar />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
