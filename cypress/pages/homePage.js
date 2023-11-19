class homePage{

    elements ={
        loginBtn : () => cy.get('#signin'),
        logOffBtn : () => cy.get('#logout')
    }
    clickOnSignin(){
        this.elements.loginBtn().click()
    }

    goToHomePage() {
        cy.visit('https://automationexercise.com/')
        cy.url().should('include', 'automationexercise')
    }

    drugaMetoda() {
        // jakas druga metoda
    }
}
    module.exports = new homePage();