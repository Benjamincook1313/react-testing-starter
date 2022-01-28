describe('payment', () => {
  it('user can make payment', () => {
    // login
    cy.visit('/')
    cy.findByRole('textbox', {  name: /username/i}).type('johndoe')
    cy.findByLabelText(/password/i).type('s3cret')
    //  check account balance
    //  click on pay button
    //  search for user
    //  add amount and not and click pay
    // return to transactions
    // go to personal payments 
    // click on payment
    // verify if payment was made 
    // verify if payment amount was deducted
  })
})