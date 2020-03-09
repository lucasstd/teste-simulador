// TODO: replace page to something
import page from '../support/pageobjects/SimulationPage'

const simulationPage = new page();
const apiUrl = Cypress.env('apiUrl');

context()
describe('Pagina de simulação', () => {
    context('como um associado', () => {
        before(() => { simulationPage.acessarSite() });

        // O associado preencher todos os campos corretamente e visualizar o
        // formulário de simulação
        it('Ao preencher valor que você quer aplicar com 20,00', () => {
            simulationPage.inputQuantiaParaAplicar().type('20,00');
        });
        // O associado preencher o valor inferior a “R$ 20.00” e receber a
        // mensagem de orientação “Valor mínimo de R$ 20.00"
        it('Ao preencher valor que você quer aplicar com 19,00', () => {
            simulationPage.inputQuantiaPoupada()
                .type('19,00')
                .should('contain', 'Valor mínimo de R$ 20.00')
        })

        it('Ao preencher valor que você quer aplicar com 19,00 e mudar o foco', () => {

        })

        it('Ao clicar no botão Simular com campos preenchidos com valores acima de 20,00', () => {

        });

        it('Ao clicar no botão Simular com campos preenchidos com valores abaixo de 20,00', () => {

        });
    })
});
