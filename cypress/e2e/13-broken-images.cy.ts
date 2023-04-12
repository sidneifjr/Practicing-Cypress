// let img:HTMLImageElement;

describe("Broken images with Demo QA", () => {
	beforeEach(() => {
		cy.visit(`${Cypress.env("demonstrationQA")}/broken`)
	})

	it("Not Broken Image Assertion", () => {
		cy.get("div > img[src=\"/images/Toolsqa.jpg\"]")
			.should("be.visible")
			.then(($img) => {
				cy.log("This is the img yielded", $img)
			})
	}
	)

	it("Broken Image Assertion", () => {
		cy.get("div > img[src=\"/images/Toolsqa_1.jpg\"]")
			.should("be.visible")
			.then(($img) => {
				cy.log("This is the img yielded", $img)
				/**
         * naturalWidth retorna a largura original da imagem, antes de qualquer tratamento pelo browser.
         * Se a imagem estiver quebrada, o valor da propriedade sera 0.
         *  */ 
				// img = $img[0] as unknown as HTMLImageElement; // uma forma de resolver o erro na tipagem; primeiro, converte para unknown e então para HTMLImageElement.
				expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0)
			})
	}
	)
})

describe("Broken images with \"The Internet\"", () => {
	beforeEach(() => {
		cy.visit(`${Cypress.env("theInternet")}/broken_images`)
	})

	it("Broken Image Assertion (first)", () => {
		cy.get("div.example img")
			.first() // Obtém o primeiro elemento, de um conjunto de elementos.
			.should("be.visible")
			.then(($img) => {
				cy.log("This is the img yielded", $img)
				expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0)
			})
	}
	)

	it("Broken Image Assertion (last)", () => {
		cy.get("div.example img")
			.last() // Obtém o último elemento, de um conjunto de elementos.
			.should("be.visible")
			.then(($img) => {
				cy.log("This is the img yielded", $img)
				expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0)
			})
	}
	)
})