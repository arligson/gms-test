/// <reference types= "cypress"/>
import Chance from "chance"
const chance = new Chance()

describe('US-012 - Funcionalidade: Cadastro de membros', () => {
  it('Deve realizar o cadastro de campos obrigatórios', () => {

    cy.register()

  })
  it('Teste Negativo - Preenchendo com falta de informções,em campos obrigatório', () => {

    cy.failRegister()

  })
})
