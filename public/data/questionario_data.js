/* CREATE TABLE IF NOT EXISTS public.questionario
(
questionarioid smallint NOT NULL DEFAULT nextval('questionarioid'::regclass),
questionariotitulo character varying(40) COLLATE pg_catalog."default",
questionarioordem smallint,
questionariostatus character varying(40) COLLATE pg_catalog."default",
CONSTRAINT questionario_pkey PRIMARY KEY (questionarioid)
) */

/* CREATE TABLE IF NOT EXISTS public.questionarioitem
(
questionarioitemid smallint NOT NULL DEFAULT nextval('questionarioitemid'::regclass),
questionarioid smallint,
questionarioitemconteudo character varying(40) COLLATE pg_catalog."default",
questionarioitemrespostacorret boolean,
CONSTRAINT questionarioitem_pkey PRIMARY KEY (questionarioitemid),
CONSTRAINT iquestionarioitem1 FOREIGN KEY (questionarioid)
REFERENCES public.questionario (questionarioid) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
) */

export const dadosQuestionario = [
  {
    id: 1,
    titulo: "Cultura e Mindset ágil",
    ordem: "1",
    status: "EmAberto",
    questoes: [
      {
        id: 1,
        questionarioid: 1,
        conteudo:
          "O principal foco do Manifesto Ágil é em indivíduos e interações, software funcionando, colaboração com o cliente e responder a mudanças.",
        respostaCorreta: true,
      },
      {
        id: 2,
        questionarioid: 1,
        conteudo:
          "O mindset ágil em uma organização é caracterizado pela manutenção de uma cultura que valoriza a adaptabilidade, a colaboração e a melhoria contínua.",
        respostaCorreta: true,
      },
      {
        id: 3,
        questionarioid: 1,
        conteudo:
          "O Manifesto Ágil é um documento formal, enquanto o mindset ágil é uma atitude e cultura que suporta a aplicação desse manifesto.",
        respostaCorreta: true,
      },
    ],
  },

  {
    id: 2,
    titulo: "Princípios e Valores",
    ordem: "2",
    status: "EmAberto",
    questoes: [
      {
        id: 1,
        questionarioid: 2,
        conteudo:
          "Os pilares do Scrum são fundamentais para a prática ágil e incluem Transparência, Inspeção e Adaptação. No que diz respeito ao pilar da Transparência, é correto afirmar que a Transparência é alcançada apenas com a realização de reuniões diárias, sendo dispensável o uso de ferramentas visuais como quadros Kanban ou burndown charts para acompanhar o progresso do projeto.",
        respostaCorreta: false,
      },
      {
        id: 2,
        questionarioid: 2,
        conteudo:
          "No contexto dos valores do Scrum, o Comprometimento é crucial para o sucesso da equipe. Nesse sentido, o comprometimento é melhor praticado quando todos os membros da equipe conhecem suas responsabilidades e estão motivados para alcançar os objetivos do projeto, com um foco compartilhado nos resultados.",
        respostaCorreta: true,
      },
      {
        id: 3,
        questionarioid: 2,
        conteudo:
          "Um projeto Scrum está desenvolvendo um novo aplicativo de e-commerce. Durante a Sprint, um novo regulamento governamental é anunciado, exigindo mudanças significativas na forma como os dados dos clientes são armazenados e processados. Nesse contexto, a melhor abordagem para o time Scrum é avaliar o impacto das mudanças e ajustar o Sprint Backlog conforme necessário.",
        respostaCorreta: true,
      },
    ],
  },

  {
    id: 3,
    titulo: "Papéis do Scrum",
    ordem: "3",
    status: "EmAberto",
    questoes: [
      {
        id: 1,
        questionarioid: 3,
        conteudo:
          "É de responsabilidade exclusiva do Product Owner (PO) em uma equipe Scrum facilitar a realização de reuniões diárias.",
        respostaCorreta: false,
      },
      {
        id: 2,
        questionarioid: 3,
        conteudo:
          "A principal responsabilidade do Scrum Master é entregar incrementos funcionais do produto.",
        respostaCorreta: false,
      },
      {
        id: 3,
        questionarioid: 3,
        conteudo:
          "O Time de Desenvolvimento deve decidir como realizar o trabalho e auto-organizar-se.",
        respostaCorreta: true,
      },
    ],
  },

  {
    id: 4,
    titulo: "Artefatos do Scrum",
    ordem: "4",
    status: "EmAberto",
    questoes: [
      {
        id: 1,
        questionarioid: 4,
        conteudo:
          "O Product Backlog no Scrum é uma lista priorizada de tudo o que precisa ser feito no produto.",
        respostaCorreta: true,
      },
      {
        id: 2,
        questionarioid: 4,
        conteudo:
          "O Scrum Master é o responsável por gerenciar o Product Backlog.",
        respostaCorreta: false,
      },
      {
        id: 3,
        questionarioid: 4,
        conteudo:
          "O Incremento no Scrum é a soma dos itens concluídos durante uma Sprint, pronta para ser lançada.",
        respostaCorreta: true,
      },
    ],
  },

  {
    id: 5,
    titulo: "Eventos do Scrum",
    ordem: "5",
    status: "EmAberto",
    questoes: [
      {
        id: 1,
        questionarioid: 5,
        conteudo:
          "O principal objetivo de uma Sprint no Scrum é entregar um incremento potencialmente utilizável do produto ao final do ciclo de trabalho.",
        respostaCorreta: true,
      },
      {
        id: 2,
        questionarioid: 5,
        conteudo:
          "Durante o Sprint Planning, é realizada uma demonstração do trabalho concluído durante a Sprint.",
        respostaCorreta: false,
      },
      {
        id: 3,
        questionarioid: 5,
        conteudo:
          "O propósito principal da Daily Scrum é sincronizar as atividades da equipe, discutir o progresso e identificar impedimentos.",
        respostaCorreta: true,
      },
    ],
  },

  {
    id: 6,
    titulo: "Framework de trabalho",
    ordem: "6",
    status: "EmAberto",
    questoes: [
      {
        id: 1,
        questionarioid: 6,
        conteudo:
          "Estruturação é uma característica essencial de um framework de trabalho, pois organiza as atividades de forma lógica e sequencial.",
        respostaCorreta: true,
      },
      {
        id: 2,
        questionarioid: 6,
        conteudo:
          "Ken Schwaber é o criador do framework Ruby on Rails, amplamente utilizado no desenvolvimento web.",
        respostaCorreta: false,
      },
      {
        id: 3,
        questionarioid: 6,
        conteudo:
          "Scrum é um framework amplamente utilizado na gestão ágil de projetos.",
        respostaCorreta: true,
      },
    ],
  },

  {
    id: 7,
    titulo: "Técnicas e ferramentas",
    ordem: "7",
    status: "EmAberto",
    questoes: [
      {
        id: 1,
        questionarioid: 7,
        conteudo:
          "O gráfico de Burndown mostra a quantidade de código escrito durante o Sprint.",
        respostaCorreta: false,
      },
      {
        id: 2,
        questionarioid: 7,
        conteudo:
          "O método de Planning Poker promove a discussão e o consenso entre os membros da equipe sobre o esforço necessário, sendo esse seu benefício primário em comparação a métodos tradicionais de estimativa.",
        respostaCorreta: true,
      },
      {
        id: 3,
        questionarioid: 7,
        conteudo:
          "A Definition of Done em um projeto Scrum serve como um checklist que deve ser seguido para considerar uma tarefa como concluída, ajudando a alinhar as expectativas da equipe e aumentar a qualidade do trabalho entregue.",
        respostaCorreta: true,
      },
    ],
  },
];
