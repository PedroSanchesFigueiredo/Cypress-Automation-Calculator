/// <reference types="cypress" />

import "cypress-localstorage-commands"
import CalculadoraPage from '../support/pages/CalculadoraPage'

describe('Calculadora', () => {
    beforeEach(() => {
        cy.visit('https://www.calculadora-online.xyz')
    })
    it('Smoke da Tela', () => {
        CalculadoraPage.smokeCalculadora()
    })
    it.only('Soma de dois numeros', () => {
        CalculadoraPage.CalculadoraSomar()
    })
    
})