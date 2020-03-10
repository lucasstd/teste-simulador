import schema from '../support/schemas'
const Validator = require('jsonschema').Validator;
const apiUrl = Cypress.env('apiUrl');

const v = new Validator();

describe('Testar JSON da api', () => {
    it('retorna os erros em uma lista', () => {
        cy.request({
            method: 'GET',
            url: apiUrl
        }).then(response => {
            let errors = v.validate(response.body, schema).errors
            expect(errors).to.be.empty
        })
    });
});