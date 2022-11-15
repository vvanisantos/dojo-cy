
class ExperienciaPage {
    get #cmpPosicao() { return cy.get('[data-test="experience-title"] > .MuiInputBase-root > .MuiInputBase-input') }
    get #cmpEmpresa() { return cy.get('[data-test="experience-company"] > .MuiInputBase-root > .MuiInputBase-input')}
    get #cmpLocalizacao() { return cy.get('[data-test="experience-location"] > .MuiInputBase-root > .MuiInputBase-input')}
    get #cmpDataIni() { return cy.get('#from')}
    get #cmpDataFim() { return cy.get('#to')}
    get #getDescricao() { return cy.get('[rows="1"]')}
    get #btnAdicionar() { return cy.get('[data-test="experience-submit"]')}

    addExperiencia(posicao, empresa, local, inicio, fim, desc) {
        this.#cmpPosicao.type(posicao)
        this.#cmpEmpresa.type(empresa)
        this.#cmpLocalizacao.type(local)
        this.#cmpDataIni.type(inicio)
        this.#cmpDataFim.type(fim)
        this.#getDescricao.type(desc)
        this.#btnAdicionar.click()
    }

visitar()
cy.visit('adicionar-experiencia')

}

module.exports = new ExperienciaPage()