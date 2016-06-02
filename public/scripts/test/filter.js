'use strict';

angular.module('test.filter',[])
.filter('reverse',function(){
  return (input)=>{
    input = input || '';
    return input.split('').reverse().join('');
  }
})