// // code5-1 익명 함수

// let foo = function (){
//     console.log("첫번줄");
//     console.log("두번째 줄");
// }

// foo();
// console.log(foo);

// // code5-2 선언적 함수
// function foo2 (){
//     console.log("첫번줄");
//     console.log("두번째 줄");
// }

// foo2();
// console.log(foo2);

// // code5-3 화살표 함수

// let foo3 = () => {
//     console.log("첫번줄");
//     console.log("두번째 줄");
// }

// foo3();
// console.log(foo3);

// //예제 5-1
// function power(x){
//     return x * x ;
// }

// console.log(power(10));
// console.log(power(20));


// function foo4(y) {
//     let bar = y*y;
//     return bar;
// }

// let foobar = foo4(10);
// console.log(foobar);

// function print(message){
//     console.log(`"$(message)"라고 말했습니다.`);
// }

// function print(name, count){
//     if(!count){
//         count = 1;
//     }
//     console.log(`${name}이/가 ${count}개 있습니다.`)
// }
// print("사과",10);
// print("사과");

//  function tenTimes(foo){
//      for(i=1; i<10; i++)
//  }
//  function tenTimes(function(){
//      console.log("함수 호출");
//  });

// let inputA = '52';
// let inputB = '52.273';
// let inputC = '1403동';

// console.log(parseInt(inputA));
// console.log(parseFloat(inputA));

// console.log(parseInt(inputB));
// console.log(parseFloat(inputB));

// console.log(parseInt(inputC));
// console.log(parseFloat(inputC));

// setTimeout(() => {
//     console.log("1초 경과");
// }, 1000)

// let foo = setInterval(()=>{
//     console.log("인터벌 1초 경과!!!");
// },1000)

// setTimeout(()=>{
//     clearInterval(foo);
// },6000)

let foo = {
    제품명 : "건조 망고",
    유형 : "당절임",
    원산지 : "필리핀"
};

console.log(foo.제품명);

