describe.skip('Click Challenge', () => {
  beforeEach(() => {
    cy.visit('/click');
  })

  it('class assertions', () => {
    cy.get('#badButton').click().should('have.class', 'btn-success');
  });

  it('background assertion', () => {
    // O Cypress checa os "Computed Styles" do elemento, ou seja, os estilos que são aplicados ao mesmo. Não é necessário que o estilo esteja inline, para ser targetado.
    cy.get('#badButton').click().should('have.css', 'background-color', 'rgb(240, 240, 240)');
  });
});

describe.skip('Hover Challenge', () => {
  beforeEach(() => {
    cy.visit('/mouseover');
  })

  it('hover with cypress workaround', () => {
    cy.get('.text-primary').trigger('mouseover');
  });

  it('hover with real hover', () => {
    cy.get('.text-primary').realHover();
  });
});

describe('Dynamic Table Challenge', () => {
  beforeEach(() => {
    cy.visit('/dynamictable');
  })

  // Acessando cada um dos itens fornecidos, via each().
  // É importante notar que essa tabela é gerada randomicamente após cada carregamento.
  it('Chrome CPU Test', () => {
    cy.get(`div[role="row"] span`).each(($cell) => {
      if($cell.text().includes('Chrome')){
        cy.log(`I have found the ${$cell.text()} row!`);

        let ChromeRowValues:string[] = [];

        // Adicionando o valor de cada texto dos elementos siblings a "Chrome".
        ChromeRowValues.push($cell.next().text());
        ChromeRowValues.push($cell.next().next().text());
        ChromeRowValues.push($cell.next().next().next().text());
        ChromeRowValues.push($cell.next().next().next().next().text());
        cy.log("Chrome row values", ChromeRowValues);

        ChromeRowValues.forEach((chromeValue) => {
          if(chromeValue.includes('%')){
            cy.log(chromeValue);
            cy.get('.bg-warning').should('have.text', `Chrome CPU: ${chromeValue}`)
          }
        });
      }
    });
  });
});