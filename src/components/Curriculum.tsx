import { Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import augustoMaulePhoto from "@/assets/augusto-maule.jpg";

export const Curriculum = () => {
  return (
    <section id="curriculo" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-foreground">Augusto Maule</h2>
            <p className="text-lg text-steel max-w-3xl mx-auto">
              Aqui você aprende com o melhor instrutor, os melhores equipamentos, e com turmas reduzidas.
            </p>
          </div>

          {/* Biography Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image & Key Points */}
            <div className="space-y-6">
              <div className="aspect-[3/4] rounded-2xl border border-border overflow-hidden">
                <img 
                  src={augustoMaulePhoto} 
                  alt="Augusto Maule - Fundador da Metodologia Maule, instrutor de drones profissional"
                  className="w-full h-full object-cover"
                />
              </div>

              <Card className="bg-industrial border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-foreground mb-1">Missão</h4>
                      <p className="text-sm text-steel">
                        Formar pilotos de drone de verdade, desmistificando as mentiras do mercado e 
                        ensinando com base na experiência real de quem vive o que ensina.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Biography Text */}
            <div className="space-y-6">
              <h3 className="text-foreground">Quem é Augusto Maule</h3>
              
              <div className="space-y-4 text-steel leading-relaxed">
                <p>
                  Augusto Maule começou sua trajetória no mundo dos drones após uma decisão corajosa de 
                  transição de carreira. Com formação técnica sólida e experiência prática em diversas 
                  áreas — agricultura de precisão, segurança, inspeções industriais e mapeamento — 
                  desenvolveu uma visão única sobre o que realmente forma um piloto profissional.
                </p>
                <p>
                  Cansado de ver o mercado repleto de promessas vazias e cursos superficiais, decidiu 
                  criar a Metodologia Maule: uma abordagem que prioriza a prática intensiva, turmas 
                  reduzidas e formação técnica de verdade. Não é sobre papel na parede. É sobre 
                  competência real.
                </p>
                <p>
                  Hoje, Augusto dedica-se exclusivamente à formação de novos pilotos profissionais, 
                  compartilhando todo o conhecimento adquirido em campo. Sua metodologia já formou 
                  centenas de alunos que atuam em todo o Brasil, em áreas como AGRO, segurança, 
                  topografia e inspeções industriais.
                </p>
              </div>

              {/* Specializations */}
              <Card className="bg-industrial border-border">
                <CardContent className="p-6 space-y-3">
                  <h4 className="text-foreground flex items-center gap-2">
                    <Award className="w-5 h-5 text-foreground" />
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
                        className="text-xs bg-industrial text-foreground border border-border px-3 py-1 rounded-full"
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
          <Card className="bg-industrial/50 border-border/50">
            <CardContent className="p-8 md:p-12 text-center">
              <blockquote className="space-y-4">
                <p className="text-xl md:text-2xl text-foreground font-medium italic">
                  "Desmistificar as mentiras que contam para os outros. Eu sou o cara que arriscou 
                  tudo para mudar de carreira e construir a melhor metodologia de ensino de drones do Brasil."
                </p>
                <cite className="text-foreground font-bold not-italic">— Augusto Maule</cite>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
