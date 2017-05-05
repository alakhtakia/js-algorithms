/**
 * Sort array using quick sort
 *
 * Returns sorted array
 *
 * @public
 *
 * @example
 * var arr=[1,4,2,3,7,4,34,45,12,99,50];
 * output [1, 4, 4, 4, 7, 7, 34, 45, 45, 99, 99]
 *
 * @module others/sorting/quickSort
*/
(function (exports) {
  'use strict';

  function quickSort (arr) {
    if(arr.length<=1)
      return arr;
    var pivot
    var left=[];
    var right =[];
    pivot=arr[arr.length-1];
    
    for(var i=0;i<arr.length-1;i++){
      if(arr[i] < pivot){
        left.push(arr[i]);        
      } else{
        right.push(arr[i]);  
      }
    }
    
    return [...quickSort(left),pivot,...quickSort(right)];      
  }

  exports.quickSort = quickSort;
})(typeof window === 'undefined' ? module.exports : window);
