const filtroPesquisaProcesso = require("./elements").elements;

class FiltroPesquisaProcesso {
    clickInputObjeto(termo) {
        cy.get(filtroPesquisaProcesso.campoInputObjeto).type(termo);
    }

    clickInputProcesso(numero) {
        cy.get(filtroPesquisaProcesso.campoInputProcesso).type(numero);
    }

    clickInputOrgao(orgao) {
        cy.get(filtroPesquisaProcesso.campoInputOrgao).type(orgao);
    }

    clickBotaoBuscarProcesso() {
        cy.get(filtroPesquisaProcesso.botaoBuscarProcesso).click();
    }

    clickBotaoBuscaAvancada() {
        cy.get(filtroPesquisaProcesso.botaoBuscaAvancada).click();
    }

    clickDropdownStatus(opcao) {
        cy.get(filtroPesquisaProcesso.dropdownStatus).select(opcao);
    }

    clickDopdownModalidade(opcao) {
        cy.get(filtroPesquisaProcesso.dropdownModalidade).select(opcao);
    }

    clickDropdownRealizacao(opcao) {
        cy.get(filtroPesquisaProcesso.dropdownRealização).select(opcao);
    }

    clickDropdownJulgamento(opcao) {
        cy.get(filtroPesquisaProcesso.dropdownJulgamento).select(opcao);
    }

    campoInputPeriodo() {
        cy.get(filtroPesquisaProcesso.campoPeriodo)
            .should('be.visible')
            .clear({ force: true })
            .type('01/01/2026 - 05/01/2026');
    }

    validarQuantidadeResultados(valorEsperado) {
        cy.get(filtroPesquisaProcesso.dataDoProcesso)
            .should('have.length', valorEsperado);
    }

    clickDropdownUf(opcao) {
        cy.get(filtroPesquisaProcesso.dropdownUf).select(opcao);
    }

    clickDropdownMunicipios(opcao) {
        cy.get(filtroPesquisaProcesso.dropdownMunicipios).select(opcao);
    }

}

export default new FiltroPesquisaProcesso();
