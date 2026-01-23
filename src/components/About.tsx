import { Award, Users, Briefcase, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Alunos Formados",
  },
  {
    icon: Briefcase,
    value: "8+",
    label: "Especializações",
  },
  {
    icon: Target,
    value: "100%",
    label: "Foco em Resultados",
  },
];

export const About = () => {
  return (
    <section id="metodologia" className="py-24 bg-graphite">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-foreground">Metodologia Maule</h2>
            <p className="text-xl text-steel leading-relaxed">
              Seja Bem Vindo a Uma Nova Era Da Sua Vida
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-industrial border border-border hover:border-foreground/50 transition-all duration-300 glow-effect"
              >
                <stat.icon className="w-10 h-10 text-foreground" />
                <div className="text-4xl font-black text-foreground font-heading">
                  {stat.value}
                </div>
                <div className="text-sm text-steel font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-industrial p-8 rounded-2xl border border-border">
            <blockquote className="text-xl italic text-foreground">
              "Eu sou o cara que arriscou tudo para mudar de carreira. Agora ensino outros a fazerem o mesmo 
              com a confiança e habilidade necessárias para se tornarem pilotos profissionais de drone."
            </blockquote>
            <p className="mt-4 text-foreground font-bold">— Augusto Maule</p>
          </div>
        </div>
      </div>
    </section>
  );
};
