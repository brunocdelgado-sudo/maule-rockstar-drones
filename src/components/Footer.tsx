import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-graphite border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-accent">MAULE</h3>
            <p className="text-muted-foreground">
              O instrutor que forma pilotos de drone de verdade.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#cursos" className="text-muted-foreground hover:text-accent transition-colors">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-accent transition-colors">
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
                className="w-10 h-10 rounded-full bg-secondary border border-accent flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary border border-accent flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary border border-accent flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="mailto:contato@maule.com.br" 
                className="w-10 h-10 rounded-full bg-secondary border border-accent flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {currentYear} Maule. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};