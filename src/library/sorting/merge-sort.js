/**
 * Sort array using merge sort
 *
 * Returns sorted array
 *
 * @public
 *
 * @example
 * var arr=[1,4,2,3,7,4,34,45,12,99,50];
 * output [1, 4, 4, 4, 7, 7, 34, 45, 45, 99, 99]
 *
 * @module others/sorting/mergeSort
*/
(function (exports) {
  'use strict';

  function mergeSort (arr) {
    if(arr.length<2)
      return arr;

    var left,right,middle;
    middle=Math.floor(arr.length/2);
    left=arr.slice(0,middle);
    right=arr.slice(middle);
   
    return mergeSort.merge(mergeSort(left),mergeSort(right));
  }

  mergeSort.merge = function(left,right){
    var result =[];
    while(left.length && right.length){
      if(left[0]<=right[0]){
        result.push(left.shift());
      } else{
        result.push(right.shift());
      }
    }
  while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());
    return result;
  }

  exports.mergeSort = mergeSort;
})(typeof window === 'undefined' ? module.exports : window);
