/// <reference types="cypress" />

describe('Funcionalidade: Tela criar perfil', () => {

    beforeEach(() => {
        cy.login('vanessa@teste.com', 'teste@123')
        cy.visit('criar-perfil')
    });

    it('Criar perfil somente com campos obrigatórios', () => {
        cy.get('#mui-component-select-status').click()
        cy.contains('QA Pleno').click()
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Teste manuais, Automação de testes, Teste de integração')
        cy.get('[data-test="profile-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Vanessa')
    });
        
    it('Criar perfil completo', () => {
        cy.get('#mui-component-select-status').click()
        cy.contains('QA Pleno').click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('AmbevTech')
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.ambevtech.com.br/')
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Blumenau, SC')
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Teste manuais, Automação de testes, Teste de integração')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('vvanisantos')
        cy.get('[rows="1"]').type('Mais de 10 anos atuando no setor de tecnologia na área de qualidade de software.')
        cy.get('[data-test="profile-socials"]').click()
        cy.get('[data-test="profile-facebook"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.facebook.com.br')
        cy.get('[data-test="profile-submit"]').click()

        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Vanessa')
     });
    

     it.only('Validação do endereço Website', () => {
        cy.get('#mui-component-select-status').click()
        cy.contains('QA Pleno').click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('AmbevTech')
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('www.ambevtech.com.br/')
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Blumenau, SC')
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Teste manuais, Automação de testes, Teste de integração')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('vvanisantos')
        cy.get('[rows="1"]').type('Mais de 10 anos atuando no setor de tecnologia na área de qualidade de software.')
        cy.get('[data-test="profile-submit"]').click()
        
        cy.get('.MuiFormHelperText-root').should('contain','Digite uma url válida') 
     });

});