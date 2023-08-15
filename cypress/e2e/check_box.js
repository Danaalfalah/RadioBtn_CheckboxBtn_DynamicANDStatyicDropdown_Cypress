///<reference types="Cypress"/>

describe('check box test ', () => {
    it('test 2 for checkbox button (we can select one option)', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.get('#checkBoxOption1').check()
        cy.get('#checkBoxOption1').should('be.checked')
        cy.get('#checkBoxOption1').uncheck()
        cy.get('#checkBoxOption1').should('be.checked')
    });    

    it.only('test 2 for checkbox to select 1 and 3 optin', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.get("input[type='checkbox'").check(['option1','option3'])//dont forget the [] for value 
        
    });
    it.only('test 3 for checkbox to select all check box', () => {

        //select all
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.get("input[type='checkbox'").check()
        
    });
});