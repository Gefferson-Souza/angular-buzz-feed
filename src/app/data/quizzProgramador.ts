export const quizMenteDoDesenvolvedor = {
  title: "Mente do Desenvolvedor - Descubra Seu Tipo de Programador",
  description: "Bem-vindo ao 'Mente do Desenvolvedor' - um quiz atualizado para revelar seu verdadeiro tipo de programador! Adentre o vasto mundo do desenvolvimento de software e descubra as nuances que definem sua abordagem única. Prepare-se para uma jornada de código, desafios e autodescoberta!",
  questions: [
    {
      id: 1,
      question: "Escolha sua Linguagem de Programação Preferida",
      options: [
        { id: 1, name: "Python, porque você gosta de serpentes", alias: "A" },
        { id: 2, name: "Java, porque você não pode viver sem café", alias: "B" },
        { id: 3, name: "JavaScript, porque você gosta de viver no limite", alias: "C" },
        { id: 4, name: "C#, porque você gosta de música", alias: "D" },
        { id: 5, name: "SQL, porque você é chato", alias: "E" },
        { id: 6, name: "Rust, porque você gosta de coisas antigas", alias: "F" },
        { id: 7, name: "Swift, porque você gosta de correr", alias: "G" }
      ]
    },
    {
      id: 2,
      question: "Abordagem de Resolução de Problemas",
      options: [
        { id: 1, name: "Algoritmos e Estruturas de Dados são a base", alias: "A" },
        { id: 2, name: "Experimentação e iteração constante", alias: "B" },
        { id: 3, name: "Soluções prontas e bibliotecas externas", alias: "C" },
        { id: 4, name: "Abordagem orientada por testes (TDD)", alias: "D" },
        { id: 5, name: "Análise de dados e machine learning", alias: "E" },
        { id: 6, name: "Desenvolvimento orientado a objetos", alias: "F" },
        { id: 7, name: "Programação funcional", alias: "G" }
      ]
    },
    {
      id: 3,
      question: "Ambiente de Desenvolvimento Ideal",
      options: [
        { id: 1, name: "Terminal e editores de texto minimalistas", alias: "A" },
        { id: 2, name: "IDE com recursos avançados e debugging robusto", alias: "B" },
        { id: 3, name: "Ambiente de desenvolvimento integrado na nuvem", alias: "C" },
        { id: 4, name: "Editores colaborativos online", alias: "D" },
        { id: 5, name: "Ambiente personalizado com configurações meticulosas", alias: "E" },
        { id: 6, name: "Ambientes de desenvolvimento de realidade virtual", alias: "F" },
        { id: 7, name: "Plataformas de desenvolvimento de código aberto", alias: "G" }
      ]
    },
    {
      id: 4,
      question: "Relação com Bugs no Código",
      options: [
        { id: 1, name: "Desfruta da caça aos bugs, considera uma parte essencial do processo", alias: "A" },
        { id: 2, name: "Vê bugs como oportunidades de aprendizado", alias: "B" },
        { id: 3, name: "Prefere evitar bugs desde o início com testes rigorosos", alias: "C" },
        { id: 4, name: "Aceita bugs como parte inevitável, foca na entrega rápida", alias: "D" },
        { id: 5, name: "Utiliza ferramentas automatizadas para detecção de bugs", alias: "E" },
        { id: 6, name: "Utiliza a depuração em pares para resolver bugs", alias: "F" },
        { id: 7, name: "Utiliza técnicas de programação defensiva para prevenir bugs", alias: "G" }
      ]
    },
    {
      id: 5,
      question: "Projeto Pessoal dos Sonhos",
      options: [
        { id: 1, name: "Desenvolver uma nova linguagem de programação", alias: "A" },
        { id: 2, name: "Criar um aplicativo revolucionário", alias: "B" },
        { id: 3, name: "Contribuir para projetos de código aberto populares", alias: "C" },
        { id: 4, name: "Construir um sistema de inteligência artificial autônomo", alias: "D" },
        { id: 5, name: "Desenvolver uma plataforma de realidade virtual", alias: "E" },
        { id: 6, name: "Criar um jogo de computador do zero", alias: "F" },
        { id: 7, name: "Desenvolver um aplicativo móvel inovador", alias: "G" }
      ]
    }
  ],
  resultados: {
    A: {
      descricao: "Arquiteto do Código! Sua paixão por algoritmos e estruturas de dados define seu estilo único de programação. Você pode se destacar como:",
      profissao: ['Engenheiro de Software', 'Desenvolvedor Backend']
    },
    B: {
      descricao: "Inovador Iterativo! Sua abordagem experimental e adaptável o torna um mestre na resolução de problemas dinâmicos. Você pode se destacar como:",
      profissao: ['Engenheiro de DevOps', 'Gerente de Produto']
    },
    C: {
      descricao: "Mágico da Biblioteca! Sua habilidade em aproveitar bibliotecas e frameworks faz de você um desenvolvedor ágil e eficiente. Você pode se destacar como:",
      profissao: ['Desenvolvedor Full Stack', 'Engenheiro de Frontend']
    },
    D: {
      descricao: "Desbravador da Elegância! Sua busca pela elegância e expressividade define seu código distintivo. Você pode se destacar como:",
      profissao: ['Desenvolvedor de UI/UX', 'Designer de Interação']
    },
    E: {
      descricao: "Engenheiro Empresarial! Sua expertise em desenvolvimento robusto o torna apto para desafios empresariais complexos. Você pode se destacar como:",
      profissao: ['Arquiteto de Soluções', 'Engenheiro de Sistemas']
    },
    F: {
      descricao: "Desenvolvedor de Inteligência Artificial! Sua habilidade em construir funcionalidades de IA em aplicações de software o torna um ativo valioso no mundo da tecnologia. Você pode se destacar como:",
      profissao: ['Engenheiro de Machine Learning', 'Cientista de Dados']
    },
    G: {
      descricao: "Visionário do Software! Sua paixão por criar novas soluções e explorar novas tecnologias define seu estilo único. Você pode se destacar como:",
      profissao: ['Engenheiro de Software Embarcado', 'Desenvolvedor de Aplicativos Móveis']
    }
  },
  observacao: "Este quiz é uma viagem pelo vasto universo da programação e não define sua habilidade real como desenvolvedor. Compartilhe seus resultados nas redes sociais, desafie seus colegas de trabalho e divirta-se explorando os diferentes tipos de mentes de desenvolvedores!"
  };
