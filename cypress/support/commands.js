// Comando para autenticar com as credenciais corretas
Cypress.Commands.add('autenticar', () => {
    const clientID = '67823c6d-58de-494f-96d9-86a4c22682cb';
    const clientSecret = 'c2d6a06f-5f31-448b-9079-7e170e8536e4';
    const authString = btoa(`${clientID}:${clientSecret}`);

    return cy.request({
        method: 'POST',
        url: 'https://api-homologacao.getnet.com.br/auth/oauth/v2/token',
        headers: {
            authorization: `Basic ${authString}`,
            'content-type': 'application/x-www-form-urlencoded',
        },
        form: true,
        body: {
            scope: 'oob',
            grant_type: 'client_credentials',
        },
    });
});

// Comando para validar o erro 400 quando faltam campos obrigatórios
Cypress.Commands.add('validarErro400', () => {
    const clientID = '67823c6d-58de-494f-96d9-86a4c22682cb';
    const clientSecret = 'c2d6a06f-5f31-448b-9079-7e170e8536e4';
    const authString = btoa(`${clientID}:${clientSecret}`);

    return cy.request({
        method: 'POST',
        url: 'https://api-homologacao.getnet.com.br/auth/oauth/v2/token',
        headers: {
            authorization: `Basic ${authString}`,
            'content-type': 'application/x-www-form-urlencoded',
        },
        form: true,
        failOnStatusCode: false, // Permite capturar a resposta mesmo com status de erro
        body: {
            scope: 'oob', // Campo obrigatório 'grant_type' removido para gerar erro 400
        },
    });
});

// Comando para validar o erro 401 quando as credenciais são inválidas
Cypress.Commands.add('validarErro401', () => {
    const invalidClientID = 'invalid-client';
    const invalidClientSecret = 'invalid-secret';
    const authString = btoa(`${invalidClientID}:${invalidClientSecret}`);

    return cy.request({
        method: 'POST',
        url: 'https://api-homologacao.getnet.com.br/auth/oauth/v2/token',
        headers: {
            authorization: `Basic ${authString}`,
            'content-type': 'application/x-www-form-urlencoded',
        },
        form: true,
        failOnStatusCode: false, // Permite capturar a resposta mesmo com status de erro
        body: {
            scope: 'oob',
            grant_type: 'client_credentials',
        },
    });
});