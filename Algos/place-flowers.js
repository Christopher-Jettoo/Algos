/*
605. Can Place Flowers

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

*/

var canPlaceFlowers = function (flowerbed, n) {
  //iterate over the array and check the current value to see if it is a 0 or 1 if it is a 0 then check to see the next value and if its a 0 again then we can change the current value to 1 and decrement the n value, then we can increment i by 2 once all these conditions is satisfied
  //if the value is a 1 then we check the next value and if its a 0 then we continue the loop

  // if n is not equal to zero at the end of the loop return false
  for (let i = 0; i < flowerbed.length; i++) {
    if (n == 0) return true;
    let prev = i > 0 ? flowerbed[i - 1] : 0;
    let next = i < flowerbed.length - 1 ? flowerbed[i + 1] : 0;

    if (prev != 1 && next != 1 && flowerbed[i] != 1) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n <= 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); // true
