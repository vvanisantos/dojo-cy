/// <reference types="cypress" />
import usuario from "../../fixtures/usuario.json"

describe('Funcionalidade: Tela de Login', () => {

    beforeEach(() => {
        //Executar algo antes de todos os cenários
        cy.visit('login')
    });

    afterEach(() => {
        //Executar algo depois de cada cenário
        cy.screenshot()
    });
    
    it('Deve fazer login com sucesso', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('vanessa@teste.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('teste@123')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Vanessa')
        
    });

    it('Deve validar mensagem de erro ao fazer login com dados inválidos', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('vanetetssa@teste.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('testtee@123')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('contain','Credenciais inválidas')   
    });

    it('Deve fazer login com sucesso - Usando command', () => {
        cy.login('vanessa@teste.com', 'teste@123')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Vanessa')
    });

    it('Deve fazer login com sucesso usando importação Massa de dados', () => {
        cy.login(usuario.usuario,usuario.senha)
        cy.get('[data-test="dashboard-welcome"]').should('contain', usuario.nome)
    });

    it('Deve fazer login com sucesso usando Fixture', () => {
        cy.fixture("multi-usuario").then((multi) =>{
            cy.login(multi[0].usuario, multi[0].senha)
            cy.get('[data-test="dashboard-welcome"]').should('contain', multi[0].nome)
        })
     
    });


});