describe('cy.viewport Demonstration', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("Angular")}/angularjs-protractor-practice-site`);
  });

  // Eu posso definir o viewport de um dispositivo específico, usando o nome dele como referência.
  it('Device name', () => {
    cy.viewport('iphone-6');
    cy.get("#mobile_menu_toggler").should("be.visible");
  });

  it('Specific viewport', () => {
    cy.viewport(500, 600);
    cy.get("#mobile_menu_toggler").should("be.visible");

    // Há cenários em que um elemento não é RENDERIZADO, até chegar em um viewport específico.
    cy.get("#mobile_menu_toggler").should("exist");
  });
});