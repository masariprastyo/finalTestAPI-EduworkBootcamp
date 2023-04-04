describe('Test POST Todo API', () => {
    const apiUrl = 'https://gorest.co.in/public/v2/users/360/todos';
    const accessToken = '7a5d5bca573ec8caacd2385a8c1c991c52d2c6ae9c290ca262f5d073728025be';
    
    it('Create a new Todo item', () => {
      const todoBody = {
        title: 'posts and comments',
        due_on: '2023-04-04',
        status: 'completed'
      };
  
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: todoBody
      })
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.title).to.eq(todoBody.title)
        expect(response.body.due_on).to.eq(todoBody.due_on+'T00:00:00.000+05:30')
        expect(response.body.status).to.eq(todoBody.status)
      });
    });
  });
  