const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');

  // if(res !== 44){
  //   throw new Error(`Expected 44 but got ${res}`)
  // }
});

it('should async two number', (done) => {
  utils.asyncAdd (4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});


it('should squre a number', () => {

  it('should set first name and lastname', () => {
    var user = {location: 'jpdhpur', age: 22};
    var res = utils.setName(user, 'shubham seervi');

    expect(res).toInclude({
      firstName: 'shubham',
      lastname: 'seervi'
    });
  })

  // var res = utils.square(2);
  //
  // expect({name: 'shubham'}).toEqual({name: 'shubham'});
});
