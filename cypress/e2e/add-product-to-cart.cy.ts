describe('Cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should open cart modal', () => {
    cy.get('a[href^="/product"]').first().click()
    cy.location('pathname').should('include', '/product')

    cy.contains('Cart').click()
    cy.contains('Meu Carrinho').should('exist')
  })

  it('should close cart modal', () => {
    cy.get('a[href^="/product"]').first().click()
    cy.location('pathname').should('include', '/product')

    cy.contains('Cart').click()
    cy.get('button').first().click()
    cy.contains('Meu Carrinho').should('not.exist')
  })

  it('should be able to navigate to the product page and it to the cart', () => {
    cy.get('a[href^="/product"]').first().click()
    cy.location('pathname').should('include', '/product')

    cy.contains('GG').click()

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('adicionado ao carrinho :)').should('exist')
  })

  it('should not add to cart without selecting size', () => {
    cy.get('a[href^="/product"]').first().click()
    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('adicionado ao carrinho :)').should('not.exist')
    cy.contains('selecione um tamanho antes de adicionar ao carrinho').should(
      'exist',
    )
  })

  it('should be able to search for a product and add it to the cart', () => {
    cy.searchByQuery('moletom')

    cy.get('a[href^="/product"]').first().click()
    cy.location('pathname').should('include', '/product')

    cy.contains('GG').click()

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('adicionado ao carrinho :)').should('exist')
  })
})
