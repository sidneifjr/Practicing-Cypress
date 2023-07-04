Cypress.session.clearAllSavedSessions()

describe("Basics", () => {
	beforeEach(() => {
		cy.visit(`${Cypress.env("demonstrationQA")}/login`)
	})

	// test-cases de exemplo.
	it("Successfull Login Scenario", () => {
		cy.get("#userName").type("test")
		cy.get("#password").type("Test1234*")
		cy.get("#login").click()

		// A presença do texto "Profile" é um indicativo de login bem-sucedido.
		cy.url().should("contain", "profile")
		cy.get("div[class='main-header']").should("have.text", "Profile")
		cy.get("#userName-value").should("have.text", "test")
	})

	it("Failed Login Scenario", () => {
    
	})
})
