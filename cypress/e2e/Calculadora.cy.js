/// <reference types="cypress" />
const { CalculadoraSomar, CalculadoraSubtrair } = require('../support/pages/CalculadoraPage/index');
import "cypress-localstorage-commands"
import CalculadoraPage from '../support/pages/CalculadoraPage'

describe('Calculadora', () => {
    beforeEach(() => {
        cy.visit('https://www.calculadora-online.xyz')
    })
    it('Smoke da Tela', () => {
        CalculadoraPage.smokeCalculadora();
    })
    it('5 - 5 ', () => {
        CalculadoraPage.CalculadoraSubtrair();
    })
    it('9 + 9', () => {
        CalculadoraPage.CalculadoraSomar();
    })
    it('5 / 5', () => {
        CalculadoraPage.CalculadoraDividir();
    })
    it('4 * 4', () => {
        CalculadoraPage.CalculadoraMulti();
    })
})