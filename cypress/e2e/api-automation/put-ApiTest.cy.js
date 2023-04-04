describe('Update User 332', () => {
    it('Successfully update user 332', () => {
      var user = {
        "name": "Masari Pras Tyo",
        "email": "masariprastyo@email.com",
        "gender": "male",
        "status": "active"
      }
      cy.request({
        method: 'PUT',
        url: 'https://gorest.co.in/public/v2/users/332',
        headers: {
            'Authorization': 'Bearer 7a5d5bca573ec8caacd2385a8c1c991c52d2c6ae9c290ca262f5d073728025be'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq(user.name)
      })
    });
  })