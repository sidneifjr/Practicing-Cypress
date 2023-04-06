describe('Download a file in the QA Demo site', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demonstrationQA")}/upload-download`);
  });

  it('Download the file', () => {
    cy.get('a#downloadButton').click();
    cy.verifyDownload('sampleFile.jpeg', { contains: true });
  });
});