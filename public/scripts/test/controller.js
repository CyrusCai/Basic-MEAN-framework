'use strict';
angular.module('testApp',['test.service','test.directives','test.filter'])
.controller('main.controller', function($scope, mainService, secondService){
  let controller = this;
  //controller.attribute vs $scope
  controller.name = 'cyrus';
  controller.type = "student";
  $scope.age = 18;

  let msg1 = mainService.TestMsg();
  let msg2 = secondService.TestMsg();

  console.log(`${msg1} , ${msg2}`);
})

