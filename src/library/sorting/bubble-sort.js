(function (exports) {
  'use strict';

  function comparator(a, b) {
    return a - b;
  }

  /**
   * Bubble sort algorithm.<br><br>
   * Complexity: O(N^2).
   *
   * @example
   * var sort = require('path-to-algorithms/src/' +
   * 'sorting/bubblesort').bubbleSort;
   * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
   *
   * @public
   * @param {Array} array Input array
   * @return {Array} Sorted array.
   */
   function bubbleSort(array) {
    var swap;
    var temp
    do{
      swap = false;      
      arr.forEach((num,i)=>{
        if(num>arr[i+1]){
          temp = arr[i];
          arr[i]=arr[i+1;
          arr[i+1]=temp;          
          swap=true;
        }
      });

    } while(swap===true);
    return array;
  }

  exports.bubbleSort = bubbleSort;

})(typeof window === 'undefined' ? module.exports : window);