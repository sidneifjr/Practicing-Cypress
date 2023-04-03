describe('Upload a file in the QA Demo site', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demonstrationQA")}/upload-download`);
  });

  it('Upload the file', () => {
    // Usando dados estáticos presentes na pasta 'fixtures'.
    cy.get('input#uploadFile').attachFile('example.json')
  });
});

// describe('Upload a file in the "The Internet" site', () => {
//   beforeEach(() => {
//     cy.visit(`${Cypress.env("theInternet")}/upload`);
//   });

//   it('Upload the file', () => {
//     cy.get('#file-submit').attachFile('example.json')
//   });
// });