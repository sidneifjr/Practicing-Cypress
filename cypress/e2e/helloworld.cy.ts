describe('template spec', () => {
  it('passes', () => {
    cy.log("hello world")
  })

  it('TypeScript Introduction', () => {
    let stringVariable = 9
    let numberVariable:number = 0
    let booleanVariable:boolean = false
    let anyVariable:any = 'string'

    function addTwoNumbers(a:number, b:number):void{
      return a + b;
    }

    interface User {
      username: string;
      password: string;
    }

    function returningUserinformation(user:User):void {
      console.log('This is the username' + user.username)
      console.log('This is the password' + user.password)
    }
  })
})