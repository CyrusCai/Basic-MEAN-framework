'use strict';

require('../models/testModel.js');
var mongoose = require('mongoose');
var TestS = mongoose.model('TestSchema');


class testController{
  insertDummyData(req,res){
    console.log('enter insertDummyData');
    let example = new TestS({
        'name':'Cyrus'
    });
    example.save((err,res)=>{
      if(err){
        console.log('insert err',err);
      } else{
        console.log('get response',res);
      }
    })
    res.send('success insert data');
  }
}

module.exports = new testController();
