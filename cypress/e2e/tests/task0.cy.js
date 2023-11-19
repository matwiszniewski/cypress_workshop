/// <reference types="cypress" />

import user from "../../fixtures/userData.json"

beforeEach(() => {
    cy.visit('/')
    cy.url().should('include', 'https://automationexercise.com')
  })

  let naszaZmienna = randomInteger(1,1000)
  let email = 'mat.wiszniewski'+ naszaZmienna +'@gmail.com'

it('Test 1', () => {
    //cy.log(naszaZmienna)    
    //cy.log('jakis tekst')
    //cy.log('Nasz email to '+email)
    // cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.contains('Login').click()
    //cy.get('.signup-form > h2').should('have.text','New User Signup!')
    cy.contains('New User Signup!').should('exist')
    cy.get('[data-qa="signup-name"]').type(user.mateuszW.login)
    cy.get('[data-qa="signup-email"]').type(user.mateuszW.email)
    cy.get('[data-qa="signup-button"]').click()
    cy.contains('Enter Account Information').should('exist')
    cy.get('#id_gender1').click()
    cy.get('[data-qa="name"]').should('have.value','mateuszW')
    cy.get('[data-qa="email"]').should('have.value',user.mateuszW.email)
    cy.get('[data-qa="password"]').type('1234567890')
    cy.get('[data-qa="days"]').select('30')
    cy.get('[data-qa="months"]').select('March')
    cy.get('[data-qa="years"]').select('1989')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').type('mateusz')
    cy.get('[data-qa="last_name"]').type('wiszniewski')
    cy.get('[data-qa="address"]').type('morska 1')
    cy.get('[data-qa="country"]').select('India')
    cy.get('[data-qa="state"]').type('state')
    cy.get('[data-qa="city"]').type('Gdansk')
    cy.get('[data-qa="zipcode"]').type('00001')
    cy.get('[data-qa="mobile_number"]').type('888-888-888')
    cy.get('[data-qa="create-account"]').click()
    cy.get('b').should('have.text','Account Created!')
    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Logged in as '+ user.mateuszW.login).should('exist')
    //cy.get('.shop-menu > .nav > :nth-child(5) > a').click({force:true})
    //cy.contains('Account Deleted!').should('exist')

});

it('Test 2', () => {

    cy.get('a > img').should('exist')
    cy.contains('Login').click()
    cy.contains('Login to your account').should('exist')
    cy.get('[data-qa="login-email"]').type(user.mateuszW.email)
    cy.get('[data-qa="login-password"]').type(user.mateuszW.password)
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as mateuszW').should('exist')
    //cy.get('.shop-menu > .nav > :nth-child(5) > a').click({force:true})
    //cy.contains('Account Deleted!').should('exist')
    
});

it('Test 3', () => {

    cy.get('a > img').should('exist')
    cy.contains('Login').click()
    cy.contains('Login to your account').should('exist')
    cy.get('[data-qa="login-email"]').type(user.mateuszW.email+'1')
    cy.get('[data-qa="login-password"]').type(user.mateuszW.password+'1')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Your email or password is incorrect!').should('exist')
});

it('Test 4', () => {

    cy.get('a > img').should('exist')
    cy.contains('Login').click()
    cy.contains('Login to your account').should('exist')
    cy.get('[data-qa="login-email"]').type(user.mateuszW.email)
    cy.get('[data-qa="login-password"]').type(user.mateuszW.password)
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as mateuszW').should('exist')
    cy.contains('Logout').click()
    
});

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }