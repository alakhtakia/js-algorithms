/**
 * Sort array using insertion sort
 *
 * Returns sorted array
 *
 * @public
 *
 * @example
 * var arr=[1,4,2,3,7,4,34,45,12,99,50];
 * output [1, 4, 4, 4, 7, 7, 34, 45, 45, 99, 99]
 *
 * @module others/sorting/insertionSort
*/
(function (exports) {
  'use strict';

  function insertionSort (array) {
    var current;
    var j;
    for (var i = 1; i < array.length; i += 1) {
      current = array[i];
      j = i - 1;
      while (j >= 0 && array[j]> current) {
        array[j + 1] = array[j];
        j -= 1;
      }
      array[j + 1] = current;
    }
    return array;
  }

  exports.insertionSort = insertionSort;
})(typeof window === 'undefined' ? module.exports : window);
