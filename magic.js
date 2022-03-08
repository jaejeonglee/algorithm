const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);// 테스트(배열) 개수 = for문을 1부터 시작해야함