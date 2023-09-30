// const request = require('supertest');
// const app = require('../app');
// const { token } = require('morgan');


// // AUTH
// //SIGNIN

// describe('POST /auth/signin', () => {
//     it('should return a signin', async () => {
//     const res = await request(app)
//         .post('/auth/signin')
//         .expect('Content-Type', /json/)
//         .send({
//             email : "testMail@gmail.com",
//             password : "testPassword"
//         })
//         .expect(200);
//     });
// });

// describe('POST /auth/signin', () => {
//     it('should return an error', async () => {
//     const res = await request(app)
//         .post('/auth/signin')
//         .expect('Content-Type', /json/)
//         .send({
//             email : "l@gmail.com",
//             password : "testPassword"
//         })
//         .expect(401);
//     });
// }); 