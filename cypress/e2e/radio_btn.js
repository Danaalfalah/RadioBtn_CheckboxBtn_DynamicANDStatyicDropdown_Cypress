///<reference types="Cypress"/>
describe('radio button example', () => {

    it('test 3 for radio button (we can select one option)', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        //select second radio btn using index 
        cy.get('#radio-btn-example > fieldset').find('input[type="radio"]').eq(1).check()

        //select first radio btn using first()
        cy.get('#radio-btn-example > fieldset').find('input[type="radio"]').first().check()

        //select last radio btn using first()
        cy.get('#radio-btn-example > fieldset').find('input[type="radio"]').last().check()
     
    });    
    
});