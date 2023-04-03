describe('Environment Variable Demo', () => {
  beforeEach(() => {
    cy.visit('/click');
  })

  it('Demo', () => {
    cy.log(`Printing Environment Variable Value: ${Cypress.env("varEnv")}`)
  });
});