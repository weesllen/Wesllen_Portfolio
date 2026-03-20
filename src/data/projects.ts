export interface Project {
  id: number;
  translationKey: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  techs: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    translationKey: "beaba",
    title: "Beaba da Aprovação",
    subtitle: "Plataforma web  de simulados preparatórios para CNH",
    description: "Desenvolvimento de uma plataforma de simulados voltada para preparação da CNH, com foco na conversão de leads e experiência do usuário. A aplicação oferece simulados por categoria, questões com imagens, feedbacks personalizados, diagnóstico de desempenho e dashboard de evolução. Conta ainda com conteúdos em vídeo e elementos motivacionais, tudo em uma interface leve, dinâmica e intuitiva. A liberação do plano ocorre automaticamente após a confirmação do pagamento, garantindo uma jornada ágil e totalmente automatizada para o usuário.",
    images: ["https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQTenxscffikGR6Am5SOxrNZ2PbEBsTWqu0IHc", "https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQTVa0huJffikGR6Am5SOxrNZ2PbEBsTWqu0IH", "https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQQ1eZLQlALUToqIX7YDFR9jBOmPtzugp2bc1i"],
    techs: ["Next.js", "TypeScript", "Firebase", "React", "N8N", "Tailwind"],
    link: "https://simulados.autoagente.com.br/menu"
  },
  {
    id: 2,
    translationKey: "fadas",
    title: "Fadas Studio  ",
    subtitle: "Agência de marketing digital",
    description: "Desenvolvimento institucional para a Fadas Studio, uma empresa de marketing digital focada em posicionamento estratégico e crescimento de marcas no ambiente online. O projeto foi construído com foco em apresentação clara dos serviços, fortalecimento da identidade da marca e geração de oportunidades de negócio. A aplicação conta com um gerenciador de conteúdo (CMS), permitindo a edição dinâmica de textos, mídias e seções do site de forma prática e escalável. A plataforma destaca soluções como gestão de tráfego, criação de conteúdo e estratégias digitais, com uma comunicação moderna, objetiva e orientada à conversão, proporcionando uma navegação fluida e uma experiência profissional ao usuário.",
    images: ["https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQDEb6uMm9FrvMasufVoCEXemA3QLUtxJP7ln4", "https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQXqnXawGkz7AnmUDxcE3e0RfWTqMsuOdyHZlg  ", "https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQpXczA0BVulCX4mOq1YsFIjTBw5iZN80gkQHJ  "],
    techs: ["Next.js", "TypeScript", "React", "Payload CMS", "Tailwind", "PostgreSQL"],
    link: "https://www.fadasstudio.com.br/"
  },
  {
    id: 3,
    translationKey: "aurora",
    title: "Aurora Logica",
    subtitle: "Landing page focada em  numerologia pitagorica",
    description: "Desenvolvimento de uma landing page para a Aurora Lógica, focada na conversão de leads interessados em análise de nome e numerologia. A aplicação foi estruturada com uma VSL e uma comunicação orientada à conversão, proporcionando uma experiência direta e envolvente para o usuário. Os dados inseridos, como nome e e-mail, são processados por uma API responsável pelos cálculos numerológicos. Após a confirmação do pagamento, o usuário recebe automaticamente por e-mail um relatório personalizado, gerado com apoio de IA, contendo análises, interpretações e sugestões baseadas em seu nome. Todo o fluxo é automatizado, garantindo escalabilidade e agilidade na entrega do serviço.",
    images: ["https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQgGY04LIbDiGIyR1ePTrcm8YnksNt0dMWfpoV", "https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQziItDJQbVdTEB2lkaJXUgtZFmIMH3Wf6rRPs", "https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQbfiTcaUKr5hTc3NUYewn80kB2PFzE6djgsmD"],
    techs: ["Next.js", "React", "html", "CSS", "Supabase", "N8N"],
    link: "https://auroralogica.com/"
  },
  {
    id: 4,
    translationKey: "invest",
    title: "Invest AI",
    subtitle: "Plataforma de investimentos com IA (Acadêmico)",
    description: "Desenvolvimento de uma plataforma de análise e alertas financeiros para os mercados do Brasil (B3) e EUA, entregando insights em tempo real. A aplicação utiliza n8n para ingestão automatizada de dados via APIs e notícias globais, alimentando algoritmos em JavaScript que calculam variações e rankings dinâmicos. O sistema possui backend seguro em Supabase (PostgreSQL) e frontend de alta performance com React 18 e TanStack Query. Para engajar o investidor, a plataforma integra alertas automáticos de preço-alvo via WhatsApp e relatórios diários gerados por IA via e-mail, garantindo uma experiência ágil, escalável e segura",
    images: ["https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQ00zbARrAmXK1vWCfYSgxlEaisIb79knJuZeN", "https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQuUIDsLthpPz2t8KvgeVI94ocR0TlWDyNHaf3", "https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQu4fXXnthpPz2t8KvgeVI94ocR0TlWDyNHaf3"],
    techs: ["Lovable", "OpenAI", "N8N", "React", "TypeScript", "Supabase", "Tailwind"],
    link: "https://invest-ai-me.vercel.app/"
  },
  {
    id: 5,
    translationKey: "coracao",
    title: "Coração de Estudante",
    subtitle: "Web page institucional e portal academico (Voluntário)",
    description: "Desenvolvimento voluntário de uma plataforma institucional e portal acadêmico para uma escola comunitária, focado em otimizar a gestão e a comunicação escolar. A aplicação foi construída com Node.js e PostgreSQL, garantindo segurança através de autenticação via JWT e controle de acesso por perfis (aluno, professor e administrador). O sistema centraliza a rotina escolar, oferecendo consulta de boletins, agenda digital com push notifications, galeria de eventos e painéis específicos para lançamento de notas e gestão completa de contas e comunicados. O projeto entrega uma solução prática, escalável e acessível para toda a comunidade.",
    images: ["https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQ9ld9HysHRFqQ1567I4UnOxj2tKXdDJogprCa", "https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQRKTKuj7i5nGKFbA0D7OygzueYJqkaBX4SVE3", "https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQGvDnZZjYZpCQUK5kMOauhNvdtqefyBJ829cL"],
    techs: ["Next.js", "TypeScript", "React", "Supabase", "Tailwind"],
    link: "https://coracaodestudante.up.railway.app/"
  },
  {
    id: 6,
    translationKey: "multibot",
    title: "MultiBot",
    subtitle: "Plataforma de automação de mensagens no whatsapp",
    description: "Desenvolvimento de um sistema completo de automação de atendimento via WhatsApp, integrado a um painel administrativo web moderno e multi-usuário. A plataforma, construída com Node.js e PostgreSQL, utiliza o Chromium para conectar e gerenciar múltiplas instâncias do WhatsApp simultaneamente. O sistema permite a criação de menus personalizáveis, fluxos de conversação dinâmicos e respostas automáticas baseadas no horário de funcionamento comercial. Com segurança garantida por autenticação JWT, a aplicação centraliza, automatiza e escala a gestão do suporte ao cliente de forma eficiente.",
    images: ["https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQDAhUe1m9FrvMasufVoCEXemA3QLUtxJP7ln4", "https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQflY7yP8oy6ze2UWuHhmiYfPSLw8kx79bZQcp", "https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQfeSAXf8oy6ze2UWuHhmiYfPSLw8kx79bZQcp"],
    techs: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    link: "https://mbot.up.railway.app/"
  },
  {
    id: 7,
    translationKey: "shoppeasy",
    title: "E-commerce ShoppEasy",
    subtitle: "E-commerce com carrinho de compras e checkout (Acadêmico)",
    description: "Desenvolvimento de uma plataforma de e-commerce completa utilizando Python e Django REST Framework no backend, integrada a um frontend responsivo construído com React e Vite para entregar uma interface com estética leve e agradável. A aplicação permite navergação por categorias de produtos (roupas, eletrônicos e livros) e centraliza toda a gestão de catálogo e estoque através do Django Admin. O sistema conta com funcionalidades essenciais para conversão, incluindo carrinho de compras dinâmico, páginas de detalhes com vitrine de produtos relacionados e área de perfil do usuário. Com a segurança estruturada via autenticação JWT, a API gerencia todo o fluxo de dados de forma eficiente, proporcionando uma jornada de navegação fluida.",
    images: ["https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQTJddF4ffikGR6Am5SOxrNZ2PbEBsTWqu0IHc", "https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQJINCtsEVRagnBvIQyu51JClpFjLDwM80rd2G", "https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQXtj7RJkz7AnmUDxcE3e0RfWTqMsuOdyHZlgY"],
    techs: ["React", "Tailwindcss", "sqlite", "Python", "Django"],
    link: "https://github.com/weesllen/E-commerce_shoppeasy"
  }
];

