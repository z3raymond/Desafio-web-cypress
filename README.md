# Desafio-web-cypress
Este repositório contém um desafio de automação de testes utilizando o Cypress. O objetivo é criar testes automatizados para uma aplicação web, garantindo a qualidade e a funcionalidade do sistema.

Requisitos
Node.js (versão 12 ou superior)
npm (gerenciador de pacotes do Node.js)
Instalação
Clone o repositório para sua máquina local:

git clone https://github.com/seu-usuario/Desafio-web-cypress.git
Navegue até o diretório do projeto:

cd Desafio-web-cypress
Instale as dependências do projeto:

npm install
Estrutura do Projeto
cypress/: Contém todos os testes e configurações do Cypress.
integration/: Contém os arquivos de teste.
fixtures/: Contém dados estáticos para uso nos testes.
support/: Contém comandos e configurações adicionais.
cypress.json: Arquivo de configuração do Cypress.
Executando os Testes
Para executar os testes em modo interativo, utilize o comando:

npx cypress open
Isso abrirá a interface gráfica do Cypress, onde você pode selecionar e executar os testes.

Para executar os testes em modo headless (sem interface gráfica), utilize o comando:

npx cypress run
Estrutura dos Testes
Os testes estão localizados no diretório cypress/e2e. Cada arquivo de teste cobre um conjunto específico de funcionalidades da aplicação web.