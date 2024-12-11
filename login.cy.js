// cypress/e2e/login.cy.js
describe('SwimSwam Login Page Tests', () => {
  
  it('Should load the login page successfully', () => {
    cy.visit('https://www.swimswam.com/login'); // Visits the SwimSwam login page
    cy.url().should('include', '/login'); // Verifies that the URL includes '/login'
    cy.contains('Login').should('be.visible'); // Checks if the text "Login" is visible
  });

  it('Should fail login with invalid credentials', () => {
    cy.visit('https://www.swimswam.com/login'); // Visits the SwimSwam login page
    cy.get('input[name="username"]').type('wrongUser  '); // Enter an incorrect username
    cy.get('input[name="password"]').type('wrongPass'); // Enter an incorrect password
    cy.get('button[type="submit"]').click(); // Clicks the submit button
    cy.contains('Invalid username or password').should('be.visible'); // Checks for the error message
  });
});

/// Import faker library
import { faker } from '@faker-js/faker'

describe('YouTube Login Test', () => {
  it('should log in successfully with generated credentials', () => {
    // Generate random email and password using faker
    const fakeEmail = faker.internet.email()
    const fakePassword = faker.internet.password()

    // Visit the YouTube sign-in page
    cy.visit('https://accounts.google.com/ServiceLogin?service=youtube')

    // Enter the generated email/phone in the username field
    cy.get('input[type="email"]').type(fakeEmail)

    // Click the next button
    cy.get('#identifierNext').click()

    // Wait for the password field to load
    cy.get('input[type="password"]').should('be.visible')

    // Enter the generated password
    cy.get('input[type="password"]').type(fakePassword)

    // Click the next button
    cy.get('#passwordNext').click()

    // Wait for the YouTube homepage to load (assert that the user is logged in)
    cy.url().should('include', 'https://www.youtube.com')
    cy.contains('Sign in').should('not.exist')  // Ensure the sign-in button doesn't appear
  })
})
