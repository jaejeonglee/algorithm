const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const T = Number(input[0]); // 테스트 개수
let answer ='' //정답을 담기 위해 미리 선언

//실패 = 예외처리 x
for(let i=1; i<=T; i++) { //테스트 별로 계산하기 위한 반복문
    let total = 0 // +,-의 총 합을 담기 위해 미리 선언
    let eachOne = input[i].split('') //각 테스트의 괄호들을 하나하나 나누기
    for( let j=0; j<eachOne.length; j++ ) { //나눈것들 다시 반복문
            if( eachOne[j] === '(' ){ //만약 하나하나 나눈 j번째 괄호가 ( 이렇게 생겼으면
                total = total + 1//총 합에 1을 더하기
            } else {//아니면
                total = total - 1//총 합에서 1을 빼기
            }
        }

   if( total === 0 ){ //최종적으로 총 합이 0이면 괄호의 짝이 다 맞은거니까
        answer = answer + 'YES' + '\n' //YES, 줄 바꿈
    } else { //아니면 
        answer = answer + 'NO' + '\n' //NO, 줄 바꿈
    } 
}

console.log(answer)


// //성공
// for(let i=1; i<=T; i++) { //테스트 별로 계산하기 위한 반복문
//     let total = 0 // +,-의 총 합을 담기 위해 미리 선언
//     let eachOne = input[i].split('') //각 테스트의 괄호들을 하나하나 나누기
//     for( let j=0; j<eachOne.length; j++ ) { //나눈것들 다시 반복문
//         if ( total < 0 ) {//총 합이 0보다 작으면
//             break; //반복문 빠져나오기
//         } if( eachOne[j] === '(' ) { //만약 하나하나 나눈 j번째 괄호가 ( 이렇게 생겼으면
//                 total = total + 1//총 합에 1을 더하기
//             } else {//아니면
//                 total = total - 1//총 합에서 1을 빼기
//             }
//         }

//    if( total === 0 ){ //최종적으로 총 합이 0이면 괄호의 짝이 다 맞은거니까
//         answer = answer + 'YES' + '\n' //YES, 줄바꿈
//     } else { //아니면 
//         answer = answer + 'NO' + '\n' //NO, 줄바꿈
//     } 
// }

// console.log(answer)


// 스택개념 이용
for (let i = 1; i <= caseCount; i += 1) {
    const cases = input[i];
    const stack =  [];
    let result = 'YES';
  
    for (let j = 0; j < cases.length; j += 1) {
      if (cases[j] === '(') {
        stack.push(1);
      } else {
        if (!stack.pop()) {
          result = 'NO';
          break;
        } 
      }
    }
  
    if (stack.length !== 0) {
      result = 'NO';
    }
  
    console.log(result);
  }