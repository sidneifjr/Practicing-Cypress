// Cypress não consegue lidar com eventos de drag-and-drop nativamente; é uma limitação, a qual requer do uso de plugins.
// Ainda assim, há a possibilidade de não funcionar para todos os casos: cada drag-and-drop é diferente e não há garantias.
describe("Drag and Drops describe", () => {
	beforeEach(() => {
		cy.visit(`${Cypress.env("demonstrationQA")}/droppable`)
	})

	it("Drag and Drop Demo", () => {
		cy.get("#draggable").drag("#droppable", { force: true }) // em alguns cenários, é necessário forçar a interação.
	})
})
