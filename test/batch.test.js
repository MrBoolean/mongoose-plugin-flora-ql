var expect = require('chai').expect;
var batch  = require('../').batch;

describe('mongoose-plugin-flora-ql/batch', function test() {
  it('!= to $ne', function ne() {
    expect(batch('firstname!="Jon"')).to.eql({ firstname: { $ne: 'Jon' } });
  });

  it('<= to $lte', function lte() {
    expect(batch('age<=1337')).to.eql({ age: { $lte: 1337 } });
  });

  it('>= to $gte', function gte() {
    expect(batch('age>=1337')).to.eql({ age: { $gte: 1337 } });
  });

  it('= to attribute: value', function equal() {
    expect(batch('age=1337')).to.eql({ age: 1337 });
  });

  it('= (multiple values) to $in', function equalIn() {
    expect(batch('rights="admin","chuckNorris"')).to.eql({ rights: { $in: ['admin', 'chuckNorris'] } });
  });

  it('< to $lt', function lt() {
    expect(batch('age<1337')).to.eql({ age: { $lt: 1337 } });
  });

  it('> to $gt', function gt() {
    expect(batch('age>1337')).to.eql({ age: { $gt: 1337 } });
  });
});