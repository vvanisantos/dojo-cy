/// <reference types="cypress" />

describe('Funcionalidade: Criar perfil', () => {
    beforeEach(() => {
        cy.loginApp()
        cy.visit('criar-perfil')
    });
     
    it.only('Deve visitar a tela sem abrir a tela de login', () => {
      cy.log('Visitou!!!!!!')
    });

     it('Deve criar perfil com sucesso - Commands', () => {
        cy.criarPerfil('QA Pleno', 'AmbevTech', 'https://www.ambevtech.com.br/', 'Blumenau, SC', 'Teste manuais, Automação de testes, Teste de integração', 'vvanisantos', 'Mais de 10 anos atuando no setor de tecnologia na área de qualidade de software.')
        cy.get('[data-test="dashboard-editProfile"]').should('exist')
     });
     
     it('Deve validar mensagem de erro ao cadastrar com site errado', () => {
        cy.criarPerfil('QA Pleno', 'AmbevTech', 'www', 'Blumenau, SC', 'Teste manuais, Automação de testes, Teste de integração', 'vvanisantos', 'Mais de 10 anos atuando no setor de tecnologia na área de qualidade de software.')
        cy.contains('Digite uma url válida').should('be.visible')
     });
});