import elements from '../elements/SimulationElements'

class SimulationPage {
    // Acessa o site que será testado
    acessarSite() { cy.visit("/") };

    inputQuantiaParaAplicar() { return cy.get(elements['inputQuantiaParaAplicar']) }
    inputQuantiaPoupada() { return cy.get(elements['inputQuantiaPoupada']) }
    inputQuantiaTempo() { return cy.get(elements['quantoTempo']) }

    btnSimular() { return cy.get(elements['btnSimular']) }
    btnTempo() { return cy.get(elements['btnTempo']) }
    refazerSimulacao() { return cy.get(elements['refazerSimulacao']) }

    errorTempoMsg() { return cy.get(elements['errorTempoMsg']) }
    errorValorInvestirMsg() { return cy.get(elements['errorValorInvestirMsg']) }
    errorValorAplicarMsg() { return cy.get(elements['errorValorAplicarMsg']) }

    tabelaComDados(){ return cy.get(elements['tabelaComDados']) }
}

export default SimulationPage