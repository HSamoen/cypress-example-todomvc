describe('tests input', () => {
    it('types in todo input successfully', () => {
      cy.visit('http://localhost:8888')
    
      //type in input field
      cy.get('input[placeholder="What needs to be done?"]').type('e2e testings')
      
      //check that input field contains the correct input
      cy.get('input[placeholder="What needs to be done?"]').should('have.value', 'e2e testings')
    })
  })
  