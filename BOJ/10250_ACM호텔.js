// const fs = require('fs');
// const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const input = ['2','6 12 10','30 50 72'];
const T = parseInt(input.shift());// 테스트(배열) 개수

for(let i = 0; i < T; i++){ //각 테스트(배열)별 
   const arr= input[i].split(' ')
   const H = parseInt(arr[0]); //몇 층짜리 호텔인지
   const N = parseInt(arr[2]); //몇번째 손님인지
   
   if(N % H === 0){//꼭대기층일 때
      floor = H; 
      room = N / H;
   }
   if(N % H !== 0){//꼭대기층이 아닐 때
    floor = N % H;//배정되는 층
    room = Math.floor(N / H)+1; //그 층의 몇 번째 방
  }
  if(room < 10){room = `0${room}`;} // 방을 01 02 처럼 표현해야하므로 10보다 작을 땐 0을 붙여준다.
   console.log(`${floor}${room}`); // 몇 호실인지 층과 방을 합쳐서 나타낸다.
}