const expect = require('chai').expect;
const request = require('supertest');
const ip = require('ip');
const os = require('os');


const app = require('../server.js');

// describe('Request header parser', () => {
//   it('should display the IP address, language, and operating system in the browser', (done) => {
//     request(app)
//       .get('/')
//       .set('Accept', 'application/json')
//       .expect(200)
//       .expect('Content-Type', /json/)
//       .end(function(error, result) {
//         expect(result.body.ip).to.equal('127.0.0.1');
//         expect(result.body.software).to.equal('node-superagent/1.8.1');
//         expect(result.body.language).to.equal('*');
//         done(error);
//       });
//   });
// });
