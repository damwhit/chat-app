describe('api', () => {
  it('confirms that the server is running', () => {
    cy.visit('http://localhost:3000');
    cy.contains("You're running on Express!");
  })
});

describe('client', () => {
  it('confirms that we can send a message', () => {
    cy.visit('http://localhost:8080');
    const message = "Hello, World";

    cy.get('.messages').contains(message).should('not.exist');
    cy.get('.message-input').type('Hello, World');
    cy.get('.message-form').submit();
    cy.get('.messages').contains(message);
  })
});