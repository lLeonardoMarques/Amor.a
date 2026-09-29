import { Service, PortfolioItem, Testimonial, ProcessStep, TeamMember, FAQItem, BlogPost } from '../types';
import {
  joyceCostaImg,
  agathaZillarImg,
  amoraWeddingDecorImg,
  amoraTableFlowersImg
} from '../assets/images';

export const teamMembers: TeamMember[] = [
  {
    name: 'Joyce',
    surname: 'Costa',
    role: 'Assessora e Coordenadora de Eventos',
    bio: 'Especialista em regência e coordenação executiva de eventos de alto padrão. Com olhar estético apurado e precisão milimétrica em cronogramas, Joyce garante que cada minuto do seu grande dia aconteça com fluidez, elegância e absoluta tranquilidade.',
    signature: 'Joyce Costa',
    instagram: '@jooiicossta',
    instagramUrl: 'https://instagram.com/jooiicossta',
    photo: joyceCostaImg,
    quote: 'O sucesso de um evento mora nos detalhes invisíveis que fazem os anfitriões se sentirem verdadeiros convidados.',
    badges: ['Planejamento Personalizado', 'Coordenação do Grande Dia', 'Experiências Únicas']
  },
  {
    name: 'Agatha',
    surname: 'Zillar',
    role: 'Assessora de Eventos',
    bio: 'Apaixonada por histórias e curadoria sensível. Agatha lidera a gestão estratégica de fornecedores e a arquitetura emocional de cada projeto, transformando desejos singulares em atmosferas inesquecíveis com afeto, sofisticação e rigor contratual.',
    signature: 'Agatha Zillar',
    instagram: '@agatha_zillar',
    instagramUrl: 'https://instagram.com/agatha_zillar',
    photo: agathaZillarImg,
    quote: 'Transformamos sonhos em experiências reais com organização, sensibilidade e atenção em cada detalhe.',
    badges: ['Gestão Completa', 'Fornecedores Selecionados', 'Experiência Leve & Única']
  }
];

export const servicesData: Service[] = [
  {
    id: 'casamentos',
    title: 'Casamentos & Mini Weddings',
    subtitle: 'Assessoria Completa, Personalizada ou do Dia',
    description: 'Do conceito inicial à última dança da pista. Cuidamos do orçamento global, contratações, curadoria cenográfica e regência do cerimonial para que seu dia seja puramente mágico.',
    iconName: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
    features: [
      'Assessoria Completa ou Assessoria Final (do dia)',
      'Cronograma detalhado minuto a minuto (R.S.V.P. incluso)',
      'Curadoria e equalização de contratos de fornecedores',
      'Acompanhamento presencial em visitas técnicas e degustações',
      'Supervisão minuciosa da montagem e cerimônia'
    ],
    recommendedFor: 'Noivos que desejam viver a fase dos preparativos com leveza e serenidade.'
  },
  {
    id: 'corporativos',
    title: 'Eventos Corporativos',
    subtitle: 'Lançamentos, Galas, Premiações & Congressos',
    description: 'A precisão operacional e o refinamento estético que sua marca exige. Entregamos eventos corporativos que fortalecem relacionamentos e impressionam stakeholders.',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
    features: [
      'Gestão de credenciamento e fluxo de convidados VIP',
      'Alinhamento com diretrizes de branding e endomarketing',
      'Coordenação de palco, som, luz cênica e transmissões',
      'Gestão orçamentária com prestação de contas transparente',
      'Plano de contingência e suporte operacional integral'
    ],
    recommendedFor: 'Empresas que prezam por pontualidade, elegância corporativa e retorno de imagem.'
  },
  {
    id: 'aniversarios',
    title: 'Aniversários & Celebrações',
    subtitle: '15 Anos, Bodas & Festas Marcantes',
    description: 'Comemorações que celebram capítulos inesquecíveis da vida. Criamos atmosferas vibrantes e acolhedoras com identidade própria para cada homenageado.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80',
    features: [
      'Definição de temática visual e projeto cenográfico',
      'Seleção de gastronomia exclusiva e mixologia artística',
      'Coordenação de protocolo, homenagens e atrações musicais',
      'Acompanhamento no ensaio da valsa ou coreografias',
      'Segurança e atendimento prioritário à família'
    ],
    recommendedFor: 'Famílias e anfitriões que desejam comemorar sem qualquer sobrecarga de organização.'
  },
  {
    id: 'sociais',
    title: 'Eventos Sociais Exclusivos',
    subtitle: 'Batizados, Noivados & Mini Events Intimistas',
    description: 'Momentos especiais para pequenos círculos de pessoas queridas. O mesmo rigor e sofisticação das grandes produções, adaptados ao aconchego de celebrações intimistas.',
    iconName: 'Wine',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
    features: [
      'Curadoria para residências particulares ou bistrôs exclusivos',
      'Mesa posta de alto padrão e floral design sob medida',
      'Gestão de staff reduzido e atendimento discreto',
      'Cronograma leve focado na convivência e bem-estar',
      'Registro fotográfico e lembranças personalizadas'
    ],
    recommendedFor: 'Comemorações intimistas que exigem bom gosto refinado e máxima privacidade.'
  }
];

