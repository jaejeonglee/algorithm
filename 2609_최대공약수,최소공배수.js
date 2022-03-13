let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().trim().split(' ');
let A = Number(input[0])
let B = Number(input[1])

let yaksu = 1;
let baesu = 1;
// if (A>B) {
//     for (let i=B; i>1; i--) {
//         if (B%i===0) {
//             if (A%i===0) {
//                 yaksu = i;
//                 break;
//             }
//         }
//     };
//     for (let i=1; i<=A; i++) {
//         if (B*i%A===0) {
//             baesu = B*i
//             break;
//         }
//     }
// }
// if (B<A) {
//     for (let i=A; i>1; i--) {
//         if (A%i===0) {
//             if (B%i===0) {
//                 yaksu = i;
//                 break;
//             }
//         }
//     };
//     for (let i=1; i<=B; i++) {
//         if (A*i%B===0) {
//             baesu = A*i
//             break;
//         }
//     }
// }
// if (A===B) {
//     yaksu = A
//     baesu = A
// }

    for(let i=2; i<=Math.min(A, B); i++){ //Math.min으로 둘 중 작은 값을 찾아내어 반복문을 돌린다.
        if(A % i === 0 && B % i === 0){ //A와 B를 i로 나눈 나머지가 둘 다 0일 때
            yaksu = i; //최대공약수는 i가 된다.
        }
    }
    while(true){ //조건이 참으로 설정되어 있으니까 임의로 빠져나오기 전까지 계속 반복한다.
      if((baesu % A == 0) && (baesu % B == 0)){ //최소공배수를 A와 B로 나눈 나머지가 둘 다 0일 때만
        break; //반복문을 빠져나온다.
      }
      baesu++; //최소공배수를 1씩 증가시킨다.
    }

console.log(yaksu)
console.log(baesu)