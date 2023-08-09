# ContrataFácil APP

Bem-vindo à documentação do APP ContrataFácil! Esta aplicação permite realizar diversas operações relacionadas a Cadastro e consultas de Prestadores de Serviços e os Serviços.

## Instalação do projeto

Aqui vai estar o passo-a-passo de como instalar e rodar a API localmente

### 1. Requisitos

**Tenha o Node instalado na máquina** [Link para o Node](https://nodejs.org/pt-br/download)

### 2. Clone o projeto

`git clone https://github.com/markium1/contrataFacil-app`

### 3. Dentro da pasta do projeto execute os seguintes comandos para iniciar e configurar o projeto

- **Instalar Dependências**

Abra um terminal ou prompt de comando e navegue até a pasta do projeto clonado. Em seguida, execute o seguinte comando para instalar as dependências do projeto listadas no arquivo package.json

`npm install`

- **Iniciar o Servidor de Desenvolvimento**

Após as dependências serem instaladas, você pode iniciar o servidor de desenvolvimento para executar o projeto localmente. Use o comando:

`npm start`

- **Acessar o Projeto**

Seu projeto estará disponível na URL: **localhost:3000**

## Endpoints Principais

Aqui estão alguns dos principais endpoints da API:

### 1. Cadastro Prestadores e Serviços

**Endpoint Prestador:** `/cadastro-prestador`

**Endpoint Servico:** `/cadastro-servico`

Descrição: Realiza o cadastro de um prestador ou serviço.

Método: POST

Parâmetros:

**Prestador**

- `nome` (string): O nome do prestador.
- `telefone` (string): O telefone do prestador.
- `email`(string): O email do prestador.
- `foto`(file): Uma foto do prestador.

**Serviço**

- `nome` (string): O nome do serviço.
- `descricao` (string): A descrição.
- `valor`(string): O email do prestador.
- `prestador_id`(int): ID do prestador de serviço.

### 2. Buscar Prestadores e Serviços

**Endpoint Prestador:** `/prestador`

**Endpoint Servico:** `/servico`

Descrição: Realiza a busca de um prestador ou serviço.

Método: GET

Parâmetros (opcionais):

**Prestador**

- `/api/prestador?page={num_page}` Para buscar por uma pagina específica
- `/api/prestador?term={term}` Para filtrar por um termo

**Serviço**

- `/api/servico?page={num_page}` Para buscar por uma pagina específica
- `/api/servico?term={term}` Para filtrar por um termo

## **Observações**

Esse projeto está configurado linkado a API [Contrata Fácil API](https://github.com/markium1/contrataFacil-api) caso queira simular os dois ao mesmo tempo seguir as orientações da API no link, caso não, a configure no arquivo da pasta src/axios/config.js.
