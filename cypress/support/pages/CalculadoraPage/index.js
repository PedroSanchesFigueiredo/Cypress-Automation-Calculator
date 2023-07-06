
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

    executarOperacao(numero1, operador, numero2) {
        cy.get(calculadoraNumero(numero1)).click();
        cy.get(calculadoraAgregador(operador)).click();
        cy.get(calculadoraNumero(numero2)).click();
        cy.get(calculadoraAgregador('Igual')).click();
      }
    
      CalculadoraSomar() {
        this.executarOperacao(1, 'Sum', 9);
        cy.get(el.CalculadoraResultado).should('have.text', '10');
      }
      CalculadoraSubtrair() {
        this.executarOperacao(9, 'Menos', 5);
        cy.get(el.CalculadoraResultado).should('have.text', '4');
    }
      CalculadoraDividir() {
        this.executarOperacao(9, 'Dividir', 3);
        cy.get(el.CalculadoraResultado).should('have.text', '3');
    }
      CalculadoraMulti() {
        this.executarOperacao(4, 'Multi', 4);
        cy.get(el.CalculadoraResultado).should('have.text', '16');
    }
}

function calculadoraNumero(numero) {
    for (let i = 1; i <= 9; i++) {
        if (numero === i) {
            return el["Number" + i];
        }
    }
}


function calculadoraAgregador(operador) {
    let i = 0;
    const operadores = ['Sum', 'Multi', 'Menos', 'Dividir', 'Igual'];
    while (i < operadores.length) {
        if (operador === operadores[i]) {
            return el["Simbolo" + operadores[i]];
        }
        i++;
    }
}

export default new CalculadoraPage()
