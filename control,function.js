// 조건문 if, if else, if else if else
// if (조건) {조건이 true일 때 코드실행}
// if (조건) {코드(조건이 true여야 실행 됨)} else {코드(조건이 false일 때 실행 됨)}
// if (조건1) {조건1이 true} else if (조건2) {조건2가 true} else {조건1과 2가 모두 아닐때}

// mission : '쇼핑하는 것을 도와주면 원하는 장난감 살 수 있도록 용돈을 더 줄께' 실행하기
let shoppingDone = true;
if (shoppingDone === true) {
 console.log('10달러');
} else {
  console.log('없음');
}

let sound = 'Background';
if (sound === 'Background') {
  console.log('배경음악이다');
} else if (sound === 'wind') {
  console.log('바람소리이다');
} else {
  console.log('어떤 소리인지 구별되지 않음');
}

 // 삼항연산자
 // 조건식 ? 코드1 : 코드2 -> true라면 코드1 실행, false라면 코드2 실행한다는 문을 간단하게 표현
 sound === 'Background' ? console.log('배경음악') : console.log('구별불가능');
 let test = sound === 'Background' ? '배경음악' : '구별불가능';
 console.log(test);

/** 논리 연산자
 * && 그리고
 * || 또는
 * ! 부정연산자
 * !! 불리언 타입으로 변환
 */
let choice = 'sunny';
let temperature = 80;
 if (choice === 'sunny' && temperature < 86) {
   console.log('eating');
  } else {
    console.log('Dont')
  }
 // 'sunny'를 선택하고, 온도가 86미만일 때 'eating'이 실행되고, 아니면 'Dont'가 나온다.
 if (!(choice === 'sunny' && temperature < 86)) {
 } 
 // 소괄호 안에 있는 문이 true가 되더라도 부정연산자 !가 false로 만든다.

 // switch 문 : 변수를 특정 값으로 설정하거나 조건에 따라 특정 명령문을 출력하게 하기 위해 쓰임
 let month = 5;
 let monthName;
 switch (month) {
   case 1:
     monthName = '1월'
     break;
   case 2:
     monthName = '1월'
     break;
   case 3:
     monthName = '3월'
     break;
   case 4:
     monthName = '4월'
     break;
   case 5:
     monthName = '5월'
     break;
   case 6:
     monthName = '6월'
     break; // 이전 선택이 조건에 일치하면 코드 실행을 중지시킴.
   default:
     console.log('해당하는 월이 없음'); // 나열된 조건에 해당하는 값이 없다면 default 값을 출력
 }
 console.log(monthName);

 let weather = 'clear'; 
 let text;
 switch (weather) {
   case 'sunny':
   case 'clear':
   text = '좋음';
   break;
   case 'hot':
   case 'rainy':
   text = '별로';
   break;
 }
 console.log(text);

// 반복문 loop : 같은 것을 계속 반복
for (let i = 0; i < 20; i++) {
  console.log(i);
} 
// i의 값을 0으로 초기화, i는 100보다 작은 것을 조건으로 한 값 출력 = 0
// 그 다음 증감해서 0 + 1 = 1이 100보다 작으니까 true
// 결과 값이 false가 될 때까지 반복

// 반복문 제어 : break; continue
for (let i = 0; i < 30; i++) {
  if (i === 10) {
    continue; // continue 아래 코드는 무시되고, 10이 되면 바로 그 다음 반복으로 넘어 간다.
    console.log('드디어 10이 되었다!'); 
    break; // 10이 될 때 풀루프를 그만하고 싶으면, break; 사용가능
  }
  console.log(i);
}

// while (조건) { } - 조건이 false가 될 때까지 출력
let number = 3; // 변수 선언 및 값 할당 외부에서 만듬
while (number >= 0) {
  console.log(number);
  number--;
} 

// do while
let activate = false;
do {
  console.log('until');
} while (activate); // 일단 실행되어 값이 출력되고, 조건이 false면 더 이상 실행되지 않음.


// 함수 Function : 함수가 정의된 블록 내부에 코드를 필요할 때마다 명령하여 호출할 수 있음.
// 함수를 정의해도, 호출하지 않으면 출력되지 않기 때문에 호출해줘야 한다.
function name() { // 함수이름 (매개변수) {실행될 코드};
  return;
}; 
// return은 기본값 외의 값을 반환되며 기본 반환 값은 undefined

// function name (매개변수) { }
function hello(name = 'Chris') {
  console.log(`Hello ${name}`);
}
hello('Hedy'); // Hello Hedy가 출력 됨
hello(); // Hello Chris가 출력 됨
// 매개변수는 선택사항이기 때문에 지정할 필요가 없을 때도 있음.

function double(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments); // 매개변수가 arguments에 저장되어 호출하면 배열로 반환됨.
  return a*b;
}
double(1, 2, 3);

function sum(...manyNumbers) {
  console.log(...manyNumbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20); // 배열로 표시 [ 1, 2, 3, 4, 5, 6, 7, 8, ...]

// IIFE 선언: 즉시 실행
(function () {
  alert('hello');
}) 

// 화살표 함수 : const name = ( ) => { }라는 대체형식을 사용할 수 있음.
multiply = (a, b) =>{
  return a * b;
}
console.log(multiply(1, 2));

// 함수 반환 값 : 함수가 완료될 때 반환하는 값
const myText = "Hello my name is Hedy";
const newString = myText.replace("Hedy", "Chris"); // myText에서 호출 매개변수 전달
console.log(newString); 

// 콜백기능 callback function: 다른 함수에 인수로 전달된 함수
function hello(name = 'Chris') {
  console.log(`Hello ${name}`);
}
function UserInput(callback) {
  const name = prompt("please enter your name");
  callback(name);
}
UserInput(hello);

function guess(max, action) {
  for (i = 0; i < max; i++){
   action(i); 
  }
}
function log(n) {
  console.log(n);
}
function doubleLog(n) {
  console.log(n * 2);
}
guess(4, (n) => console.log(n));
guess(3, (n) => console.log(n * 2));