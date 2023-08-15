///<reference types="Cypress"/>

describe('lesson 18 for confirm box ', () => {

    it('the first test for confirm ', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")

        cy.get('#name').type("DANA ALFALAH")
        cy.get('#confirmbtn').click()
        cy.on('window:confirm' ,(win)=>{

            expect(win).to.eql("Hello DANA ALFALAH, Are you sure you want to confirm?")

            return false;
        })  
    });

  
    
});