export const processSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Briefing & Consultoria',
    tagline: 'Onde o seu sonho ganha forma e direção',
    description: 'Reunião aprofundada com Joyce e Agatha para compreender suas expectativas, perfil estético, prioridades financeiras e dimensão do evento.',
    deliverables: [
      'Mapeamento completo do estilo e essência do evento',
      'Estruturação da planilha orçamentária estimada',
      'Definição do cronograma macro até o grande dia'
    ]
  },
  {
    stepNumber: '02',
    title: 'Planejamento & Curadoria',
    tagline: 'A seleção dos melhores talentos para o seu projeto',
    description: 'Filtramos e apresentamos apenas fornecedores comprovadamente confiáveis e alinhados ao seu perfil, equalizando propostas e garantindo segurança jurídica.',
    deliverables: [
      'Indicação de espaços, gastronomia, decoração e fotografia',
      'Análise crítica de contratos e negociação de condições',
      'Visitas técnicas de validação espacial e logística'
    ]
  },
  {
    stepNumber: '03',
    title: 'Execução & Coordenação',
    tagline: 'Regência milimétrica com graça e discrição',
    description: 'No grande dia, nossa equipe coordena todos os fornecedores, comanda o cerimonial e resolve imprevistos antes mesmo que você perceba.',
    deliverables: [
      'Roteiro minuto a minuto compartilhado com fornecedores',
      'Conferência de montagem e checagem de itens contratados',
      'Acolhimento de anfitriões, cortejo e condução de protocolos'
    ]
  },
  {
    stepNumber: '04',
    title: 'Pós-Evento & Memórias',
    tagline: 'Fechamento sereno e memórias inesquecíveis',
    description: 'Conferência de sobras, devolução de itens alugados e fechamento operacional transparente para que o dia seguinte seja de puro descanso e celebração.',
    deliverables: [
      'Relatório de encerramento e contagem de itens de buffet',
      'Devolução organizada de pertences pessoais e adereços',
      'Entrega de memórias e suporte ao pós-celebração'
    ]
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'casamento-camila-lucas',
    title: 'Camila & Lucas: Romantismo Contemporâneo',
    category: 'casamentos',
    categoryLabel: 'Casamento Clássico Moderno',
    subtitle: 'Celebração ao entardecer no Jardim Botanique',
    date: 'Maio de 2025',
    location: 'Fazenda Vila Rica, Itatiba - SP',
    guestsCount: '280 convidados',
    image: amoraWeddingDecorImg,
    galleryImages: [
      amoraWeddingDecorImg,
      amoraTableFlowersImg,
      'https://images.unsplash.com/photo-1519228420658-0051d95015b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Um projeto que uniu o aconchego rústico-chique a detalhes em tons amora, nude e velas suspensas. A cerimônia a céu aberto foi seguida de um banquete memorável e pista de dança animada até o amanhecer.',
    highlights: ['Cerimônia sob pérgola florida', 'Mesa de doces com design escultural', 'Coordenação de 32 fornecedores']
  },
  {
    id: 'gala-alvorada',
    title: 'Gala Anual Grupo Alvorada 30 Anos',
    category: 'corporativos',
    categoryLabel: 'Gala Corporativa',
    subtitle: 'Jantar executivo e premiação para 400 líderes',
    date: 'Setembro de 2025',
    location: 'Palácio Tangará, São Paulo - SP',
    guestsCount: '420 convidados',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Noite de premiação e celebração corporativa com iluminação cênica de ponta, orquestra ao vivo e cronograma de protocolo executivo com pontualidade suíça.',
    highlights: ['Credenciamento VIP digital', 'Cenografia com telões curvos de LED', 'Menú empratado assinado por chef estrelado']
  },
  {
    id: 'debut-isabella',
    title: 'Debutante Isabella: Noite Encantada em Marsala & Ouro',
    category: 'celebracoes',
    categoryLabel: 'Festa de 15 Anos',
    subtitle: 'Uma celebração etérea inspirada nos jardins de inverno',
    date: 'Novembro de 2025',
    location: 'Espaço Contemporâneo, Jardins - SP',
    guestsCount: '220 convidados',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Transformação cenográfica deslumbrante com lustres de cristal, túnel de flores e momentos emocionantes de homenagens que arrancaram lágrimas e sorrisos da aniversariante e familiares.',
    highlights: ['Troca de vestidos com timing impecável', 'Bar de coquetéis sem álcool personalizados', 'Coreografia surpresa com as amigas']
  },
  {
    id: 'casamento-beatriz-guilherme',
    title: 'Beatriz & Guilherme: Destination Wedding na Praia',
    category: 'casamentos',
    categoryLabel: 'Destination Wedding',
    subtitle: 'Fim de semana completo de celebração em Ilhabela',
    date: 'Fevereiro de 2026',
    location: 'Ilhabela, Litoral Norte - SP',
    guestsCount: '160 convidados',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Logística integrada de hospedagem, welcome drink na sexta-feira e cerimônia pé na areia no sábado. O plano B montado com elegância protegeu o casal de uma garoa passageira sem alterar o visual paradisíaco.',
    highlights: ['Logística de transfer para 160 pessoas', 'Welcome Party náutica', 'Decoração botânica em harmonia com o mar']
  },
  {
    id: 'noivado-helena-marcelo',
    title: 'Noivado Helena & Marcelo: Jantar Intimista',
    category: 'sociais',
    categoryLabel: 'Noivado & Evento Social',
    subtitle: 'Recepção intimista no terraço da família',
    date: 'Julho de 2025',
    location: 'Alto de Pinheiros, São Paulo - SP',
    guestsCount: '45 convidados',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Mesa posta italiana com linho puro, taças de cristal e arranjos florais orgânicos. Assessoria que cuidou de cada detalhe permitindo que os pais dos noivos desfrutassem de cada segundo sem preocupações.',
    highlights: ['Mesa de antepastos artesanais', 'Quarteto acústico de cordas', 'Ambientação sensorial com velas aromáticas']
  },
  {
    id: 'summit-inovacao',
    title: 'Inovação & Futuro Summit',
    category: 'corporativos',
    categoryLabel: 'Congresso & Painéis',
    subtitle: 'Ciclo de palestras e networking corporativo',
    date: 'Abril de 2025',
    location: 'WTC Events Center, São Paulo - SP',
    guestsCount: '350 convidados',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Produção executiva de ponta com três palcos simultâneos, coffee break gourmet dinâmico e gestão de palestrantes nacionais e internacionais.',
    highlights: ['Três salas simultâneas', 'Coffee break contínuo', 'Feedback de satisfação de 99.4%']
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    clientName: 'Mariana & Rodrigo',
    roleOrEvent: 'Casamento no Campo (Itatiba - SP)',
    eventDate: 'Maio de 2025',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'A Joyce e a Agatha foram anjos na nossa vida! Antes de conhecê-las, estávamos perdidos com dezenas de orçamentos e prazos. No grande dia, nós não soubemos de nenhum problema: só rimos, dançamos e nos emocionamos. Cada detalhe foi perfeito!',
    highlightPhrase: 'Não soubemos de nenhum problema: só rimos, dançamos e nos emocionamos.'
  },
  {
    id: '2',
    clientName: 'Dra. Fernanda Siqueira',
    roleOrEvent: 'Diretora de Marketing • Gala Farmacêutica 2025',
    eventDate: 'Agosto de 2025',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'A precisão operacional da equipe da Amora Assessoria é surreal. Cumpriram cada minuto da grade de palestras e do jantar corporativo com elegância e cordialidade. Nossa diretoria executiva teceu elogios unânimes.',
    highlightPhrase: 'Cumpriram cada minuto com elegância e cordialidade impecáveis.'
  },
  {
    id: '3',
    clientName: 'Carla & Thiago',
    roleOrEvent: 'Mini Wedding Íntimo (Vila Madalena - SP)',
    eventDate: 'Dezembro de 2025',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'O slogan delas é a mais pura verdade: "Você sonha, a gente realiza". A energia da Joyce e a atenção aos detalhes da Agatha transmitem uma paz indescritível. Ter a Amora conosco foi o melhor investimento do nosso casamento.',
    highlightPhrase: 'Ter a Amora conosco foi o melhor investimento do nosso casamento.'
  },
  {
    id: '4',
    clientName: 'Patrícia Mendes (Mãe da Debutante Laura)',
    roleOrEvent: 'Festa de 15 Anos',
    eventDate: 'Janeiro de 2026',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'Eu pude aproveitar a festa da minha filha como convidada de honra. Elas cuidaram dos fornecedores, das trocas de roupa e do cronograma com um carinho que me emocionou. Só tenho gratidão!',
    highlightPhrase: 'Pude aproveitar a festa da minha filha como convidada de honra.'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Planejamento',
    question: 'Qual a diferença entre Assessoria Completa e Assessoria Final (do dia)?',
    answer: 'Na Assessoria Completa, acompanhamos o casal desde o início: estudo orçamentário, curadoria de todos os fornecedores, análise criteriosa de contratos, visitas técnicas e coordenação do grande dia. Na Assessoria Final (muitas vezes chamada de assessoria do dia), assumimos o projeto cerca de 45 a 60 dias antes do evento para alinhar todos os contratos já fechados, estruturar o roteiro detalhado minuto a minuto e reger com maestria a montagem e a cerimônia.'
  },
  {
    id: 'faq-2',
    category: 'Contratação',
    question: 'Com quanto tempo de antecedência devemos contratar a assessoria?',
    answer: 'Para casamentos e grandes eventos corporativos, recomendamos entre 10 e 18 meses de antecedência. Isso garante maior disponibilidade nas datas dos espaços nobres e melhores condições de negociação com fornecedores de ponta. Contudo, atendemos também prazos menores e assessorias finais com total agilidade.'
  },
  {
    id: 'faq-3',
    category: 'Fornecedores',
    question: 'Vocês impõem fornecedores parceiros ou posso trazer os meus?',
    answer: 'A Amora Assessoria não impõe exclusividade! Apresentamos nossa curadoria de fornecedores de confiança — que conhecemos de perto e sabemos que entregam excelência —, mas se você já tem um fotógrafo, florista ou buffet dos sonhos, acolhemos e alinhamos com a mesma dedicação e rigor técnico.'
  },
  {
    id: 'faq-4',
    category: 'Equipe',
    question: 'A Joyce e a Agatha estarão presentes no dia do meu evento?',
    answer: 'Sim! Valorizamos o atendimento boutique e personalizado. A Joyce e a Agatha estão à frente da gestão de cada projeto, participam dos alinhamentos essenciais e lideram pessoalmente a equipe de coordenação no dia do evento, acompanhadas de assistentes treinados e uniformizados.'
  },
  {
    id: 'faq-5',
    category: 'Região',
    question: 'Vocês realizam eventos fora da cidade de São Paulo (Destination Wedding)?',
    answer: 'Sim! Atendemos toda a Grande São Paulo, interior (Campinas, Itatiba, Sorocaba, Ribeirão Preto), litoral (Ilhabela, São Sebastião, Santos) e destinos em outros estados sob consulta de logística.'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Guia de 12 Meses: O Cronograma Perfeito para Organizar seu Casamento sem Estresse',
    excerpt: 'Descubra como dividir as decisões mês a mês para transformar os preparativos em uma jornada leve, romântica e sem ansiedade.',
    category: 'Planejamento',
    readTime: '4 min de leitura',
    date: '14 de Março de 2026',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    author: 'Joyce Costa',
    content: [
      'Planejar um casamento é muito mais do que assinar contratos: é a construção de um dos dias mais marcantes da vida a dois.',
      'O primeiro passo (12 a 10 meses antes) deve ser sempre a definição clara do orçamento global e do número de convidados. Sem esses dois pilares, qualquer escolha de espaço ou decoração fica vulnerável.',
      'Entre 9 e 6 meses antes, a prioridade passa a ser a fotografia, vídeo e gastronomia — profissionais que costumam ter suas agendas preenchidas com bastante antecedência.',
      'A assessoria entra como o fio condutor que une todas essas pontas, protegendo seu tempo, seu investimento e sua paz de espírito.'
    ]
  },
  {
    id: 'post-2',
    title: 'A Elegância dos Tons Terrosos e Amora na Cenografia dos Casamentos Modernos',
    excerpt: 'Como harmonizar paletas sofisticadas de nude, bege, toques florais em tons amora e iluminação âmbar para criar um ambiente acolhedor.',
    category: 'Estilo & Decoração',
    readTime: '5 min de leitura',
    date: '02 de Março de 2026',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    author: 'Agatha Zillar',
    content: [
      'As paletas neutras e terrosas conquistaram os casamentos contemporâneos por uma razão incontestável: são atemporais, transmitem calor humano e fotografam lindamente.',
      'O segredo para que os tons nude e bege não fiquem monocromáticos ou monótonos é a textura: misture linhos crus, madeira nobre, castiçais dourados e pontos de contraste profundo com flores em tons amora e vinho.',
      'A iluminação é o toque final: velas reais de diferentes alturas e luzes quentes criam um clima intimista que convida os presentes a relaxarem e celebrarem sem pressa.'
    ]
  },
  {
    id: 'post-3',
    title: 'Lista de Convidados Sem Culpa: Como Definir com Serenidade',
    excerpt: 'Estratégias práticas para filtrar sua lista, respeitar o orçamento e priorizar quem realmente faz parte da história do casal.',
    category: 'Dicas Práticas',
    readTime: '3 min de leitura',
    date: '18 de Fevereiro de 2026',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    author: 'Joyce Costa & Agatha Zillar',
    content: [
      'A lista de convidados é frequentemente o ponto de maior tensão entre noivos e familiares. Cada convidado a mais impacta buffet, espaço, lembrancinhas e mobiliário.',
      'Nossa metodologia na Amora Assessoria orienta os casais com a regra dos 12 meses: essa pessoa esteve presente na vida de vocês no último ano? Você celebraria um almoço comum com ela?',
      'Lembre-se: o casamento é uma celebração de amor e verdade. Convidar por obrigação social quase sempre traz arrependimento posterior.'
    ]
  }
];

export const partnersLogos = [
  { name: 'Villa Bisutti', category: 'Espaço Nobre' },
  { name: 'Ghee Banqueteria', category: 'Alta Gastronomia' },
  { name: 'André Pedrotti Flores', category: 'Floral Design' },
  { name: 'Vinicius Credidio', category: 'Fotografia & Cinema' },
  { name: 'Help Bar', category: 'Mixologia Exclusiva' },
  { name: 'DJ Tartaruga & Cia', category: 'Som & Luz Cênica' }
];
