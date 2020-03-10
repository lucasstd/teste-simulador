// TODO: replace page to something
import page from '../support/pageobjects/SimulationPage'

const simulationPage = new page();

describe('Preencher corretamente a pagina de simulação', () => {
    context('como um associado', () => {

        before(() => {
            simulationPage.acessarSite()
        });

        // // O associado preencher todos os campos corretamente e visualizar o
        // // formulário de simulação
        it('Preenche valor para aplicar com 20,00', () => {
            simulationPage.inputQuantiaParaAplicar().type('20,00').then(
                simulationPage.inputQuantiaPoupada().click().then(
                    cy.get('#valorAplicar-error').should('not.be.visible')
                )
            );
            simulationPage.inputQuantiaPoupada().click();
        });
        // O associado preencher o valor inferior a “R$ 20.00” e receber a
        // mensagem de orientação “Valor mínimo de R$ 20.00"
        it('Preenche valor que você quer poupar com 20,00', () => {
            simulationPage.inputQuantiaPoupada().type('20,00').then(
                simulationPage.inputQuantiaTempo().click().then(
                    cy.get('#valorInvestir-error')
                        .should('not.be.visible')
                )
            );
        })
        
        it('Preenche com 20,00 campo Por quanto tempo você quer poupar', () => {
            simulationPage.inputQuantiaTempo().type('20').then(
                simulationPage.btnSimular().click().then(
                    // cy.get('#valorAplicar-error').should('not.be.visible')
                )
            );
        });
        it('Clicar em Simular', () => {
            simulationPage.btnSimular().click().then(
                simulationPage.tabelaComDados().should('not.be.visible')
            )
        });

        after(() => {
            simulationPage.refazerSimulacao().click
        })
    })
});

// describe('Preencher incorretamente a pagina de simulação', () => {
//     context('como um associado', () => {

//         before(() => { simulationPage.acessarSite() });
//         it('Ao clicar no botão Simular com campos preenchidos com valores abaixo de 20,00', () => {

//         });
        // it('Ao preencher valor que você quer aplicar com 19,00 e mudar o foco', () => {

        // })
//     })
// });