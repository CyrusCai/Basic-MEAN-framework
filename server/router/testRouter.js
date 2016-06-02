'use strict';

const router = require('express').Router();
const testController = require('../controller/testController.js')

router.get('/', testController.insertDummyData);

module.exports = router;