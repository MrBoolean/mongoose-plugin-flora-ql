var mongoose = require('mongoose');
var plugin   = require('../').plugin;
var schema;
var User;

mongoose.connect('mongodb://192.168.99.100:32768/mongoose-plugin-flora-ql');

// the collection contains:
// { "_id": ObjectId("..."), "name": "Luisa", "isActive": true, "isDeleted": true }
// { "_id": ObjectId("..."), "name": "Lucas", "isActive": true, "isDeleted": true }

schema = new mongoose.Schema({
  name: String,
  isActive: Boolean,
  isDeleted: Boolean
});

schema.plugin(plugin);

User = mongoose.model('User', schema, 'user');
User.fql('isActive=false OR isDeleted=true', function(err, data) {
  data.forEach(function(user) {
    console.log(user.name);
  });
});

// Lucas
// Luisa