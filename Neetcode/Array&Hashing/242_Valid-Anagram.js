/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Sort 
var isAnagram = function(s, t) {
   return s.split("").sort().join("") === t.split("").sort().join("") 
};

//Hash Map
var isAnagramA = function(s, t) {
   const count = {  };
   return count[s[0]]
};

//Variable Define
let a = ["caat"],
    b = ["caao"];

//Test Function
// console.log(isAnagramA(a,b));
let countT = {}
countT[a[0]] = 0
console.log(countT[a[0]]);