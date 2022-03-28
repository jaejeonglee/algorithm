const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);


//100번째까지 배열을 미리 만들어 두고 출력하기
// let arr = [1,1,1,2,2,3,4,5,7,9]
// for (let i= 10; i<100; i++) {
//     arr.push(arr[i-2] + arr[i-3])
// }

// console.log(arr[input[1]-1])
// console.log(arr[input[2]-1])

const N = input.slice(1)
const result = []

let arr = [1,1,1,2,2,3,4,5,7,9]

for (let i=10; i<100; i++) {
    arr.push(arr[i-2] + arr[i-3])
}
for (let j=0; j<T; j++) {
    result.push(arr[N[j]-1])
}

console.log(result.join('\n'))
