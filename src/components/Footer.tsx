import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import logoMaule from "@/assets/logo-maule.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={logoMaule} 
              alt="Metodologia Maule - Formação Técnica em Drones" 
              className="h-14 w-auto"
            />
            <p className="text-steel">
              O instrutor que forma pilotos de drone de verdade.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#cursos" className="text-steel hover:text-foreground transition-colors">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#metodologia" className="text-steel hover:text-foreground transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="text-steel hover:text-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-foreground">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-industrial border border-border flex items-center justify-center hover:bg-foreground hover:border-foreground hover:scale-110 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground group-hover:text-graphite" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-industrial border border-border flex items-center justify-center hover:bg-foreground hover:border-foreground hover:scale-110 transition-all duration-300 group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-foreground group-hover:text-graphite" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-industrial border border-border flex items-center justify-center hover:bg-foreground hover:border-foreground hover:scale-110 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-graphite" />
              </a>
              <a 
                href="mailto:contato@maule.com.br" 
                className="w-10 h-10 rounded-full bg-industrial border border-border flex items-center justify-center hover:bg-foreground hover:border-foreground hover:scale-110 transition-all duration-300 group"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5 text-foreground group-hover:text-graphite" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-steel">
          <p>© {currentYear} Maule. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
