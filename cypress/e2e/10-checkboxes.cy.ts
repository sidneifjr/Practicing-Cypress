describe('Checkboxes Demonstration', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demonstrationQA")}/checkbox`);
  });

  it('Checkbox scenario', () => {
    // O checkbox possui um "display: none", o que faz com que ele não seja exibido em tela. Usar "force:true" como argumento permite o click no mesmo.
    cy.get('input[type="checkbox"]').click({ force: true });

    // Validando se o texto está presente, após o click.
    cy.get('#result').should('have.text', 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile');
  });
});

describe.only('The internet app', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}/checkboxes`);
  });

  it('Checkbox scenario', () => {
    // "eq" fornece um elemento presente no index designado.
    // Porém, é um caso especial e não é uma boa prática; o ideal é pedir à equipe de desenvolvimento para incluir IDs ou outros identificadores, facilitando a obtenção de elementos.
    cy.get('form#checkboxes input').eq(0).click().should("be.checked");
  });
});