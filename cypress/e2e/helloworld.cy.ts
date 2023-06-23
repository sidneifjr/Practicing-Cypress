describe("template spec", () => {
	it("passes", () => {
		cy.log("hello world")
	})

	it("TypeScript Introduction", () => {
		const stringVariable = 9
		const numberVariable = 0
		const booleanVariable = false
		const anyVariable:any = "string"

		function addTwoNumbers(a:number, b:number):void{
			return a + b
		}

    interface User {
      username: string;
      password: string;
    }

    function returningUserinformation(user:User):void {
    	console.log("This is the username" + user.username)
    	console.log("This is the password" + user.password)
    }
	})
})