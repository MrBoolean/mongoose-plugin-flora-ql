# mongoose-plugin-flora-ql
[![Build Status](https://travis-ci.org/MrBoolean/mongoose-plugin-flora-ql.svg)](https://travis-ci.org/MrBoolean/mongoose-plugin-flora-ql)
[![Code Climate](https://codeclimate.com/github/MrBoolean/mongoose-plugin-flora-ql/badges/gpa.svg)](https://codeclimate.com/github/MrBoolean/mongoose-plugin-flora-ql)
[![Test Coverage](https://codeclimate.com/github/MrBoolean/mongoose-plugin-flora-ql/badges/coverage.svg)](https://codeclimate.com/github/MrBoolean/mongoose-plugin-flora-ql/coverage)
[![Version](https://img.shields.io/npm/v/mongoose-plugin-flora-ql.svg?style=flat-square)](https://www.npmjs.com/package/mongoose-plugin-flora-ql)

## Install
```bash
npm i --save mongoose-plugin-flora-ql
```

## Usage
```javascript
var plugin   = require('mongoose-plugin-flora-ql');
var mongoose = require('mongoose');
var schema;
var User;

schema = new mongoose.Schema({
  nickname: String,
  emailAddress: String,
  isActive: Boolean,
  isDeleted: Boolean
});

schema.plugin(plugin);
User = mongoose.model('User', schema);
User.fql('isActive=false OR isDeleted=true', function (err, data) {
  // ...
});
```

## License
The MIT License (MIT)

Copyright (c) 2015 Marc Binder <marcandrebinder@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.