'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    let scoresNR = [...new Set(scores)];
    let rank = scoresNR.length - 1;
    let results = [];
    for (let i = 0; i < alice.length; i++) {
        while (alice[i] > scoresNR[rank] && rank > 0) rank--;
        if (alice[i] >= scoresNR[rank]) {
            results.push(rank + 1);
        } else {
            results.push(rank + 2);
        }
    }
    return results;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const scoresCount = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const aliceCount = parseInt(readLine(), 10);

    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
