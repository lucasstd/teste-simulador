import LoginElements from '../elements/SimulationElements'

class SimulationPage {
    // Acessa o site que será testado
    acessarSite() { cy.visit("/") };

    visualizarErroValorAplicar() {
        cy.get(loginElements['inputQuantiaParaAplicar'])
            .should('contain', 'Valor mínimo de 20.00');
    }

    visualizarErroValorPoupado() {
        cy.get(loginElements['inputQuantiaPoupada'])
            .should('contain', 'Valor mínimo de 20.00');
    }

    escolherTempo() {
        cy.xpath(loginElements['tipoTempo'])
    }

}

export default SimulationPage