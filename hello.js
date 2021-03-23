let date =new Date();
h =date.getHours();

console.log(h < 3 || h > 8);
console.log(h >= 3 && h <= 8);

let type = typeof(date.getHours());
console.log(type);

const conl = "상수선언";
console.log(conl);


/*
홀수 짝수
let input = 32;

if(input%2==0) {
    console.log("짝수");
} else {
    console.log("홀수");
}*/

if(date.getHours()<12){
    console.log("오전");
} console.log("오후");

//Date()
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay()); //Day는 요일->일요일부터 토요일까지 배열로 가지고 있음, 배열의 시작은 0이기때문에 화요일은 2로 나오는것
console.log(date.getTime());
console.log(date.getUTCMinutes());
console.log(date.getSeconds());
console.log(date.getDate()); //날짜