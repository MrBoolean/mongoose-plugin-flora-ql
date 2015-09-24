var ql = require('flora-ql');
var map = {
  '!=': '$ne',
  '<=': '$lte',
  '>=': '$gte',
  '=': function equals(attribute, value) {
    var result = {};

    if (Array.isArray(value)) {
      result[attribute] = { $in: value };
    } else {
      result[attribute] = value;
    }

    return result;
  },
  '<': '$lt',
  '>': '$gt'
};

ql.setConfig('api');

module.exports = function batch(query) {
  var parsed = (Array.isArray(query)) ? query : ql.parse(query);
  var or;

  or = parsed.map(function mapOr(nexus) {
    var and = [];

    nexus.forEach(function eachAnd(condition) {
      var attribute = condition.attribute.join('.');
      var logical   = map[condition.operator];
      var item;
      var temporary;

      if (typeof logical === 'string') {
        item               = {};
        temporary          = {};
        temporary[logical] = condition.value;
        item[attribute]    = temporary;
      } else {
        item = logical(attribute, condition.value);
      }

      and.push(item);
    });

    return (and.length === 1) ? and[0] : { $and: and };
  });

  return (or.length === 1) ? or[0] : { $or: or };
};