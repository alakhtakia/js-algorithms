(function (exports) {
  'use strict';
  /**
   * Find if string is unique
   * Complexity: O(N2).
   *
   * @example
   * var isUnique = isUnique('abcd');
   *
   * @public
   * @param {Array} array Input array
   * @return {boolean} 
   */
   function isUnique(str) {
    var hashtable = {};
    for(var i=0,len=str.length;i<len;i++){
        if (hashtable[str[i]] != null){
            hashtable[str[i]] = 1; 
            return false;
        }else
            hashtable[str[i]] = 0;
    }    
    return true;
  }

  exports.isUnique = isUnique;

})(typeof window === 'undefined' ? module.exports : window);