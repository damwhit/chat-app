describe('api', () => {
  it('confirms that the server is running', () => {
    cy.visit('http://localhost:3000');
    cy.contains("You're running on Express!");
  })
});

describe('client', () => {
  it('can set a current user and send a message', () => {
    cy.visit('http://localhost:8080');

    cy.get('.user-input').type('Larry David');
    cy.get('.user-form').submit();
    cy.contains('Welcome, Larry David');

    const message = "Hello, World";
    cy.get('.messages').contains(message).should('not.exist');
    cy.get('.message-input').type('Hello, World');
    cy.get('.message-form').submit();
    cy.get('.messages').contains(message);
  })
});