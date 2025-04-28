/// <reference types= "cypress"/>

describe('US-012 - Funcionalidade: Cadastro de membros', () => {
  it('Deve realizar o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').clear().type('Joss')
    cy.get('#signup-lastname').clear().type('Stone')
    cy.get('#signup-email').clear().type('Joss2@qa.com')
    cy.get('#signup-phone').clear().type('123456789')
    cy.get('#signup-password').clear().type('Joss@Stone12')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , "Cadastro realizado com sucesso!")
    
  })
})