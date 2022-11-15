/// <reference types="cypress" />

describe('Funcionalidade: Visualização dos perfis criados', () => {

    beforeEach(() => {
        cy.visit('perfis')
        cy.fixture("perfis").then((mockPerfis) =>{
            cy.intercept('GET' , 'api/profile', {
                statusCode: 200,
                body: mockPerfis
            })
        })
       cy.reload()
    });

    it('Deve visualizar o primeiro nome da lista', () => {
        cy.get('[data-test="profile-name"]').first().should('have.text', 'Pedro Guerra')
    });

    it('Deve visualizar o último nome da lista', () => {
        cy.get('[data-test="profile-name"]').last().should('have.text', 'Roberto dos Santos Filho')
    });

    it('Deve visualizar o terceiro nome da lista', () => {
        cy.get('[data-test="profile-name"]').eq(2).should('have.text', 'Pa Sun')
    });

});