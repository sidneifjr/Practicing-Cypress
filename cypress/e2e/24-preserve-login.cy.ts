// O cenário descrito a seguir envolve dois casos, onde cada um terá seu login realizado separadamente.
// O caso de uso requer a preservação de estado logado do usuário, após o primeiro login.

// Limpa todas as sessões anteriores.
Cypress.session.clearAllSavedSessions()

describe("Basics", () => {
	beforeEach(() => {
		cy.session("mySession", () => {
			cy.visit(`${Cypress.env("demonstrationQA")}/login`)
			cy.get("#userName").type("test")
			cy.get("#password").type("Test1234*")
			cy.get("#login").click()
			cy.url().should("contain", "profile")
		})
	})

	// test-cases de exemplo.
	it("Check if session was saved", () => {})

	it("Check if session was saved", () => {})
})
