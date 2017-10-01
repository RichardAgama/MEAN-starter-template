var mongoose = require('mongoose');
var testSchema = new mongoose.Schema({//an object is passed in
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  bio: {
    type: String
  },
  pic: {
    type: String
  }


});

mongoose.model('testModel', testSchema, 'testcollection');
//mongoose.model(name of model, schema, collection name)
