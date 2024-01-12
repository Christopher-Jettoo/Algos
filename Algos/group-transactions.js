'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'groupTransactions' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY transactions as parameter.
 */
// sort by count decending first then by name
// function groupTransactions(transactions) {

//      let counts = {};
//      transactions.forEach(item => {
//          counts[item] = (counts[item] || 0) + 1;
//      });
 

//      let items = Object.keys(counts).map(key => [key, counts[key]]);
 

//      items.sort((a, b) => {
//          if (b[1] !== a[1]) {
//              return b[1] - a[1]; 
//          } else {
//              return a[0].localeCompare(b[0]); 
//          }
//      });
 
  
//      return items.map(item => `${item[0]} ${item[1]}`);
// }

function groupTransactions(transactions) {
    const counts = transactions.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(counts)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(([item, count]) => `${item} ${count}`);
}

// Example usage
console.log(groupTransactions(['banana', 'pear', 'apple']));
console.log(groupTransactions(['bin', 'can', 'bin', 'bin']));


const transactions = ['notebook', 'notebook', 'mouse', 'keyboard', 'mouse'];

console.log(groupTransactions(transactions))// ['mouse 2', 'notebook 2', 'keyboard 1'].
function main() {
    const ws = process.stdout;

    const transactionsCount = parseInt(readLine().trim(), 10);

    let transactions = [];

    for (let i = 0; i < transactionsCount; i++) {
        const transactionsItem = readLine();
        transactions.push(transactionsItem);
    }

    const result = groupTransactions(transactions);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
