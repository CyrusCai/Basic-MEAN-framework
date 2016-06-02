'use strict';

angular.module('test.directives',[])
.directive('myCustomer', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
})

.directive('newPage',()=>{
  return{
    template: (elem,attr)=>{
      return 'Type:'+ attr.type + " Name:"+ attr.name;
    }
  }
})
