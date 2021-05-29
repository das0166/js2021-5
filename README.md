# 배다슬[201930216]
<hr/>

## [05월 25일]
### <span style="color:red">express 모듈</span>
* 요청과 응답<br>
    + express 모듈 설치<br>
         ```javascript
          $ npm install express@4
         ```
         > 요청하는 대상 : 클라이언트(사용자)<br>
    응답하는 대상 : 서버(제공자)<br>
    요청 메세지 : 클라이언트가 서버로 보내는 편지<br>
    응답 메세지 : 서버가 클라이언트로 보내는 편지

    + express 모듈을 사용한 서버 생성과 실행<br>
        + express 모듈의 기본 메소드<br>
        ![express모듈의기본메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/express%EB%AA%A8%EB%93%88%EC%9D%98%EA%B8%B0%EB%B3%B8%EB%A9%94%EC%86%8C%EB%93%9C.PNG))<br>
    + 페이지 라우팅<br>
        + 페이지 라우팅 : 클라이언트 요청에 적절한 페이지를 제공하는 기술<br>
        + express 모듈의 페이지 라우팅 메소드<br>
        ![express모듈의페이지라우팅메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/express%EB%AA%A8%EB%93%88%EC%9D%98%ED%8E%98%EC%9D%B4%EC%A7%80%EB%9D%BC%EC%9A%B0%ED%8C%85%EB%A9%94%EC%86%8C%EB%93%9C.PNG)<br>
        + 페이지 라우팅을 할 때 토큰을 활용함<br>
            1. ':<토큰 이름>' 형태로 설정<br>
            2. 토큰은 다른 문자열로 변환 입가능, request 객체의 params 속성으로 전달됨<br>
    + 요청과 응답<br>
        + response 객체<br>
        ![response객체의기본메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/response%EA%B0%9D%EC%B2%B4%EC%9D%98%EA%B8%B0%EB%B3%B8%EB%A9%94%EC%86%8C%EB%93%9C.PNG)<br>
        + 데이터 제공<br>
            + send() 메소드 : 사용자에게 데이터 본문을 제공<br>
            + send 메소드는 가장 마지막에 실행해야 하며, 두번 실행할 수 없음<br>
        + Content-Type<br>
            + 서버가 Content-Type을 제공 : 웹 브라우저는 헤더를 확인, 제공된 데이터의 형태를 확인(MIME라는 문자열로 제공)<br>
            ![MIME형식](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/MIME%ED%98%95%EC%8B%9D.PNG)<br>
            + MIME 형식을 지정 : type() 메소드 사용<br>
            ![Content-Type지정메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/Content-Type%EC%A7%80%EC%A0%95%EB%A9%94%EC%86%8C%EB%93%B1.PNG)<br>
        + HTTP 상태 코드 : 404 Not Found<br>
            + 상태 코드 : 서버가 클라이언트에 '해당 경로는 이러한 상태'라고 알려 주는 용도<br>
            ![HTTP상태코드의예](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/HTTP%EC%83%81%ED%83%9C%EC%BD%94%EB%93%9C%EC%9D%98%EC%98%88.PNG)<br>
            + 상태코드를 지정 : status()메소드 사용<br>
            ![status()](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/status()%EB%A9%94%EC%86%8C%EB%93%9C.PNG)<br>
            + 리다이렉트 : 3XX, 특수한 상태 코드<br>
                + 웹 브라우저가 리다이렉트를 확인하면 화면을 출력하지 않고, 응답 헤더에 있는 Location 속성을 확인해서 해당 위치로 이동<br>
                + 특정 경로로 웹 브라우저를 인도할 때 사용<br>
                ![redirect()메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/redirect()%EB%A9%94%EC%86%8C%EB%93%9C.PNG)<br>
            + request 객체<br>
                + 요청 매개 변수<br>
                ![주소분석](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EC%A3%BC%EC%86%8C%EB%B6%84%EC%84%9D.PNG)<br>
        + 미들웨어<br>
            + 미들웨어 설정 메소드<br>
            ![미들웨어설정메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4%EC%84%A4%EC%A0%95%EB%A9%94%EC%86%8C%EB%93%9C.PNG)<br>
            + 정적 파일 제공<br>
            웹 페이지에서 변경되지 않는 요소(이미지,음악,자바스크립트 파일,스타일시트 파일 등)을 쉽게 제공<br>
            + morgan 미들웨어<br>
            express 모듈의 미들웨어로 사용할 수 있는 외부 모듈을 확인<br>
            > 로그 : 관련된 정보를 가진 글자<br>
            로드 출력 미들웨어 : 웹 요청과 관련된 내용을 출력하는 미들웨어<br>

            + body-parser 미들웨어<br>
                + 요청 본문을 분석함<br>
                + 클라이언트에서 서버로 데이터 전송<br>
                    + URL을 사용한 요청
                        + 'http://localhost:52273/books/:id' 형태로 라우트하면 :id 부분을 변경해서 데이터를 전달<br>
                        + URL에 요청 매개 변수를 입력하면, 추가적인 정보를 객체 형태로 전달<br>
                        + URL을 사용한 요청은 주소에 정보가 남는다는 단점이 있음, 쉽게 추적당해 문제 발생<br>
                        + 요청 본문 사용 : 주소에 기록을 남기지 않고 데이터를 전달 가능<br>
                    + 요청 본문<br>
                        + 클라이언트가 서버로 본문을 전달할 때 요청 본문의 종류를 함께 전달<br>
                        + MIME 형식<br>
                        ![요청본문의종류](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EC%9A%94%EC%B2%AD%EB%B3%B8%EB%AC%B8%EC%9D%98%EC%A2%85%EB%A5%98.PNG)<br>
                        + 클라이언트가 어떤 Encoding-Type으로 요청했는지 확인, 변환해서 읽음(복잡) -> body-parser 미들웨어 : 쉽게 처리<br>
                    + 속성 정리 : 클라이언트가 서버로 데이터를 전송하는 세가지 방법<br>
                        + params 객체 : URL의 토큰. 보기 간편<br>
                        + query 객체 : URL의 요청 매개 변수. 토큰보다 많은 데이터를 전달할 수 있으며 주소로 어떤 데이터가 오고 가는지 확인가능<br>
                        + body 객체 : 대용량 문자열 등을 전송할 때 사용. 주소에 데이터를 기록하지 못하므로 새로고침이나 즐겨찾기 기능 등을 활용할 수 없음<br>







