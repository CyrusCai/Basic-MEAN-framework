'use strict';
const mongoose = require('../config/mongoose.js');
const express = require('../config/express.js');

let app = express();
let db = mongoose();

app.listen(4000,()=>{
  console.log('Be the best of yourself. The server is listening to port 4000!');
})