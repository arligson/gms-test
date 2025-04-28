/// <reference types= "cypress"/>
import Chance from "chance"

const chance = new Chance()
const randomEmail = chance.email()


describe('US-012 - Funcionalidade: Cadastro de membros', () => {
  it('Deve realizar o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').clear().type('Joss')
    cy.get('#signup-lastname').clear().type('Stone')
    cy.get('#signup-email').clear().type(randomEmail)
    cy.get('#signup-phone').clear().type('123456789')
    cy.get('#signup-password').clear().type('Joss@Stone12')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , "Cadastro realizado com sucesso!")
    
  })
  it('Teste Negativo - Preenchendo com falta de informções,em campos obrigatório', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').clear().type(' ')
    cy.get('#signup-lastname').clear().type(' ')
    cy.get('#signup-email').clear().type(' ')
    cy.get('#signup-phone').clear().type('123456789')
    cy.get('#signup-password').clear().type('Joss@Stone12')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , "Por favor, preencha todos os campos obrigatórios.")
  })
})
describe('US-001 - Funcionalidade: Busca de Filmes', () => {
    it('Deve realizar a busca com a palavra-chave válida', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#search-input').clear().type('Matrix Reloaded')
      cy.get('#search-button').click()
      cy.get('#results-section h3').should('contain' , 'The Matrix Reloaded').eq('0')
      cy.get('#clear-button').click()
  
    })
    it('Deve realizar a busca com a palavra-chave inválida', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#search-input').clear().type('mmatrix Reloaded')
      cy.get('#search-button').click()
      cy.get('#results-section > p').should('contain', 'Filme não encontrado.')
      cy.get('#clear-button').click()
  
    })
  })
describe('US-015 - Funcionalidade: Recomendações diárias', () => {
    it('Deve mostrar diariamente 4 ou 5 recomendações', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#recommendations').children('div').its('length').should((len) => {
        expect(len).to.be.within(4, 5)
  })

})
})