## [05월 18일]
### <span style="color:red">Node.js 기본</span>
* 전역 변수<br>
    + 전역 변수, 전역 함수, 전역 객체 : 모든 곳에서 사용할 수 있는 것들<br>
        + __filename : 현재 실행 중인 코드의 파일 경로<br>
        + __dirname : 현재 실행 중인 코드의 폴더 경로<br>
    + process 객체의 속성과 이벤트<br>
        + process 객체 : 프로세스 정보를 제공하며 제어할 수 있게 하는 객체<br>
            + process 객체의 속성<br>
            ![process객체의속성](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/process%EA%B0%9D%EC%B2%B4%EC%86%8D%EC%84%B1.PNG)<br>
            + process 객체의 메소드<br>
            ![process객체의메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/process%EA%B0%9D%EC%B2%B4%EB%A9%94%EC%86%8C%EB%93%9C.PNG)<br>
            + Node.js의 이벤트 연결 메소드<br>
            ![Node.js의이벤트연결메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EC%9D%B4%EB%B2%A4%ED%8A%B8%EC%97%B0%EA%B2%B0%EB%A9%94%EC%86%8C%EB%93%9C.PNG)<br>
            + process객체의 이벤트<br>
            ![process객체의이벤트](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/process%EA%B0%9D%EC%B2%B4%EC%9D%98%EC%9D%B4%EB%B2%A4%ED%8A%B8.PNG)<br>
    + process 객체와 이벤트 개요<br>
        + 이벤트 매개 변수 : 이벤트 핸들러의 매개변수로 전달되는 매게변수<br>
        ```javascript
        process.on('exit',(code) => {
            console.log(`About to exit with code : ${code}`);
        });
        ```
    + os 모듈<br>
        + os 모듈 추출<br>
        ```javascript
        const os = require('os');
        ```
        + os 모듈의 메소드<br> 
        ![os모듈의메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/os%EB%AA%A8%EB%93%88%EC%9D%98%EB%A9%94%EC%86%8C%EB%93%9C.PNG)<br>
    + url 모듈<br>
        + url 모듈 추출<br>
        ```javascript
        const url = require('url');
        ```
        + url 모듈의 메소드<br>
        ![url 모듈의 메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/url%EB%AA%A8%EB%93%88%EC%9D%98%EB%A9%94%EC%86%8C%EB%93%9C.PNG)<br>
        > url 모듈을 추출하고 parse()메소드를 사용해야함
    + File System 모듈<br>
        + fs모듈 추출 방법<br>
        ```javasrcipt
        const fs = require('fs');
        ```
        + 파일 읽기<br>
            + 실행할 자바스크립트 파일이 있는 폴더에 textfile.txt 이름의 파일 생성<br>
            + 파일 읽기 메소드<br>
            ![파일읽기메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%ED%8C%8C%EC%9D%BC%EC%9D%BD%EA%B8%B0%EB%A9%94%EC%86%8C%EB%93%9C.PNG)<br>
            > 동기와 비동기의 실행 결과는 같지만 내부 실행 구조는 다름
            + 동기적으로 파일을 읽어 들일 때 코드 순서<br>
             ```javascript
                - 모듈 추출
                1. const fs = require('fs');
                - 파일 읽어 들이고 출력
                2. const file = fs.readFileSync('textfile.txt');
                3. console.log(file);
                4. console.log(file.toString());
                5. - 현재 단계 코드 종료
            ```
                파일의 크기가 크다면 2에서 3으로 이동할 때 코드가 정지할 가능성이 있음
                문제 해결을 위해 쓰레드 기능을 사용해야함
                Node.js에는 쓰레드의 기본 이념이 들어 있음
            + 비동기적으로 구성된 코드<br>
            ```javascript
                - 모듈 추출
                1. const fs = require('fs');
                - 파일을 읽어 들임
                2. fs.readFile('textfile.txt', (error, file) => {
                    - 출력
                    4. console.log(file);
                    5. console.log(file.toString());
                    6. - 현재 단계의 코드를 종료
                });
                3. -현재 단계의 코드를 종료
            ```
                2에서 3으로 이동하는 시간이 0초에 가까움
                즉, 코드는 진행하고 Node.js의 뒷단에서 파일을 읽어 들이는 처리가 수행됨
                이러한 뒷단에서 처리가 모두 끝나면 그때 콜백 함수 부분을 실행함
                콜백 함수의 첫 번째 매개 변수는 오류객체이고 두번째 매개 변수가 원하는 값임
            + 비동기 처리의 장점<br>
                1. 웹 서버를 C++ 프로그래밍 언어로 만들면 빠르지만 개발과 유지 보수는 어려움
                2. 자바스크립트 프로그래밍 언어는 C++, 자바보다 느리지만 Node.js를 사용하면 손쉽게 비동기 처리를 구현하여 빠른 처리 가능
        + 파일 쓰기<br>
            + 파일 쓰기 메소드<br>
            ![파일쓰기메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%ED%8C%8C%EC%9D%BC%EC%93%B0%EA%B8%B0%EB%A9%94%EC%86%8C%EB%93%9C.PNG)<br>
        + 파일 처리와 예외 처리<br>
             + 동기 코드 예외처리 : try catch 구문<br>
             + 비동기 코드 예외처리 : 콜백함수의 첫 번째 매개 변수 error을 활용<br>
    + 노드 패키지 매니저<br>
        + npm을 이용한 외부 모듈 설치<br>
            npm install<모듈이름>@<버전><br>
            > 명령어 뒤에 @ 기호를 사용하면 원하는 버전 설치 가능
    + request 모듈<br>
        웹 요청을 쉽게 만들어 주는 모듈로 외부 모듈임<br>
        + request 모듈 추출<br>
            ```javasrcipt
            const request = require('request');
            ```
    + cheerio 모듈<br>
         request 모듈로 가져온 웹 페이지는 단순한 HTML 문자열<br>
         여기서 원하는 정보를 추출해야 단순한 '데이터'가 '정보'가 됨 -> 파싱<br>
         cheerio 모듈 : 가져온 웹 페이지의 특정 위치에서 손쉽게 데이터 추출<br>
         + cheerio 모듈 설치<br>
         ```javascript
            npm install cheerio
         ```
         + cheerio 모듈 추출<br>
         ```javascript
            const cheerio = require('cheerio');
         ```
    + async 모듈<br>
        + async 모듈 설치<br>
        ```javascript
            npm install async
        ```
        + async 모듈 추출<br>
        ```javascript
            const async = require('async');
        ```
        + async 모듈의 parallel() 메소드<br>
            1. 문제 확인하기 : 비동기 처리를 많이 하면 '콜백 지옥'이 발생<br>
            > 콜백 지옥이란, 콜백 함수를 여러개 들여쓰기 하여 코드를 보기 힘든 상태를 의미함
            2. 문서 확인하기 : parallel() 메소드는 병렬 처리를 쉽게 할 수 있게 함<br>
            > parallel() 메소드 : 콜백 지옥 해결

