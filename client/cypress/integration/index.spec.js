describe('Backend', () => {
  it('confirms that the server is running', () => {
    cy.visit('http://localhost:3000');
    cy.contains("You're running on Express!");
  })
});
