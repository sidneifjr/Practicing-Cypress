describe('Dealing with links that opens a new tab', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demonstrationQA")}/links`);
  });

  it.skip('First approach, not click on the link', () => {
    cy.get("#simpleLink").should('have.attr', 'href', 'https://demoqa.com');
    cy.get("#simpleLink").should('have.attr', 'target', '_blank');
  });

  it.skip('Second approach, remove the target', () => {
    // O comando invoke() executa uma função no sujeito pré0viamente fornecido.
    cy.get("#simpleLink").invoke('removeAttr', 'target').click();

    // url() obtém a URL da página ativa atualmente.
    cy.url().then((url) => {
      expect(url).to.be.equal('https://demoqa.com/');
    })
  });
});

describe('Intercepting API (SPYING) requests after clicking on a button', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demonstrationQA")}/links`);
    cy.intercept('GET', `${Cypress.env("demonstrationQA")}/created`).as('linkStatus');
  });

  it('First approach, not click on the link', () => {
    cy.get('a#created').click();

    // Nesse cenário, o wait() irá aguardar que a request armazenada no alias "linkStatus" ocorra.
    cy.wait('@linkStatus').then((request) => {
      cy.log('This is the request intercepted', request);
      expect(request.response.statusCode).to.be.equal(201);
      expect(request.response.statusMessage).to.be.equal("Created");
    })
  });
});