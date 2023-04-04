describe('Create a new comment', () => {
    it('Should create a new comment', () => {
      const commentBody = {
        "post_id": "8045",
        "name": "Masari Pras Tyo",
        "email": "masariprastyo@email.com",
        "body": "That's awesome."
    }
  
      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/comments',
        body: commentBody,
        headers: {
          'Authorization': 'Bearer 7a5d5bca573ec8caacd2385a8c1c991c52d2c6ae9c290ca262f5d073728025be',
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('post_id', 8045)
        expect(response.body).to.have.property('name', "Masari Pras Tyo")
        expect(response.body).to.have.property('email', "masariprastyo@email.com")
        expect(response.body).to.have.property('body', "That's awesome.")
      })
    })
  })