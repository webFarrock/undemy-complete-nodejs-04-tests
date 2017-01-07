
const expect = require('expect');

const utils = require('./utils');
it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
    // if(res !== 44)
    //     throw new Error(`Expected 44, but got ${res}.`);
});

it('should square a number', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
});

it('should expect some values', () => {
    //expect(12).toNotBe(11);
    // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
    // expect([2, 3, 4]).toInclude(2).toExclude(1);
    expect({
        name: 'Andrew',
        age: 25,
        location: 'Philadelphia',
    }).toInclude({
        age: 25
    });
});


it('should set first and last names', () => {
    let user = {age: 25};
    let fullName = 'Pavel Scheglov';

    user = utils.setName(user, fullName);
    expect(user).toInclude({
        firstName: 'Pavel',
        lastName: 'Scheglov',
        age: 25
    });
});

/*
it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should async square', (done) => {
    utils.asyncSquare(4, (square) => {
        expect(square).toBe(16).toBeA('number');
        done();
    });
});
*/