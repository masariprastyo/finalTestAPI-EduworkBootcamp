describe('Get User 332', () => {
    it('Verivy the 332 users will displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/332',
            headers: {
                'Authorization': 'Bearer 7a5d5bca573ec8caacd2385a8c1c991c52d2c6ae9c290ca262f5d073728025be'
            }
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });
})