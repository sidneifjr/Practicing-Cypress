// Detalhes específicos de Mocha.
describe("empty spec", () => {
	// Executa antes de todos os testes.
	before(() => {
		cy.log("hello from the before hook!")
	})

	// Executa depois de todos os testes.
	after(() => {
		cy.log("hello from the after hook!")
	})

	// Executa antes de cada teste.
	beforeEach(() => {
		cy.log("hello from the beforeEach hook!")
	})

	// Executa após cada teste.
	afterEach(() => {
		cy.log("hello from the afterEach hook!")
	})

	it("testcase #1", () => {
		cy.log("hello world 1")
	})

	it("testcase #2", () => {
		cy.log("hello world 2")
	})

	// "skip" permite pular um teste específico.
	it.skip("testcase #3", () => {
		cy.log("hello world 3")
	})

	// "only" executa apenas esse teste e ignora todos os outros.
	it.only("testcase #4", () => {
		cy.log("hello world 4")
	})
})