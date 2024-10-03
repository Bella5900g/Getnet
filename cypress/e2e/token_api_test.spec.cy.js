/// <reference types="cypress" />

describe('Autenticação e Validação do Token', () => {

    it('Deve autenticar e obter o token com sucesso', () => {
        cy.fixture('autenticacao_sucesso').then((dadosEsperados) => {
            cy.autenticar().then((response) => {
                expect(response.status).to.eq(dadosEsperados.status);
                expect(response.body).to.have.property('token_type', dadosEsperados.body.token_type);
                expect(response.body).to.have.property('scope', dadosEsperados.body.scope);
                expect(response.body).to.have.property('expires_in').and.to.be.a(dadosEsperados.body.expires_in_type);
                expect(response.body).to.have.property('access_token').and.to.be.a(dadosEsperados.body.access_token_type);
            });
        });
    });

    it('Deve retornar erro 400 quando faltar campos obrigatórios', () => {
        cy.fixture('autenticacao_erro400').then((dadosEsperados) => {
            cy.validarErro400().then((response) => {
                expect(response.status).to.eq(dadosEsperados.status);
                expect(response.body).to.have.property('error').and.to.be.a(dadosEsperados.body.error);
                expect(response.body).to.have.property('error_description').and.to.be.a(dadosEsperados.body.error_description);
            });
        });
    });

    it('Deve retornar erro 401 quando a autenticação falha', () => {
        cy.fixture('autenticacao_erro401').then((dadosEsperados) => {
            cy.validarErro401().then((response) => {
                expect(response.status).to.eq(dadosEsperados.status);

                const details = response.body.details[0];

                expect(details).to.have.property('status', dadosEsperados.body.details.status);
                expect(details).to.have.property('description', dadosEsperados.body.details.description);
                expect(details).to.have.property('error_code', dadosEsperados.body.details.error_code);
                expect(details).to.have.property('description_detail', dadosEsperados.body.details.description_detail);
            });
        });
    });
});