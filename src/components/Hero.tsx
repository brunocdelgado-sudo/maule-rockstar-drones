import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-drone.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Gradient Overlay - Industrial Dark */}
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-foreground animate-fade-in">
            FORMAÇÃO TÉCNICA EM DRONES
          </h1>
          
          <div className="space-y-4">
            <p className="text-2xl md:text-4xl font-heading font-semibold text-accent">
              Metodologia Maule
            </p>
            <p className="text-lg md:text-xl text-steel max-w-3xl mx-auto">
              O instrutor que forma pilotos de drone de verdade. Metodologia comprovada com centenas de alunos formados em operação profissional, mapeamento, inspeção e segurança.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="cta" size="xl" className="group">
              Inscreva-se na Próxima Turma
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outlineLight" size="xl">
              Conheça os Cursos
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};
