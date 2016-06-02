'use strict';

const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  console.log('Finally I got you.');
  res.send('root path');
})



module.exports = router;