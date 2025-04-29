/// <reference types= "cypress"/>
import Chance from "chance"
const chance = new Chance()

describe('US-012 - Funcionalidade: Cadastro de membros', () => {
  it.only('Deve realizar o cadastro de campos obrigatórios', () => {

    cy.register()
    cy.get('#signup-response').should('contain', "Cadastro realizado com sucesso!")
  })
  it('Teste Negativo - Preenchendo com falta de informções,em campos obrigatório', () => {

    cy.failRegister()
    cy.get('#signup-response').should('contain', "Por favor, preencha todos os campos obrigatórios.")
  })
})
