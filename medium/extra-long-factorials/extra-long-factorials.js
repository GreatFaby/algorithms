'use strict';

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

// Complete the extraLongFactorials function below.

function x(numArr, num) {
    let arr = numArr.map(n => n * num);
    let point = 0;
    while (true) {
        let more = Math.floor(arr[point] / 10);
        if (more > 0 || point + 1 < arr.length) {
            arr[point] = arr[point] % 10;
            if (point + 1 < arr.length) {
                arr[point + 1] += more;
            } else {
                arr.push(more);
            }
            point++;
        } else {
            break;
        }
    }
    return arr;
}


function extraLongFactorials(n) {
    let result = [1];
    for (let i = 1; i <= n; i++) {
        result = x(result, i);
    }
    console.log(result.reverse().join(''));

}

function main() {
    const n = parseInt(readLine(), 10);

    extraLongFactorials(n);
}
