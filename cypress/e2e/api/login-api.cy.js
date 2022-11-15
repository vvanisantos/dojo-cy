/// <reference types="cypress" />

describe('Funcionalidade: Login - API', () => {

    it.only('Deve fazer login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: '/api/auth',
            body: {
                "email": "teste@dojo.com",
                "password": "teste@123"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('jwt')
            //expect(response.duration).be.lessThan(300)
        })
    });

});