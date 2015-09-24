var expect = require('chai').expect;
var fqlm   = require('../');

describe('flora-ql-mongodb', function test() {
  it('!= to $ne', function ne() {
    expect(fqlm('firstname!="Jon"')).to.eql({ firstname: { $ne: 'Jon' } });
  });

  it('<= to $lte', function lte() {
    expect(fqlm('age<=1337')).to.eql({ age: { $lte: 1337 } });
  });

  it('>= to $gte', function gte() {
    expect(fqlm('age>=1337')).to.eql({ age: { $gte: 1337 } });
  });

  it('= to attribute: value', function equal() {
    expect(fqlm('age=1337')).to.eql({ age: 1337 });
  });

  it('= (multiple values) to $in', function equalIn() {
    expect(fqlm('rights="admin","chuckNorris"')).to.eql({ rights: { $in: ['admin', 'chuckNorris'] } });
  });

  it('< to $lt', function lt() {
    expect(fqlm('age<1337')).to.eql({ age: { $lt: 1337 } });
  });

  it('> to $gt', function gt() {
    expect(fqlm('age>1337')).to.eql({ age: { $gt: 1337 } });
  });
});