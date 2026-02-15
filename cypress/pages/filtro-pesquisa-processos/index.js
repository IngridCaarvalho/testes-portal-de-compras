const filtroPesquisaProcesso = require("./elements").elements;

class FiltroPesquisaProcesso {
    preencherInputObjeto(termo) {
        cy.get(filtroPesquisaProcesso.campoInputObjeto).type(termo);
    }

    preencherInputProcesso(numero) {
        cy.get(filtroPesquisaProcesso.campoInputProcesso).type(numero);
    }

    preencherInputOrgao(orgao) {
        cy.get(filtroPesquisaProcesso.campoInputOrgao).type(orgao);
    }

    clickBotaoBuscarProcesso() {
        cy.get(filtroPesquisaProcesso.botaoBuscarProcesso).click();
    }

    clickBotaoBuscaAvancada() {
        cy.get(filtroPesquisaProcesso.botaoBuscaAvancada).click();
    }

    clickDropdownModalidade(opcao) {
        cy.get(filtroPesquisaProcesso.dropdownModalidade).select(opcao);
    }

    clickDropdownRealizacao(opcao) {
        cy.get(filtroPesquisaProcesso.dropdownRealizacao).select(opcao);
    }

    clickDropdownJulgamento(opcao) {
        cy.get(filtroPesquisaProcesso.dropdownJulgamento).select(opcao);
    }

    preencherInputPeriodo(dataInicio, dataFim) {
        const periodo = `${dataInicio} - ${dataFim}`
        cy.get(filtroPesquisaProcesso.campoPeriodo)
            .should('be.visible')
            .invoke('val', periodo)
            .trigger('change')
    }

    validarQuantidadeResultados(valorEsperado) {
        cy.get(filtroPesquisaProcesso.dataDoProcesso)
            .should('have.length', valorEsperado);
    }

    clickDropdownUf(opcao) {
        cy.get(filtroPesquisaProcesso.dropdownUf).select(opcao);
    }

    clickDropdownMunicipio(opcao) {
        cy.get(filtroPesquisaProcesso.dropdownMunicipio).select(opcao);
    }

    resultadoObjetoProcesso(valor) {
        cy.get(filtroPesquisaProcesso.resultadoObjetoProcesso)
            .should('be.visible')
            .and('contain', valor);
    }

    resultadoProcesso() {
        cy.get(filtroPesquisaProcesso.resultadoProcessos)
            .contains('v32PNCP Alteração/2026')
            .should('be.visible');
    }

    resultadoOrgao() {
        cy.get(filtroPesquisaProcesso.resultadoOrgao)
            .should('be.visible')
            .and('contain', 'v32PNCP Alteração/2026')
            .and('contain', 'Matheus Manoel Berto da Silva');
    }

    selecionarStatus() {
        cy.get(filtroPesquisaProcesso.dropdownStatus)
            .select('Em Republicação')
    }

    validarResultadoStatusRepublicacao() {
        cy.get(filtroPesquisaProcesso.resultadoBuscaAvancada)
            .should('be.visible')
            .and('not.contain', '0 registros')
    }

    selecionarModalidade() {
        cy.get(filtroPesquisaProcesso.dropdownModalidade)
            .select('Leilão Eletrônico')
    }

    validarResultadoModalidadeLeilao() {
        cy.get(filtroPesquisaProcesso.resultadoBuscaAvancada)
            .should('be.visible')
            .and('not.contain', '0 registros')
    }

    selecionarRealizacao() {
        cy.get(filtroPesquisaProcesso.dropdownRealizacao)
            .select('Presencial')
    }

    validarResultadoRealizacaoPresencial() {
        cy.get(filtroPesquisaProcesso.resultadoBuscaAvancada)
            .should('be.visible')
            .and('not.contain', '0 registros')
    }

    selecionarJulgamento() {
        cy.get(filtroPesquisaProcesso.dropdownJulgamento)
            .select('Técnica')
    }

    validarResultadoJulgamentoTecnico() {
        cy.get(filtroPesquisaProcesso.resultadoBuscaAvancada)
            .should('be.visible')
            .and('not.contain', '0 registros')
    }

    validarDataNosResultados(inicio, fim) {
        cy.get(filtroPesquisaProcesso.dataDoProcesso)
            .should('be.visible')
            .first()
            .then(($el) => {
                const texto = $el.text();
                expect(texto).to.satisfy((t) => t.includes(inicio) || t.includes(fim));
            });
    }

    selecionarUf() {
        cy.get(filtroPesquisaProcesso.dropdownUf)
            .select('BA')
    }

    validarResultadoUfBA() {
        cy.get(filtroPesquisaProcesso.resultadoBuscaAvancada)
            .should('be.visible')
            .and('not.contain', '0 registros')
    }

    selecionarMunicipio() {
        cy.get(filtroPesquisaProcesso.dropdownMunicipio)
            .select('Irará')
    }

    validarResultadoMunicipio() {
        cy.get(filtroPesquisaProcesso.botaoBuscaAvancada)
            .should('be.visible')
            .and('not.contain', '0 registros')
    }
}


export default new FiltroPesquisaProcesso();
