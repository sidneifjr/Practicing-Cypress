describe("Intercepting API request, on submit", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/src/components/Form/index.html")
		cy.intercept("POST", "http://localhost:3000/src/components/Form/index.html").as("linkStatus")
	})

	it("First approach, not click on the link", () => {
		cy.get("[data-cy='contact-form']").submit()

		// Nesse cenário, o wait() irá aguardar que a request armazenada no alias "linkStatus" ocorra.
		cy.wait("@linkStatus").then((request) => {
			cy.log("This is the request intercepted", request)
			expect(request.response.statusCode).to.be.equal(201)
			expect(request.response.statusMessage).to.be.equal("Created")
		})
	})
})