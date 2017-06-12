const request = require('supertest');
const expect = require('expect');

const app = require('./server.js').app;

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'page not found.'
      });
    })
    .end(done);
});


it('should return user object', (done) => {
    request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
          name: 'shubham',
          age: 22
        });
      })
      .end(done);
});
