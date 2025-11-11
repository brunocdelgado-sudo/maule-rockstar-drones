import { 
  Plane, 
  Target,
  Sprout, 
  Zap,
  ThermometerSun,
  Building,
  Ruler,
  Shield,
  LucideIcon
} from "lucide-react";

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface CourseData {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  level: string;
  duration: string;
  format: string;
  fullDescription: string;
  targetAudience: string[];
  modules: CourseModule[];
  skills: string[];
  prerequisites: string[];
  certification: string;
  differentials: string[];
}

export const coursesData: CourseData[] = [
  {
    id: "operacoes-intermediario",
    slug: "operacoes-intermediario",
    icon: Plane,
    title: "Operações Intermediário",
    shortDescription: "Domine os fundamentos da operação de drones com segurança e precisão.",
    level: "Intermediário",
    duration: "40 horas",
    format: "Presencial + Prático",
    fullDescription: "Curso completo para quem deseja dominar as operações básicas e intermediárias de drones, com foco em segurança operacional, legislação vigente e técnicas de pilotagem profissional.",
    targetAudience: [
      "Iniciantes que querem entrar no mercado de drones",
      "Profissionais buscando certificação",
      "Entusiastas que querem operar legalmente",
    ],
    modules: [
      {
        title: "Módulo 1 - Fundamentos e Legislação",
        topics: [
          "Regulamentação ANAC e DECEA",
          "Tipos de aeronaves e classificações",
          "Espaço aéreo brasileiro",
          "Documentação e responsabilidades"
        ]
      },
      {
        title: "Módulo 2 - Sistemas e Tecnologia",
        topics: [
          "Componentes do drone",
          "Sistemas de navegação GPS",
          "Baterias e autonomia",
          "Sensores e câmeras"
        ]
      },
      {
        title: "Módulo 3 - Operações Práticas",
        topics: [
          "Pré-voo e checklist",
          "Decolagem e pouso",
          "Manobras básicas e avançadas",
          "Operações em diferentes condições"
        ]
      },
      {
        title: "Módulo 4 - Segurança Operacional",
        topics: [
          "Gerenciamento de riscos",
          "Procedimentos de emergência",
          "Análise de acidentes",
          "Manutenção preventiva"
        ]
      }
    ],
    skills: [
      "Operar drones com segurança",
      "Cumprir regulamentações vigentes",
      "Realizar planejamento de voo",
      "Executar manobras profissionais",
      "Gerenciar riscos operacionais"
    ],
    prerequisites: [
      "Maior de 18 anos",
      "Ensino médio completo",
      "Aptidão física e mental"
    ],
    certification: "Certificado de Operações Intermediário reconhecido pela ANAC",
    differentials: [
      "Aulas práticas intensivas",
      "Instrutores certificados",
      "Equipamentos profissionais",
      "Suporte pós-curso"
    ]
  },
  {
    id: "operacoes-profissional",
    slug: "operacoes-profissional",
    icon: Target,
    title: "Operações Profissional",
    shortDescription: "Torne-se um piloto profissional certificado e pronto para o mercado.",
    level: "Avançado",
    duration: "80 horas",
    format: "Presencial + Prático Intensivo",
    fullDescription: "Formação completa para pilotos profissionais, com certificação ANAC, capacitando para operações comerciais complexas em múltiplas áreas de aplicação.",
    targetAudience: [
      "Pilotos intermediários buscando profissionalização",
      "Profissionais querendo atuar comercialmente",
      "Empresários do setor de drones",
    ],
    modules: [
      {
        title: "Módulo 1 - Operações Avançadas",
        topics: [
          "Planejamento de missões complexas",
          "Operações BVLOS (Beyond Visual Line of Sight)",
          "Voos noturnos e em condições adversas",
          "Múltiplas aeronaves simultâneas"
        ]
      },
      {
        title: "Módulo 2 - Aplicações Comerciais",
        topics: [
          "Fotografia e videografia aérea profissional",
          "Inspeções técnicas",
          "Mapeamento e topografia",
          "Operações agrícolas"
        ]
      },
      {
        title: "Módulo 3 - Gestão e Negócios",
        topics: [
          "Precificação de serviços",
          "Contratos e responsabilidades",
          "Marketing para operadores",
          "Gestão de projetos"
        ]
      },
      {
        title: "Módulo 4 - Certificação ANAC",
        topics: [
          "Preparação para prova teórica",
          "Prova prática ANAC",
          "Documentação e processos",
          "Renovação e manutenção"
        ]
      }
    ],
    skills: [
      "Certificação ANAC completa",
      "Operações comerciais avançadas",
      "Gestão de projetos com drones",
      "Múltiplas aplicações profissionais"
    ],
    prerequisites: [
      "Curso de Operações Intermediário ou experiência equivalente",
      "Maior de 18 anos",
      "Ensino médio completo"
    ],
    certification: "Certificação Profissional ANAC + Certificado Metodologia Maule",
    differentials: [
      "Preparação completa para ANAC",
      "Casos reais de mercado",
      "Networking profissional",
      "Mentoria pós-curso"
    ]
  },
  {
    id: "mapeamento-agricola",
    slug: "mapeamento-agricola",
    icon: Sprout,
    title: "Mapeamento Agrícola",
    shortDescription: "Especialização em agricultura de precisão e análise de plantações.",
    level: "Especialização",
    duration: "60 horas",
    format: "Presencial + Campo",
    fullDescription: "Curso especializado em agricultura de precisão, utilizando drones para mapeamento, análise NDVI, identificação de pragas e otimização de produtividade agrícola.",
    targetAudience: [
      "Agrônomos e técnicos agrícolas",
      "Pilotos querendo atuar no agro",
      "Produtores rurais inovadores",
    ],
    modules: [
      {
        title: "Módulo 1 - Agricultura de Precisão",
        topics: [
          "Conceitos de agricultura 4.0",
          "Índices de vegetação (NDVI, NDRE)",
          "Análise de saúde das plantas",
          "Detecção de pragas e doenças"
        ]
      },
      {
        title: "Módulo 2 - Equipamentos e Sensores",
        topics: [
          "Câmeras multispectrais",
          "Sensores térmicos",
          "GPS RTK para agricultura",
          "Configuração de equipamentos"
        ]
      },
      {
        title: "Módulo 3 - Planejamento e Execução",
        topics: [
          "Planejamento de missões agrícolas",
          "Sobreposição de imagens",
          "Voos automatizados",
          "Coleta de dados em campo"
        ]
      },
      {
        title: "Módulo 4 - Análise e Relatórios",
        topics: [
          "Processamento de imagens",
          "Softwares de análise agrícola",
          "Geração de mapas de prescrição",
          "Relatórios técnicos"
        ]
      }
    ],
    skills: [
      "Mapeamento agrícola profissional",
      "Análise de índices de vegetação",
      "Uso de sensores multispectrais",
      "Geração de mapas de prescrição"
    ],
    prerequisites: [
      "Curso de Operações Intermediário ou equivalente",
      "Conhecimento básico de agronomia (desejável)"
    ],
    certification: "Certificado de Especialização em Mapeamento Agrícola",
    differentials: [
      "Aulas práticas em fazendas reais",
      "Uso de equipamentos multispectrais",
      "Software profissional incluso",
      "Cases reais de produtividade"
    ]
  },
  {
    id: "operacao-pulverizacao",
    slug: "operacao-pulverizacao",
    icon: Zap,
    title: "Operação de Pulverização",
    shortDescription: "Técnicas avançadas de pulverização aérea para agronegócio.",
    level: "Especialização",
    duration: "60 horas",
    format: "Presencial + Campo Intensivo",
    fullDescription: "Especialização em pulverização aérea com drones, cobrindo técnicas operacionais, regulamentação específica, calibração de equipamentos e aplicação de defensivos agrícolas.",
    targetAudience: [
      "Pilotos de drone certificados",
      "Operadores de máquinas agrícolas",
      "Empreendedores do agronegócio",
    ],
    modules: [
      {
        title: "Módulo 1 - Fundamentos da Pulverização",
        topics: [
          "Princípios de aplicação aérea",
          "Tipos de pulverizadores",
          "Defensivos agrícolas",
          "Regulamentação MAPA e ANAC"
        ]
      },
      {
        title: "Módulo 2 - Equipamentos e Calibração",
        topics: [
          "Drones pulverizadores",
          "Sistemas de tanque e bicos",
          "Calibração de vazão",
          "Manutenção preventiva"
        ]
      },
      {
        title: "Módulo 3 - Técnicas Operacionais",
        topics: [
          "Planejamento de aplicação",
          "Faixas de aplicação",
          "Altura e velocidade ideais",
          "Condições meteorológicas"
        ]
      },
      {
        title: "Módulo 4 - Segurança e Qualidade",
        topics: [
          "EPIs e segurança química",
          "Deriva e eficiência",
          "Controle de qualidade",
          "Documentação de aplicação"
        ]
      }
    ],
    skills: [
      "Operação de drones pulverizadores",
      "Calibração de equipamentos",
      "Aplicação eficiente de defensivos",
      "Gestão de segurança operacional"
    ],
    prerequisites: [
      "Curso de Operações Intermediário ou certificação equivalente",
      "Conhecimento básico de agronomia"
    ],
    certification: "Certificado de Especialização em Pulverização Aérea",
    differentials: [
      "Prática intensiva em campo",
      "Drones pulverizadores reais",
      "Consultoria pós-curso",
      "Parcerias com fabricantes"
    ]
  },
  {
    id: "inspecao-termografica",
    slug: "inspecao-termografica",
    icon: ThermometerSun,
    title: "Inspeção Termográfica",
    shortDescription: "Utilize câmeras térmicas para inspeções técnicas especializadas.",
    level: "Especialização",
    duration: "50 horas",
    format: "Presencial + Prático",
    fullDescription: "Curso de especialização em termografia com drones, capacitando para inspeções em painéis solares, linhas de transmissão, edificações e equipamentos industriais.",
    targetAudience: [
      "Engenheiros e técnicos",
      "Pilotos buscando especialização",
      "Profissionais de manutenção",
    ],
    modules: [
      {
        title: "Módulo 1 - Fundamentos de Termografia",
        topics: [
          "Princípios da radiação térmica",
          "Câmeras térmicas e especificações",
          "Emissividade e refletividade",
          "Interpretação de termogramas"
        ]
      },
      {
        title: "Módulo 2 - Aplicações Industriais",
        topics: [
          "Inspeção de painéis solares",
          "Linhas de transmissão",
          "Subestações elétricas",
          "Equipamentos industriais"
        ]
      },
      {
        title: "Módulo 3 - Inspeções Prediais",
        topics: [
          "Infiltrações e umidade",
          "Pontes térmicas",
          "Sistemas HVAC",
          "Telhados e coberturas"
        ]
      },
      {
        title: "Módulo 4 - Análise e Relatórios",
        topics: [
          "Software de análise térmica",
          "Geração de relatórios técnicos",
          "Normas e padrões",
          "Casos práticos"
        ]
      }
    ],
    skills: [
      "Operação de câmeras térmicas",
      "Inspeções termográficas profissionais",
      "Análise de termogramas",
      "Elaboração de laudos técnicos"
    ],
    prerequisites: [
      "Curso de Operações Intermediário",
      "Conhecimento técnico básico (engenharia/manutenção desejável)"
    ],
    certification: "Certificado de Especialização em Inspeção Termográfica",
    differentials: [
      "Câmeras térmicas profissionais",
      "Cases reais de inspeção",
      "Software de análise incluso",
      "Networking com empresas do setor"
    ]
  },
  {
    id: "inspecao-estrutural",
    slug: "inspecao-estrutural",
    icon: Building,
    title: "Inspeção Estrutural",
    shortDescription: "Inspeção de edificações, torres e infraestruturas com precisão.",
    level: "Especialização",
    duration: "50 horas",
    format: "Presencial + Campo",
    fullDescription: "Especialização em inspeções estruturais com drones, abrangendo edificações, pontes, torres, barragens e outras infraestruturas críticas.",
    targetAudience: [
      "Engenheiros civis",
      "Arquitetos",
      "Profissionais de inspeção predial",
    ],
    modules: [
      {
        title: "Módulo 1 - Fundamentos de Inspeção",
        topics: [
          "Tipos de estruturas e patologias",
          "Normas técnicas de inspeção",
          "Planejamento de inspeções",
          "Segurança em altura"
        ]
      },
      {
        title: "Módulo 2 - Técnicas de Captura",
        topics: [
          "Fotografia técnica",
          "Vídeos de inspeção",
          "Fotogrametria estrutural",
          "Zoom óptico e digital"
        ]
      },
      {
        title: "Módulo 3 - Tipos de Inspeção",
        topics: [
          "Torres e antenas",
          "Pontes e viadutos",
          "Fachadas de edificações",
          "Barragens e reservatórios"
        ]
      },
      {
        title: "Módulo 4 - Análise e Laudos",
        topics: [
          "Identificação de patologias",
          "Documentação fotográfica",
          "Relatórios técnicos",
          "Software de inspeção"
        ]
      }
    ],
    skills: [
      "Inspeções estruturais profissionais",
      "Fotografia técnica especializada",
      "Identificação de patologias",
      "Elaboração de laudos de inspeção"
    ],
    prerequisites: [
      "Curso de Operações Intermediário",
      "Conhecimento em engenharia civil (desejável)"
    ],
    certification: "Certificado de Especialização em Inspeção Estrutural",
    differentials: [
      "Prática em estruturas reais",
      "Drones com zoom potente",
      "Parcerias com construtoras",
      "Templates de relatórios"
    ]
  },
  {
    id: "mapeamento-topografico",
    slug: "mapeamento-topografico",
    icon: Ruler,
    title: "Mapeamento Topográfico",
    shortDescription: "Gere mapas e modelos 3D precisos para engenharia e construção.",
    level: "Especialização",
    duration: "60 horas",
    format: "Presencial + Campo",
    fullDescription: "Curso completo de topografia com drones, incluindo levantamento aerofotogramétrico, geração de ortomosaicos, MDT, MDS e curvas de nível para projetos de engenharia.",
    targetAudience: [
      "Topógrafos e agrimensores",
      "Engenheiros civis",
      "Profissionais de geoprocessamento",
    ],
    modules: [
      {
        title: "Módulo 1 - Fundamentos de Topografia",
        topics: [
          "Conceitos de topografia",
          "Geodésia e sistemas de coordenadas",
          "Precisão e acurácia",
          "Normas técnicas"
        ]
      },
      {
        title: "Módulo 2 - Fotogrametria com Drones",
        topics: [
          "Planejamento de voo fotogramétrico",
          "GSD e sobreposição",
          "Pontos de controle (GCP)",
          "GPS RTK e PPK"
        ]
      },
      {
        title: "Módulo 3 - Processamento de Dados",
        topics: [
          "Software de fotogrametria",
          "Geração de ortomosaicos",
          "Modelos digitais (MDT/MDS)",
          "Nuvem de pontos"
        ]
      },
      {
        title: "Módulo 4 - Produtos Cartográficos",
        topics: [
          "Curvas de nível",
          "Cálculo de volumes",
          "Plantas topográficas",
          "Integração com CAD/GIS"
        ]
      }
    ],
    skills: [
      "Levantamento topográfico com drones",
      "Processamento fotogramétrico",
      "Geração de produtos cartográficos",
      "Cálculo de volumes e áreas"
    ],
    prerequisites: [
      "Curso de Operações Intermediário",
      "Noções de topografia (desejável)"
    ],
    certification: "Certificado de Especialização em Mapeamento Topográfico",
    differentials: [
      "Software profissional (Pix4D/Agisoft)",
      "GPS RTK em campo",
      "Projetos reais de engenharia",
      "Certificado com valor de mercado"
    ]
  },
  {
    id: "seguranca-drones",
    slug: "seguranca-drones",
    icon: Shield,
    title: "Segurança com Drones",
    shortDescription: "Operações de vigilância e monitoramento de segurança.",
    level: "Especialização",
    duration: "40 horas",
    format: "Presencial + Simulações",
    fullDescription: "Especialização em operações de segurança com drones, cobrindo vigilância, monitoramento perimetral, suporte a operações táticas e uso em segurança pública e privada.",
    targetAudience: [
      "Profissionais de segurança",
      "Militares e policiais",
      "Empresas de vigilância",
    ],
    modules: [
      {
        title: "Módulo 1 - Segurança e Vigilância",
        topics: [
          "Conceitos de segurança aérea",
          "Aplicações em segurança pública",
          "Segurança privada e patrimonial",
          "Aspectos legais e éticos"
        ]
      },
      {
        title: "Módulo 2 - Equipamentos Táticos",
        topics: [
          "Drones para segurança",
          "Câmeras térmicas noturnas",
          "Sistemas de transmissão ao vivo",
          "Iluminação tática"
        ]
      },
      {
        title: "Módulo 3 - Operações Práticas",
        topics: [
          "Patrulhamento aéreo",
          "Monitoramento de eventos",
          "Busca e salvamento",
          "Operações noturnas"
        ]
      },
      {
        title: "Módulo 4 - Integração Operacional",
        topics: [
          "Centro de operações",
          "Comunicação tática",
          "Protocolos de segurança",
          "Análise de inteligência"
        ]
      }
    ],
    skills: [
      "Operações de vigilância aérea",
      "Monitoramento em tempo real",
      "Voos noturnos táticos",
      "Integração com equipes de segurança"
    ],
    prerequisites: [
      "Curso de Operações Intermediário",
      "Experiência em segurança (desejável)"
    ],
    certification: "Certificado de Especialização em Segurança com Drones",
    differentials: [
      "Simulações de operações reais",
      "Equipamentos táticos profissionais",
      "Instrutores com experiência militar",
      "Networking com setor de segurança"
    ]
  }
];
