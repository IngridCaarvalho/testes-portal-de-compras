import filtroPesquisaProcessos from "../pages/filtro-pesquisa-processos";

describe("Realizando a pesquisa de processos", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("baseUrl"));
    });

    it("Ao inserir a informação no campo de objeto, o resultado do processo deve ser exibido", () => {
        filtroPesquisaProcessos.preencherInputObjeto('v32PNCP Alteração');
        filtroPesquisaProcessos.clickBotaoBuscarProcesso();
        filtroPesquisaProcessos.resultadoObjetoProcesso('v32PNCP Alteração');
    });

    it("Ao inserir a informação no campo de processo, o resultado do número do processo deve ser exibido", () => {
        filtroPesquisaProcessos.preencherInputProcesso('v32PNCP Alteração/2026');
        filtroPesquisaProcessos.clickBotaoBuscarProcesso();
        filtroPesquisaProcessos.resultadoProcesso();
    });

    it("Ao inserir a informação no campo de orgão, o resultado do orgão do processo deve ser exibido", () => {
        filtroPesquisaProcessos.preencherInputOrgao('Matheus Manoel Berto da Silva');
        filtroPesquisaProcessos.clickBotaoBuscarProcesso();
        filtroPesquisaProcessos.resultadoOrgao();
    });

    it("Ao clicar no campo de status e selecionar Em republicação, os resultados com esse status devem ser exibidos", () => {
        filtroPesquisaProcessos.clickBotaoBuscaAvancada();
        filtroPesquisaProcessos.selecionarStatus();
        filtroPesquisaProcessos.clickBotaoBuscarProcesso();
        filtroPesquisaProcessos.validarResultadoStatusRepublicacao();
    });

    it("Ao clicar no campo de modalidade e selecionar Leilão eletrônico, os resultados com essa opção devem ser exibidos", () => {
        filtroPesquisaProcessos.clickBotaoBuscaAvancada();
        filtroPesquisaProcessos.selecionarModalidade();
        filtroPesquisaProcessos.clickBotaoBuscarProcesso();
        filtroPesquisaProcessos.validarResultadoModalidadeLeilao();
    });

    it("Ao clicar no campo de realização e selecionar Presencial, os resultados com essa opção devem ser exibidos", () => {
        filtroPesquisaProcessos.clickBotaoBuscaAvancada();
        filtroPesquisaProcessos.selecionarRealizacao();
        filtroPesquisaProcessos.clickBotaoBuscarProcesso();
        filtroPesquisaProcessos.validarResultadoRealizacaoPresencial();
    });

    it("Ao clicar no campo de julgamento e selecionar técnica, os resultados com essa opção devem ser exibidos", () => {
        filtroPesquisaProcessos.clickBotaoBuscaAvancada();
        filtroPesquisaProcessos.selecionarJulgamento();
        filtroPesquisaProcessos.clickBotaoBuscarProcesso();
        filtroPesquisaProcessos.validarResultadoJulgamentoTecnico();
    });

    it("Ao clicar no campo de período e selecionar a data de inicio e fim, os resultados conforme o perído selecionado devem ser exibidos", () => {
        const dataInicio = '01/01/2026';
        const dataFim = '05/01/2026';
        filtroPesquisaProcessos.clickBotaoBuscaAvancada();
        filtroPesquisaProcessos.preencherInputPeriodo(dataInicio, dataFim);
        filtroPesquisaProcessos.clickBotaoBuscarProcesso();
        filtroPesquisaProcessos.validarDataNosResultados(dataInicio, dataFim);
    });

    it("Ao clicar no campo de uf e selecionar o estado, os resultados com essa opção devem ser exibidos", () => {
        filtroPesquisaProcessos.clickBotaoBuscaAvancada();
        filtroPesquisaProcessos.selecionarUf();
        filtroPesquisaProcessos.clickBotaoBuscarProcesso();
        filtroPesquisaProcessos.validarResultadoUfBA();
    });

    it("Ao clicar no campo de uf e selecionar o estado e o município, os resultados com essas opções devem ser exibidas", () => {
        filtroPesquisaProcessos.clickBotaoBuscaAvancada();
        filtroPesquisaProcessos.selecionarUf();
        filtroPesquisaProcessos.selecionarMunicipio();
        filtroPesquisaProcessos.clickBotaoBuscarProcesso();
        filtroPesquisaProcessos.validarResultadoMunicipio();
    });
});

