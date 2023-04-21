describe('Test GitHub link', () => {
    it("clicks on the petehunt's github link successfully", () => {
  
      cy.visit('http://localhost:8888')
      
      //clicks on link
      cy.contains("petehunt").click()
    })
  })