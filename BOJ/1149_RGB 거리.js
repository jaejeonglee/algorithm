const fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const N = Number(input[0])//집 개수

input.shift();//input에서 N제거
input = input.map((value) => //input 안의 배열을 각각 끊고 타입을 숫자로 바꿔줌
  value.split(" ").map((element) => Number(element))
);
for (let i = 1; i < N; i++) {
  input[i][0] = Math.min(input[i - 1][1], input[i - 1][2]) + input[i][0]; //89 96
  input[i][1] = Math.min(input[i - 1][0], input[i - 1][2]) + input[i][1]; //86 172
  input[i][2] = Math.min(input[i - 1][0], input[i - 1][1]) + input[i][2]; //83 185
}
console.log(Math.min(...input[N - 1]));