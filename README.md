# 배다슬[201930216]
<hr/>

## [04월 27일]
### <span style="color:red">객체</span>
#### <span style="color:yellow">객체 기본</span>
* 배열<br>
let array=[ ];<br>
![배열선언방법](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EB%B0%B0%EC%97%B4%EC%84%A0%EC%96%B8.PNG)<br>
배열에는 인덱스와 요소가 있음<br>
array[n]<br>
![배열인덱스](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EB%B0%B0%EC%97%B4%EC%9D%B8%EB%8D%B1%EC%8A%A4.PNG)<br>
>배열과 객체 다른 점 -> 배열은 요소에 접근할 때 인덱스 사용, 객체는 키 사용<br>
배열 내부에 있는 값 : 요소 / 객체 내부에 있는 값 : 속성<br>
* 객체<br>
let 객체명 = { 키와 속성 작성 };<br>
![객체선언](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EA%B0%9D%EC%B2%B4%EC%84%A0%EC%96%B8.PNG)<br>
객체 접근 방법<br>
![객체접근방법](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EA%B0%9D%EC%B2%B4%EC%A0%91%EA%B7%BC.PNG)<br>
#### <span style="color:yellow">객체와 반복문</span>
for in 반복문 사용해 객체에 반복문 적용<br>
![객체반복문](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EA%B0%9D%EC%B2%B4%EB%B0%98%EB%B3%B5%EB%AC%B8.PNG)<br>
#### <span style="color:yellow">속성과 메소드</span>
자료형이 함수인 속성 -> 메소드<br>
객체에 있는 속성을 메소드에서 사용하고 싶을 때 this 키워드를 사용하여 자신이 가지고 있는 속성이라는 것을 표시해야함<br>
![this키워드사용](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/this%ED%82%A4%EC%9B%8C%EB%93%9C%EC%82%AC%EC%9A%A9.PNG)<br>
객체 object에는 name, price, print 속성이 있음<br>
print 속성은 함수 이므로 print 메소드라고 부름<br>
#### <span style="color:yellow">개요</span>
메소드를 가진 객체의 배열<br>
![메소드를가진객체의배열](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EB%A9%94%EC%86%8C%EB%93%9C%EB%A5%BC%EA%B0%80%EC%A7%84%EA%B0%9D%EC%B2%B4%EC%9D%98%EB%B0%B0%EC%97%B4.PNG)<br>
자바스크립트는 객체 지향 프로그래밍 언어이므로 function printProduct(product) 함수를 따로 선언하여 프린트하면 안되고 product.print() 메소드 작성<br>
#### <span style="color:yellow">생성자 함수</span>
생성자 함수 : 객체를 만드는 함수<br>
![생성자함수](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EC%83%9D%EC%84%B1%EC%9E%90%ED%95%A8%EC%88%98.PNG)<br>
new키워드와 함께 사용해 객체를 생성<br>
#### <span style="color:yellow">프로토타입</span>
생성자 함수로 만든 객체는 프로토타입이라는 공간에 메소드를 지정해서 모든 객체가 공유하도록 만듬 / 프로토타입은 모든 함수가 가지고 있는 속성으로 해당 함수를 생성자 함수로 사용했을 때만 의미 있음<br>
객체 지향적으로 구선한 객체 배열<br>
![객체지향적으로구성한객체배열](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%EC%A0%81%EC%9C%BC%EB%A1%9C%EA%B5%AC%EC%84%B1%ED%95%9C%EA%B0%9D%EC%B2%B4%EB%B0%B0%EC%97%B4-1.PNG)<br>
![객체지향적으로구성한객체배열](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%EC%A0%81%EC%9C%BC%EB%A1%9C%EA%B5%AC%EC%84%B1%ED%95%9C%EA%B0%9D%EC%B2%B4%EB%B0%B0%EC%97%B4-2.PNG)<br>


## [04월 13일]
* 익명함수 => 이름을 붙이지 않고 함수를 생성하는 것<br>
let <함수 이름> = function () { };<br>
* 선언적 함수 => 이름을 붙여 함수를 생성한 것<br>
function <함수 이름> () { }<br>
* 화살표 함수 => '하나의 표현식을 리턴하는 함수'를 만들때 중괄호 생략 가능, 대부분의 익명 함수 코드는 화살표 함수로 대체할 수 있음<br>
() => {}<br>
* 함수의 기본 형태<br>
function <함수 이름>(<매개 변수>){<br>
    <함수 코드><br>
    return <리턴 값><br>
}<br>
* 함수의 기본 활용 형태<br>
function (<매개 변수>, <매개 변수>){<br>
let output = <초깃값>;<br>
//output 계산<br>
return output;<br>
}<br>
* 함수 매개 변수 초기화<br>
매개 변수를 입력하지 않아도 함수가 호출됨<br>
* 콜백 함수 => 함수의 매개 변수로 전달되는 함수<br>


