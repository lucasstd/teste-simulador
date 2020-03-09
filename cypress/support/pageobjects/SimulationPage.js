import elements from '../elements/SimulationElements'

class SimulationPage {
    // Acessa o site que será testado
    acessarSite() { cy.visit("/") };

    inputQuantiaParaAplicar() {
        return cy.get(elements['inputQuantiaParaAplicar'])
    }

    inputQuantiaPoupada() {
        return cy.get(elements['inputQuantiaPoupada'])
    }

    radioTempo() {
        return cy.xpath(elements['tipoTempo'])
    }
}

export default SimulationPage