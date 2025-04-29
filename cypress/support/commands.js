// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Chance from "chance"
const chance = new Chance()

const randomFirstName = chance.name()
const randomLastName = chance.last()
const randomEmail = chance.email()
const randomPhoneNumber = chance.string({ length: 10, pool: '0123456789' })
const randomPassword = chance.string({ length: 20, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()' })


Cypress.Commands.add('register', () => { 
    cy.get('#signup-firstname').clear().type(randomFirstName)
    cy.get('#signup-lastname').clear().type(randomLastName)
    cy.get('#signup-email').clear().type(randomEmail)
    cy.get('#signup-phone').clear().type(randomPhoneNumber)
    cy.get('#signup-password').clear().type(randomPassword, {force:true})
    cy.get('#signup-button').click()
 })
 Cypress.Commands.add('failRegister', () => {
    cy.get('#signup-firstname').clear().type(' ')
    cy.get('#signup-lastname').clear().type(' ')
    cy.get('#signup-email').clear().type(' ')
    cy.get('#signup-phone').clear().type(randomPhoneNumber)
    cy.get('#signup-password').clear().type(randomPassword)
    cy.get('#signup-button').click()

})
Cypress.Commands.add('buscaDeFilmesValida', () =>{
    cy.get('#search-input').clear().type('Matrix Reloaded')
    cy.get('#search-button').click()
    cy.get('#results-section h3').should('contain' , 'The Matrix Reloaded').eq('0')
    cy.get('#clear-button').click()
})
Cypress.Commands.add('buscaDeFilmesInvalida', () =>{
    cy.get('#search-input').clear().type('mmatrix Reloaded')
    cy.get('#search-button').click()
    cy.get('#results-section > p').should('contain', 'Filme não encontrado.')
    cy.get('#clear-button').click()
})
Cypress.Commands.add('recomendacoesDeFilmes', () => { 
    cy.get('#recommendations').children('div').its('length').should((len) => {
        expect(len).to.be.within(4, 5)
  })
 })
 Cypress.Commands.add('buscaDeFilmesDeArray', () => 
    cy.fixture('filmes').each((filmes) =>{
        cy.get('#search-input').clear().type(filmes.titulo)
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain' , filmes.titulo )
        cy.get('#clear-button').click()
 })
 )
