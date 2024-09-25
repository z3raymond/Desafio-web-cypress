import RegisterPage from '../pages/RegisterPage';

describe('Teste de Registro de Usuário - Page Objects', () => {
    function gerarDadosAleatorios() {
        const timestamp = new Date().getTime();
        const username = `user_${timestamp}`;
        const email = `email_${timestamp}@example.com`;
        const password = `senha${timestamp}`;
        return { username, email, password };
    }

    beforeEach(() => {
        RegisterPage.visit();
    });

    it('Deve registrar um novo usuário com dados aleatórios', () => {
        const dadosUsuario = gerarDadosAleatorios();
        RegisterPage.preencherUsername(dadosUsuario.username);
        RegisterPage.preencherEmail(dadosUsuario.email);
        RegisterPage.preencherPassword(dadosUsuario.password);
        RegisterPage.submit();
        RegisterPage.verificarRegistro(dadosUsuario.username);
    });

    it('Deve exibir erro ao tentar registrar sem preencher campos obrigatórios', () => {
        RegisterPage.submit();
        RegisterPage.verificarErroCampoObrigatorio();
    });

    it('Deve exibir erro ao inserir um email inválido', () => {
        const dadosUsuario = gerarDadosAleatorios();
        RegisterPage.preencherUsername(dadosUsuario.username);
        RegisterPage.preencherEmail('email-invalido');
        RegisterPage.preencherPassword(dadosUsuario.password);
        RegisterPage.submit();
        RegisterPage.verificarErroEmailInvalido();
    });

    it('Deve exibir erro ao tentar registrar um usuário com email já existente', () => {
        const dadosUsuario = gerarDadosAleatorios();
        RegisterPage.preencherUsername(dadosUsuario.username);
        RegisterPage.preencherEmail('email_existente@example.com');
        RegisterPage.preencherPassword(dadosUsuario.password);
        RegisterPage.submit();
        RegisterPage.verificarErroEmailDuplicado();
    });

    it('Deve exibir erro ao inserir uma senha com menos de 8 caracteres', () => {
        const dadosUsuario = gerarDadosAleatorios();
        RegisterPage.preencherUsername(dadosUsuario.username);
        RegisterPage.preencherEmail(dadosUsuario.email);
        RegisterPage.preencherPassword('123');
        RegisterPage.submit();
        RegisterPage.verificarErroSenhaCurta();
    });
});
