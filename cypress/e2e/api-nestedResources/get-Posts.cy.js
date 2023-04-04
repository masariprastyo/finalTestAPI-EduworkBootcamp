describe('Test GET Post API', () => {
    const apiUrl = 'https://gorest.co.in/public/v2/users/360/posts';
    const accessToken = '7a5d5bca573ec8caacd2385a8c1c991c52d2c6ae9c290ca262f5d073728025be';
  
    it('Get list of posts', () => {
      cy.request({
        method: 'GET',
        url: apiUrl,
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
      });
    });
  });
  