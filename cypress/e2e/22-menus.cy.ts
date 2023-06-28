describe("Menus explanation", () => {
	beforeEach(() => {
		cy.visit(`${Cypress.env("demonstrationQA")}/menu`)
	})

	it("Menu Demo", () => {
		cy.get("a").contains("Main Item 2").realHover()
		cy.contains("a", "SUB SUB LIST >>").realHover()
	})
})
