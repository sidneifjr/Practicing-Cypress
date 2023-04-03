describe('Broken images with Demo QA', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demonstrationQA")}/upload-download`);
  });

  it('Not Broken Image Assertion', () => {
    
  });
});