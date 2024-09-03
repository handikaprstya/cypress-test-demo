describe('Login Test', () => {
    it('Success Login', () => {
      cy.visit('https://automationexercise.com/')
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
      cy.get('[data-qa="login-email"]').type('nahuel14@kohelps.com')
      cy.get('[data-qa="login-password"]').type('H@duh12')
      cy.get('[data-qa="login-button"]').click()
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
      cy.get('.login-form > h2').should('contain', 'Login to your account')
    })
  
    it('Failed Login', () =>{
      cy.visit('https://automationexercise.com/')
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
      cy.get('[data-qa="login-email"]').type('nahuel14@kohelps.com')
      cy.get('[data-qa="login-password"]').type('B@ndung12')
      cy.get('[data-qa="login-button"]').click()
      cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect')
    })
  })