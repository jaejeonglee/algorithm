const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const N = Number(input[0])
const k = Number(input[1])

//메모리 초과
let B = []

for (let i=1; i<=N; i++) {
    for (let j=1; j<=N; j++) {
        B.push(i*j)
    }
} 

console.log(B[k])
