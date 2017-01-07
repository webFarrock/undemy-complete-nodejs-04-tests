const request = require('supertest');
let app = require('./server').app;

it('should return hello world response', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Hello world')
        .end(done);
});
