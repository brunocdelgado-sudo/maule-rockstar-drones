import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OperacoesIntermediario from "./pages/courses/OperacoesIntermediario";
import OperacoesProfissional from "./pages/courses/OperacoesProfissional";
import MapeamentoAgricola from "./pages/courses/MapeamentoAgricola";
import OperacaoPulverizacao from "./pages/courses/OperacaoPulverizacao";
import InspecaoTermografica from "./pages/courses/InspecaoTermografica";
import InspecaoEstrutural from "./pages/courses/InspecaoEstrutural";
import MapeamentoTopografico from "./pages/courses/MapeamentoTopografico";
import SegurancaDrones from "./pages/courses/SegurancaDrones";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Set dark mode by default for Maule theme
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cursos/operacoes-intermediario" element={<OperacoesIntermediario />} />
            <Route path="/cursos/operacoes-profissional" element={<OperacoesProfissional />} />
            <Route path="/cursos/mapeamento-agricola" element={<MapeamentoAgricola />} />
            <Route path="/cursos/operacao-pulverizacao" element={<OperacaoPulverizacao />} />
            <Route path="/cursos/inspecao-termografica" element={<InspecaoTermografica />} />
            <Route path="/cursos/inspecao-estrutural" element={<InspecaoEstrutural />} />
            <Route path="/cursos/mapeamento-topografico" element={<MapeamentoTopografico />} />
            <Route path="/cursos/seguranca-drones" element={<SegurancaDrones />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;