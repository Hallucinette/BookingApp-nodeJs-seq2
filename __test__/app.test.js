const request = require('supertest');
const app = require('../app');
const { token } = require('morgan');

describe('GET /reservation', () => {
  it('should return a 401 error', async () => {
    const res = await request(app)
      .get('/reservation')
      .expect('Content-Type', /json/)
      .expect(401);
  });
});

  describe('POST /auth/signin', () => {
    it('should return a signin', async () => {
    const res = await request(app)
        .post('/auth/signin')
        .expect('Content-Type', /json/)
        .send({
            email : "testMail@gmail.com",
            password : "testPassword"
        })
        .expect(200);
    });
}); 

describe('GET /user/me', () => {
    it('should return the current user', async () => {
    const res = await request(app)
        .get('/user/me')
        .set(
            'Authorization',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTQsImVtYWlsIjoibWFpbEBnbWFpbC5jb20iLCJpYXQiOjE2OTU5MTA4MzIsImV4cCI6MTY5NTkxNDQzMn0.IXCpIBEE2bVRe2jTbRUTfZDfr2-qo4FEdJdPGx1KbDMeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTQsImVtYWlsIjoibWFpbEBnbWFpbC5jb20iLCJpYXQiOjE2OTU5MTA4MzIsImV4cCI6MTY5NTkxNDQzMn0.IXCpIBEE2bVRe2jTbRUTfZDfr2-qo4FEdJdPGx1KbDM'
            )
        .expect('content-Type', /json/)
        .expect(200)
    });
}); 