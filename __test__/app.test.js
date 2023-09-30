const request = require('supertest');
const app = require('../app');
const { token } = require('morgan');

const mailTotest = 'testMail@gmail.com';
const passwordToTest = 'testPassword';
const goodTokenToTest = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsImVtYWlsIjoiRXhpc3RpbmdNYWlsMi4xQGdtYWlsLmNvbSIsImlhdCI6MTY5NTk3OTQ0NywiZXhwIjoxNjk1OTgzMDQ3fQ.Llr6gWoOqYTnkimsTiyp9S9Yu3niOB7ILDh-MdE5p84';
const badTokenToTest = '';

/* GET reservation */
describe('GET /reservation', () => {
    it('should return a reservation', async () => {
      const res = await request(app)
        .get('/reservation')
        .set(
            'Authorization',
            goodTokenToTest
            )
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });

describe('GET /reservation', () => {
  it('should return a 401 error', async () => {
    const res = await request(app)
      .get('/reservation')
      .expect('Content-Type', /json/)
      .expect(401);
  });
});

/* GET /user/me */
describe('GET /user/me', () => {
    it('should return the current user', async () => {
    const res = await request(app)
        .get('/user/me')
        .set(
            'Authorization',
            goodTokenToTest
            )
        .expect('content-Type', /json/)
        .expect(200)
    });
});

describe('GET /user/me', () => {
    it('should return an 401 error', async () => {
    const res = await request(app)
        .get('/user/me')
        .set(
            'Authorization',
            badTokenToTest
            )
        .expect('content-Type', /json/)
        .expect(401)
    });
});

/* GET room */
describe('GET /room', () => {
    it('should return a room', async () => {
      const res = await request(app)
        .get('/room')
        .set(
            'Authorization',
            goodTokenToTest
            )
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });

describe('GET /room', () => {
  it('should return a 401 error', async () => {
    const res = await request(app)
      .get('/room')
      .expect('Content-Type', /json/)
      .expect(401);
  });
});

/* GET spot */
describe('GET /spot', () => {
    it('should return a spot', async () => {
      const res = await request(app)
        .get('/spot')
        .set(
            'Authorization',
            goodTokenToTest
            )
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });

describe('GET /spot', () => {
  it('should return a 401 error', async () => {
    const res = await request(app)
      .get('/spot')
      .expect('Content-Type', /json/)
      .expect(401);
  });
});

/* POST /auth/signin */
describe('POST /auth/signin', () => {
    it('should return a signin', async () => {
    const res = await request(app)
        .post('/auth/signin')
        .expect('Content-Type', /json/)
        .send({
            email : mailTotest,
            password : passwordToTest
        })
        .expect(200);
    });
});

describe('POST /auth/signin', () => {
    it('should return an error', async () => {
    const res = await request(app)
        .post('/auth/signin')
        .expect('Content-Type', /json/)
        .send({
            email : mailTotest,
            password : ''
        })
        .expect(400);
    });
});

// /* POST /auth/signup */
// describe('POST /auth/signup', () => {
//     it('should return a signup', async () => {
//     const res = await request(app)
//         .post('/auth/signup')
//         .expect('Content-Type', /json/)
//         .send({
//             firstName : 'app.test',
//             lastName : 'signup',
//             phoneNumber : '06',
//             email : 'otherMail@gmail.com',
//             password : passwordToTest
//         })
//         .expect(200);
//     });
// });

// describe('POST /auth/signup', () => {
//     it('should return an error', async () => {
//     const res = await request(app)
//         .post('/auth/signup')
//         .expect('Content-Type', /json/)
//         .send({
//             email : mailTotest,
//             password : ''
//         })
//         .expect(400);
//     });
// });

// /* DELETE /user */
// describe('DELETE /user', () => {
//     it('should return delete user', async () => {
//     const res = await request(app)
//         .get('/user')
//         .set(
//             'Authorization',
//             goodTokenToTest
//             )
//         .send({
//             id: '3' 
//         })
//         .expect('content-Type', /json/)
//         .expect(200)
//     });
// });

// describe('DELETE /user', () => {
//     it('should return an 401 error', async () => {
//     const res = await request(app)
//         .get('/user')
//         .set(
//             'Authorization',
//             badTokenToTest
//             )
//         .send({
//             id: '2563' 
//             })
//         .expect('content-Type', /json/)
//         .expect(401)
//     });
// });