## [04월 06일]
* break문<br/>
조건문이나 반복문을 벗어날 때 사용<br>
* continue문<br/>
반복문 내부에서 현재 반복을 멈추고 다음 반복을 진행하게 함<br>
ex) for (let i = 1; i < 10; i++>{<Br>if( i % 2 == 0){<br>continue;<br>}<Br>console.log(i) } => 결과 : 1 3 5 7 9
* 별찍기 코드<br/>
<span style="color:red"> <b>맨 첫번째 for 조건 값에 출력하고 싶은 별의 개수 작성한 후 중첩 for문을 let j = 0; j < i + 1; j++ 으로 만들면 원하는 별의 개수 출력 가능!</b></span>

## [03월 30일]
* 중첩 조건문<br/>
조건문 안에 조건문을 중첩해 사용하는 것<br>
if(불 표현식){<br>
    if(불 표현식) {문장;}<Br>
    else{문장;}}<br> 
    else{if(불 표현식){문장;}<br>
    else{문장;}}<br>
* if else if 조건문<br/>
앞에서 조건문이 한 문장이라면 조건문의 중괄호를 생략해도 됨<br>
if(<불 표현식>){<br>
} else if (<불 표현식>){<br> 
} else if (<불 표현식>){<br> 
} else {<Br>
}<br>
* switch 조건문<br>
switch(<비교할 값>){<Br>
    case <값> : <br>
        <문장><Br>
        break;<Br>
    case <값> : <br>
        <문장><Br>
        break;<Br>
    default: <br>
        <문장><Br>
        break;<Br>}<Br>
<ul>
    <li>break 키워드는 switch 조건문이나 반복문을 빠져나갈때 사용</li>
    <li>switch 조건문의 괄호 안에는 비교할 값을 입력</li>
    <li>입력한 표현식과 case 키워드 옆에 있는 표현식이 같다면, case 키워드 바로 다음에 오는 문장을 차례대로 실행</li>
    <li>별도의 중괄호 사용 안해도 됨</li>
</ul>

* 삼항연산자<br>
<볼 표현식> ? <참> : <거짓><Br>
* 짧은 초기화 조건문<br>
'변수 test가 undefined일 때 || 기호 뒤의 값으로 초기화한다'<br>
* 조금 더 나아가기<br>
웹 브라우저에서 작동하는 자바스크립트:prompt()이름의 함수를 받음<br>

## [03월 23일]
* 피제수<br />
피제수가 음수일때만 결과값에 영향을 미침<br>
* 문자열<br />
출력하고싶은 문장에 ''가 적혀있으면 ""로 전체 문장을 잡으면 되고 출력하고싶은 문장에 ""가 적혀있으면 전체 문장을 ''로 잡으면 됨<br>
* [] -> 배열<br>
"abc" + "def"; 라고 입력하면 -> abcdef<br>
"문자열"[0] -> 문<br>
let a ="hello world!";-> undefined<br>
a[4]; -> o<br>

* 템플릿 문자열<br/>
`안녕하세요` '안녕하세요' -> 다른거임<br>
`23+58`-> 23+58<br>
`23+58 = ${23+58}`; -> 23+58 =81<br>
'52+273 =' +(52+273); -> 52+273 =325<br>
'올해는'+ new Date().getFullYear(); -> 올해는 2021<br>
`올해는 ${new Date().getFullYear()}`[4]; -> 2<br>
`올해는 ${new Date().getFullYear()}`; -> 올해는 2021<br>

* 변수 선언<br />
변수를 선언할때는 let 작성. let 식별자;<br>

* NaN -> 숫자 자료형이지만 숫자가 아닌 것을 의미<br>
> 1.표현 불가능한 수치형 결과를 나타내는 값<br>
> 2.자기 자신과 일치하지 않는 유일한 값<br>
> 3.자기 자신과도 일치하지 않기 때문에 nan == nan이 false이다.<br>

* date.getDay() -> Day는 요일->일요일부터 토요일까지 배열로 가지고 있음, 배열의 시작은 0이기때문에 화요일은 2로 나오는것
* getDate() -> 날짜

## [03월 16일]
> 오늘 배운 내용 요약 <br />

* 자바스크립트<br/>
웹 클라이언트 애플리케이션 개발(주목적)<br>
모든 웹 브라우저에서 실행할 수 있는 유일한 프로그래밍 언어<br>

키워드는 사용 불가능<br>
* 식별자<br>
키워드를 사용하면 안됨<br>
특수문자는 _와 $만 허용<br>
숫자로 시작하면 안됨<br>
공백 입력 불가

* 생성자<br>
생성자 함수의 이름은 항상 대문자<br>
변수, 함수, 속성, 메소드의 이름은 항상 소문자로 시작<br>
여러 단어로 된 식별자는 각 단어의 첫 글자를 대문자로 함<br>

날짜 순으로 하지말고 최신 날짜를 위로 올리기

## [03월 09일]

<!-- 주석 -->
<!-- 주석(ctrl + /) -->
주석 표현 하는 방법<br>
< !---- > 자동으로 작성하고싶을때는 ctrl + /
<!-- h1 ~ h6 -->
글씨 크기는 #으로 표현 
# h1(#)동시에 밑줄도 같이 쳐짐
## h2(##)
...
###### h6(######)
밑줄 표현하고 싶을때 (--- or ***)
---
***
<!-- 밑줄(>) -->
중요한 것을 강조할때 (>)
> 하나
<!-- 글머리기호(*) -->
글머리기호 사용하고 싶을때(*)
* 중요한것들

더 화려한 것들 찾고 싶으면 크롬에 markdown 검색해서 보기
