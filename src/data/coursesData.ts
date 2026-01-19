import { 
  Plane, 
  Target,
  Sprout, 
  Map,
  Scan,
  Shield,
  GraduationCap,
  Briefcase,
  Rocket,
  RefreshCw,
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
  level: "Operação" | "Core Técnico" | "Especialização" | "Mentoria";
  tier: 1 | 2 | 3 | 4;
  duration: string;
  format: string;
  fullDescription: string;
  antiPromises?: string[];
  targetAudience: string[];
  modules: CourseModule[];
  skills: string[];
  prerequisites: string[];
  certification: string;
  differentials: string[];
  isHidden?: boolean;
}

export const coursesData: CourseData[] = [
  // ========== NÍVEL 1 - OPERAÇÃO ==========
  {
    id: "operacoes-intermediario",
    slug: "operacoes-intermediario",
    icon: Plane,
    title: "Operações Intermediário",
    shortDescription: "2 dias intensivos. Turmas de 4-8 alunos. Um dia inteiro dedicado exclusivamente à prática.",
    level: "Operação",
    tier: 1,
    duration: "2 dias intensivos",
    format: "Presencial • Turmas 4-8 alunos",
    fullDescription: "A Metodologia Maule não forma curiosos. Forma profissionais que querem dominar o jogo. Este curso é estruturado para quem quer sair operando de verdade — com segurança, técnica e autonomia. Dois dias intensivos: o primeiro focado em sistemas, configurações e operação; o segundo, um dia inteiro dedicado exclusivamente à prática de voo.",
    antiPromises: [
      "Não é curso básico. É formação de elite.",
      "Não é aula teórica infinita. É prática intensiva.",
      "Não formamos amadores. Formamos operadores."
    ],
    targetAudience: [
      "Quem quer entrar no mercado de drones com seriedade",
      "Profissionais que precisam operar com segurança e técnica",
      "Quem já voa mas quer dominar os fundamentos de verdade"
    ],
    modules: [
      {
        title: "Dia 1 - Sistemas, Configurações e Operação",
        topics: [
          "Sistemas embarcados e componentes críticos",
          "Configurações avançadas de voo",
          "Modos de operação e failsafes",
          "Planejamento de missão profissional",
          "Análise de riscos operacionais"
        ]
      },
      {
        title: "Dia 2 - Operação Prática Intensiva",
        topics: [
          "Manobras essenciais e avançadas",
          "Operação em diferentes cenários",
          "Procedimentos de emergência",
          "Exercícios práticos cronometrados",
          "Avaliação de proficiência"
        ]
      }
    ],
    skills: [
      "Domínio completo dos sistemas do drone",
      "Operação segura em múltiplos cenários",
      "Capacidade de planejamento de missão",
      "Gerenciamento de riscos operacionais",
      "Autonomia para operações comerciais"
    ],
    prerequisites: [
      "Maior de 18 anos",
      "Vontade real de aprender (curiosos não servem)"
    ],
    certification: "Certificado Metodologia Maule com código de rastreio único — verificável e reconhecido pelo mercado. Não é papel. É credencial rastreável.",
    differentials: [
      "Turmas extremamente reduzidas (4-8 alunos)",
      "Um dia inteiro dedicado exclusivamente à prática",
      "Instrutor com mais de 8.000 alunos formados",
      "Metodologia desenvolvida por quem vive o que ensina"
    ]
  },
  {
    id: "operacoes-profissional",
    slug: "operacoes-profissional",
    icon: Target,
    title: "Operações Profissional",
    shortDescription: "3 dias intensivos. Inclui 100% do Intermediário + dia extra de formação teórica profunda.",
    level: "Operação",
    tier: 1,
    duration: "3 dias intensivos",
    format: "Presencial • Turmas 4-8 alunos",
    fullDescription: "A formação completa para quem não quer atalhos. Três dias que condensam tudo o que você precisa para operar profissionalmente: história, componentes, aerodinâmica, legislação, sistemas e um dia inteiro de prática. Quem sai daqui não é mais um no mercado — é um operador de elite.",
    antiPromises: [
      "Não é curso para quem quer só um certificado",
      "Não é formação genérica. É preparação de elite.",
      "Não prometemos emprego. Prometemos competência."
    ],
    targetAudience: [
      "Quem quer a formação completa sem dividir em módulos",
      "Profissionais que querem atuar comercialmente",
      "Empresários que precisam dominar a operação"
    ],
    modules: [
      {
        title: "Dia 1 - Formação Teórica Profunda",
        topics: [
          "História da aviação e dos drones",
          "Componentes e arquitetura de sistemas",
          "Aerodinâmica aplicada",
          "Legislação ANAC e DECEA",
          "Responsabilidades do operador"
        ]
      },
      {
        title: "Dia 2 - Sistemas, Configurações e Operação",
        topics: [
          "Sistemas embarcados e componentes críticos",
          "Configurações avançadas de voo",
          "Modos de operação e failsafes",
          "Planejamento de missão profissional",
          "Análise de riscos operacionais"
        ]
      },
      {
        title: "Dia 3 - Operação Prática Intensiva",
        topics: [
          "Manobras essenciais e avançadas",
          "Operação em cenários complexos",
          "Procedimentos de emergência reais",
          "Exercícios práticos cronometrados",
          "Avaliação de proficiência final"
        ]
      }
    ],
    skills: [
      "Conhecimento profundo teórico e prático",
      "Certificação profissional reconhecida",
      "Capacidade de operar comercialmente",
      "Gestão de projetos com drones",
      "Base sólida para qualquer especialização"
    ],
    prerequisites: [
      "Maior de 18 anos",
      "Comprometimento com formação séria"
    ],
    certification: "Certificação Profissional Metodologia Maule — código de rastreio único, verificável online. A credencial que o mercado reconhece.",
    differentials: [
      "Formação mais completa do mercado em 3 dias",
      "100% do curso Intermediário incluído",
      "Preparação para qualquer especialização",
      "Metodologia de quem formou +8.000 alunos"
    ]
  },

  // ========== NÍVEL 2 - CORE TÉCNICO ==========
  {
    id: "aerofotogrametria",
    slug: "aerofotogrametria",
    icon: Map,
    title: "Aerofotogrametria e Sensoriamento Remoto",
    shortDescription: "O curso estruturante. Portal de entrada para todas as especializações técnicas.",
    level: "Core Técnico",
    tier: 2,
    duration: "2 dias intensivos",
    format: "Presencial • Turmas 4-8 alunos",
    fullDescription: "Este é o curso que abre as portas. A aerofotogrametria é a base técnica de todas as especializações que envolvem mapeamento, processamento e entrega de produtos. Aqui você aprende os fundamentos científicos, o planejamento, o voo e o processamento em softwares profissionais. Sem esse conhecimento, você não avança. Com ele, você domina qualquer especialização.",
    antiPromises: [
      "Não é curso introdutório. É formação estruturante.",
      "Não é teoria vazia. É fundamento aplicado.",
      "Sem isso, você não avança nas especializações."
    ],
    targetAudience: [
      "Quem quer seguir para especializações técnicas",
      "Operadores que precisam entregar produtos profissionais",
      "Profissionais que querem dominar processamento de dados"
    ],
    modules: [
      {
        title: "Dia 1 - Fundamentos e Planejamento",
        topics: [
          "Fundamentos científicos da fotogrametria",
          "Sensoriamento remoto aplicado",
          "Planejamento de missão aerofotogramétrica",
          "GSD, sobreposição e parâmetros técnicos",
          "Execução de voo fotogramétrico"
        ]
      },
      {
        title: "Dia 2 - Processamento Profissional",
        topics: [
          "Processamento em Agisoft Metashape",
          "Processamento em Pix4D",
          "Processamento em DJI Terra",
          "Geração de ortomosaicos e modelos",
          "Entrega de produtos finais"
        ]
      }
    ],
    skills: [
      "Domínio dos fundamentos de fotogrametria",
      "Planejamento e execução de voos técnicos",
      "Processamento em múltiplos softwares",
      "Geração de produtos profissionais",
      "Base para qualquer especialização"
    ],
    prerequisites: [
      "Curso de Operações (Intermediário ou Profissional)",
      "Notebook com configuração adequada"
    ],
    certification: "Certificado Metodologia Maule em Aerofotogrametria — código rastreável. Entrega inclui: dados brutos + projetos + produtos finais via drive.",
    differentials: [
      "Curso estruturante para todas as especializações",
      "Processamento em 3 softwares diferentes",
      "Entrega de projeto completo via drive",
      "Base científica sólida aplicada"
    ]
  },

  // ========== NÍVEL 3 - ESPECIALIZAÇÕES ==========
  {
    id: "topografia-drones",
    slug: "topografia-drones",
    icon: Map,
    title: "Topografia com Drones",
    shortDescription: "Conceitos topográficos + processamento + entrega final em QGIS. Produtos prontos para engenharia.",
    level: "Especialização",
    tier: 3,
    duration: "2 dias intensivos",
    format: "Presencial • Turmas 4-8 alunos",
    fullDescription: "A especialização para quem quer entregar produtos topográficos de verdade. Aqui você aprende os conceitos fundamentais de topografia, processamento em Metashape e Pix4D, e finalização em QGIS. Produtos prontos para engenharia, mineração e construção civil.",
    antiPromises: [
      "Não é curso de fotogrametria repetida. É topografia aplicada.",
      "Não ensinamos só a voar. Ensinamos a entregar.",
      "Quem sai daqui entrega laudo, não só imagem."
    ],
    targetAudience: [
      "Topógrafos e agrimensores querendo agregar drones",
      "Engenheiros civis e profissionais de geoprocessamento",
      "Operadores buscando nicho de alta demanda"
    ],
    modules: [
      {
        title: "Módulo 1 - Fundamentos Topográficos",
        topics: [
          "Conceitos fundamentais de topografia",
          "Geodésia e sistemas de coordenadas",
          "Precisão vs acurácia em levantamentos",
          "Normas técnicas aplicáveis"
        ]
      },
      {
        title: "Módulo 2 - Processamento e Entrega",
        topics: [
          "Processamento em Metashape",
          "Processamento em Pix4D",
          "Finalização e análise em QGIS",
          "Geração de MDT, MDS e curvas de nível",
          "Relatórios técnicos para engenharia"
        ]
      }
    ],
    skills: [
      "Levantamentos topográficos com drone",
      "Processamento em múltiplos softwares",
      "Finalização profissional em QGIS",
      "Entrega de produtos para engenharia"
    ],
    prerequisites: [
      "Curso de Aerofotogrametria (obrigatório)",
      "Conhecimento básico de topografia (desejável)"
    ],
    certification: "Certificado de Especialização em Topografia com Drones — código rastreável.",
    differentials: [
      "Foco em entrega real para clientes",
      "Finalização em QGIS inclusa",
      "Cases de engenharia e mineração",
      "Produtos prontos para uso comercial"
    ]
  },
  {
    id: "agricultura-precisao",
    slug: "agricultura-precisao",
    icon: Sprout,
    title: "Agricultura de Precisão",
    shortDescription: "Mapeamentos voltados ao agro + processamento + apoio à tomada de decisão agronômica.",
    level: "Especialização",
    tier: 3,
    duration: "2 dias intensivos",
    format: "Presencial • Turmas 4-8 alunos",
    fullDescription: "A especialização para o agronegócio. Aqui você aprende a fazer mapeamentos que geram valor real para produtores: análise de saúde de plantações, identificação de problemas, geração de mapas de prescrição e apoio à tomada de decisão agronômica. Não é só foto aérea — é inteligência para o campo.",
    antiPromises: [
      "Não é curso de foto bonita de fazenda",
      "Não ensinamos a vender para agricultor sem entregar valor",
      "Quem sai daqui entende de agro, não só de drone"
    ],
    targetAudience: [
      "Agrônomos e técnicos agrícolas",
      "Operadores querendo atuar no agronegócio",
      "Produtores rurais que querem usar drones na propriedade"
    ],
    modules: [
      {
        title: "Módulo 1 - Fundamentos da Agricultura de Precisão",
        topics: [
          "Conceitos de agricultura 4.0",
          "Índices de vegetação (NDVI, NDRE, GNDVI)",
          "Interpretação de saúde das plantas",
          "Sensores multispectrais e térmicos"
        ]
      },
      {
        title: "Módulo 2 - Mapeamento e Decisão",
        topics: [
          "Planejamento de missões agrícolas",
          "Processamento de imagens multispectrais",
          "Geração de mapas de prescrição",
          "Relatórios para tomada de decisão"
        ]
      }
    ],
    skills: [
      "Mapeamentos agrícolas profissionais",
      "Análise de índices de vegetação",
      "Geração de mapas de prescrição",
      "Apoio à decisão agronômica"
    ],
    prerequisites: [
      "Curso de Aerofotogrametria (obrigatório)",
      "Conhecimento básico de agronomia (desejável)"
    ],
    certification: "Certificado de Especialização em Agricultura de Precisão — código rastreável.",
    differentials: [
      "Foco em valor para o produtor",
      "Cases reais do agronegócio brasileiro",
      "Entrega de produtos práticos",
      "Metodologia validada no campo"
    ]
  },
  {
    id: "inspecoes-drones",
    slug: "inspecoes-drones",
    icon: Scan,
    title: "Inspeções com Drones",
    shortDescription: "Energia, telecom, infraestrutura crítica. Processamento e relatórios profissionais.",
    level: "Especialização",
    tier: 3,
    duration: "2 dias intensivos",
    format: "Presencial • Turmas 4-8 alunos",
    fullDescription: "A especialização para quem quer atuar em inspeções de infraestrutura crítica. Torres de energia, telecomunicações, linhas de transmissão, painéis solares, edificações. Aqui você aprende a capturar, processar e entregar relatórios que empresas de verdade precisam.",
    antiPromises: [
      "Não é curso de fotografia aérea",
      "Não ensinamos só a voar perto de torre",
      "Quem sai daqui entrega laudo técnico, não só vídeo"
    ],
    targetAudience: [
      "Engenheiros e técnicos de manutenção",
      "Operadores buscando nicho de inspeções",
      "Profissionais do setor de energia e telecom"
    ],
    modules: [
      {
        title: "Módulo 1 - Fundamentos de Inspeção",
        topics: [
          "Tipos de inspeções com drones",
          "Equipamentos e sensores específicos",
          "Planejamento de missões de inspeção",
          "Segurança em operações próximas a estruturas"
        ]
      },
      {
        title: "Módulo 2 - Aplicações e Entregas",
        topics: [
          "Inspeção de torres e linhas de transmissão",
          "Inspeção de painéis solares (térmica)",
          "Inspeção de edificações e fachadas",
          "Processamento e geração de relatórios",
          "Templates profissionais de laudo"
        ]
      }
    ],
    skills: [
      "Inspeções de infraestrutura crítica",
      "Operação próxima a estruturas",
      "Processamento de dados de inspeção",
      "Elaboração de laudos técnicos"
    ],
    prerequisites: [
      "Curso de Aerofotogrametria (recomendado)",
      "Conhecimento técnico básico de engenharia (desejável)"
    ],
    certification: "Certificado de Especialização em Inspeções com Drones — código rastreável.",
    differentials: [
      "Cases reais de energia e telecom",
      "Templates de laudo profissional",
      "Prática em estruturas reais",
      "Foco em entrega comercial"
    ]
  },
  {
    id: "lidar-drones",
    slug: "lidar-drones",
    icon: Scan,
    title: "LiDAR com Drones",
    shortDescription: "Fundamentos + processamento de dados reais. Divulgação controlada.",
    level: "Especialização",
    tier: 3,
    duration: "2 dias intensivos",
    format: "Presencial • Turmas 4-8 alunos",
    fullDescription: "O curso para quem quer entender LiDAR de verdade. Fundamentos da tecnologia, processamento de dados reais, aplicações práticas. Este não é um curso de operação de drone LiDAR — é um curso de entendimento e processamento de dados LiDAR para quem quer atuar nesse mercado de alto valor.",
    antiPromises: [
      "Não é curso de pilotagem de drone LiDAR",
      "Não prometemos que você vai sair operando equipamento de R$500k",
      "Quem sai daqui entende LiDAR — não só ouviu falar"
    ],
    targetAudience: [
      "Profissionais querendo entrar no mercado de LiDAR",
      "Engenheiros florestais e topógrafos",
      "Operadores buscando especialização de alto valor"
    ],
    modules: [
      {
        title: "Módulo 1 - Fundamentos do LiDAR",
        topics: [
          "Princípios da tecnologia LiDAR",
          "Tipos de sensores e aplicações",
          "Diferenças entre LiDAR terrestre e aéreo",
          "Limitações e potenciais"
        ]
      },
      {
        title: "Módulo 2 - Processamento de Dados",
        topics: [
          "Softwares de processamento LiDAR",
          "Classificação de nuvens de pontos",
          "Geração de produtos derivados",
          "Análise e interpretação de dados"
        ]
      }
    ],
    skills: [
      "Entendimento profundo de LiDAR",
      "Processamento de nuvens de pontos",
      "Análise de dados LiDAR",
      "Geração de produtos derivados"
    ],
    prerequisites: [
      "Curso de Aerofotogrametria (obrigatório)",
      "Conhecimento de geoprocessamento (desejável)"
    ],
    certification: "Certificado de Especialização em LiDAR — código rastreável.",
    differentials: [
      "Dados reais para processamento",
      "Foco em entendimento profundo",
      "Sem promessas irrealistas",
      "Preparação real para o mercado"
    ],
    isHidden: true // Divulgação controlada
  },
  {
    id: "seguranca-publica-privada",
    slug: "seguranca-publica-privada",
    icon: Shield,
    title: "Segurança Pública e Privada",
    shortDescription: "Uso tático do drone. Aquisição de informações de valor. Penetração e leitura de territórios.",
    level: "Especialização",
    tier: 3,
    duration: "2 dias intensivos",
    format: "Presencial • Turmas 4-8 alunos",
    fullDescription: "A especialização para quem quer usar o drone como ferramenta tática. Não é sobre voar — é sobre adquirir informações de valor, penetrar e ler territórios, apoiar tomada de decisão crítica. Para profissionais de segurança pública e privada que entendem que o drone é uma ferramenta de inteligência.",
    antiPromises: [
      "Não é curso de vigilância amadora",
      "Não ensinamos a usar drone como brinquedo",
      "Quem sai daqui pensa como operador tático"
    ],
    targetAudience: [
      "Profissionais de segurança pública",
      "Operadores de segurança privada",
      "Gestores de segurança empresarial"
    ],
    modules: [
      {
        title: "Módulo 1 - Fundamentos Táticos",
        topics: [
          "O drone como ferramenta de inteligência",
          "Planejamento de operações táticas",
          "Leitura e penetração de territórios",
          "Aquisição de informações de valor"
        ]
      },
      {
        title: "Módulo 2 - Aplicações Práticas",
        topics: [
          "Operações de vigilância",
          "Apoio à tomada de decisão crítica",
          "Integração com equipes de segurança",
          "Protocolos operacionais"
        ]
      }
    ],
    skills: [
      "Pensamento tático com drones",
      "Aquisição de inteligência",
      "Planejamento de operações",
      "Apoio à decisão crítica"
    ],
    prerequisites: [
      "Curso de Operações (Intermediário ou Profissional)",
      "Experiência em segurança (desejável)"
    ],
    certification: "Certificado de Especialização em Segurança com Drones — código rastreável.",
    differentials: [
      "Foco em pensamento tático",
      "Cases de operações reais",
      "Metodologia de inteligência",
      "Instrutor com experiência no setor"
    ]
  },

  // ========== NÍVEL 4 - MENTORIAS ==========
  {
    id: "mentoria-instrutores",
    slug: "mentoria-instrutores",
    icon: GraduationCap,
    title: "Mentoria para Instrutores",
    shortDescription: "Formação para quem quer ensinar. Metodologia, didática e posicionamento.",
    level: "Mentoria",
    tier: 4,
    duration: "Programa personalizado",
    format: "Híbrido • Acompanhamento individual",
    fullDescription: "A mentoria para quem quer se tornar instrutor de drones. Não basta saber operar — você precisa saber ensinar. Aqui você aprende metodologia de ensino, didática aplicada, posicionamento de mercado e como estruturar seus próprios cursos. Formação de instrutores por quem formou mais de 8.000 alunos.",
    antiPromises: [
      "Não é curso rápido de instrutor",
      "Não formamos quem não tem base sólida",
      "Quem entra aqui quer ensinar de verdade"
    ],
    targetAudience: [
      "Operadores experientes querendo ensinar",
      "Profissionais buscando nova carreira",
      "Quem quer multiplicar conhecimento"
    ],
    modules: [
      {
        title: "Fase 1 - Fundamentos da Instrução",
        topics: [
          "Metodologia de ensino para adultos",
          "Didática aplicada a drones",
          "Estruturação de conteúdo",
          "Gestão de sala de aula"
        ]
      },
      {
        title: "Fase 2 - Posicionamento e Mercado",
        topics: [
          "Construção de autoridade",
          "Precificação de cursos",
          "Marketing para instrutores",
          "Parcerias e networking"
        ]
      }
    ],
    skills: [
      "Metodologia de ensino profissional",
      "Didática aplicada",
      "Posicionamento de mercado",
      "Gestão de carreira como instrutor"
    ],
    prerequisites: [
      "Formação completa em operações",
      "Experiência comprovada no mercado",
      "Aprovação em entrevista"
    ],
    certification: "Certificação como Instrutor Metodologia Maule — credencial de autoridade.",
    differentials: [
      "Acompanhamento individual",
      "Metodologia validada em +8.000 alunos",
      "Posicionamento de mercado incluso",
      "Rede de instrutores Maule"
    ]
  },
  {
    id: "mentoria-empresarios",
    slug: "mentoria-empresarios",
    icon: Briefcase,
    title: "Mentoria para Empresários",
    shortDescription: "Integração de drones ao negócio. Estratégia, operação e escala.",
    level: "Mentoria",
    tier: 4,
    duration: "Programa personalizado",
    format: "Híbrido • Acompanhamento individual",
    fullDescription: "A mentoria para empresários que querem integrar drones ao seu negócio. Não é sobre aprender a voar — é sobre entender como essa tecnologia pode gerar valor, reduzir custos e criar novas linhas de receita. Estratégia, operação e escala para quem pensa como empresário.",
    antiPromises: [
      "Não é curso de pilotagem para executivos",
      "Não prometemos resultados sem trabalho",
      "Quem entra aqui quer resultado, não hobby"
    ],
    targetAudience: [
      "Empresários querendo agregar drones ao negócio",
      "Gestores de operações industriais",
      "Empreendedores do setor de drones"
    ],
    modules: [
      {
        title: "Fase 1 - Estratégia e Oportunidades",
        topics: [
          "Análise de oportunidades no seu setor",
          "Modelagem de negócio com drones",
          "ROI e viabilidade de operação",
          "Estrutura operacional necessária"
        ]
      },
      {
        title: "Fase 2 - Implementação e Escala",
        topics: [
          "Contratação e formação de equipe",
          "Processos e padrões operacionais",
          "Gestão de frota e equipamentos",
          "Estratégias de escala"
        ]
      }
    ],
    skills: [
      "Visão estratégica de drones no negócio",
      "Gestão de operações com drones",
      "Modelagem financeira",
      "Escala de operações"
    ],
    prerequisites: [
      "Ter um negócio ativo",
      "Clareza sobre objetivos",
      "Aprovação em entrevista"
    ],
    certification: "Certificação de conclusão de mentoria empresarial.",
    differentials: [
      "Foco em resultado de negócio",
      "Acompanhamento estratégico",
      "Cases de implementação real",
      "Networking com outros empresários"
    ]
  },
  {
    id: "mentoria-pilotos",
    slug: "mentoria-pilotos",
    icon: Rocket,
    title: "Mentoria para Pilotos",
    shortDescription: "Transformação de piloto em operador de elite. Técnica, mercado e posicionamento.",
    level: "Mentoria",
    tier: 4,
    duration: "Programa personalizado",
    format: "Híbrido • Acompanhamento individual",
    fullDescription: "A mentoria para pilotos que querem se tornar operadores de elite. Não basta saber voar — você precisa dominar técnica, entender o mercado e se posicionar corretamente. Acompanhamento individual para quem quer ser referência, não mais um operador.",
    antiPromises: [
      "Não é curso de pilotagem avançada",
      "Não formamos pilotos medianos",
      "Quem entra aqui quer ser elite"
    ],
    targetAudience: [
      "Pilotos querendo evoluir para elite",
      "Operadores buscando diferenciação",
      "Profissionais querendo se destacar"
    ],
    modules: [
      {
        title: "Fase 1 - Excelência Técnica",
        topics: [
          "Diagnóstico de nível atual",
          "Desenvolvimento de habilidades avançadas",
          "Domínio de múltiplas plataformas",
          "Situações críticas e tomada de decisão"
        ]
      },
      {
        title: "Fase 2 - Posicionamento de Elite",
        topics: [
          "Construção de portfólio",
          "Precificação premium",
          "Marketing pessoal",
          "Networking estratégico"
        ]
      }
    ],
    skills: [
      "Operação de nível elite",
      "Posicionamento de mercado",
      "Precificação premium",
      "Diferenciação competitiva"
    ],
    prerequisites: [
      "Formação completa em operações",
      "Experiência comprovada",
      "Aprovação em entrevista"
    ],
    certification: "Certificação de Operador Elite Metodologia Maule.",
    differentials: [
      "Acompanhamento 1:1",
      "Diagnóstico personalizado",
      "Foco em resultado mensurável",
      "Acesso à rede de elite"
    ]
  },
  {
    id: "mentoria-transicao-carreira",
    slug: "mentoria-transicao-carreira",
    icon: RefreshCw,
    title: "Mentoria Transição de Carreira",
    shortDescription: "Acompanhamento completo para quem quer mudar de carreira para drones.",
    level: "Mentoria",
    tier: 4,
    duration: "Programa personalizado",
    format: "Híbrido • Acompanhamento individual",
    fullDescription: "A mentoria para quem quer mudar de carreira. Eu fiz isso — larguei tudo para trabalhar com drones. Sei o que funciona e o que não funciona. Acompanhamento completo: formação técnica, posicionamento de mercado, primeiros clientes e consolidação. Para quem está disposto a arriscar de verdade.",
    antiPromises: [
      "Não é promessa de dinheiro fácil",
      "Não formamos quem não está disposto a trabalhar",
      "Quem entra aqui sabe que vai ter que se dedicar"
    ],
    targetAudience: [
      "Profissionais insatisfeitos querendo mudar",
      "Quem já decidiu que quer trabalhar com drones",
      "Pessoas dispostas a investir em nova carreira"
    ],
    modules: [
      {
        title: "Fase 1 - Fundação",
        topics: [
          "Diagnóstico de perfil e objetivos",
          "Trilha de formação personalizada",
          "Desenvolvimento de competências",
          "Construção de base técnica"
        ]
      },
      {
        title: "Fase 2 - Mercado",
        topics: [
          "Posicionamento inicial",
          "Primeiros clientes",
          "Precificação e negociação",
          "Consolidação da nova carreira"
        ]
      }
    ],
    skills: [
      "Base técnica sólida",
      "Entrada no mercado",
      "Construção de carteira de clientes",
      "Sustentabilidade da nova carreira"
    ],
    prerequisites: [
      "Decisão firme de mudança de carreira",
      "Disponibilidade para formação",
      "Aprovação em entrevista"
    ],
    certification: "Certificação de conclusão de programa de transição.",
    differentials: [
      "Experiência real de transição de carreira",
      "Acompanhamento de ponta a ponta",
      "Trilha personalizada",
      "Suporte até consolidação"
    ]
  }
];
