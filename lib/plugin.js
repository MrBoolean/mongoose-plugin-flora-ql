var batch = require('./batch');

module.exports = function plugin(schema) {
  schema.statics.fql = function fql(query, callback) {
    return this.find(batch(query), callback);
  };
};