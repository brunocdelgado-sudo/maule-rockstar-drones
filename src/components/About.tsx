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
    icon: Award,
    value: "10+",
    label: "Anos de Experiência",
  },
  {
    icon: Target,
    value: "100%",
    label: "Foco em Resultados",
  },
];

export const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-primary">Metodologia Maule</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Augusto Maule é reconhecido como um dos maiores especialistas em operação de drones do Brasil. 
              Ex-instrutor estrela da maior escola de drones do país, agora ensina sua metodologia única que 
              forma pilotos de verdade.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 glow-effect"
              >
                <stat.icon className="w-10 h-10 text-accent" />
                <div className="text-4xl font-black text-primary font-heading">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-secondary to-graphite p-8 rounded-2xl border border-primary/20">
            <blockquote className="text-xl italic text-foreground">
              "Eu sou o cara que arriscou tudo para mudar de carreira. Agora ensino outros a fazerem o mesmo 
              com a confiança e habilidade necessárias para se tornarem pilotos profissionais de drone."
            </blockquote>
            <p className="mt-4 text-accent font-semibold">— Augusto Maule</p>
          </div>
        </div>
      </div>
    </section>
  );
};