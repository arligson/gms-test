/// <reference types= "cypress"/>

describe('US-015 - Funcionalidade: Recomendações diárias', () => {
  it('Deve mostrar diariamente 4 ou 5 recomendações', () => {
    cy.recomendacoesDeFilmes()

  })
})