
# Getnet - Testes Automatizados com Cypress

Este projeto contém uma suíte de testes automatizados para a API de autenticação da Getnet, desenvolvida utilizando [Cypress](https://www.cypress.io/). O projeto foi criado para validar as funcionalidades de autenticação, além de testar os cenários de erro 400 (campos obrigatórios faltando) e erro 401 (autenticação inválida).

## Índice
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Executando os Testes](#executando-os-testes)
- [Comandos Personalizados](#comandos-personalizados)
- [Contribuição](#contribuição)

## Instalação

Para executar este projeto, é necessário ter o [Node.js](https://nodejs.org/) instalado.

### Passo a Passo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Bella5900g/Getnet.git
   ```

2. **Navegue até o diretório do projeto**:
   ```bash
   cd Getnet
   ```

3. **Instale as dependências**: 
   Execute o seguinte comando para instalar as dependências do projeto:
   ```bash
   npm install
   ```

## Estrutura do Projeto

- **cypress/integration/**: Contém os arquivos de teste, como `token_api_test.spec.js`.
- **cypress/support/commands.js**: Contém os comandos personalizados reutilizáveis, como `autenticar`, `validarErro400`, e `validarErro401`.
- **cypress/fixtures/**: Contém arquivos JSON com os dados esperados para os testes, como `autenticacao_sucesso.json`, `autenticacao_erro400.json`, e `autenticacao_erro401.json`.

## Executando os Testes

### Via Interface Gráfica

Para rodar os testes utilizando a interface gráfica do Cypress:

1. Execute o seguinte comando:
   ```bash
   npx cypress open
   ```

2. A interface gráfica do Cypress será aberta, permitindo que você selecione e execute os testes. Selecione o arquivo `token_api_test.spec.js` para rodar os testes.

### Via Linha de Comando (Headless)

Para rodar os testes no modo headless (sem interface gráfica):

```bash
npx cypress run
```

## Comandos Personalizados

Os testes fazem uso de comandos personalizados definidos no arquivo `cypress/support/commands.js`. Esses comandos encapsulam a lógica de requisições HTTP e validações de resposta.

- **`autenticar()`**: Realiza a autenticação na API usando credenciais válidas.
- **`validarErro400()`**: Simula uma requisição inválida, omitindo campos obrigatórios para gerar um erro 400.
- **`validarErro401()`**: Simula uma requisição com credenciais inválidas para gerar um erro 401.

Esses comandos tornam o código mais reutilizável e facilitam a manutenção dos testes.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum bug ou quiser sugerir melhorias, sinta-se à vontade para abrir um _issue_ ou enviar um _pull request_.
