///<reference types="Cypress"/>
describe('the dropdown dynamic and static ', () => {
    it.only('dynamic dropdown', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.get('#autocomplete').type("JO").then((el)=>{
            //....................
            // cy.get('#ui-id-2').contains("Jordan").click()
            cy.get('.ui-autocomplete').contains("Jordan").click()
            

            //this solve from stack over flow 
            /**  cy.get("#combo-box").click();
        cy.get("li[data-option-index="0"]").contains("ntest_user").then((option)=> 
         {
            option[0].click();
        }) */
        })
    });

    it('static dropdown', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.get("#dropdown-class-example").select("API")
        
    });
    
    
});