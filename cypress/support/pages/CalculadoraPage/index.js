
import { el } from './elements'
class CalculadoraPage {

    smokeCalculadora() {
        cy.get(el.BTMenuCalculad).should('exist').should('have.text', 'CALCULAD.');
        cy.get(el.BTMenuTempo).should('exist').should('have.text', 'TEMPO')
        cy.get(el.BTMenuFinancas).should('exist').should('have.text', 'FINANÇAS')
        cy.get(el.BTMenuComputad).should('exist').should('have.text', 'COMPUTAD.')
        cy.get(el.BTMenuDiv).should('exist').should('have.text', 'DIV.')
        cy.get(el.BTMenuConvers).should('exist').should('have.text', 'CONVERS.')
        cy.get(el.Calculadora).should('exist')
        cy.get(el.TituloCalculadora).should('exist').should('have.text', 'Minha calculadora simples: Calculadora simples')
    }

    CalculadoraSomar() {
        cy.get(el.Number7).click()
        cy.get(el.CalculadoraSimboloMais).click()
        cy.get(el.Number8).click()
        cy.get(el.CalculadoraSimboloMais).click().click()
    }

}

export default new CalculadoraPage()
