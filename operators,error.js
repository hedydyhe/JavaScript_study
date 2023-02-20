// 논리연산자 Logical Operator
// && 논리곱 연산자 - 피연산자 모두가 true일 때 true 반환
const q = 3;
const w = 5;
console.log(q > 0 && w > 0); // q가 0보다 크고, w가 0보다 클 때만 true로 값 출력됨.

const trueTest = 'true' && 1;
console.log(trueTest); // 1 반환, 두 번째 피연산자가 반환된다.
false && 'Dog'; // false
'Dog' && false; // false

// || 논리합 연산자 - 피연산자 중 하나라도 true이면 true 반환
const e = 2;
const r = -2;
console.log(e > 0 || r > 0); // e가 0보다 크거나 r이 0보다 클 때 실행 = 하나 충족했기 때문에 ture로 값 반환

const trueTest2 = 'true' || '';
console.log(trueTest2); // 'true' 반환, 연산의 결과인 첫 번째 피연산자 반환
false || 'Dog'; // 'Dog'
'Dog' || false; // 'Dog'

// 피연산자를 타입변환하지 않고 반환 
// 단축평가 Short-Circuit evealuation: 표현식 평가할 때 결과가 확정되면 나머지 평가 생략함
const obj1 = { name: '수지' };
const obj2 = { name: '민수', pet: 'coco' };
function changePetName(person) {
  if (!person.pet) {
    throw new Error('난 아무것도 키우지 않아');
  }
  person.pet = '바뀐 펫 이름';
}
function makePetName(person) {
  if (person.pet) {
    throw new Error('펫 이름이 있어');
  }
  person.pet = '새로운 펫 이름';
}
obj1.pet && changePetName(obj1);
obj2.pet && changePetName(obj2);
console.log(obj1);
console.log(obj2);

obj1.pet || makePetName(obj1);
obj2.pet || makePetName(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined 아닌지 확인할 때
// const alarm = null;
// const value = alarm.value; // Error
const alarm = null;
const value = alarm && alarm.value;
console.log(value); // null

// 기본값 설정
function display(message) {
  const text = message || '안녕';
  console.log(text);
}
display(null); // 기본 값 반환

// 옵셔널 체이닝 연산자 Optional Changing Operator
// ?. : 좌항 피연산자가 null 이거나 undefiend이라면 undefiend 반환, 아니면 우항 참조
const done = null;
const values = done?.value;
console.log(values); // undefined

const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
}
const dogName = adventurer.dog?.name;
console.log(dogName); // dog가 없기 때문에 undefined 출력
// 참조가 null인 경우 오류를 발생하게 하지 않고, 반환 값으로 단락된다.

//null 병합 : ??
let num = 0; // false
console.log(num || '-1'); // (0이 출력되는걸 원하는데,) -1 
console.log(num ?? '-1'); // 0

// 왼쪽 피연산자가 null이면 undefined출력하고, 그렇지 않으면 반환한다.
const foo = null ?? 'default string';
console.log(foo); // 'default string'

// Error 에러
try {
  throw new Error("에러 발생");
} catch (error) {
  if (error instanceof EvalError) {
    alert(error.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    alert(error.name + ": " + e.message);
  }
}

console.log('[strat]');
try {
  err();
} catch (error) {
  console.log('[에러발생]', error);
} finally {
  console.log('[finally]')
} // 앱이 종료되지 않고 에러 메시지만 전달하여 코드 실행 할 수 있다.
console.log('[end]');

try {
throw new Error('newError'); // throw문에 객체를 생성해야 에러 발생
} catch (error) {
  console.log(error);
} 

const repeat = (a, b) => {
  if (typeof b !== 'function') throw new TypeError('b는 함수여야 한다.');
  for (let i = 0; i < a; i++) {
    b(i);
  }
};
try {
  repeat(1, 2);
} catch (error) {
  console.log(error);
} // 두번째 b가 함수가 아니기 때문에 오류메시지 출력

// Error 전파
const err1 = () => {
  throw Error('err2에서 에러 발생');
}
const err2 = () => {
  err1();
}
const err3 = () => {
  err2();
}
try {
  err3();
} catch(error) {
  console.log(error);
} // err3 호출 => err2 호출 => err1 호출 => 에러 throw

// 모듈 Module
// html 파일 <body>에 <script type = "module" src ="javascript1 파일명"></script>
// <script type = "module" src ="javascript2 파일명"></script>
// javascript1
const a = 'apple';
console.log(a); // apple
// javascipt2
console.log(a); // 모듈 내 식별자는 외부에서 참조할 수 없음.

// javascript1
export const b = Math.E; // 변수 공개
export function square(y) { // 함수 공개
  return y * y;
} 
export class Student { // 클래스 공개
  constructor(name) {
    this.name = name;
  }
}
export { E, square, Student }; // 객체로 묶어서 공개

// javascript2
import { E, square, Student } from 'javascrip1';
console.log(E);
console.log(square(20));
console.log(new Student('kim'));