import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Phone } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contato" className="py-24 bg-industrial relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-foreground">
            Pronto para Decolar sua Carreira?
          </h2>
          
          <p className="text-xl text-steel">
            Inscreva-se agora e receba informações sobre a próxima turma. 
            Vagas limitadas para garantir aprendizado personalizado.
          </p>
          
          <div className="bg-graphite/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input 
                placeholder="Seu nome completo"
                className="bg-graphite border-border focus:border-foreground h-12"
              />
              <Input 
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-graphite border-border focus:border-foreground h-12"
              />
            </div>
            
            <Input 
              type="tel"
              placeholder="WhatsApp com DDD"
              className="bg-graphite border-border focus:border-foreground h-12"
            />
            
            <Button variant="cta" size="xl" className="w-full group">
              Quero Me Inscrever Agora
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            
            <p className="text-sm text-steel">
              Ao se inscrever, você concorda em receber comunicações sobre nossos cursos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a 
              href="mailto:contato@maule.com.br"
              className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>contato@maule.com.br</span>
            </a>
            <a 
              href="tel:+5511999999999"
              className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(11) 99999-9999</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
