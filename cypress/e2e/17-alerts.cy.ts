// https://docs.cypress.io/api/cypress-api/catalog-of-events#App-Events
describe("Alerts example", () => {
	beforeEach(() => {
		cy.visit(`${Cypress.env("theInternet")}/javascript_alerts`)
	})

	it("JS Alert", () => {
		cy.contains("button", "Click for JS Alert").click()

		cy.on("window:alert", (message) => {
			expect(message).to.be.equal("I am a JS Alert")
		})

		// Com "window:confirm", precisamos definir uma função que retorna um boolean, correspondente a se eu quero confirmar a mensagem ou não.
		cy.on("window:confirm", () =>  true)

		cy.get("p#result").should("have.text", "You successfully clicked an alert")
	})

	it("JS Confirm (accept)", () => {
		cy.contains("button", "Click for JS Confirm").click()

		cy.on("window:alert", (message) => {
			expect(message).to.be.equal("I am a JS Confirm")
		})

		cy.on("window:confirm", () =>  true)

		cy.get("p#result").should("have.text", "You clicked: OK")
	})

	it("JS Confirm (cancel)", () => {
		cy.contains("button", "Click for JS Confirm").click()

		cy.on("window:alert", (message) => {
			expect(message).to.be.equal("I am a JS Confirm")
		})

		cy.on("window:confirm", () =>  false)

		cy.get("p#result").should("have.text", "You clicked: OK")
	})
})