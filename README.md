# HypScrum 💻

## Descrição 📝

**Este projeto é um sistema web desenvolvido para guiar os usuários no aprendizado do Scrum. O sistema inclui seções de instrução com avaliações e um mecanismo para emissão de certificados de conclusão do curso. Ele é construído utilizando HTML, CSS, JavaScript e PostgreSQL, e as telas foram prototipadas no Figma.**

## Link para o Trello 📒

Clique [aqui](https://trello.com/invite/b/66cc7d761cd6040a5574bd51/ATTI15a79678699b499a3056afb930ed8bceB5811606/abp) para acessar o quadro do Trello do projeto

## Link para o Figma 🖼️

Clique [aqui](https://www.figma.com/design/n6FbUNp5Q6kOGvgdb87mGL/Prot%C3%B3tipo-Site-Scrum?node-id=336-439&t=9ftM8URPdSZjyeeG-1) para acessar o protótipo do projeto

## SPRINTS 📊

| SPRINT | LINK          | INÍCIO     | ENTREGA    | STATUS        |
| ------ | ------------- | ---------- | ---------- | ------------- |
| 01     | [Sprint 01](#sprint-1) | 10/09/2024 | 04/10/2024 |  ✔  |
| 02     | [Sprint 02]() | 07/10/2024 | 01/11/2024 | ✔  |
| 03     | [Sprint 03]() | 04/11/2024 | 22/11/2024 | Iniciada... |


<!-- ✔ -->

## USER STORIES 🧾

<br>

| ID REFERÊNCIA | Remetente | Instrução                                                                                           | Finalidade                                                                                                                          |
| ------------- | --------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| RF-01         | Usuário   | Como usuário, quero ter um menu de navegação comum em todas as páginas.                             | Para que eu possa acessar facilmente diferentes seções do portal de qualquer página.                                                |
| RF-02 / RF-03 | Usuário   | Como novo usuário, quero me cadastrar informando meu nome completo, e-mail e senha.                 | Para que eu possa criar uma conta e acessar o portal e fazer login apenas com email e senha.                                        |
| RF-04 / RF-05 | Usuário   | Como usuário, quero responder 3 questões para cada tópico do Scrum.                                 | Para que eu possa testar meu conhecimento, com as questões disponíveis apenas para quem tiver um cadastro e estiver logado no site. |
| RF-06         | Visitante | Como visitante, quero acessar o conteúdo das páginas do curso,                                      | Para que eu possa explorar o material disponível antes de me cadastrar.                                                             |
| RF-07         | Usuário   | Como usuário, quero poder tentar responder as questões quantas vezes for necessário,                | Para que eu tenha a oportunidade de aprender e melhorar meu desempenho.                                                             |
| RF-08         | Usuário   | Como usuário, quero que o sistema me mostre apenas as questões dos tópicos em que não fui aprovado. | Para que eu possa focar no que ainda preciso aprender.                                                                              |
| RF-09         | Usuário   | Como usuário, quero receber um certificado de conclusão ao ser aprovado em todos os tópicos.        | Para que eu possa comprovar minha aprendizagem.                                                                                     |
| RF-10         | Usuário   | Como usuário, quero que as questões sejam iguais para todos os usuários.                            | Para que não seja possível alterar as perguntas ou respostas através de uma interface do sistema.                                   |
|               |           |                                                                                                     |

<br>
<br>

## Requisitos 📜

### Requisitos Funcionais

- **RF.01** Navegação por menu comum para acesso às seções.
- **RF.02** Auto-cadastro com nome, e-mail e senha.
- **RF.03** Autenticação com e-mail e senha.
- **RF.04** Cadastro de questões no SGBD PostgreSQL.
- **RF.05** Exibição de 3 questões por tópico para usuários logados.
- **RF.06** Acesso ao conteúdo do curso para usuários não logados, sem visualização das questões.
- **RF.07** Respostas ilimitadas às questões até a aprovação.
- **RF.08** Exibição de questões apenas nos tópicos não aprovados.
- **RF.09** Emissão de certificados para usuários aprovados em todos os tópicos.
- **RF.10** Cadastro de questões pelo administrador diretamente no PostgreSQL.

### Requisitos Não Funcionais

- **RNF.01** Distribuição de conteúdo em páginas com princípios de arquitetura de informação.
- **RNF.02** Sequência lógica nas páginas com navegação entre páginas.
- **RNF.03** Curso cobrindo conhecimentos necessários para o aprendizado do Scrum.
- **RNF.04** Sequência lógica de aprendizado do Scrum.
- **RNF.05** Questões compatíveis com o conteúdo do tópico.
- **RNF.06** Visual responsivo.

<br>

# EQUIPE 👨🏻‍💻

<br>

| NOME                              | FUNÇÃO        | GITHUB                                                    |
| --------------------------------- | ------------- | --------------------------------------------------------- |
| Gustavo de Moraes Silva           | Scrum Master  | [guhms7](https://github.com/guhms7)                       |
| Carlos Eduardo Magalhaes         | Project Owner | [carlosedsmagalhaes](https://github.com/carlosedsmagalhaes) |
| Adson Ottoni Balbino Filho        | Developer     | [adsonfilho](https://github.com/adsonfilho)               |
| Andressa Stephane Toledo da Silva | Developer     | [andressatoledo](https://github.com/andressatoledo)       |
| Eduardo Henrique Alves Arantes    | Developer     | [eduardohalves](https://github.com/eduardohalves)         |
| Luiz Filipe da Silva              | Developer     | [luizitofs](https://github.com/luizitofs)               |
| Marcella Souto de Carvalho        | Developer     | [masoutoc](https://github.com/masoutoc)                   |
| Tauane Mariano dos Santos         | Developer     | [tauane21](https://github.com/tauane21)                   |
|                                   |               |

# Sprints📈🏃🏻

## Sprint 1📈🏃🏻
O foco da Sprint 1 foi coletar junto com o cliente através do Product Owner os requisitos, e qualifica-los como requisitos funcionáis (RF) e requisitos não funcionais (RNF). Após a validação dos requisitos a equipe criou os cards a serem trablhados e registrou tudo no Trello, onde fomos trabalhando. O foco da primeira sprint foi desenhar um protótipo de alta fidelidade no Figma para alinhar a expectativa do cliente com relação ao produto final entregue. 
<br>
### Backlog Sprint 1 📃
 <br>

| ID | Nome do Projeto                                        | Prioridade | Responsáveis                                                             | Tarefa Iniciada | Tarefa Finalizada | Link                                                                 | Requisitos                       |
|----|-------------------------------------------------------|------------|-------------------------------------------------------------------------|------------------|-------------------|----------------------------------------------------------------------|----------------------------------|
| 44 | Adicionar o novo footer nas telas                     | 2          | Andressa Stéphane Toledo da Silva                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.01                            |
| 45 | Adicionar o novo header nas telas                     | 2          | filhoadson31                                                            | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.01                            |
| 71 | Colocar imagens nas telas de conteúdos                | 3          | Gustavo de Moraes Silva                                                 | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.02                           |
| 62 | Colocar texto conteúdo cap 1                          | 3          | filhoadson31                                                            | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03, RNF.04            |
| 57 | Colocar texto conteúdo cap 2                          | 3          | Gustavo de Moraes Silva                                                 | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03, RNF.04            |
| 56 | Colocar texto conteúdo cap 3                          | 3          | filhoadson31                                                            | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03, RNF.04            |
| 58 | Colocar texto conteúdo cap 4                          | 3          | Marcella Souto de Carvalho                                              | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03, RNF.04            |
| 59 | Colocar texto conteúdo cap 5                          | 3          | Andressa Stéphane Toledo da Silva                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03, RNF.04            |
| 60 | Colocar texto conteúdo cap 6                          | 3          | Andressa Stéphane Toledo da Silva                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03, RNF.04            |
| 61 | Colocar texto conteúdo cap 7                          | 3          | Carlos Magalhães                                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03, RNF.04            |
| 63 | Criar tela conteúdo com pop-up cap 1                  | 3          | filhoadson31                                                            | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.01, RNF.04                   |
| 64 | Criar tela conteúdo com pop-up cap 2                  | 3          | Carlos Magalhães                                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.01, RNF.04, RF.05            |
| 65 | Criar tela conteúdo com pop-up cap 3                  | 3          | filhoadson31                                                            | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.01, RNF.04, RF.05            |
| 66 | Criar tela conteúdo com pop-up cap 4                  | 3          | Marcella Souto de Carvalho                                              | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.01, RNF.04, RF.05            |
| 67 | Criar tela conteúdo com pop-up cap 5                  | 3          | Andressa Stéphane Toledo da Silva                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.01, RNF.04, RF.05            |
| 68 | Criar tela conteúdo com pop-up cap 6                  | 3          | Andressa Stéphane Toledo da Silva                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.01, RNF.04, RF.05            |
| 69 | Criar tela conteúdo com pop-up cap 7                  | 3          | Carlos Magalhães                                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.01, RNF.04, RF.05            |
| 70 | Criar tela de conteúdo deslogado cap 1                | 3          | filhoadson31                                                            | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.01, RNF.04, RF.05, RF.06     |
| 72 | Criar tela de conteúdo deslogado cap 2                | 3          | Eduardo Henrique Alves Arantes                                          | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.01, RNF.04, RF.05, RF.06     |
| 73 | Criar tela de conteúdo deslogado cap 3                | 3          | filhoadson31                                                            | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.01, RNF.04, RF.05, RF.06     |
| 74 | Criar tela de conteúdo deslogado cap 4                | 3          | Marcella Souto de Carvalho                                              | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.01, RNF.04, RF.05, RF.06     |
| 75 | Criar tela de conteúdo deslogado cap 5                | 3          | Andressa Stéphane Toledo da Silva                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.01, RNF.04, RF.05, RF.06     |
| 76 | Criar tela de conteúdo deslogado cap 6                | 3          | Andressa Stéphane Toledo da Silva                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.01, RNF.04, RF.05, RF.06     |
| 44 | Adicionar o novo footer nas telas                     | 2          | Andressa Stéphane Toledo da Silva                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.01                            |
| 45 | Adicionar o novo header nas telas                     | 2          | filhoadson31                                                            | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.01                            |
| 71 | Colocar imagens nas telas de conteúdos                | 3          | Gustavo de Moraes Silva                                                 | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.02                           |
| 62 | Colocar texto conteúdo cap 1                          | 3          | filhoadson31                                                            | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03, RNF.04            |
| 57 | Colocar texto conteúdo cap 2                          | 3          | Gustavo de Moraes Silva                                                 | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03, RNF.04            |
| 56 | Colocar texto conteúdo cap 3                          | 3          | filhoadson31                                                            | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03, RNF.04            |
| 58 | Colocar texto conteúdo cap 4                          | 3          | Marcella Souto de Carvalho                                              | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03, RNF.04            |
| 59 | Colocar texto conteúdo cap 5                          | 3          | Andressa Stéphane Toledo da Silva                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03, RNF.04            |
| 60 | Colocar texto conteúdo cap 6                          | 3          | Andressa Stéphane Toledo da Silva                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03, RNF.04            |
| 61 | Colocar texto conteúdo cap 7                          | 3          | Carlos Magalhães                                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03, RNF.04            |
| 77 | Criar tela de conteúdo deslogado cap 7                | 3          | Carlos Magalhães                                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.01, RNF.04, RF.05, RF.06     |
| 40 | Definir o logo do projeto                             | 3          | filhoadson31, TAUANE SANTOS, Andressa Stéphane Toledo da Silva, Gustavo de Moraes Silva, Carlos Magalhães, Eduardo Henrique Alves Arantes, Luiz Filipe, Marcella Souto de Carvalho | ✔ | ✔ | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o) | RNF.02                          |
| 13 | Definir paleta de cores para o sistema                | 3          | filhoadson31, TAUANE SANTOS, Andressa Stéphane Toledo da Silva, Gustavo de Moraes Silva, Carlos Magalhães, Eduardo Henrique Alves Arantes, Luiz Filipe, Marcella Souto de Carvalho | ✔ | ✔ | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o) | RNF.02                          |
| 27 | Elaborar questões sobre Artefatos do Scrum            | 3          | Eduardo Henrique Alves Arantes                                          | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.04, RNF.05            |
| 24 | Elaborar questões sobre Cultura e mindset ágil        | 3          | TAUANE SANTOS                                                          | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.04, RNF.05            |
| 28 | Elaborar questões sobre Eventos do Scrum              | 3          | Luiz Filipe                                                             | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.04, RNF.05            |
| 29 | Elaborar questões sobre Framework de trabalho         | 3          | TAUANE SANTOS                                                          | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.04, RNF.05            |
| 26 | Elaborar questões sobre Papéis do Scrum               | 3          | Luiz Filipe                                                             | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.04, RNF.05            |
| 25 | Elaborar questões sobre Princípios e valores do Scrum | 3          | Carlos Magalhães                                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.04, RNF.05            |
| 30 | Elaborar questões sobre Técnicas e ferramentas        | 3          | Carlos Magalhães                                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.04, RNF.05            |
| 50 | Linkar todas as telas (fluxo)                         | 5          | filhoadson31, TAUANE SANTOS, Andressa Stéphane Toledo da Silva, Gustavo de Moraes Silva, Carlos Magalhães, Eduardo Henrique Alves Arantes, Luiz Filipe, Marcella Souto de Carvalho | ✔ | ✔ | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o) | RNF.02, RNF.04                   |
| 41 | Modelo para os conteúdos                               | 5          | Adson Filho, Andressa Stéphane Toledo da Silva                         | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03                    |
| 12 | Nome do projeto                                        | 2          | filhoadson31, TAUANE SANTOS, Andressa Stéphane Toledo da Silva, Gustavo de Moraes Silva, Carlos Magalhães, Eduardo Henrique Alves Arantes, Luiz Filipe, Marcella Souto de Carvalho | ✔ | ✔ | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o) | RF.01                          |
| 49 | Pesquisar uma imagem para cada conteúdo (total de 7 imagens) | 3 | Luiz Filipe, Eduardo Henrique Alves Arantes                             | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.04                           |
| 37 | Prototipar certificado                                  | 3          | Marcella Souto de Carvalho                                              | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.02, RNF.06                   |
| 35 | Prototipar tela de capítulos                           | 3          | Andressa Stéphane Toledo da Silva                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.02, RNF.06                   |
| 36 | Prototipar tela de certificado                         | 3          | Marcella Souto de Carvalho                                              | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.02, RNF.06                   |
| 31 | Prototipar tela de inicio                              | 3          | Gustavo de Moraes Silva                                                 | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.02, RNF.06                   |
| 32 | Prototipar tela de login/cadastro                     | 3          | Adson Filho, filhoadson31                                               | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.02, RNF.06                   |
| 34 | Prototipar tela de questionário por capítulo          | 3          | Marcella Souto de Carvalho                                              | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.05, RNF.02, RNF.06            |
| 43 | Prototipar tela sobre                                   | 5          | Marcella Souto de Carvalho                                              | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RNF.02, RNF.06                   |
| 20 | Redigir o texto sobre Artefatos do Scrum              | 2          | Eduardo Henrique Alves Arantes                                          | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03                    |
| 17 | Redigir o texto sobre Cultura e mindset ágil          | 2          | TAUANE SANTOS                                                          | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03                    |
| 21 | Redigir o texto sobre Eventos do Scrum                | 2          | Luiz Filipe                                                             | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03                    |
| 22 | Redigir o texto sobre Framework de trabalho           | 2          | TAUANE SANTOS                                                          | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03                    |
| 19 | Redigir o texto sobre Papéis do Scrum                 | 2          | Luiz Filipe                                                             | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03                    |
| 18 | Redigir o texto sobre Princípios e valores do Scrum   | 2          | Carlos Magalhães                                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03                    |
| 23 | Redigir o texto sobre Técnicas e ferramentas          | 2          | Carlos Magalhães                                                       | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.06, RNF.03                    |
| 46 | Task: Ajustar Read me do github                       | 5          | Gustavo de Moraes Silva                                                 | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   |                                  |
| 55 | Trocar a logo header todas telas                      | 2          | Gustavo de Moraes Silva                                                 | ✔                | ✔                 | [Link](https://trello.com/c/zWXFFoA5/10-prototipa%C3%A7%C3%A3o)   | RF.01                            |


<br>




### Burndown Chart 🔥
<p align="center">
  <img width="687" height="353" src="https://github.com/user-attachments/assets/058e9f4d-1b5e-469f-8738-47ca8a1510ff">
</p>
<br>

### Sprint Retrospective
<br>

### O que foi legal?
   - A colaboração e proatividade de todos foi evidente em várias tarefas, com todos se prontificando a ajudar, mesmo em atividades que não eram de sua responsabilidade.
   - A equipe teve um bom dinamismo, com foco em entregas dentro do prazo e participação na definição de conceitos importantes.
   - A divisão de tarefas e a subdivisão em grupos ajudaram a manter um foco claro, o que agilizou o processo.
   - A experiência de trabalhar com novas metodologias e ferramentas trouxe aprendizado e crescimento para muitos.

### O que aprendemos (o que podemos melhorar/sugestões de ideias)?
   - A importância de validar as tarefas com o cliente antes de iniciá-las, para evitar retrabalho.
   - Alinhar melhor a equipe para garantir que todos entendam as expectativas e saibam como executar suas tarefas.
   - Melhorar as validações internas, especialmente com o cliente, e garantir a revisão de requisitos e detalhes como redirecionamentos.
   - Dividir tarefas em partes menores foi uma prática eficaz, mas a comunicação antes de implementações pode prevenir problemas futuros.

### Onde falhamos?
   - A falta de validação dos requisitos e a ausência de revisões mais detalhadas causaram alguns problemas.
   - A divisão de tarefas poderia ter sido mais eficiente se houvesse uma validação prévia com o cliente assim que a primeira tela estivesse pronta.
   - Nos testes das tarefas, alguns problemas passaram despercebidos, o que gerou retrabalho.
   - Nem todos se sentiram completamente integrados ao grupo, talvez pela falta de comunicação inicial.

### Onde acertamos (o que precisa ser repetido)?
   - A divisão da equipe em grupos e a priorização das tarefas foram pontos altos e precisam ser repetidos.
   - A colaboração e a camaradagem entre os membros foram fundamentais para o progresso do projeto.
   - A agilidade nas dailies e o trabalho após essas reuniões foram eficazes e práticos.
   - A resolução de problemas e a responsabilidade atribuída a cada função garantiram o sucesso das entregas.

<br>


## Sprint 2📈🏃🏻
O foco da Sprint 2 foi desenvolver o prototipo gerado na sprint passada, e organizar os dados a serem salvos no banco de dados 
### Backlog Sprint 2 📃

| ID  | Atividade                                                                                             | Pontos da atividade | Responsáveis                                   | Tarefa iniciada | Tarefa Concluída | Link                                      | Requisitos            |
|-----|-------------------------------------------------------------------------------------------------------|---------------------|------------------------------------------------|------------------|-------------------|-------------------------------------------|-----------------------|
| 81  | MER                                                                                                  | 13                  | Andressa Stéphane Toledo da Silva             | ✔                | ✔                 | [Link](https://trello.com/c/mYWS28ug)   |                       |
| 82  | [Sprint 2 - Banco de dados] - Modelar as tabelas da aplicação                                       | 8                   | Carlos Magalhães, Andressa Stéphane Toledo    | ✔                | ✔                 | [Link](https://trello.com/c/tv794aom)   | RF.04                 |
| 83  | [FrontEnd] - Trabalhar 'header' com controle de visibilidade e componetizá-lo                       | 8                   | filhoadson31                                   | ✔                | ✔                 | [Link](https://trello.com/c/rxmwabfk)    | RF.01                 |
| 84  | [FrontEnd] - Trabalhar 'footer' - componetizá-lo                                                    | 5                   | filhoadson31                                   | ✔                | ✔                 | [Link](https://trello.com/c/PIjWNOh2)    | RF.01                 |
| 85  | [FrontEnd] - Trabalhar tela 'login/cadastro'                                                        | 8                   | Andressa Stéphane Toledo da Silva             | ✔                | ✔                 | [Link](https://trello.com/c/3B2ZnKc9)    | RF.02 RF.03          |
| 86  | [FrontEnd] - Trabalhar tela 'sobre'                                                                  | 5                   | filhoadson31                                   | ✔                | ✔                 | [Link](https://trello.com/c/VzinMTVw)     | RNF.01                |
| 87  | [FrontEnd] - Trabalhar tela 'início' com controle de visibilidade (logado/deslogado)                | 5                   | filhoadson31                                   | ✔                | ✔                 | [Link](https://trello.com/c/USL0tOF4)    | RF.06                 |
| 88  | [FrontEnd]- Trabalhar tela 'capítulos (conteúdos)' (logado/deslogado)                              | 5                   | filhoadson31                                   | ✔                | ✔                 | [Link](https://trello.com/c/2SPxmCvR)    | RF.06                 |
| 89  | [FrontEnd] - Trabalhar tela 'pré-certificado'                                                       | 3                   | Luiz Filipe                                    | ✔                | ✔                 | [Link](https://trello.com/c/jNIr20J6)    | RF.09                 |
| 90  | [FrontEnd] - Trabalhar tela 'certificado' com a impressão                                           | 5                   | Gustavo de Moraes Silva                        | ✔                | ✔                 | [Link](https://trello.com/c/GBV35zGb)    | RF.09                 |
| 91  | [FrontEnd] - Trabalhar tela 'conteúdo logado questionário'                                         | 5                   | Carlos Magalhães                               | ✔                | ✔                 | [Link](https://trello.com/c/AaCOt1Rc)    | RF.06                 |
| 92  | [FrontEnd] - Trabalhar tela 'questionários' recuperando as informações de um JSON                   | 13                  | Carlos Magalhães                               | ✔                | ✔                 | [Link](https://trello.com/c/T54piV2V)    | RF.05 RF.07          |
| 93  | [FrontEnd] - Trabalhar a tela 'Conteúdo - cultura e mindset ágil'                                   | 5                   | Marcella Souto de Carvalho                     | ✔                | ✔                 | [Link](https://trello.com/c/Qtxtffwx)    | RF.06 RNF.03         |
| 94  | [FrontEnd] - Trabalhar a tela 'Conteúdo - Princípios e valores'                                     | 5                   | Marcella Souto de Carvalho                     | ✔                | ✔                 | [Link](https://trello.com/c/FMXXHvIp)    | RF.06 RNF.03         |
| 95  | [FrontEnd] - Trabalhar a tela 'Conteúdo - Papéis do Scrum'                                          | 5                   | Marcella Souto de Carvalho                     | ✔                | ✔                 | [Link](https://trello.com/c/ecsL0jTt)    | RF.06 RNF.03         |
| 96  | [FrontEnd] - Trabalhar a tela 'Conteúdo - Artefatos do Scrum'                                      | 5                   | Eduardo Henrique Alves Arantes                 | ✔                | ✔                 | [Link](https://trello.com/c/StYDRUWT)    | RF.06 RNF.03         |
| 97  | [FrontEnd] - Trabalhar a tela 'Conteúdo - Eventos do Scrum'                                        | 5                   | filhoadson31                                   | ✔                | ✔                 | [Link](https://trello.com/c/0jihJeTc)    | RF.06 RNF.03         |
| 98  | [FrontEnd] - Trabalhar a tela 'Conteúdo - Framework de trabalho'                                    | 5                   | Carlos Magalhães                               | ✔                | ✔                 | [Link](https://trello.com/c/uwjFcQe4)    | RF.06 RNF.03         |
| 99  | [FrontEnd] - Trabalhar a tela 'Conteúdo - técnicas e ferramentas'                                   | 5                   | Marcella Souto de Carvalho                     | ✔                | ✔                 | [Link](https://trello.com/c/cW4Rpcgx)    | RF.06 RNF.03         |
| 100 | [FrontEnd] - Trabalhar estilização (CSS)                                                             | 8                   | filhoadson31                                   | ✔                | ✔                 | [Link](https://trello.com/c/8HFSyMu0)    | RNF.06                |
| 101 | [FrontEnd] - Trabalhar responsividade (CSS)                                                          | 13                  |                                                | ✔                | ✔                 | [Link](https://trello.com/c/lqx68yVR)    | RNF.06                |
| 102 | [SprintReview] - Gravar vídeo do resultado da sprint 2                                              | 5                   | Carlos Magalhães                               | ✔                | ✔                 | [Link](https://trello.com/c/00Mguuii)    |                       |
| 103 | [Documentação] - Trabalhar diagrama de casos de uso                                                 | 5                   | Andressa Stéphane Toledo da Silva             | ✔                | ✔                 | [Link](https://trello.com/c/AsNwbvWE)    |                       |
| 104 | [FrontEnd] - Padronizar as telas de conteúdos (Tamanhos de fonte, gap e container)                   | 8                   |                                                | ✔                | ✔                 | [Link](https://trello.com/c/puS8GHHp)    |                       |
| 105 | [FrontEnd] - Trabalhar controle de visibilidade ao logar e validação das questões                    | 8                   | Carlos Magalhães                               | ✔                | ✔                 | [Link](https://trello.com/c/O3iFtgd6)    | RF.06                 |


<br>

### Burndown Chart 🔥
<p align="center">
  <img width="687" height="353" src="https://github.com/user-attachments/assets/62407d9f-6b41-4afc-b31f-e6b465cccff3">
</p>
<br>

### Sprint Retrospective

### O que foi legal?
- Acredito que tivemos uma boa entrega e que conseguimos ir nos ajudando


### O que aprendemos (o que podemos melhorar/sugestões de ideias)?
- Precisamos estabelecer padrões antes de começarmos colocar a mão na massa, ou seja, precisamos nos planejar melhor


### Onde falhamos?
- Faltou estabalecermos um padrão das telas, falhamos nessa parte do planejamento


### Onde acertamos (o que precisa ser repetido)?
- Acredito que conseguimos nos ajudar bastante e estimamos bem

## Tecnologias Utilizadas 🖥️

<br>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> </p>

<br>

### Estrutura do Projeto 🗂️

- **Frontend:**

  - `index.html` - Página inicial e navegação.
  - `styles.css` - Estilos do projeto.
  - `script.js` - Lógica de interação do usuário.

- **Backend:**
<!--  - `server.js` - Servidor Node.js.
  - `routes/` - Rotas da API.
  - `controllers/` - Lógica de controle.
  - `models/` - Modelos de dados.
  - `config/` - Configurações de banco de dados e outras. -->

- **Banco de Dados:**
<!-- - `schema.sql` - Estrutura do banco de dados PostgreSQL.
 - `seed.sql` - Dados iniciais para desenvolvimento e testes. -->

- **Prototipação:**
  - `figma/` - Arquivos de prototipação no Figma.

### Configuração do Projeto

### Pré-requisitos

- Node.js
- PostgreSQL

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Hypogram-Technologies/HypScrum]
   cd [HypScrum]
   ```
