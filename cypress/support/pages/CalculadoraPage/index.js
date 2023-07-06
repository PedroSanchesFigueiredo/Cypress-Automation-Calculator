
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
        cy.get(el.TextoCalculadora).should('exist')
    }

    CalculadoraSomar() {
        cy.get(calculadoraNumero(7)).click()
        cy.get(calculadoraAgregador('Sum')).click()
        cy.get(calculadoraNumero(8)).click()
        cy.get(calculadoraAgregador('Igual')).click()
        cy.get(el.CalculadoraResultado).should('have.text', '15')
    }

}

function calculadoraNumero(numero) {
    for (let i = 1; i <= 9; i++) {
        if (numero === i) {
            return el["Number" + i];
        }
    }
}


function calculadoraAgregador(agregador) {
    let i = 0;
    const operadores = ['Sum', 'Multi', 'Menos', 'Dividir', 'Igual'];
    while (i < operadores.length) {
        if (agregador === operadores[i]) {
            return el["Simbolo" + operadores[i]];
        }
        i++;
    }
}

export default new CalculadoraPage()
