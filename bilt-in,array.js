// 빌트인 객체 bilt-in
// 표준빌트인 객체 Standard bilt-in
const string = new String('안녕하세요');
console.log(typeof string); //object
const number = new Number(123);
console.log(typeof number);
const boolean = new Boolean(true);
console.log(typeof boolean);
const fun = new Function('x', 'return x * x');
console.log(typeof fun); // function
const arr = new Array(1, 2, 3, 4, 5);
console.log(typeof arr);

// 래퍼 객체 Wapper : 값에 객체처럼 접근하면 임시객체 생성
const hello = 'hello'; // 문자열이 객체처럼 동작
console.log(hello.length); // 5
console.log(hello.toUpperCase()); // HELLO
console.log(typeof hello); // String의 메서드 상속받음.

const num = 1.23;
console.log(num.toFixed()); // 숫자가 Number 객체로 변환
console.log(typeof num, num); // number, 1.23

// 전역 객체
console.log(globalThis);
console.log(NaN);
console.log(undefined);
eval('const a = 1 + 5; console.log(a)'); // 문자열 안에 코드가 들어가서 표현식이라면 값이 반환
console.log(isFinite(Infinity)); // 유효한지 확인
console.log(parseFloat('1.45')); // 문자열을 숫자로 출력
console.log(parseInt('1.45')); // 숫자를 정수로 변환
const isFalse = new Boolean(false);
console.log(isFalse.valueOf()); //false

const URL = 'https:// 네이버.com';
const encoded = encodeURI(URL);
console.log(encoded); // URL을 아스키문자로 변환
const decoded = decodeURI(encoded);
console.log(decoded);
const partCode = '네이버.com';
console.log(encodeURIComponent(partCode));

// Number 객체
const x = 0.1, y = 0.2, z = 0.3;
let equal = (Math.abs(x + y - z) < Number.EPSILON); // 가장작은 숫자 true
console.log(equal);

const num2 = 130.533;
console.log(Number.MAX_SAFE_INTEGER); // 안전한 최대 정수 값
console.log(Number.MAX_VALUE); // 정수에서 가장 큰 값
console.log(num2 === Number.NaN); // 숫자인지 아닌지
console.log(num2.toExponential()); // 지수로 표현
console.log(num2.toFixed());
console.log(num2.toString());
console.log(num2.toLocaleString('ara-la')); 
console.log(num2.toPrecision(3)); // 자릿수 만큼 반올림

// Math
console.log(Math.E);
console.log(Math.PI);
console.log(Math.abs(-10)); // 절대 값
console.log(Math.ceil(1.23)); // 소수점 이하 반올림
console.log(Math.floor(1.23)); // 내림
console.log(Math.round(1.53)); // 반올림
console.log(Math.trunc(1.23)); // 정수만 반환
Math.max(1, 4, 6, 9); // 최대 값 찾기
Math.min(1, 4, 6, 9);
Math.pow(); // 거듭제곱
Math.sqrt(); // 제곱근
console.log(Math.floor(Math.random() * 10 + 1)); // 랜덤한 숫자 정수로 반환

// String
const helloWorld = 'Hello, world!';
console.log(helloWorld.charAt(0)); // 0번째 인덱스 'H'
console.log(helloWorld.length); // 문자열의 길이
console.log(helloWorld.indexOf('l')); // 몇번째 인덱스
console.log(helloWorld.includes('He')); // 문자열에 포함하는지 
console.log(helloWorld.toUpperCase()); // 문자열 모두 대문자로 변환
console.log(helloWorld.slice(2)); // 문자열 2번째 인덱스부터 삭제

const space = '     Hello, World!   ';
console.log(space.trim()); // 공백제거
console.log(space.split('     ')); // 문자열 끊음

// Date
console.log(new Date());
const now = new Date();
console.log(now.getFullYear()); // 연도 받아옴
console.log(now.getDate());
console.log(now.getHours());

// 배열 Array
// 생성
let array = new Array(3); // 3의 아이템이 들어있는 배열
console.log(array); 
array = new Array(1, 2, 3, 4, 5); // 배열 아이템을 직접 전달 가능
console.log(array); 
array = Array.of(1, 2, 3); // static 함수
console.log(array);
let array2 = [1, 2, 3, 4, 5, 6];
array = Array.from(array2); 
console.log(array);

// 배열 참조
const animals = ['호랑이', '사자', '너구리', '토끼', '오소리'];
console.log(animals[3]); // animals 인덱스 안에 있는 아이템 참조
console.log(animals.length);
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// 배열의 함수
console.log(Array.isArray(animals)); // 배열인지 확인
console.log(animals.indexOf('너구리'));
console.log(animals.includes('오소리'));

// 기존의 배열을 수정
let length = animals.push('코끼리'); // 뒤에 추가 
console.log(animals);
length = animals.unshift('고슴도치'); // 앞에 추가
console.log(animals);
length = animals.pop(); // 뒤에 아이템 제거
console.log(animals);
length = animals.shift(); // 앞에 아이템 제거
console.log(length);

// 새로운 배열로 만듬
let newarray = animals.slice(0, 1);
console.log(newarray);
// 배열 여러개를 하나의 배열로 만듬
const array3 = ['안', '녕'];
const array4 = ['반', '가', '워'];
const array5 = array3.concat(array4);
console.log(array5);
const array6 = array5.reverse();
console.log(array6); // 기존 순서의 반대의 배열을 만듬
// 중첩 배열 하나로 만듬
let arr1 = [
  ['사과', '바나나'], ['망고', ['태국망고', '필리핀망고']],
];
console.log(arr1.flat(2)); // 중첩된 배열 하나의 배열로 풀 수 있음
arr1.fill('과일');
console.log(arr1); // '과일' 이라는 값으로 배열 채우기

// 고차함수
animals.forEach(function(value) {
  console.log(value);
});

const food1 = { name: 'pasta', price: 10 };
const food2 = { name: 'pizza', price: 13 };
const food3 = { name: 'chicken', price: 15 };
const foods = [food1, food2, food3];
let result = foods.find((food) => food.name === 'pizza');
console.log(result);
result =  foods.findIndex((food) => food.name === 'pizza');
console.log(result); // 조건에 맞는 첫번째 인덱스를 출력
result = foods.some((food) => food.name === 'pizza');
console.log(result); 
result = foods.every((food) => food.name === 'pizza');
console.log(result); 
result = foods.filter((food) => food.name === 'pizza');
console.log(result); 


// Map 
const numbers = [ 1, 4, 5, 8 ];
const map1 = numbers.map(x => x  * 2); // 기존배열을 참고하여 새로운 배열 만듬
console.log(map1);

const add = numbers.map(function(num) {
  return num++;
});
console.log(add);

const arr2 = [{key:1, value:10},
{key:1, value:20},
{key:3, value:30}];
const arrayAll = arr2.map(function(obj) {
  const arrobj = {};
  arrobj [obj.key] = obj.value;
  return arrobj;
});
console.log(arrayAll); // 배열 안에 객체 만듬
console.log(arr2);

// flatMap
result = ['Hello', 'world'].flatMap((text) => text.split(''));
console.log(result);

// sort
const text = ['def', 'abc', 'ghi'];
text.sort();
console.log(text)

const num = [10, 1, 4, 40, 5, 50]
num.sort((a, b) => a - b);
console.log(num);

// reduce
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);