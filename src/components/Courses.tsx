import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { coursesData } from "@/data/coursesData";

export const Courses = () => {
  // Organizar cursos por tier
  const operacaoCourses = coursesData.filter(c => c.tier === 1);
  const coreCourses = coursesData.filter(c => c.tier === 2);
  const especializacoes = coursesData.filter(c => c.tier === 3 && !c.isHidden);
  const mentorias = coursesData.filter(c => c.tier === 4);

  return (
    <section id="cursos" className="py-24 bg-graphite">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-foreground">Formação & Especializações</h2>
            <p className="text-xl text-steel max-w-3xl mx-auto">
              A Metodologia Maule não forma curiosos. Forma profissionais que querem dominar o jogo.
            </p>
          </div>
          
          {/* NÍVEL 1 - OPERAÇÃO */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-foreground bg-industrial px-3 py-1 rounded-full border border-foreground/30">
                NÍVEL 1
              </span>
              <h3 className="text-2xl font-bold text-foreground">Formação Operacional</h3>
            </div>
            <p className="text-steel max-w-2xl">
              A base de tudo. Sem isso, você não avança. Turmas de 4-8 alunos, prática intensiva.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {operacaoCourses.map((course, index) => (
                <Card 
                  key={index}
                  className="bg-industrial border-border hover:border-foreground/50 transition-all duration-300 glow-effect group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <course.icon className="w-12 h-12 text-foreground group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs font-semibold text-foreground border border-foreground/50 px-3 py-1 rounded-full">
                        {course.duration}
                      </span>
                    </div>
                    <CardTitle className="text-foreground">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-steel mb-4">
                      {course.shortDescription}
                    </CardDescription>
                    <Link to={`/cursos/${course.slug}`}>
                      <Button variant="technical" size="sm" className="w-full">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* NÍVEL 2 - MAPEAMENTO */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-foreground bg-industrial px-3 py-1 rounded-full border border-foreground/30">
                NÍVEL 2
              </span>
              <h3 className="text-2xl font-bold text-foreground">Mapeamento</h3>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-1 max-w-2xl">
              {coreCourses.map((course, index) => (
                <Card 
                  key={index}
                  className="bg-industrial border-foreground/30 hover:border-foreground/50 transition-all duration-300 glow-effect group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <course.icon className="w-12 h-12 text-foreground group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs font-semibold text-foreground border border-foreground/50 px-3 py-1 rounded-full">
                        {course.duration}
                      </span>
                    </div>
                    <CardTitle className="text-foreground">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-steel mb-4">
                      {course.shortDescription}
                    </CardDescription>
                    <Link to={`/cursos/${course.slug}`}>
                      <Button variant="technical" size="sm" className="w-full">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* NÍVEL 3 - ESPECIALIZAÇÕES */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-foreground bg-industrial px-3 py-1 rounded-full border border-foreground/30">
                NÍVEL 3
              </span>
              <h3 className="text-2xl font-bold text-foreground">Especializações</h3>
            </div>
            <p className="text-steel max-w-2xl">
              Derivadas da aerofotogrametria. Escolha sua área de atuação e domine.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {especializacoes.map((course, index) => (
                <Card 
                  key={index}
                  className="bg-industrial border-border hover:border-foreground/50 transition-all duration-300 glow-effect group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <course.icon className="w-10 h-10 text-foreground group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs font-semibold text-steel border border-border px-2 py-1 rounded-full">
                        Especialização
                      </span>
                    </div>
                    <CardTitle className="text-foreground text-lg">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-steel mb-4 text-sm">
                      {course.shortDescription}
                    </CardDescription>
                    <Link to={`/cursos/${course.slug}`}>
                      <Button variant="technical" size="sm" className="w-full">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* NÍVEL 4 - MENTORIAS */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/30">
                NÍVEL 4
              </span>
              <h3 className="text-2xl font-bold text-foreground">Mentorias de Alto Valor</h3>
            </div>
            <p className="text-steel max-w-2xl">
              Acompanhamento individual. Para quem quer ir além do curso e construir resultado real.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {mentorias.map((course, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-to-br from-industrial to-graphite border-border hover:border-foreground/50 transition-all duration-300 group"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <course.icon className="w-10 h-10 text-foreground group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs font-semibold text-steel">
                        {course.format}
                      </span>
                    </div>
                    <CardTitle className="text-foreground text-lg">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-steel mb-4 text-sm">
                      {course.shortDescription}
                    </CardDescription>
                    <Link to={`/cursos/${course.slug}`}>
                      <Button variant="technical" size="sm" className="w-full">
                        Conhecer Mentoria
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="text-center pt-8">
            <Button variant="cta" size="xl">
              Fale com um Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