### [05월 11일]
### <span style="color:red">표준 내장 객체2</span>
* Date 객체<br>
    + Date 객체 생성 방법<br>
    ![date객체생성방법](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/date%EA%B0%9D%EC%B2%B4%EC%83%9D%EC%84%B1%EB%B0%A9%EB%B2%95.PNG)<br>
    Month를 나타내는 '월'은 0부터 시작<br>
    + 메소드 활용<br>
    get OO()형태의 메소드와 set OO()형태의 메소드만 가짐<br>
    OO안에 들어가는 것들 -> FullYear, Month, Day, Hours, Minutes, Seconds등<br>

* Array 객체<br>
    + Array 객체의 메소드<br>
    ![Array객체메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/array%EA%B0%9D%EC%B2%B4%EB%A9%94%EC%86%8C%EB%93%9C.PNG)<br>
    <span style="color:red">tip.</span> Array객체 대부분은 자기 자신을 변경함<br>
* 조금 더 나아가기<br>
    + 프로토타입에 메소드 추가<br>
    프로토타입에 메소드를 추가하면 해당 자료형 전체에 추가할 수 있음<br>
    String 생성자 함수의 prototype 속성에 contain()메소드 추가<br>
    ![프로토타입에메소드추가](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EC%97%90%EB%A9%94%EC%86%8C%EB%93%9C%EC%B6%94%EA%B0%80.PNG)<br>
    화살표 함수 사용 X (익명함수에서 this는 자기 자신을 나타내지만 화살표함수에서의 this는 최상위 객체를 의미하기 때문에)<br>
    + JSON 객체<br>
    JSON이란 자바스크립트 객체를 사용한 데이터 표현 방법<br>
        + 몇가지 제약<br>
            1. 문자열은 큰따옴표로 만들어야함
            2. 모든 키는 큰따옴표로 감싸야함
            3. 숫자, 문자열, 불 자료형만 사용 가능<br>
    JSON 객체의 메소드<br>
    ![JSON객체의메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/json%EA%B0%9D%EC%B2%B4%EB%A9%94%EC%86%8C%EB%93%9C.PNG)<br>
