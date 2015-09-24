var expect = require('chai').expect;
var parse  = require('../');

describe('flora-ql-mongodb', function fqlm() {
  it('!= to $ne', function ne() {
    expect(parse('firstname!="Jon"')).to.eql({ firstname: { $ne: 'Jon' } });
  });

  it('<= to $lte', function lte() {
    expect(parse('age<=1337')).to.eql({ age: { $lte: 1337 } });
  });

  it('>= to $gte', function gte() {
    expect(parse('age>=1337')).to.eql({ age: { $gte: 1337 } });
  });

  it('= to attribute: value', function equal() {
    expect(parse('age=1337')).to.eql({ age: 1337 });
  });

  it('= (multiple values) to $in', function equalIn() {
    expect(parse('rights="admin","chuckNorris"')).to.eql({ rights: { $in: ['admin', 'chuckNorris'] } });
  });

  it('< to $lt', function lt() {
    expect(parse('age<1337')).to.eql({ age: { $lt: 1337 } });
  });

  it('> to $gt', function gt() {
    expect(parse('age>1337')).to.eql({ age: { $gt: 1337 } });
  });
});