/// <reference types="cypress" />
import ExperienciaPage  from "../../support/pages/experiencia.page";


describe('Funcionalidade: Adicionar experiência', () => {
    beforeEach(() => {
        cy.loginApp()
        experienciaPage.visitar()
    });

it('Deve adicionar uma experiência com sucesso', () => {
    ExperienciaPage.addExperiencia('QA Pleno','Ambev', 'Floripa', '01/01/2022', '01/01/2040', 'Empresa de TI')
});

});

           