### <span style="color:red">예외처리</span>
* 예외 : 실행에 문제가 발생하여 자동 중단, 이렇게 발생한 오류<br>
* 예외 처리 : 오류에 대처할 수 있게 하는 것<br>
+ TypeError 기본 예외 처리<br>
    1. 예외 상황 확인 : undefined 자료형을 일반적인 객체 또는 함수처럼 다루면 TypeError 예외 발생
    2. 기본 예외 처리 : 해당 데이터가 undefined인지 조건문으로 확인<br>
+ 고급 예외 처리<br>
    1. 예외 상황 확인 : 배열을 생성할 때 길이를 음수로 지정하면 RangeError 발생<br>
    2. 고급 예외 처리 : try catch finally 구문<br>
+ 예외 객체<br>
    + 어떤 예외가 발생했는지 정보 전달<br>
    + ReferenceError 후에 예외 객체의 name 속성과 message 속성 출력<br>
    ![예외객체](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EC%98%88%EC%99%B8%20%EA%B0%9D%EC%B2%B4.PNG)<br>
+ 예외 강제 발생<br>
    + throw 키워드 사용<br>
    + throw 키워드 뒤에는 문자열 또는 Error 객체 입력<br>
    + Error 객체를 사용하면 어떤 파일의 몇 번째 줄에서 예외가 발생했는지 확인 가능<br>



