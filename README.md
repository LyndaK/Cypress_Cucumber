# Projeto de Testes Automatizados com Cypress e Cucumber

## Descrição

Este projeto utiliza o Cypress para realizar testes automatizados em uma aplicação web. O objetivo é garantir que todas as funcionalidades estejam funcionando conforme o esperado, proporcionando uma experiência de usuário de alta qualidade.

## Estrutura do Projeto

- **cypress/e2e/**: Contém os arquivos de teste E2E.
- **cypress/support/**: Contém funções de suporte e configurações globais como PageObjects e Step Definitions.

## Pré-requisitos

Antes de começar, você precisa ter o Node.js e o npm instalados em sua máquina.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
2. Instale as dependências
   ```bash
   npm install
## Executando os testes
Para executar os testes, use o seguinte comando:
```bash
    npx cypress open
 ```
 e para rodar em headless, use:
 ```bash
    npm test
 ```
 ## Estrutura de Testes
Os testes estão organizados em arquivos .feature usando a sintaxe Gherkin. Cada arquivo contém cenários que descrevem o comportamento esperado da aplicação
 #### Exemplo:
```bash
 Feature: Busca de Produtos

  Scenario: Buscar um produto existente
    Given que estou na página de busca
    When eu busco por "Produto A"
    Then eu devo ver "Produto A" nos resultados
```