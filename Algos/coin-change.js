/*
322. Coin Change
Medium

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

 */


var coinChange = function(coins, amount) {

    let sortedCoins = [...coins].sort((a, b) => a - b);
    let counter = 0;
    
    while(amount !== 0){
        console.log(sortedCoins)

      

      if(sortedCoins[sortedCoins.length - 1] <= amount){
        amount = amount - sortedCoins[sortedCoins.length - 1];
        counter++;
      }else{
          sortedCoins.pop();
      }

      if(sortedCoins.length === 0){
        break;
      }
    }

    return counter;
};

console.log(coinChange([1,2,5], 11));
console.log(coinChange([1,2,5], 12));
