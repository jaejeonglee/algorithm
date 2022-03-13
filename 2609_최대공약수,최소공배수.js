let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().trim().split(' ');
let A = Number(input[0])
let B = Number(input[1])

let yaksu = 1;
let baesu = 1;
// if (A>B) {
//     for (let i=B; i>=1; i--) {
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
    for(let i=2; i<=Math.min(A, B); i++){
        if(A % i === 0 && B % i === 0){
            yaksu = i;
        }
    }
    while(true){
      if((baesu % A == 0) && (baesu % B == 0)){
        break;
      }
      baesu++;
    }

console.log(yaksu)
console.log(baesu)