# Automação de Testes Portal de Compras - Cypress com Page Objects

Este projeto foi desenvolvido para o desafio técnico do Portal de Compras, focando na automação do fluxo de **Filtro de processos**. A arquitetura utiliza o padrão **Page Objects (POM)** para garantir um código limpo, fácil de manter e escalável.

## O que foi utilizado nos testes

* **Cypress:** Framework principal para os testes E2E.

## Estrutura do Projeto (Page Objects)

O código está organizado para separar elementos, ações e lógica de teste:

* **Elements:** Arquivos `elements.js` que guardam apenas os seletores (a "planta" da página).
* **Pages:** Arquivos `index.js` que contêm os métodos de ação e as validações.
* **E2E:** Testes clássicos em `.cy.js` que descrevem os cenários de negócio.

## Como executar os testes

1. Preparar o ambiente
Certifique-se de ter o **Node.js** instalado. Na raiz do projeto, instale as dependências executando:

`npm install`

2. Iniciar o package.json e instalar o Cypress

`npm init -y`
`npm install cypress --save-dev`

3. Abrir o Cypress (Interface Gráfica)
Para selecionar e acompanhar os testes visualmente:

`npx cypress open`

4. Para executar o Cypress via terminal (Terminal)
Para uma execução via terminal:

`npx cypress run`

