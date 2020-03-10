# teste-simulador
Teste para a dbserver usando Cypress

## Rodando testes
```bash
git clone https://github.com/lucasstd/teste-simulador.git
npm install
npx cypress open / npm run test:chrome
```

## Tecnicas de teste escolhidas
* Teste de contrato com JSONSchema - Sinceramente achei que faltava explicação na parte da API, testei alguns POST, queries e levei um bom tempo até perceber que poderia tratava de um teste de contrato (lendo bastante), não tem muitos "corner cases então foi a parte mais simples"

* Teste End to end - Como o caso de aceitação dizia para fazer testes em uma UI e preenchendo campos, testes e2e são perfeitos pra isso.

### Planejamento
Criei os testes com base na aceitação, e a história, pensei em "corner cases" como negativo, valores altos e zero, porém dizia para deixar com menos testes e mais qualidade, tentei deixar só com os testes de aceitação e de contrato

## Criado com
- [x] [Cypress](https://www.cypress.io/) - Pois é rapido, ter boa documentação, ser facil, visual e "intuitivo" para testar.
    Fiz alguns testes com Jest, Jasmine e Selenium antes de decidir criar um projeto com Cypress e pelo que vi ele me atendia melhor nos testes de contrato e UI.

- [x] [JSONSchema](https://json-schema.org/implementations.html) - Escolhi o JSONSchema para teste de contrato pois já havia utilizado com Python e Java antes, porém, me poderia ter feito sem essa ferramenta, mas ela pode agregar mais no futuro, por isso foi escolhida

### Ferramentas testadas e não utilizadas
- [ ] Cucumber - fiz alguns testes com cucumber antes de escolher deixa-lo de lado pois já haviam critério de aceitação, e deveria ser um projeto simples (posso criar uma branch e colocar, mas decidi não encher de coisas o github)
``` 
Feature: Testar campos do formulario de investimentos

    Background: Acesso o site de simulação de investimentos da Sicredi
        Given acesso o site da Sicredi

    Scenario: Preencher o formulario de investimentos com informações certas
        Then visualizar a tabela de resultado com Mês e Valor. 

    Scenario Outline: Preencher o formulario de investimentos com informações incorretas
        When informar <Qual o valor que você quer aplicar?> abaixo de 20,00
        When informar <Por quanto tempo você quer poupar?> abaixo de 20,00
        And Mudar o foco do campo
        Then devo visualizar a mensagem de erro

    Scenario Outline: Preencher o formulario de investimentos com informações incorretas e clicar em simular
        When informar <Qual o valor que você quer aplicar> abaixo de 20,00
        When informar <Por quanto tempo você quer poupar?> abaixo de 20,00
        And clicar em simular
        Then não devo visualizar a tabela de resultado com Mês e Valor.
```

- [ ] Docker - No geral, meus projetos são feitos utilizando Docker e tem um tutorial muito bom no site do Cypress, porém como era para fazer uma coisa bem simples, preferi não complicar

- [ ] Jest - Me agradou muito com o Snapshot testing e a velocidade, mas não era tão visual e intuitivo quanto Cypress, embora tenha algumas vantagens bem interessantes.

- [ ] Yarn - na maioria dos projetos com node, costumo criar com Yarn, porém como disseram na documentação do Cypress
> recommended approach is to install Cypress with npm

## Aprendido
Foi um ótimo teste, embora tive alguns problemas com ajv e Cypress com Docker (me tomou um bom tempo para criar e depois remover para deixar mais simples), senti que o teste abordava as tecnicas basicas de teste e como não tenho uma base muito grande, deu para ver o quão divertido é solucionar esses problemas.

Gostaria que tivesse tempo(comecei relativamente tarde o projeto) e senti que não consegui dar o meu melhor, pois precisei de mais tempo para entender e testar as ferramentas já que não tinha uma favorita.
