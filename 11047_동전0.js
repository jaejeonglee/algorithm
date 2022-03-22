const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
let totalMoney = Number(input[0].split(' ')[1])
console.log('총액:', totalMoney)

let totalCount = 0

while(totalMoney>0) {
    for (let i=input.length-1; i>0; i--) {
        if(input[i]<=totalMoney) {
            console.log('시도해볼 금액:',input[i])
            let count = parseInt(totalMoney/input[i])
            console.log('횟수:',count)
            totalMoney -= input[i]*count
            console.log('잔액:',totalMoney)
            totalCount += count
        }
    }
}
console.log(totalCount)


// let N = Number(input[0].split(' ')[0])
// let K = Number(input[0].split(' ')[1])

// let coins = []
//   for (let i = 1; i <= N; i++) {
//     coins.push(input[i]);
//   }
// console.log('동전 종류:',coins)
// console.log('총액:', K)

// let totalcount = 0

// for (let j = coins.length; j >= 0; j--) {
//     if (coins[j] <= K) {
//     console.log('시도해볼 금액:', coins[j])
//      let count = Math.floor(K / coins[j]);
//       console.log('횟수',count)
//       K = K % coins[j];
//       console.log('잔액:', K)
//       totalcount += count
//     }
//   }
// console.log(totalcount)