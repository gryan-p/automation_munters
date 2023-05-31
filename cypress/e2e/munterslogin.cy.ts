describe('Munters Log In', () => {
  before(() => {
    cy.visit(''); //refer to "cypress.config.ts" for the baseUrl
    cy.fixture('user.json').then((user) =>{
      cy.login(user.email, user.password)
    })
  })

  after(() =>{
    cy.logout()
  })

  it('Go to ETA page', () => {
    cy.get('h1', {timeout: Cypress.env('timeout')})
      .contains(' Welcome back ', {timeout: Cypress.env('timeout')})
      .should('exist')
    cy.get('div mymunters-navigation-menu').shadow()
      .find('.outer')
      .find('.inner')
      .find('ul')
      .find('li')
      .find('[href="https://eta.mymunters.com"]')
      .click()
    cy.get('section header span', {timeout: Cypress.env('timeout')}).contains('Dashboard').should('exist')
  })
})