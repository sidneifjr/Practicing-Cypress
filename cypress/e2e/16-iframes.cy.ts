describe('Iframes example', () => {
  beforeEach(() => {
    // cy.visit(`${Cypress.env("theInternet")}/iframe`);
    cy.visit(`${Cypress.env("demonstrationQA")}/nestedframes`);
  });

  it('Simple and nested iframe', () => {
    cy.get('#frame1').then(($iframe) => {
      // contents() retorna os filhos de cada elemento, presentes em um conjunto que cumprem uma tal condição.
      // Ou seja: estou pegando o Iframe e procurando o elemento "body" em seu interior.
      const $body = $iframe.contents().find("body");

      // É necessário utilizar o comando "wrap", para que o Cypress possa acessar a constante definida acima. 
      cy.wrap($body).should("have.text", "Parent frame");

      cy.wrap($body)
        .find("iframe")
        .then(($childIframe) => {
          const $childBody = $childIframe.contents().find("body");
          cy.wrap($childBody).find("p").should("have.text", "Child Iframe");
        }
      );
    });
  });
});