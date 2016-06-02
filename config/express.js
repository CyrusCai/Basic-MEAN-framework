'use strict';
const express = require('express');
const rootRouter = require('../server/router/rootRouter.js');
const testRouter = require('../server/router/testRouter.js');


module.exports = () =>{
  let app = express();

  //config routers
  app.use('/',rootRouter);
  app.use('/test',testRouter);

  return app;
}