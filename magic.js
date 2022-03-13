//한 줄 입력

let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().trim().split(' ');

let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}


//여러 줄 입력

const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);// 테스트(배열) 개수 = for문을 1부터 시작해야함