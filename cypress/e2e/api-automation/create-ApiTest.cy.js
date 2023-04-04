describe('Test POST request to https://gorest.co.in//public/v2/users', () => {
  it('should create a new user successfully', () => {
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        'Authorization': 'Bearer 7a5d5bca573ec8caacd2385a8c1c991c52d2c6ae9c290ca262f5d073728025be',
        'Content-Type': 'application/json'
      },
      body: {
        name: 'Masari Pras Tyo',
        email: 'masariprastyo@email.com', //email harus diganti saat running
        gender: 'male',
        status: 'active'
      }
    })
    .then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('name', 'Masari Pras Tyo')
      expect(response.body).to.have.property('email', 'masariprastyo@email.com') //email harus diganti saat running
      expect(response.body).to.have.property('gender', 'male')
      expect(response.body).to.have.property('status', 'active')
    })
  })
})