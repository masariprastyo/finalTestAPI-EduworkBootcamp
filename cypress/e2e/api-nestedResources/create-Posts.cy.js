describe('Create a new post', () => {
    it('Should create a new post', () => {
      const postBody = {
        "user_id": "360",
        "title": "Pengalaman Saya Berlibur ke Bali",
        "body": "Musim panas lalu, saya berkesempatan mengunjungi Bali untuk pertama kalinya. Pulau itu lebih indah daripada yang saya bayangkan."
      }
  
      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/posts',
        body: postBody,
        headers: {
          'Authorization': 'Bearer 7a5d5bca573ec8caacd2385a8c1c991c52d2c6ae9c290ca262f5d073728025be',
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('user_id', 360)
        expect(response.body).to.have.property('title', 'Pengalaman Saya Berlibur ke Bali')
        expect(response.body).to.have.property('body', 'Musim panas lalu, saya berkesempatan mengunjungi Bali untuk pertama kalinya. Pulau itu lebih indah daripada yang saya bayangkan.')
        
      })
    })
  })
  