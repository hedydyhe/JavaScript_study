// 비동기 처리 Asynchronous
// 기본적으로 함수를 호출하면 호출된 순서대로 실행되며, 엔진은 하나의 실행컨텍스트 스택을 가짐.
const a = () => {};
const b = () => {};
a();
b();

// 실행 중인 태스트가 종료되지 않더라도 다음 태스크 실행하는 것 = 비동기처리
function timeout() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 2000);
  console.log('3');
}
timeout(); // setTimeout을 사용하여 비동기적으로 진행

function delayPlay(callback, seconds) {
  if (!callback) {
    throw new Error('콜백함수를 전달하세요.');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds를 양수로 입력하세요.');
  }
  setTimeout(callback, seconds * 1000);
}
try {
  delayPlay(() => {
    console.log('완료되었음');
  }, 3);
} catch(error) {
}

// 프로미스 Promise
// promise 객체 : 비동기 코드가 실행될 때 결과와 결과 값을 나타냄
/**
 * pending 대기 : 실행하지도, 실행하지 않지도 않은 초기 상태
 * fulfilled 이행 : 연산이 성공적으로 완료된 상태
 * rejected 거부 : 연산이 실패한 상태 
 * 이행이나 거부될 때 then 메서드에 의해 처리기가 호출된다.
 */
 let myPromise = new Promise(resolve, rejext) => {
  setTimeout(function () {
    resolve("success!")
  }, 3000)
})

myPromise.then((successMassage) => {
  console.log(successMassage)
});

function getStudent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('학생');
    }, 2000);
  });
}
function getTeacher() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('선생님');
    }, 2000);
  });
}
function getParents() {
  return Promise.reject(new Error('no parents'));
}

getStudent()
.then((student) => getTeacher()
.then((techer) => [student, techer])
)
.then(console.log);

// Promise.all : 모든  promise를 한번에 병렬적으로 실행
Promise.all([getStudent(), getTeacher()])
.then((school) => console.log('all', school));
// Promise.race
Promise.race([getStudent(), getTeacher()])
.then((school) => console.log('race', school));

// async, await
async function fetchSchool() {
  const student = await getStudent();
  const teacher = await getTeacher();
  return [student, teacher];
}
fetchSchool()
.then((school) => console.log(school));

// JSON(JavaScript Object Notation) : 오브젝트 텍스트로 변환
const jisu = {
  name: 'jisu',
  country: 'korea',
  sleep: () => {
    console.log('sleep');
  },
};
// Serializing 객체를 문자열로
const joson = JSON.stringify(jisu);
console.log(jisu);
console.log(json);
// Deserializing 문자열을 객체로
const object = JSON.parse(json);
console.log(object);

// 스코프 Scope: 매개변수를 참조할 수 있는 유효한 범위
function add(a, b) { // 함수내부에서만 참조할 수 있음
  console.log(a, b);
  return a + b;
}
add(1, 3);
console.log(a, b);// Error 외부에서 내부 함수의 매개변수를 참조할 수 없음

// 동일한 식별자 다른 스코프 => 별개의 변수
const x = 'global'; // 전역 스코프(변수)
function code() { // 지역 스코프(변수)
  const x = 'logical';
  console.log(x);
}
code();
console.log(x);

// var 키워드 변수 중복선언이 되기 때문에 주의해야 함
function code2() {
  var x = 1;
  var x = 2;
  console.log(x); // 2
}
code2();

// 렉시컬 스코프 Lexical Environtment
// 호출 위치에 관계없이, 함수의 정의를 어디서 했는지에 따라 상위 스코프 결정함.
const c = 0;
function abc() {
  const c = 1;
  abc();
}
function def() {
  console.log(x);
}

// 호이스팅 Hoisting: 선언과 초기화를 분리하여 선언만 코드의 최상위에 둔다.
disply();
function disply() {
  console.log('Hi!');
}
// 변수, 클래스는 선언만 호스팅, 초기화는 안됨.
console.log(hello);
const hello = 'hello'; // 초기화 되지 않아서 error

const d = 100;
{
  console.log(d);
  const d = 2; // 블럭 안에서 선언하고 할당한 표현식도 역시 초기화를 해야 호출할 수 있다.
}

// Strict mode 엄격모드
// 기존에 무시되던 에러들을 throwing하고, 실수나 버그들을 바로 잡을 수 있음
// 전체 스크립트, 부분함수에 적용가능하지만, {} 묶어진 블럭문에는 적용되지 않음.
'use strict'; // 맨 위에 작성하면 스크립트 전체 strict mode
function strict() {
  a = 10;
}
strict(); // error

function strict2() {
  'use strict'; // 함수블럭 몸체 맨 위에 작성하면 해당 함수, 중첩된 함수에 적용
  a = 10;
}
strict2(); // error

function strict3() {
  a = 10;
  'use strict'; // 코드 맨 위에 작성하지 않으면 동작하지 않기 때문에 정상적으로 a가 호출된다.
}
strict3(); 

'use strict';
var v = 1;
delete v; // 키워드를 삭제하면 오류발생!