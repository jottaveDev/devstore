describe('Search', () => {
  it('should redirect to the search-based filtered products page', () => {
    cy.searchByQuery('moletom')

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')

    cy.get('a[href^="/product"]').should('exist')
  })

  it('should redirect to the product page on click', () => {
    cy.searchByQuery('moletom')

    cy.get('a[href^="/product"]').first().click()
    cy.location('pathname').should('include', '/product')
  })

  it('should not be able to visit search page without a search query', () => {
    cy.on('uncaught:exception', () => false)

    cy.visit('/search')
    cy.location('pathname').should('equal', '/')
  })
})
