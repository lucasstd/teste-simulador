// TODO: replace page to something
import page from '../support/pageobjects/SimulationPage'

const simulationPage = new page();

// O associado preencher todos os campos corretamente e visualizar o formulário de simulação
describe('Preencher corretamente a pagina de simulação', () => {
    context('como um associado', () => {
        before(() => { simulationPage.acessarSite() });

        it('Preenche valor para aplicar com 20,00', () => {
            simulationPage.inputQuantiaParaAplicar().type('20,00')
            simulationPage.inputQuantiaPoupada().click()
            simulationPage.errorValorAplicarMsg().should('not.be.visible')
        });
        it('Preenche valor que você quer poupar com 20,00', () => {
            simulationPage.inputQuantiaPoupada().type('20,00')
            simulationPage.inputQuantiaTempo().click()
            simulationPage.errorValorInvestirMsg().should('not.be.visible')
        })

        it('Preenche com 2 campo Por quanto tempo você quer poupar', () => {
            simulationPage.inputQuantiaTempo().type('2')
            simulationPage.inputQuantiaPoupada().click()
            simulationPage.errorTempoMsg().should('not.be.visible')
        });
        it('Clicar em Simular', () => {
            simulationPage.btnSimular().click()
            simulationPage.tabelaComDados().should('be.visible')
        });

        after(() => { simulationPage.refazerSimulacao().click() })
    })
});

describe('Preencher incorretamente a pagina de simulação', () => {
    context('como um associado', () => {
        // primeiro input
        it('Preenche valor para aplicar com 19,00 e receber um erro', () => {
            simulationPage.inputQuantiaParaAplicar().type('19,00')
            simulationPage.inputQuantiaPoupada().click()
            simulationPage.errorValorAplicarMsg().should('be.visible')
        });
        it('Preenche valor para aplicar com -20,00 e verifica se fica negativo', () => {
            simulationPage.inputQuantiaParaAplicar()
                .clear()
                .type('-20,00')
                .invoke('val').then(text => {
                    expect(text).to.equal('20,00')
                })
            simulationPage.inputQuantiaPoupada().click()
            simulationPage.errorValorAplicarMsg().should('not.be.visible')
        });

        // segundo input
        it('Preenche valor que você quer poupar com 19,00', () => {
            simulationPage.inputQuantiaPoupada().type('19,00')
            simulationPage.inputQuantiaTempo().click()
            simulationPage.errorValorInvestirMsg().should('be.visible')
        })
        it('Preenche valor que você quer poupar com -19,00', () => {
            simulationPage.inputQuantiaPoupada().clear().type('-19,00')
            simulationPage.inputQuantiaTempo().click()
            simulationPage.errorValorInvestirMsg().should('be.visible')
        })

        // terceiro input
        it('Preenche com 0 campo Por quanto tempo você quer poupar', () => {
            simulationPage.inputQuantiaTempo().type('0')
            simulationPage.inputQuantiaPoupada().click()
            simulationPage.errorTempoMsg().should('be.visible')
        });
        it('Deixa o campo Por quanto tempo você quer poupar vazio', () => {
            simulationPage.inputQuantiaTempo().clear()
            simulationPage.inputQuantiaPoupada().click()
            simulationPage.errorTempoMsg().should('be.visible')
        });

        it('Clicar em Simular', () => {
            simulationPage.btnSimular().click()
            simulationPage.tabelaComDados().should('not.be.visible')
        });
    })
});