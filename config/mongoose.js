'use strict';

const mongoose = require('mongoose');
const config = require('./config.js');
require('../server/models/testModel.js');

module.exports = () => {
  let db = mongoose.connect(config.db, (err)=>{
    if(err){
      console.log('connect db error', err);
    }
  });
  return db;
}

