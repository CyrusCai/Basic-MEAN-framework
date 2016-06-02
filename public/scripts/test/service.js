'use strict';

angular.module('test.service',[])
.factory('mainService', function(){
  return{
    TestMsg: function(){
      return 'You make it';
    }
  }
})

.factory('secondService',function(){
  return{
    TestMsg: function(){
      return 'This is the secode service';
    }
  }
})