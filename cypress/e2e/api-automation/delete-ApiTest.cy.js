describe('Delete User', () => {
    it('Successfully delete user', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://gorest.co.in/public/v2/users/651172',
            headers: {
                'Authorization': 'Bearer 7a5d5bca573ec8caacd2385a8c1c991c52d2c6ae9c290ca262f5d073728025be'
            }
        }).then((response) => {
            expect(response.status).equal(204)
        })
    });
})