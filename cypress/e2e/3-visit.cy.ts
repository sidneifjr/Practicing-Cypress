describe("basics", () => {
	beforeEach(() => {
		cy.visit("/textinput")
	})

	// Testando definição de baseURL definido em cypress.config.ts.
	it("visit explanation (text input)", () => {
		cy.visit("/textinput")

		cy.url().then((url)=> {
			cy.log(url)
		})
	})

	it("visit explanation (class attr input)", () => {
		cy.visit("/classattr")
	})

	it("visit explanation (mocha hooks) 1", () => {
		/**
     * 1) O Cypress não retorna, ele produz algo.
     * 2) O comando ".then" permite trabalhar com o elemento produzido pelo comando anterior.
     * 3) O Cypress não é síncrono
     */
		cy.url().then((url) => {
			cy.log(`Printing the URL: ${url}`)
		})
	})

	/**
   * Asserções descrevem o estado desejado de seus elementos, objetos e sua aplicação.
   * No Cypress, os comandos refazem suas asserções automaticamente.
   */
	it("title validation", () => {
		// Realizando alguma ação, antes da minha asserção.
		cy.title().then((title) => {
			cy.log(title)
			expect(title).to.be.equal("Text Input")
		})
	})

	it("Input Challenge", () => {
		cy.get("input#newButtonName").type("Hello from Input")
		cy.get("button#updatingButton").click().should("have.text", "Hello from Input")

		/**
     * 1) O '.then' permite que você use o sujeito fornecido em uma callback. É apropriado quando você precisa manipular valores ou realizar alguma ação.
     * Ou seja: você pode realizar algo, antes de realizar uma asserção.
     * 
     * 2) Já '.should', porém, deve ser utilizado para realizar asserções sobre um elemento fornecido, que NÃO terá uma ação anterior.
     *  */ 
		// 
	})

	it("Cy.get + cy.find example", () => {
		cy.get("div").find("button").should("have.text", "Button with Dynamic ID")
	})

	it("CSS selector using an attribute", () => {
		cy.get("button[class=\"btn-primary]").should(
			"have.text", "Button with Dynamic ID"
		)
	})

	it("CSS selector using a class", () => {
		cy.get(".btn-primary").should(
			"have.text", "Button with Dynamic ID"
		)
	})

	it.only("progress bar scenario", () => {
		cy.visit("/progressbar")
		cy.get("#startButton").click()
		cy.get("#progressBar", {timeout: 40000}).should("have.text", "100%")
	})
})