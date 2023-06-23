/**
 * Este tipo de elemento é difícil de validar, pois o mesmo desaparece ao tentar inspecionar o mesmo.
 * Assim, é necessário interagir com o console, targetar o input relacionado ao tal campo de autocomplete e em "Break on", marcar "subtree modifications".
 * Então, é só clicar no input, que o resto da aplicação será estará congelada em um estado de debugger, permitindo a inspeção do campo de autocomplete.
 */
describe("Autocomplete explanation", () => {
	beforeEach(() => {
		cy.visit(`${Cypress.env("demonstrationQA")}/auto-complete`)
	})

	it("Autocomplete demo using Yellow", () => {
		cy.get(".auto-complete__value-container").first().type("Y")
		cy.contains("#react-select-2-option-0", "Yellow").click()
		cy.get(".auto-complete__multi-value__label").should("have.text", "Yellow")
	})
})
