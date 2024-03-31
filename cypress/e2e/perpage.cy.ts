describe('Personal Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Title', () => {
    cy.getByData("welcome").contains("mainTitle")
  })

})