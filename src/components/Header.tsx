import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Início", action: () => scrollToSection("inicio") },
    { label: "Metodologia Maule", action: () => scrollToSection("metodologia") },
    { label: "Currículo", action: () => scrollToSection("curriculo") },
    { label: "Cursos", action: () => scrollToSection("cursos") },
    { label: "Contato", action: () => scrollToSection("contato") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-graphite/80 backdrop-blur-lg border-b border-border/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-heading font-black tracking-wider text-primary hover:text-accent transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            MAULE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button 
              variant="cta" 
              size="sm"
              onClick={() => scrollToSection("contato")}
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 space-y-4 border-t border-border/20 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <Button 
              variant="cta" 
              className="w-full"
              onClick={() => {
                scrollToSection("contato");
                setIsMobileMenuOpen(false);
              }}
            >
              Fale Conosco
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
