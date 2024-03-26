describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })
  it('fill form properly', () => {
    const form = cy.getByData('form-contact')
    form
      .getByData('field-name')
      .type('test01')
    form
      .getByData('field-mail')
      .type('test@test.es')
    form
      .getByData('field-msg')
      .type('test test test')
    form
      .getByData('btn-submit')
      .click()
  })
})