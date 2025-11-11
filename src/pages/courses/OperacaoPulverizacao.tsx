import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { coursesData } from "@/data/coursesData";
import { Award, Calendar, CheckCircle2, Clock, Target, Users } from "lucide-react";

const OperacaoPulverizacao = () => {
  const course = coursesData.find(c => c.slug === "operacao-pulverizacao")!;

  const scrollToContact = () => {
    window.location.href = "/#contato";
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-graphite via-secondary to-graphite relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-drone.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block text-sm font-semibold text-accent border border-accent px-4 py-2 rounded-full">
              {course.level}
            </span>
            <h1 className="text-foreground">{course.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {course.shortDescription}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-accent" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Users className="w-5 h-5 text-accent" />
                <span>{course.format}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Award className="w-5 h-5 text-accent" />
                <span>Certificado Incluso</span>
              </div>
            </div>
            <div className="pt-6">
              <Button variant="cta" size="xl" onClick={scrollToContact}>
                Inscreva-se Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-foreground mb-6">Sobre o Curso</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {course.fullDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-foreground mb-8 flex items-center gap-2">
              <Target className="w-8 h-8 text-accent" />
              Para Quem É Este Curso
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {course.targetAudience.map((audience, index) => (
                <Card key={index} className="bg-gradient-to-br from-graphite to-secondary border-border">
                  <CardContent className="p-6 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground">{audience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-foreground mb-8">Conteúdo Programático</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {course.modules.map((module, index) => (
                <AccordionItem key={index} value={`module-${index}`} className="border border-border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 bg-secondary hover:bg-secondary/80 text-foreground font-semibold">
                    {module.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-graphite">
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-graphite to-secondary border-accent/30">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Award className="w-6 h-6 text-accent" />
                  O Que Você Vai Aprender
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {course.skills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-graphite to-secondary border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-accent" />
                  Pré-requisitos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {course.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-foreground mb-8 text-center">Diferenciais da Metodologia Maule</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {course.differentials.map((differential, index) => (
                <Card key={index} className="bg-gradient-to-br from-primary/10 to-accent/10 border-accent/30 glow-effect">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-foreground font-medium">{differential}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Award className="w-16 h-16 text-accent mx-auto" />
            <h3 className="text-foreground">Certificação</h3>
            <p className="text-lg text-muted-foreground">{course.certification}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-foreground">Pronto Para Dominar a Pulverização?</h2>
            <p className="text-xl text-muted-foreground">
              Entre em contato e garanta sua vaga na próxima turma.
            </p>
            <Button variant="cta" size="xl" onClick={scrollToContact}>
              Fale com um Especialista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OperacaoPulverizacao;