## [05월 4일]
### <span style="color:red">표준 내장 객체</span>
* 기본 자료형과 객체 자료형의 차이<br>
    + 기본 자료형 : 숫자, 문자열, 불<br>
Number, String, Boolean 생성자 함수를 사용해서 숫자, 문자열, 불을 만들 수 있음. 이때 typeof 를 사용하면 객체가 됨. 즉, 자료형인 object를 출력<br>
    + <span style="color:yellow">기본 자료형도 속성과 메소드를 가지고 있는 이유</span> -> 기본 자료형의 속성 또는 메소드를 사용할 때 기본 자료형이 자동으로 객체로 변환되기 때문<br>
> 차이점<br>
기본 자료형은 객체가 아니므로 속성과 메소드 추가 불가<br>

     기본 자료형에 속성 또는 메소드를 추가해도 기본 자료형에 추가하자마자 버림 

* Number 객체<br>
    + number 객체 생성 2가지 방법 <br>
![number객체생성](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/number%EA%B0%9D%EC%B2%B4%EC%83%9D%EC%84%B1.PNG)<br>
    + number 객체가 가진 메소드의 종류<br>
![number객체가가진메소드종류](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/number%EA%B0%9D%EC%B2%B4%EA%B0%80%EA%B0%80%EC%A7%84%EB%A9%94%EC%84%9C%EB%93%9C.PNG)<br>
<span style="color:red">tip.</span> toFixed(n)를 사용할때 원하는 소수점 자리의 개수를 n에 입력<br>
    + number 생성자 함수의 속성<br>
![number생성자함수의속성](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/number%EC%83%9D%EC%84%B1%EC%9E%90%ED%95%A8%EC%88%98%EC%9D%98%EC%86%8D%EC%84%B1.PNG)<br>

* String 객체<br>
    + String 객체 생성 두가지 방법<br>
![string객체생성2가지방법](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/string%EA%B0%9D%EC%B2%B4%EC%83%9D%EC%84%B1.PNG)<br>
    + String 객체는 length 속성을 가짐<br>
    + String 객체의 메소드<br>
    ![string객체메소드](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/string%EA%B0%9D%EC%B2%B4%EB%A9%94%EC%86%8C%EB%93%9C.PNG)<br>
   <span style="color:yellow"> '자기 자신을 변경하는 것'이 아니라 '변경된 값을 리턴하는 것'</span><br>
    + 메소드 활용<br>
        + 특정 문자 열이 있는지 알 수 있는 방법<br>
    indexOf('찾고자하는단어' >= 0) : 리턴값이 0보다 크면 단어가 있는 것이고 -1이라면 없다는 것<br>
        + 문자열 분해<br>
        split(',') 를 사용하면 ,이 있는 단어를 분해해서 출력 <Br>
        ![split메소드사용](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/split%EB%A9%94%EC%86%8C%EB%93%9C%EC%82%AC%EC%9A%A9.PNG)<br>





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
