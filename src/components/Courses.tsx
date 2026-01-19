import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Plane, 
  Sprout, 
  Shield, 
  Map, 
  Zap,
  Building,
  Ruler,
  ThermometerSun,
  Target
} from "lucide-react";

const courses = [
  {
    icon: Plane,
    title: "Operações Intermediário",
    description: "Domine os fundamentos da operação de drones com segurança e precisão.",
    level: "Intermediário",
    slug: "operacoes-intermediario",
  },
  {
    icon: Target,
    title: "Operações Profissional",
    description: "Torne-se um piloto profissional certificado e pronto para o mercado.",
    level: "Avançado",
    slug: "operacoes-profissional",
  },
  {
    icon: Sprout,
    title: "Mapeamento Agrícola",
    description: "Especialização em agricultura de precisão e análise de plantações.",
    level: "Especialização",
    slug: "mapeamento-agricola",
  },
  {
    icon: Zap,
    title: "Operação de Pulverização",
    description: "Técnicas avançadas de pulverização aérea para agronegócio.",
    level: "Especialização",
    slug: "operacao-pulverizacao",
  },
  {
    icon: ThermometerSun,
    title: "Inspeção Termográfica",
    description: "Utilize câmeras térmicas para inspeções técnicas especializadas.",
    level: "Especialização",
    slug: "inspecao-termografica",
  },
  {
    icon: Building,
    title: "Inspeção Estrutural",
    description: "Inspeção de edificações, torres e infraestruturas com precisão.",
    level: "Especialização",
    slug: "inspecao-estrutural",
  },
  {
    icon: Ruler,
    title: "Mapeamento Topográfico",
    description: "Gere mapas e modelos 3D precisos para engenharia e construção.",
    level: "Especialização",
    slug: "mapeamento-topografico",
  },
  {
    icon: Shield,
    title: "Segurança com Drones",
    description: "Operações de vigilância e monitoramento de segurança.",
    level: "Especialização",
    slug: "seguranca-drones",
  },
];

export const Courses = () => {
  return (
    <section id="cursos" className="py-24 bg-graphite">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-foreground">Cursos & Especializações</h2>
            <p className="text-xl text-steel max-w-3xl mx-auto">
              Escolha sua especialização e domine as técnicas mais avançadas de operação de drones 
              em diferentes áreas profissionais.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={index}
                className="bg-industrial border-border hover:border-accent transition-all duration-300 glow-effect group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <course.icon className="w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs font-semibold text-accent border border-accent px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <CardTitle className="text-foreground group-hover:text-accent transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-steel mb-4">
                    {course.description}
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
