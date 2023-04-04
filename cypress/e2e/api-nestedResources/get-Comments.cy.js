describe('Get Comments API Test', () => {
    it('successfully loads comments', () => {
      cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/comments',
        headers: {
          'Authorization': 'Bearer 7a5d5bca573ec8caacd2385a8c1c991c52d2c6ae9c290ca262f5d073728025be'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.headers['content-type']).to.eq('application/json; charset=utf-8');
        expect(response.body).to.not.be.null;
      });
    });
  });
  