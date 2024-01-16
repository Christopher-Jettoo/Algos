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
 * Complete the 'processLogs' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY logs
 *  2. INTEGER maxSpan
 
Application logs are used in analysis of interactions with an application and may be used to detect specific actions. 

A log file is provided as a string array where each entry is in the form "user_id timestamp action". Each of the values is separated by a space.

Both user_id and timestamp consist only of digits, are at most 9 digits long and start with a non-zero digit.
timestamp represents the time in seconds since the application was last launched
action will be either "sign-in" or "sign-out"

Given a log with entries in no particular order, return an array of strings that denote user_id's of users who signed out in maxSpan seconds or less after signing in. 

Example
n = 7


[
  [ '30', '99', 'sign-in' ],
  [ '30', '105', 'sign-out' ],
  [ '12', '100', 'sign-in' ],
  [ '20', '80', 'sign-in' ],
  [ '12', '120', 'sign-out' ],
  [ '20', '101', 'sign-out' ],
  [ '21', '110', 'sign-in' ]
]

 */

// const logs = ["30 99 sign-in", "30 105 sign-out", "12 100 sign-in", "20 80 sign-in", "12 120 sign-out", "20 101 sign-out", "21 110 sign-in"]
// const moreLogs = ["99 1 sign-in","100 10 sign-in","50 20 sign-in","100 15 sign-out","50 26 sign-out","99 2 sign-out"]
// const maxSpan = 20

function processLogs(logs, maxSpan) {
    let fullLogs = [];

    let result = [];

    for (let i = 0; i < logs.length; i++) {
       fullLogs.push(logs[i].split(' '))
    }
    let obj = {};

    fullLogs.forEach((el) => {
        if(!obj[el[0]]){
            obj[el[0]] = [el];
        }else{
            obj[el[0]].push(el);
        }
    })

    for(const key in obj){
        if(obj[key].length < 2){
            delete obj[key];
        }
    }
 

    for(const key in obj){
        // console.log(obj[key][1][1])
        if(Math.abs(obj[key][0][1] - obj[key][1][1]) <= maxSpan){
            result.push(key)
        }
    }
    
    return result

}
// function processLogs(logs, maxSpan) {
//     const userLogs = {};


//     logs.forEach(log => {
//         const user = log.split(' ');
       
//         if (!userLogs[user[0]]) {
//             userLogs[user[0]] = {};
//         }
//         userLogs[user[0]][user[2]] = parseInt(user[1]);
//     });


//     const result = [];


//     for (const key in userLogs) {
//         if (userLogs[key]['sign-in'] && userLogs[key]['sign-out']) {
//             const signInTime = userLogs[key]['sign-in'];
//             const signOutTime = userLogs[key]['sign-out'];
            
//             if (signOutTime - signInTime <= maxSpan) {
//                 result.push(key);
//             }
//         }
//     }

//     return result;
// }

// console.log(processLogs(logs, maxSpan))
// console.log(processLogs(moreLogs, 5))

// {
//     '12': [ [ '12', '100', 'sign-in' ], [ '12', '120', 'sign-out' ] ],
//     '20': [ [ '20', '80', 'sign-in' ], [ '20', '101', 'sign-out' ] ],
//     '30': [ [ '30', '99', 'sign-in' ], [ '30', '105', 'sign-out' ] ]
//   }


function main() {
    const ws = process.stdout;

    const logsCount = parseInt(readLine().trim(), 10);

    let logs = [];

    for (let i = 0; i < logsCount; i++) {
        const logsItem = readLine();
        logs.push(logsItem);
    }

    const maxSpan = parseInt(readLine().trim(), 10);

    const result = processLogs(logs, maxSpan);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
