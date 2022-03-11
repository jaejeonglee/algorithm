const fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().trim().split(' ');
let [n, k] = input.map((n) => parseInt(n));


let ansArr = []; //출력이 배열이어야 하므로 값들이 담길 빈 배열을 생성한다.

let arrN = [] //1부터 N까지 순서대로 나열한 배열을 생성한다.
for (let i=1; i<=n; i++) {
    arrN.push(i)
} 

let num = 0; //첫 사이클은 0부터 시작해야 한다.

while (arrN.length > 0) { //배열 속의 값이 없어질 때까지 반복해야하니까 배열의 길이가 0보다 크다면 계속 사이클을 돌려준다.
  num = (num + k - 1) % arrN.length;//배열이니까 k-1을 해주고 배열길이로 나눈 나머지 값을 num에 넣어준다.
  ansArr.push(arrN[num]); //arrN의 num번째 값을 출력배열에 push한다.
  arrN.splice(num, 1);//배열의 num번째 값을 제거해준다. splice(제거할 값의 위치, 제거할 값의 개수)
} //k번째 값을 제거할 때마다 배열의 길이가 줄어들기 때문에 위와 같은 방법 사용. 

const ans = '<' + ansArr.join(', ') + '>'; //ansArr만 출력하면 공백이 없어서 사이사이에 공백을 만든다.
console.log(ans);