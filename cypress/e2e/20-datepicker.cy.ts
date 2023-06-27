describe("Datepicker explanation", () => {
	beforeEach(() => {
		cy.visit(`${Cypress.env("demonstrationQA")}/date-picker`)
	})

	it("date picker demo", () => {
		cy.get("input#datePickerMonthYearInput").click()
		cy.get("select.react-datepicker__month-select").select("0")
		cy.get("select.react-datepicker__year-select").select("1900")
		// cy.contains("16") // O Cypress busca por todos os elementos que possuem a string "16" presente, de alguma forma. Por exemplo, "1916".
    
		// O Cypress Testing Library possui comandos e utilidades simples e customizados, que encorajam boas práticas em testes (Extende o comando "cy").
		cy.findByText("16").click() // procura por este texto específico, apenas.
		cy.get("input#datePickerMonthYearInput").should("have.value", "01/16/1900")
	})
})
