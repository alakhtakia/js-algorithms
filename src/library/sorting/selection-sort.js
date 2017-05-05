/**
 * Sort array using selection sort
 *
 * Returns sorted array
 *
 * @public
 *
 * @example
 * var arr=[1,4,2,3,7,4,34,45,12,99,50];
 * output [1, 4, 4, 4, 7, 7, 34, 45, 45, 99, 99]
 *
 * @module others/sorting/selectionSort
*/
(function (exports) {
  'use strict';

  function selectionSort (arr) {
    var iMin,temp;

    for(var i=0;i<arr.length;i++){
      iMin=i;
      for(var j=i+1;j<arr.length;j++){
        if(arr[j]<arr[iMin]){
          iMin=j;
        }
      }
      temp=arr[i];
      arr[i]=arr[iMin];
      arr[iMin]=temp;
    }
    return arr;
  }

  exports.selectionSort = selectionSort;
})(typeof window === 'undefined' ? module.exports : window);
