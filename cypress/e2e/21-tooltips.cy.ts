describe("Tooltip explanation", () => {
	beforeEach(() => {
		cy.visit(`${Cypress.env("demonstrationQA")}/tool-tips`)
	})

	// É importante notar que este é um cenário sensível; portanto, não interagir com a tela durante o teste para o hover executar normalmente.
	it("Tooltip button", () => {
		cy.get("#toolTipButton").realHover()
		// cy.get("div[role='tooltip']")
		cy.get(".tooltip-inner").should("have.text", "You hovered over the Button")
	})

	it("A tag tooltip", () => {
		cy.contains("a", "Contrary").realHover()
		cy.get(".tooltip-inner").should("have.text", "You hovered over the Contrary")
	})
})
