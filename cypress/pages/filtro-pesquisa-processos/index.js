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
        cy.get(filtroPesquisaProcesso.botaoBuscarProcesso).type('{enter}');
    }

    clickBotaoBuscaAvancada() {
        cy.get(filtroPesquisaProcesso.botaoBuscaAvancada).click();
    }

    preencherInputPeriodo(diaInicio, diaFim) {
        cy.get(filtroPesquisaProcesso.campoPeriodo).click();

        cy.get('.vfc-calendar')
            .contains('span.vfc-span-day', new RegExp(`^${diaInicio}$`))
            .click();

        cy.get('.vfc-calendar')
            .contains('span.vfc-span-day', new RegExp(`^${diaFim}$`))
            .click();
    }

    validarQuantidadeResultados(valorEsperado) {
        cy.get(filtroPesquisaProcesso.dataDoProcesso)
            .should('have.length', valorEsperado);
    }

    clickDropdownMunicipio(opcao) {
        cy.get(filtroPesquisaProcesso.dropdownMunicipio).select(opcao);
    }

    resultadoObjetoProcesso() {
        cy.get(filtroPesquisaProcesso.resultadoObjetoProcesso)
            .contains("271022-1")
            .should("be.visible");
    }

    resultadoProcesso() {
        cy.get(filtroPesquisaProcesso.resultadoProcessos)
            .contains('271022-1')
            .should('be.visible');
    }

    resultadoOrgao() {
        cy.get(filtroPesquisaProcesso.resultadoOrgao)
            .should('be.visible')
            .and('contain', '271022-1')
            .and('contain', 'Comprador Mayco');
    }

    selecionarStatus() {
        cy.get(filtroPesquisaProcesso.dropdownStatus)
            .select('25')
    }

    validarResultadoStatusRepublicacao() {
        cy.get(filtroPesquisaProcesso.resultadoBuscaAvancada)
            .should('be.visible')
            .and('not.contain', '0 registros')
    }

    selecionarModalidade() {
        cy.get(filtroPesquisaProcesso.dropdownModalidade)
            .select('12')
    }

    validarResultadoModalidadeLeilao() {
        cy.get(filtroPesquisaProcesso.resultadoBuscaAvancada)
            .should('be.visible')
            .and('not.contain', '0 registros')
    }

    selecionarRealizacao() {
        cy.get(filtroPesquisaProcesso.dropdownRealizacao)
            .select('2')
    }

    validarResultadoRealizacaoPresencial() {
        cy.get(filtroPesquisaProcesso.resultadoBuscaAvancada)
            .should('be.visible')
            .and('not.contain', '0 registros')
    }

    selecionarJulgamento() {
        cy.get(filtroPesquisaProcesso.dropdownJulgamento)
            .select('7')
    }

    validarResultadoJulgamentoTecnico() {
        cy.get(filtroPesquisaProcesso.resultadoBuscaAvancada)
            .should('be.visible')
            .and('not.contain', '0 registros')
    }

    validarDataNosResultados(inicio, fim) {

        cy.get(filtroPesquisaProcesso.dataDoProcesso, { timeout: 15000 }).should('be.visible');

        const converterData = (str) => {

            const textoLimpo = str.trim().split(/\s+/)[0];


            if (!textoLimpo || !textoLimpo.includes('/')) {
                return null;
            }

            const [dia, mes, ano] = textoLimpo.split('/');
            return new Date(ano, mes - 1, dia);
        };

        const dataInicio = converterData(inicio);
        const dataFim = converterData(fim);

        cy.get(filtroPesquisaProcesso.dataDoProcesso).each(($el, index) => {
            const textoOriginal = $el.text();
            const dataProcesso = converterData(textoOriginal);


            if (dataProcesso) {
                expect(dataProcesso, `Item ${index}: Data ${textoOriginal} fora do intervalo`)
                    .to.be.within(dataInicio, dataFim);
            }
        });
    }

    selecionarUf() {
        cy.get(filtroPesquisaProcesso.dropdownUf)
            .select('100129') 
    }

    validarResultadoUfBA() {
        cy.get(filtroPesquisaProcesso.resultadoBuscaAvancada)
            .should('contain', 'Prefeitura de Lucca - BA')
    }

    selecionarMunicipio() {
        cy.get(filtroPesquisaProcesso.dropdownMunicipio)
            .select('100129173')
    }

    validarResultadoMunicipio() {
        cy.get(filtroPesquisaProcesso.botaoBuscaAvancada)
            .should('be.visible')
            .and('not.contain', '0 registros')
    }
}


export default new FiltroPesquisaProcesso();
