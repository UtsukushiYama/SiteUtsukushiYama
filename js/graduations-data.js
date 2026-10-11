// Dados completos das graduações Kyokushin
const graduationsData = {
  mukyu: {
    name: "Faixa Branca",
    level: "Mukyu (Sem graduação)",
    color: "#ffffff",
    image: "img/DogiObi/Mukyu.JPG",
    description: "O início da jornada. A folha em branco pronta para ser preenchida com conhecimento e experiência.",
    philosophy: "A faixa branca representa a pureza, a inocência e o potencial ilimitado do iniciante. Como uma tela em branco, o praticante está pronto para absorver os ensinamentos fundamentais do Kyokushin Karate.",
    requirements: {
      minTime: "Nenhum requisito prévio",
      trainingDays: "-",
      age: "A partir de 6 anos"
    },
    techniques: [
      {
        category: "Tsuki Waza (Técnicas de Soco)",
        items: [
          "Seiken Chūdan Tsuki (Soco médio com punho fechado)",
          "Seiken Jōdan Tsuki (Soco alto com punho fechado)",
          "Seiken Gedan Tsuki (Soco baixo com punho fechado)"
        ]
      },
      {
        category: "Uke Waza (Técnicas de Defesa)",
        items: [
          "Jōdan Uke (Defesa alta)",
          "Chūdan Soto Uke (Defesa média externa)",
          "Chūdan Uchi Uke (Defesa média interna)",
          "Gedan Barai (Varredura baixa)"
        ]
      },
      {
        category: "Dachi (Posturas Básicas)",
        items: [
          "Heisoku Dachi (Postura com pés juntos)",
          "Musubi Dachi (Postura em V)",
          "Heiko Dachi (Postura paralela)",
          "Zenkutsu Dachi (Postura frontal)"
        ]
      }
    ],
    kata: [],
    kumite: {
      required: false,
      description: "Não há kumite nesta graduação"
    },
    tameshiwari: {
      required: false,
      description: "Não há quebramento nesta graduação"
    },
    theory: {
      required: false,
      topics: []
    },
    tips: [
      "Foque na execução correta das técnicas básicas",
      "Pratique as posturas em frente ao espelho",
      "Não se preocupe com velocidade ou potência no início",
      "Desenvolva o hábito de treinar regularmente"
    ]
  },

  "11kyu": {
    name: "Faixa Branca/Cinza",
    level: "11º Kyu",
    color: "linear-gradient(to right, #ffffff 50%, #ff8c00 50%)",
    image: "img/DogiObi/11Kyu.JPG",
    description: "Primeiros passos dados. A semente começa a germinar.",
    philosophy: "A faixa com traço laranja simboliza o nascer do sol, trazendo a primeira luz do conhecimento ao praticante iniciante.",
    requirements: {
      minTime: "3 meses de treino",
      trainingDays: "Mínimo 2x por semana",
      age: "A partir de 6 anos"
    },
    techniques: [
      {
        category: "Revisão de Mukyu +",
        items: [
          "Todas as técnicas de Mukyu",
          "Melhoria na execução das posturas",
          "Início do condicionamento físico básico"
        ]
      },
      {
        category: "Novas Técnicas de Tsuki",
        items: [
          "Gyaku Tsuki (Soco invertido)",
          "Morote Tsuki (Soco duplo)"
        ]
      },
      {
        category: "Geri Waza Básico (Chutes)",
        items: [
          "Mae Geri (Chute frontal) - iniciação"
        ]
      }
    ],
    kata: [
      {
        name: "Taikyoku Sono Ichi",
        description: "Primeiro kata do sistema Kyokushin. Movimentos básicos em padrão em forma de 'I'.",
        focus: "Coordenação, ritmo e posturas"
      }
    ],
    kumite: {
      required: false,
      description: "Introdução ao conceito de distância e timing"
    },
    tameshiwari: {
      required: false,
      description: "Não há quebramento nesta graduação"
    },
    theory: {
      required: true,
      topics: [
        "Dōjō Kun (Juramento do Dōjō)",
        "Significado de 'Osu'",
        "Etiqueta no Dōjō",
        "História básica do Karate Kyokushin",
        "Numeração em japonês (1-10)"
      ]
    },
    tips: [
      "Memorize o Dōjō Kun completamente",
      "Pratique o Taikyoku Sono Ichi diariamente",
      "Concentre-se na respiração correta",
      "Sempre cumprimente ao entrar e sair do Dōjō"
    ]
  },

  "10kyu": {
    name: "Faixa Laranja",
    level: "10º Kyu",
    color: "#ff8c00",
    image: "img/DogiObi/10Kyu.JPG",
    description: "O sol nascente. Energia e entusiasmo crescentes.",
    philosophy: "A cor laranja representa o sol nascente, simbolizando o despertar do espírito marcial e o início da verdadeira jornada no Kyokushin.",
    requirements: {
      minTime: "3 meses como 11º Kyu",
      trainingDays: "Mínimo 2-3x por semana",
      age: "A partir de 6 anos"
    },
    techniques: [
      {
        category: "Tsuki Waza Avançado",
        items: [
          "Oi Tsuki (Soco acompanhado)",
          "Kagi Tsuki (Soco em gancho)",
          "Ura Tsuki (Soco ascendente)"
        ]
      },
      {
        category: "Geri Waza (Chutes)",
        items: [
          "Mae Geri Chūdan (Chute frontal médio)",
          "Mae Geri Jōdan (Chute frontal alto)",
          "Hiza Geri (Joelhada)",
          "Kansetsu Geri (Chute nas articulações)"
        ]
      },
      {
        category: "Novas Defesas",
        items: [
          "Shuto Uke (Defesa com mão-espada)",
          "Morote Uke (Defesa com ambas as mãos)"
        ]
      }
    ],
    kata: [
      {
        name: "Taikyoku Sono Ni",
        description: "Segundo kata Taikyoku, introduzindo Mae Geri",
        focus: "Coordenação entre membros superiores e inferiores"
      },
      {
        name: "Taikyoku Sono San",
        description: "Terceiro kata Taikyoku, enfatizando ritmo e potência",
        focus: "Desenvolvimento de Kime (foco)"
      }
    ],
    kumite: {
      required: true,
      description: "Yakusoku Kumite Básico - Combate pré-determinado com 3 ataques",
      details: [
        "Jōdan (alto)",
        "Chūdan (médio)",
        "Mae Geri (chute frontal)"
      ]
    },
    tameshiwari: {
      required: false,
      description: "Não há quebramento nesta graduação"
    },
    theory: {
      required: true,
      topics: [
        "Significado de Kyokushin ('Verdade Suprema')",
        "Kanku (símbolo do Kyokushin)",
        "Conceito de Kihon, Kata e Kumite",
        "Numeração 11-20",
        "Partes do corpo em japonês (cabeça, tronco, pernas)"
      ]
    },
    tips: [
      "Pratique Mae Geri encostado na parede para melhorar equilíbrio",
      "Treine os três Taikyoku em sequência",
      "Aumente gradualmente a velocidade dos movimentos",
      "Comece a fortalecer abdômen e pernas"
    ]
  },

  "9kyu": {
    name: "Faixa Laranja com Traço Azul",
    level: "9º Kyu",
    color: "linear-gradient(to right, #ff8c00 50%, #000080 50%)",
    image: "img/DogiObi/9Kyu.JPG",
    description: "Evolução constante. A técnica começa a tomar forma.",
    philosophy: "A transição do laranja para o azul marca o amadurecimento técnico e o aprofundamento do conhecimento.",
    requirements: {
      minTime: "4 meses como 10º Kyu",
      trainingDays: "Mínimo 3x por semana",
      age: "A partir de 7 anos"
    },
    techniques: [
      {
        category: "Uchi Waza (Golpes)",
        items: [
          "Shuto Uchi (Golpe com mão-espada)",
          "Haito Uchi (Golpe com crista da mão)",
          "Hiji Uchi (Cotovelada) - básico"
        ]
      },
      {
        category: "Geri Waza Expandido",
        items: [
          "Yoko Geri Keage (Chute lateral saltitante)",
          "Yoko Geri Kekomi (Chute lateral penetrante)",
          "Kin Geri (Chute na virilha)"
        ]
      },
      {
        category: "Renraku Waza (Combinações)",
        items: [
          "Tsuki + Mae Geri",
          "Uke + Gyaku Tsuki",
          "Defesa + Contra-ataque"
        ]
      }
    ],
    kata: [
      {
        name: "Pinan Sono Ichi",
        description: "Primeiro kata do sistema Pinan, mais complexo que os Taikyoku",
        focus: "Múltiplas direções, variações de ritmo"
      }
    ],
    kumite: {
      required: true,
      description: "Yakusoku Kumite intermediário com 5 ataques + início de Jiyū Kumite controlado",
      details: [
        "Sequências de ataque/defesa mais longas",
        "Introdução ao combate semi-livre"
      ]
    },
    tameshiwari: {
      required: false,
      description: "Não há quebramento formal, mas introdução ao makiwara"
    },
    theory: {
      required: true,
      topics: [
        "Princípios do Dōjō Kun em detalhe",
        "História de Mas Oyama (introdução)",
        "Nomenclatura de técnicas básicas",
        "Contagem até 30",
        "Conceito de Zanshin (estado de alerta)"
      ]
    },
    tips: [
      "Comece a treinar no makiwara suavemente",
      "Foque em transições suaves entre técnicas",
      "Desenvolva flexibilidade para chutes laterais",
      "Pratique combinações em movimento"
    ]
  },

  "8kyu": {
    name: "Faixa Azul",
    level: "8º Kyu",
    color: "#4169e1",
    image: "img/DogiObi/8Kyu.JPG",
    description: "O céu se expande. Maior consciência e controle.",
    philosophy: "A faixa azul representa o céu, simbolizando a expansão da consciência e o desenvolvimento de um espírito mais elevado no caminho do Budō.",
    requirements: {
      minTime: "4-5 meses como 9º Kyu",
      trainingDays: "Mínimo 3x por semana",
      age: "A partir de 7 anos"
    },
    techniques: [
      {
        category: "Hiji Uchi Completo (Cotoveladas)",
        items: [
          "Mae Hiji Uchi (Cotovelada frontal)",
          "Yoko Hiji Uchi (Cotovelada lateral)",
          "Ushiro Hiji Uchi (Cotovelada reversa)",
          "Otoshi Hiji Uchi (Cotovelada descendente)"
        ]
      },
      {
        category: "Geri Waza Avançado",
        items: [
          "Mawashi Geri Chūdan (Chute circular médio)",
          "Mawashi Geri Jōdan (Chute circular alto)",
          "Ushiro Geri (Chute reverso)",
          "Mae Ashi Mawashi Geri (Chute circular com perna dianteira)"
        ]
      },
      {
        category: "Sabaki (Deslocamentos)",
        items: [
          "Taisabaki básico (movimentação corporal)",
          "Ashi Sabaki (movimentação dos pés)",
          "Esquivas laterais e angulares"
        ]
      }
    ],
    kata: [
      {
        name: "Pinan Sono Ni",
        description: "Segundo kata Pinan, com técnicas de mão aberta e chutes laterais",
        focus: "Fluidez, transições, variações de velocidade"
      }
    ],
    kumite: {
      required: true,
      description: "Jiyū Kumite controlado + Yakusoku Kumite avançado",
      details: [
        "Combates de 1 minuto com controle",
        "Trabalho de distância e timing",
        "Introdução ao uso de estratégias"
      ]
    },
    tameshiwari: {
      required: true,
      description: "Primeiro quebramento formal",
      details: [
        "1 tábua de madeira balsa ou similar (20cm x 30cm x 1cm)",
        "Técnica: Seiken Chūdan Tsuki ou Shuto Uchi"
      ]
    },
    theory: {
      required: true,
      topics: [
        "Vida de Mas Oyama - aprofundamento",
        "Os 11 princípios do Kyokushin",
        "Termos de Kumite",
        "Anatomia básica - pontos de ataque",
        "Conceito de Ma-ai (distância)"
      ]
    },
    tips: [
      "Treine Mawashi Geri todos os dias",
      "Pratique quebramento em materiais progressivamente mais duros",
      "Estude vídeos de combate para entender estratégias",
      "Desenvolva condicionamento aeróbico"
    ]
  },

  "7kyu": {
    name: "Faixa Azul com Traço Amarelo",
    level: "7º Kyu",
    color: "linear-gradient(to right, #4169e1 50%, #ffd700 50%)",
    image: "img/DogiObi/7Kyu.JPG",
    description: "Aprofundamento. A prática se torna mais refinada.",
    philosophy: "O surgimento do amarelo indica o florescimento do conhecimento adquirido, como o sol iluminando o céu azul.",
    requirements: {
      minTime: "5 meses como 8º Kyu",
      trainingDays: "Mínimo 3-4x por semana",
      age: "A partir de 8 anos"
    },
    techniques: [
      {
        category: "Kihon Avançado",
        items: [
          "Todas as técnicas anteriores com maior velocidade e potência",
          "Ren Tsuki (socos contínuos)",
          "Nagashi Tsuki (soco deslizante)"
        ]
      },
      {
        category: "Tobi Geri (Chutes Saltados)",
        items: [
          "Tobi Mae Geri (chute frontal saltado)",
          "Tobi Yoko Geri (chute lateral saltado)",
          "Tobi Hiza Geri (joelhada saltada)"
        ]
      },
      {
        category: "Nage Waza Básico (Projeções)",
        items: [
          "Ashi Barai (varredura de perna)",
          "Seoi Nage (arremesso por cima do ombro) - introdução",
          "Kubi Wa (torção de pescoço) - introdução"
        ]
      }
    ],
    kata: [
      {
        name: "Pinan Sono San",
        description: "Terceiro kata Pinan, introduz movimentos mais dinâmicos",
        focus: "Mudanças de nível, potência, ritmo variado"
      }
    ],
    kumite: {
      required: true,
      description: "Jiyū Kumite com mais intensidade + Ippon Kumite",
      details: [
        "Combates de 1,5 minutos",
        "Trabalho com oponentes de diferentes estilos",
        "Ippon Kumite (combate de um golpe)"
      ]
    },
    tameshiwari: {
      required: true,
      description: "Quebramento intermediário",
      details: [
        "2 tábuas ou 1 telha",
        "Técnicas: Seiken, Shuto ou Hiji Uchi"
      ]
    },
    theory: {
      required: true,
      topics: [
        "Filosofia Zen aplicada ao Karate",
        "Conceito de Mushin (mente vazia)",
        "História do Karate Okinawa",
        "Diferenças entre estilos de Karate",
        "Princípios biomecânicos do Karate"
      ]
    },
    tips: [
      "Comece a estudar bunkai (aplicações) dos katas",
      "Aumente a intensidade nos treinos de kumite",
      "Pratique quedas e rolamentos com segurança",
      "Desenvolva resistência cardiovascular"
    ]
  },

  "6kyu": {
    name: "Faixa Amarela",
    level: "6º Kyu",
    color: "#ffd700",
    image: "img/DogiObi/6Kyu.JPG",
    description: "A luz do conhecimento. Compreensão mais profunda.",
    philosophy: "O amarelo representa a luz dourada do conhecimento que ilumina o caminho do praticante, revelando profundidades antes ocultas.",
    requirements: {
      minTime: "6 meses como 7º Kyu",
      trainingDays: "Mínimo 3-4x por semana",
      age: "A partir de 8 anos"
    },
    techniques: [
      {
        category: "Técnicas Circulares Avançadas",
        items: [
          "Ura Mawashi Geri (chute circular reverso)",
          "Kakato Geri (chute com calcanhar)",
          "Ushiro Mawashi Geri (chute circular reverso girado)"
        ]
      },
      {
        category: "Kumite Waza (Técnicas de Combate)",
        items: [
          "Combinações de 3-4 golpes",
          "Contra-ataques em movimento",
          "Finalizações após projeção"
        ]
      },
      {
        category: "Bunkai (Aplicações)",
        items: [
          "Bunkai de Pinan Sono Ichi e Ni",
          "Compreensão prática dos movimentos",
          "Adaptações para situações reais"
        ]
      }
    ],
    kata: [
      {
        name: "Pinan Sono Yon",
        description: "Quarto kata Pinan, com mudanças de direção complexas",
        focus: "Consciência espacial, equilíbrio, controle"
      },
      {
        name: "Revisão completa",
        description: "Todos os katas anteriores devem ser dominados"
      }
    ],
    kumite: {
      required: true,
      description: "Jiyū Kumite intenso + trabalho com múltiplos oponentes",
      details: [
        "Combates de 2 minutos",
        "Randori (combate com múltiplos oponentes)",
        "Desenvolvimento de estratégias pessoais"
      ]
    },
    tameshiwari: {
      required: true,
      description: "Quebramento variado",
      details: [
        "3 tábuas ou 2 telhas",
        "Pelo menos 2 técnicas diferentes (mão e pé)",
        "Demonstração de precisão e controle"
      ]
    },
    theory: {
      required: true,
      topics: [
        "Os 7 Chakras e Anahata (chakra cardíaco)",
        "Princípios de Ki (energia)",
        "Kokoro (coração/mente/espírito)",
        "Ética marcial e aplicação na vida",
        "Primeiros socorros básicos"
      ]
    },
    tips: [
      "Inicie treinamento com equipamentos (luvas, caneleiras)",
      "Participe de seminários e eventos de Karate",
      "Comece a ensinar iniciantes sob supervisão",
      "Desenvolva seu próprio diário de treino"
    ]
  },

  "5kyu": {
    name: "Faixa Amarela com Traço Verde",
    level: "5º Kyu",
    color: "linear-gradient(to right, #ffd700 50%, #228b22 50%)",
    image: "img/DogiObi/5Kyu.JPG",
    description: "Transição para maturidade técnica.",
    philosophy: "O verde emergindo do amarelo simboliza o crescimento robusto e a solidificação das bases do conhecimento.",
    requirements: {
      minTime: "6 meses como 6º Kyu",
      trainingDays: "Mínimo 4x por semana",
      age: "A partir de 9 anos"
    },
    techniques: [
      {
        category: "Refinamento Técnico",
        items: [
          "Todas as técnicas com foco em eficiência",
          "Uso mínimo de energia para máximo efeito",
          "Precisão sobre velocidade bruta"
        ]
      },
      {
        category: "Kumite Ippon (Combate de um golpe)",
        items: [
          "Jōdan, Chūdan, Mae Geri, Mawashi Geri, Yoko Geri",
          "Desenvolvimento de reflexos e timing perfeito"
        ]
      },
      {
        category: "Goshin Jutsu (Defesa Pessoal)",
        items: [
          "Defesas contra agarramentos",
          "Defesas contra armas (simuladas)",
          "Situações práticas de auto-defesa"
        ]
      }
    ],
    kata: [
      {
        name: "Pinan Sono Go",
        description: "Quinto e último kata Pinan, o mais complexo da série",
        focus: "Síntese de todos os princípios Pinan, saltos, giros"
      }
    ],
    kumite: {
      required: true,
      description: "Kumite avançado com todas as modalidades",
      details: [
        "Combates de 2-3 minutos",
        "Jiyū Kumite, Ippon Kumite, Randori",
        "Participação em shiai (competição) recomendada"
      ]
    },
    tameshiwari: {
      required: true,
      description: "Quebramento demonstrando controle mental",
      details: [
        "4 tábuas ou 3 telhas",
        "Demonstração com pelo menos 3 técnicas diferentes",
        "Foco em concentração e Kime"
      ]
    },
    theory: {
      required: true,
      topics: [
        "Aprofundamento nos 11 princípios",
        "Bushidō (código do guerreiro)",
        "Sun Tzu e estratégia marcial",
        "Psicologia do combate",
        "Nutrição para atletas marciais"
      ]
    },
    tips: [
      "Comece a competir em torneios",
      "Estude diferentes mestres e suas filosofias",
      "Desenvolva sua própria interpretação dos katas",
      "Ajude ativamente no dōjō como sempai"
    ]
  },

  "4kyu": {
    name: "Faixa Verde",
    level: "4º Kyu",
    color: "#228b22",
    image: "img/DogiObi/4Kyu.JPG",
    description: "Crescimento sólido. A árvore está firme.",
    philosophy: "A faixa verde representa a árvore que cresce firme e forte, com raízes profundas no conhecimento e galhos se expandindo para novos horizontes.",
    requirements: {
      minTime: "8 meses como 5º Kyu",
      trainingDays: "Mínimo 4x por semana",
      age: "A partir de 10 anos"
    },
    techniques: [
      {
        category: "Kata Waza Avançado",
        items: [
          "Execução impecável de todos os katas básicos",
          "Início do estudo de katas superiores",
          "Compreensão profunda de Bunkai"
        ]
      },
      {
        category: "Taihen Jutsu (Arte da Movimentação)",
        items: [
          "Quedas avançadas (Zenpo Kaiten Ukemi)",
          "Esquivas complexas (Sabaki avançado)",
          "Movimentação em múltiplas direções"
        ]
      },
      {
        category: "Kyusho (Pontos Vitais)",
        items: [
          "Estudo teórico dos pontos de pressão",
          "Aplicações controladas em treinamento",
          "Responsabilidade no uso do conhecimento"
        ]
      }
    ],
    kata: [
      {
        name: "Tsuki no Kata",
        description: "Kata de socos, focado em técnicas de punho",
        focus: "Potência, velocidade, ritmo"
      },
      {
        name: "Revisão Pinan",
        description: "Todos os 5 katas Pinan devem ser executados com maestria"
      }
    ],
    kumite: {
      required: true,
      description: "Kumite de nível avançado, aproximando-se do nível de competição",
      details: [
        "Combates de 3 minutos (tempo de competição)",
        "Trabalho intensivo em todas as distâncias",
        "Desenvolvimento de estilo pessoal"
      ]
    },
    tameshiwari: {
      required: true,
      description: "Quebramento demonstrando maestria técnica",
      details: [
        "5 tábuas ou 4 telhas",
        "Variedade de técnicas (mãos, pés, cotovelos, joelhos)",
        "Possível introdução a quebramento de gelo ou pedra"
      ]
    },
    theory: {
      required: true,
      topics: [
        "História detalhada do Kyokushin IKO",
        "Linhagem de mestres",
        "Filosofia de Mas Oyama sobre treino intensivo",
        "Princípios de treinamento (Osu no Seishin)",
        "Fisiologia do condicionamento marcial"
      ]
    },
    tips: [
      "Participe de gasshuku (treino intensivo)",
      "Comece a preparação mental para o exame de faixa marrom",
      "Auxilie na organização de eventos do dōjō",
      "Desenvolva mentalidade de liderança"
    ]
  },

  "3kyu": {
    name: "Faixa Verde com Traço Marrom",
    level: "3º Kyu",
    color: "linear-gradient(to right, #228b22 50%, #8b4513 50%)",
    image: "img/DogiObi/3Kyu.JPG",
    description: "Preparação para a maestria. Responsabilidade aumenta.",
    philosophy: "O marrom começando a aparecer simboliza a terra fértil que sustenta a árvore, representando a base sólida para a futura maestria.",
    requirements: {
      minTime: "8-10 meses como 4º Kyu",
      trainingDays: "Mínimo 4-5x por semana",
      age: "A partir de 11 anos"
    },
    techniques: [
      {
        category: "Henka Waza (Técnicas Variadas)",
        items: [
          "Improvisação baseada em princípios",
          "Adaptação instantânea",
          "Resposta natural sem pensamento"
        ]
      },
      {
        category: "Renzoku Waza (Técnicas Contínuas)",
        items: [
          "Combinações longas e fluidas",
          "Transições sem interrupção",
          "Fluxo constante de ataques e defesas"
        ]
      },
      {
        category: "Jissen Kumite (Combate Realista)",
        items: [
          "Simulações de situações reais",
          "Kumite com proteção mínima",
          "Desenvolvimento de coragem"
        ]
      }
    ],
    kata: [
      {
        name: "Gekisai Dai",
        description: "Kata de ataque e destruição, dinâmico e poderoso",
        focus: "Explosão, potência, Kiai forte"
      },
      {
        name: "Gekisai Sho",
        description: "Variação do Gekisai com ênfase diferente",
        focus: "Controle, precisão, timing"
      }
    ],
    kumite: {
      required: true,
      description: "Kumite em nível pré-Shodan",
      details: [
        "Participação ativa em competições",
        "Combates com faixas pretas",
        "Demonstração de estratégia avançada",
        "Capacidade de ensinar kumite a outros"
      ]
    },
    tameshiwari: {
      required: true,
      description: "Quebramento demonstrando força mental e física",
      details: [
        "6 tábuas ou 5 telhas",
        "Quebramento de materiais mais resistentes",
        "Demonstração de múltiplas técnicas em sequência"
      ]
    },
    theory: {
      required: true,
      topics: [
        "Preparação para responsabilidade de faixa preta",
        "Papel do Sempai/Senpai",
        "Ética do ensino marcial",
        "Conceitos avançados de Budō",
        "Meditação e desenvolvimento espiritual"
      ]
    },
    tips: [
      "Assuma papel de assistente de instrutor",
      "Comece a planejar seu exame de Shodan",
      "Participe de múltiplos gasshuku",
      "Desenvolva relacionamento mentor-discípulo",
      "Estude a filosofia além da técnica"
    ]
  },

  "2kyu": {
    name: "Faixa Marrom",
    level: "2º Kyu",
    color: "#8b4513",
    image: "img/DogiObi/2Kyu.JPG",
    description: "A terra fértil. Quase pronto para a colheita.",
    philosophy: "A faixa marrom representa a terra rica e fértil, pronta para dar frutos. O praticante está próximo da maturidade técnica e espiritual.",
    requirements: {
      minTime: "10-12 meses como 3º Kyu",
      trainingDays: "Mínimo 5x por semana",
      age: "A partir de 12 anos"
    },
    techniques: [
      {
        category: "Maestria de Fundamentos",
        items: [
          "Execução perfeita de todas as técnicas básicas",
          "Demonstração de princípios em movimento livre",
          "Capacidade de ensinar todos os kihon"
        ]
      },
      {
        category: "Kata Superiores",
        items: [
          "Início do estudo de katas avançados",
          "Compreensão profunda de Okuden (ensinamentos internos)",
          "Desenvolvimento de interpretação pessoal"
        ]
      },
      {
        category: "Kumite Avançado",
        items: [
          "Todos os estilos de kumite",
          "Capacidade de lutar em qualquer condição",
          "Resistência e espírito inquebráveis"
        ]
      }
    ],
    kata: [
      {
        name: "Saiha",
        description: "Kata de força máxima, teste de resistência",
        focus: "Potência explosiva, respiração, Kime"
      },
      {
        name: "Todos os anteriores",
        description: "Domínio completo de todos os katas aprendidos"
      }
    ],
    kumite: {
      required: true,
      description: "Kumite de nível Shodan",
      details: [
        "Competição em nível avançado",
        "30-50 combates contínuos (uchi-komi)",
        "Demonstração de espírito Osu",
        "Capacidade de lutar além da exaustão"
      ]
    },
    tameshiwari: {
      required: true,
      description: "Quebramento demonstrando preparação para Shodan",
      details: [
        "Pelo menos 8 tábuas ou materiais equivalentes",
        "Variedade completa de técnicas",
        "Quebramento em múltiplos ângulos",
        "Demonstração de controle absoluto"
      ]
    },
    theory: {
      required: true,
      topics: [
        "Preparação final para Shodan",
        "Responsabilidades de um Yūdansha",
        "História completa do Kyokushin",
        "Linhagem detalhada de instrutores",
        "Filosofia de vida segundo o Kyokushin",
        "Planejamento de carreira como karateka"
      ]
    },
    tips: [
      "Treine como se já fosse faixa preta",
      "Participe de Hyakunin Kumite (se possível)",
      "Desenvolva mentalidade de nunca desistir",
      "Estude mestres históricos do Karate",
      "Prepare-se física e mentalmente para o exame mais difícil"
    ]
  },

  "1kyu": {
    name: "Faixa Marrom com Traço Preto",
    level: "1º Kyu",
    color: "linear-gradient(to right, #8b4513 50%, #000000 50%)",
    image: "img/DogiObi/1Kyu.JPG",
    description: "Último degrau. Preparação final para o Shodan.",
    philosophy: "O preto surgindo no marrom simboliza a proximidade da maestria básica. O praticante está às portas do verdadeiro início.",
    requirements: {
      minTime: "12-18 meses como 2º Kyu",
      trainingDays: "Diariamente (6-7x por semana)",
      age: "Mínimo 14 anos (varia por organização)"
    },
    techniques: [
      {
        category: "Repertório Completo",
        items: [
          "Todas as técnicas do Kyokushin",
          "Capacidade de demonstrar qualquer waza",
          "Ensino de todos os níveis"
        ]
      },
      {
        category: "Especialização",
        items: [
          "Desenvolvimento de tokui waza (técnicas favoritas)",
          "Estilo pessoal de combate",
          "Assinatura técnica reconhecível"
        ]
      },
      {
        category: "Liderança",
        items: [
          "Condução de treinos completos",
          "Orientação de outros estudantes",
          "Representação do dōjō"
        ]
      }
    ],
    kata: [
      {
        name: "Yantsu",
        description: "Kata avançado, fluido e poderoso",
        focus: "Harmonia entre força e suavidade"
      },
      {
        name: "Seienchin",
        description: "Kata de posições baixas e força",
        focus: "Resistência, bases sólidas, controle"
      },
      {
        name: "Revisão Completa",
        description: "Todos os katas anteriores executados com excelência"
      }
    ],
    kumite: {
      required: true,
      description: "Kumite de exame para Shodan",
      details: [
        "Múltiplas rodadas contra vários oponentes",
        "50-100 combates contínuos",
        "Demonstração de coragem e perseverança",
        "Manutenção de técnica sob extrema fadiga",
        "Espírito inabalável até o fim"
      ]
    },
    tameshiwari: {
      required: true,
      description: "Quebramento final antes do Shodan",
      details: [
        "10+ tábuas ou materiais diversos",
        "Demonstração de todas as técnicas aprendidas",
        "Quebramento de materiais desafiadores",
        "Apresentação como demonstração de arte",
        "Concentração perfeita sob pressão"
      ]
    },
    theory: {
      required: true,
      topics: [
        "Ensaio sobre 'O que é Kyokushin para mim'",
        "Conhecimento enciclopédico de Kyokushin",
        "Capacidade de responder qualquer pergunta técnica",
        "Compreensão filosófica profunda",
        "Planejamento de contribuição ao Kyokushin",
        "Preparação para apresentação oral no exame"
      ]
    },
    tips: [
      "Este é o momento de máximo esforço",
      "Treine além dos limites conhecidos",
      "Medite sobre o significado de ser faixa preta",
      "Busque orientação de seu Sensei constantemente",
      "Lembre-se: o exame de Shodan é o fim do começo",
      "Prepare corpo, mente e espírito igualmente"
    ]
  },

  "1dan": {
    name: "Faixa Preta - Shodan",
    level: "1º Dan",
    color: "#000000",
    image: "img/DogiObi/1Dan.JPG",
    description: "O início verdadeiro. A jornada do guerreiro começa.",
    philosophy: "A faixa preta não representa o fim, mas o verdadeiro começo. O negro simboliza a profundidade do conhecimento ainda a ser descoberto. Shodan significa 'primeiro nível' - o praticante agora começa sua verdadeira jornada no caminho do Kyokushin.",
    requirements: {
      minTime: "12-18 meses como 1º Kyu + mínimo de 4-5 anos desde o início",
      trainingDays: "Compromisso vitalício",
      age: "Mínimo 16 anos (adulto) ou 14 anos (júnior)"
    },
    techniques: [
      {
        category: "Maestria Fundamental",
        items: [
          "Execução impecável de todos os kihon",
          "Compreensão profunda dos princípios",
          "Capacidade de ensinar todos os níveis",
          "Demonstração de excelência técnica"
        ]
      },
      {
        category: "Tokui Waza (Técnicas Especiais)",
        items: [
          "Desenvolvimento completo de especialidades",
          "Assinatura pessoal no Karate",
          "Contribuição única ao dōjō"
        ]
      },
      {
        category: "Budō no Kokoro (Espírito Marcial)",
        items: [
          "Incorporação completa do Osu no Seishin",
          "Viver os princípios do Dōjō Kun",
          "Ser exemplo dentro e fora do dōjō"
        ]
      }
    ],
    kata: [
      {
        name: "Todos os Katas Básicos",
        description: "Taikyoku, Pinan, Tsuki no Kata com perfeição"
      },
      {
        name: "Katas Intermediários",
        description: "Gekisai Dai/Sho, Saiha, Yantsu, Seienchin"
      },
      {
        name: "Início dos Katas Avançados",
        description: "Introdução a Kanku Dai, Bassai Dai, etc."
      }
    ],
    kumite: {
      required: true,
      description: "Kumite de Shodan - Teste definitivo",
      details: [
        "Exame pode incluir 50-100 combates (Kumite)",
        "Luta contra múltiplos oponentes simultaneamente",
        "Manutenção de técnica sob extrema exaustão",
        "Demonstração de espírito inabalável",
        "Alguns exames incluem Hyakunin Kumite (100 combates)",
        "Capacidade de continuar além dos limites"
      ]
    },
    tameshiwari: {
      required: true,
      description: "Tameshiwari de nível Shodan",
      details: [
        "Múltiplas estações de quebramento",
        "Variedade completa de técnicas",
        "Demonstração de potência máxima",
        "Quebramento de materiais diversos (madeira, telha, gelo, pedra)",
        "Apresentação como arte demonstrativa"
      ]
    },
    theory: {
      required: true,
      topics: [
        "Apresentação oral sobre Kyokushin",
        "Demonstração de conhecimento completo",
        "História, filosofia, técnica",
        "Compromisso com o caminho",
        "Planos de contribuição futura",
        "Compreensão de responsabilidade como Yūdansha"
      ]
    },
    responsibilities: [
      "Ser exemplo constante de Osu no Seishin",
      "Ensinar e orientar estudantes juniores",
      "Continuar treinando diariamente",
      "Participar de competições e representar o dōjō",
      "Contribuir para a organização e eventos",
      "Estudar continuamente e buscar aperfeiçoamento",
      "Viver os princípios do Kyokushin na vida diária",
      "Preparar-se para os próximos Dans"
    ],
    quote: "Shodan wa hajimari - Shodan é apenas o começo",
    tips: [
      "A faixa preta não é um destino, mas um novo ponto de partida",
      "Agora você realmente começa a entender o Karate",
      "A responsabilidade aumenta exponencialmente",
      "Seja humilde - há muito mais a aprender",
      "Treine com o mesmo espírito de quando era faixa branca",
      "Seu treino agora é para a vida toda",
      "Lembre-se sempre: 'Um dia, uma vida' (Ichi nichi, issho)"
    ]
  }
};

// Função auxiliar para obter dados de uma graduação
function getGraduationData(graduationKey) {
  return graduationsData[graduationKey] || null;
}

// Exportar os dados (para uso em outros scripts)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { graduationsData, getGraduationData };
}
