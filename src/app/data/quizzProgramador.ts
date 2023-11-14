import { Quizz } from "../interfaces/questions";

export const quizMenteDoDesenvolvedor: Quizz = {
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
    },
    {
      id: 6,
      question: "Seu Estilo de Trabalho em Equipe",
      options: [
        { id: 1, name: "Líder natural, gosta de tomar decisões", alias: "A" },
        { id: 2, name: "Colaborador, gosta de contribuir com ideias", alias: "B" },
        { id: 3, name: "Ouvinte, prefere seguir as ideias dos outros", alias: "C" },
        { id: 4, name: "Independente, prefere trabalhar sozinho", alias: "D" },
        { id: 5, name: "Mediador, gosta de resolver conflitos", alias: "E" },
        { id: 6, name: "Organizador, gosta de definir tarefas", alias: "F" },
        { id: 7, name: "Inovador, sempre propõe novas ideias", alias: "G" }
      ]
    },
    {
      id: 7,
      question: "Sua Atitude em Relação à Aprendizagem Contínua",
      options: [
        { id: 1, name: "Curioso, sempre buscando novos conhecimentos", alias: "A" },
        { id: 2, name: "Pragmático, aprende o necessário para o trabalho", alias: "B" },
        { id: 3, name: "Visionário, aprende tecnologias futuras", alias: "C" },
        { id: 4, name: "Especialista, aprofunda-se em uma área específica", alias: "D" },
        { id: 5, name: "Diversificado, gosta de aprender um pouco de tudo", alias: "E" },
        { id: 6, name: "Adaptável, aprende rapidamente quando necessário", alias: "F" },
        { id: 7, name: "Persistente, não desiste até dominar um tópico", alias: "G" }
      ]
    },
    {
      id: 8,
      question: "Se você fosse um algoritmo, qual seria?",
      options: [
        { id: 1, name: "Busca binária, porque você é direto ao ponto", alias: "A" },
        { id: 2, name: "Ordenação por bolha, porque você gosta de levar as coisas com calma", alias: "B" },
        { id: 3, name: "DFS (Busca em profundidade), porque você gosta de explorar todas as possibilidades", alias: "C" },
        { id: 4, name: "BFS (Busca em largura), porque você gosta de manter suas opções abertas", alias: "D" },
        { id: 5, name: "Algoritmo de Dijkstra, porque você sempre encontra o caminho mais curto", alias: "E" },
        { id: 6, name: "Algoritmo de Huffman, porque você é eficiente na compressão de informações", alias: "F" },
        { id: 7, name: "Algoritmo de Knapsack, porque você é bom em resolver problemas complexos", alias: "G" }
      ]
    },
    {
      id: 10,
      question: "Se você fosse um bug de software, qual seria?",
      options: [
        { id: 1, name: "Erro de sintaxe, porque às vezes você não faz sentido", alias: "A" },
        { id: 2, name: "Loop infinito, porque você adora repetir as mesmas histórias", alias: "B" },
        { id: 3, name: "Vazamento de memória, porque você esquece as coisas rapidamente", alias: "C" },
        { id: 4, name: "Erro de segmentação, porque você não respeita limites", alias: "D" },
        { id: 5, name: "Deadlock, porque você é teimoso e não cede", alias: "E" },
        { id: 6, name: "Erro de lógica, porque às vezes você não é muito lógico", alias: "F" },
        { id: 7, name: "Erro de tempo de execução, porque você é imprevisível", alias: "G" }
      ]
    }
  ],
  results: {
    A: {
      description: "Arquiteto do Código! Sua paixão por algoritmos e estruturas de dados define seu estilo único de programação. Você pode se destacar como:",
      profession: [
        { name: 'Engenheiro de Software', link: 'https://www.freecodecamp.org/portuguese/news/como-se-tornar-um-engenheiro-de-software-plano-de-acao-para-2023/' },
        { name: 'Desenvolvedor Backend', link: 'https://www.dio.me/careers/back-end' }
      ]
    },
    B: {
      description: "Inovador Iterativo! Sua abordagem experimental e adaptável o torna um mestre na resolução de problemas dinâmicos. Você pode se destacar como:",
      profession: [
        { name: 'Engenheiro de DevOps', link: 'https://www.dio.me/careers/cloud-devops' },
        { name: 'Especialista em CyberSegurança', link: 'https://www.dio.me/curso-cybersecurity' }
      ]
    },
    C: {
      description: "Mágico da Biblioteca! Sua habilidade em aproveitar bibliotecas e frameworks faz de você um desenvolvedor ágil e eficiente. Você pode se destacar como:",
      profession: [
        { name: 'Desenvolvedor Full Stack', link: 'https://www.dio.me/curso-typescript' },
        { name: 'Desenvolvedor Frontend', link: 'https://www.dio.me/careers/front-end' }
      ]
    },
    D: {
      description: "Desbravador da Elegância! Sua busca pela elegância e expressividade define seu código distintivo. Você pode se destacar como:",
      profession: [
        { name: 'Desenvolvedor de UX', link: 'https://www.dio.me/curso-ux-design' },
        { name: 'CSS Developer', link: 'https://www.dio.me/curso-css' }
      ]
    },
    E: {
      description: "Engenheiro Empresarial! Sua expertise em desenvolvimento robusto o torna apto para desafios empresariais complexos. Você pode se destacar como:",
      profession: [
        { name: 'Arquiteto de Soluções', link: 'https://roadmap.sh/software-architect' },
        { name: 'Engenheiro de Sistemas', link: 'https://roadmap.sh/system-design' }
      ]
    },
    F: {
      description: "Desenvolvedor de Inteligência Artificial! Sua habilidade em construir funcionalidades de IA em aplicações de software o torna um ativo valioso no mundo da tecnologia. Você pode se destacar como:",
      profession: [
        { name: 'Engenheiro de Machine Learning', link: 'https://www.dio.me/curso-machine-learning' },
        { name: 'Cientista de Dados', link: 'https://roadmap.sh/ai-data-scientist' }
      ]
    },
    G: {
      description: "Visionário do Software! Sua paixão por criar novas soluções e explorar novas tecnologias define seu estilo único. Você pode se destacar como:",
      profession: [
        { name: 'Engenheiro de Software Embarcado', link: 'https://github.com/m3y54m/Embedded-Engineering-Roadmap' },
        { name: 'Desenvolvedor de Aplicativos Móveis', link: 'https://www.dio.me/careers/mobile' }
      ]
    }
  },
  observation: "Este quiz é uma viagem pelo vasto universo da programação e não define sua habilidade real como desenvolvedor. Compartilhe seus resultados nas redes sociais, desafie seus colegas de trabalho e divirta-se explorando os diferentes tipos de mentes de desenvolvedores!"
};








