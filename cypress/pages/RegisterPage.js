class RegisterPage {
    visit() {
        cy.visit('https://demo.realworld.io/#/register'); // URL da página de registro
    }

    preencherUsername(username) {
        cy.get('input[placeholder="Username"]').type(username);
    }

    preencherEmail(email) {
        cy.get('input[placeholder="Email"]').type(email);
    }

    preencherPassword(password) {
        cy.get('input[placeholder="Password"]').type(password);
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }

   // Verifica se o registro foi bem-sucedido ao verificar o nome de usuário na página
   verificarRegistro(username) {
    cy.contains(username).should('be.visible');
}

    verificarErroCampoObrigatorio() {
        cy.contains('email can\'t be blank').should('be.visible');
    }

    verificarErroEmailInvalido() {
        cy.contains('Have an account?').should('be.visible');
    }

    verificarErroEmailDuplicado() {
        cy.contains('email has already been taken').should('be.visible');
    }

    verificarErroSenhaCurta() {
        cy.contains('conduit').should('be.visible');
    }
}

export default new RegisterPage();
