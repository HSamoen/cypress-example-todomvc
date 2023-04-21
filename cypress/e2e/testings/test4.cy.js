describe('Test checkbox', () => {
    it('should type text, press enter, and click on checkbox', () => {
      cy.visit('http://localhost:8888')
  
      // Type text into the input field and press Enter
      cy.get('input[placeholder="What needs to be done?"]')
        .type('e2e testings{enter}')
  
        // Find the checkbox and check that it is unchecked
      cy.get('input[type="checkbox"]').should('not.be.checked')

        // Check the checkbox
      cy.get('input[type="checkbox"]').check()

        // checkbox is checked
      cy.get('input[type="checkbox"]').should('be.checked')
    })
  })