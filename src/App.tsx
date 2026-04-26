import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index.tsx";
import Agenda2030 from "./pages/Agenda2030.tsx";
import GreenComputing from "./pages/GreenComputing.tsx";
import Aziende from "./pages/Aziende.tsx";
import Sport from "./pages/Sport.tsx";
import Fotovoltaico from "./pages/Fotovoltaico.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/agenda-2030" element={<Agenda2030 />} />
            <Route path="/green-computing" element={<GreenComputing />} />
            <Route path="/aziende" element={<Aziende />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/fotovoltaico" element={<Fotovoltaico />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
