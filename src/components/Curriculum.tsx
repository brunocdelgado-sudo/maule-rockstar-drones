import { Award, Briefcase, GraduationCap, Target, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    icon: Briefcase,
    number: "10+",
    label: "Anos de Experiência",
  },
  {
    icon: Users,
    number: "500+",
    label: "Alunos Formados",
  },
  {
    icon: Award,
    number: "50+",
    label: "Certificações",
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Taxa de Aprovação",
  },
];

const timeline = [
  {
    year: "2023-2024",
    title: "Fundação da Metodologia Maule",
    description: "Criação da própria metodologia de ensino, focada em formação prática e completa de pilotos profissionais.",
  },
  {
    year: "2018-2023",
    title: "Instrutor Estrela - DroneVisual",
    description: "Instrutor principal da maior escola de drones do Brasil, responsável por formar centenas de pilotos em todo o país.",
  },
  {
    year: "2015-2018",
    title: "Especialização em Múltiplas Áreas",
    description: "Desenvolvimento de expertise em operações agrícolas, inspeções industriais, mapeamento e segurança.",
  },
  {
    year: "2013-2015",
    title: "Início na Aviação com Drones",
    description: "Transição de carreira e primeiras certificações profissionais em operação de aeronaves remotamente pilotadas.",
  },
];

export const Curriculum = () => {
  return (
    <section id="curriculo" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-foreground">Augusto Maule</h2>
            <p className="text-xl text-accent font-semibold">
              O Rockstar dos Drones | Fundador da Metodologia Maule
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              De instrutor estrela da maior escola de drones do Brasil a criador de sua própria metodologia. 
              Augusto Maule é referência nacional em formação de pilotos profissionais.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-graphite to-secondary border-border hover:border-accent transition-all duration-300 glow-effect"
              >
                <CardContent className="p-6 text-center space-y-2">
                  <achievement.icon className="w-10 h-10 text-accent mx-auto" />
                  <div className="text-3xl font-black text-foreground">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Biography Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image Placeholder & Key Points */}
            <div className="space-y-6">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border flex items-center justify-center">
                <div className="text-center space-y-2">
                  <GraduationCap className="w-20 h-20 text-accent mx-auto" />
                  <p className="text-muted-foreground text-sm px-4">Foto profissional do Augusto Maule</p>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-secondary to-graphite border-accent/30">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-foreground mb-1">Missão</h4>
                      <p className="text-sm text-muted-foreground">
                        Formar pilotos de drone de verdade, desmistificando as mentiras do mercado e 
                        ensinando com base na experiência real de quem vive o que ensina.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Timeline */}
            <div className="space-y-6">
              <h3 className="text-foreground">Trajetória Profissional</h3>
              
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l-2 border-accent/30 last:pb-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-secondary" />
                    <div className="space-y-2">
                      <div className="text-accent font-semibold text-sm">{item.year}</div>
                      <h4 className="text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Specializations */}
              <Card className="bg-gradient-to-br from-graphite to-secondary border-border">
                <CardContent className="p-6 space-y-3">
                  <h4 className="text-foreground flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    Áreas de Especialização
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Agricultura de Precisão",
                      "Pulverização Aérea",
                      "Inspeção Industrial",
                      "Termografia",
                      "Topografia",
                      "Mapeamento 3D",
                      "Segurança",
                      "Fotografia Aérea"
                    ].map((spec, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-accent/10 text-accent border border-accent/30 px-3 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quote */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-accent/30">
            <CardContent className="p-8 md:p-12 text-center">
              <blockquote className="space-y-4">
                <p className="text-xl md:text-2xl text-foreground font-medium italic">
                  "Desmistificar as mentiras que contam para os outros. Eu sou o cara que arriscou 
                  tudo para mudar de carreira e construir a melhor metodologia de ensino de drones do Brasil."
                </p>
                <cite className="text-accent font-semibold not-italic">— Augusto Maule</cite>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
