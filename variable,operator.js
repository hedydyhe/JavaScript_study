// 변수 Variable : 숫자, 문자열 같은 데이터의 값을 저장하는 공간이다.
// 변수 선언하기
let today; //변수 이름만 입력한 경우, undefined 값 도출.
let myName;

// 변수 초기화하기
today = 230106;
myName = 'Hedy';
let yesterday = 20230105; // 변수를 선언하는 동시에 초기화할 수 있음.

// 변수 재할당하기 
today = 230107;
myName = 'Jinger';

/** 변수 이름 짓는 규칙
 * 직관적이고, 구체적인 이름으로 짓기.
 * 라틴문자(0-9, a-z, A-Z), 밑줄문자(_) 사용 가능.
 * 여러 단어를 연결할 때는 camelCase를 사용하여 소문자로 시작해 다음 단어를 대문자로 사용.
 * 변수는 대소문자를 구분함. 
 * ❌ 시작부분에 밑줄이나 숫자 사용금지, 예약어 사용금지!(var, function, let, for 등)
 * */ 

// 변수의 종류(데이터타입) 

// 원시타입(number, string, boolean, null, undefined, Symbol)
// 숫자
let myHeight = 157;
let todayTemperature = -2;
let pi = 3.14;

console.log(0 / 100); // 0
console.log(100 / 0); // Infinity
console.log(100 / -0); // -Infinity
console.log('안녕하세요'); // NaN(Not a Number)

// 긴 숫자를 나타낼 때는 BigInt를 사용하여 맨 뒤에 'n'을 붙인다.
let bigInt = 100410041004110441004104040n;

// 문자열 string - 작은따옴표(')나 큰따옴표(")로 묶어야 한다.
let hello = '안녕하세요';
hello = '"안녕"';
hello = `안녕하세요\n저는\nHedy입니다!`; // 이스케이프 표현
let name = 'Hedy';
hello = `"안녕 + name + \n 반가워!"`; // 템플릿리터럴 사용

// 지정되지 않은 타입도 따옴표 안에 들어가면 숫자여도 문자열로 인식한다.
let myWeight = '50'; // 문자열로 인식

// Booleans 불리언 : true나 false 값을 가져서 참/거짓을 표현함.
let alive = true;
let guess = 6 < 3; // '작다'를 나타내는 연산자를 활용함. 결과 값 = false

// boolean 타입의 값
console.log(!!0); // false
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!1); // true
console.log(!!'안녕');
console.log(!!Infinity);
console.log(!!{});

// 객체 (복합데이터): object(array), function
// 배열 : 대괄호([])로 묶으며 쉼표로 구분하는 단일 객체이다.
let myNameArray = [ 'Hedy', 'Lily', 'Effy'];
myNameArray[0]; // 개별 값에 접근할 수 있음.

//객체 object: 데이터를 모아서 보관
let cat = {
  name : 'Jinger',
  color : 'white'
}
cat.name // 객체에 저장된 정보 검색하는 법. 결과 값 =Jinger

let dog = cat;
dog.name = 'chily';
console.log(cat.name); // 'chily'로 변경 =>객체는 참조 값(메모리주소)가 할당되기 때문이다.

// 동적 타이핑
// JavaScript는 동적인 언어로 정적인 언어와 달리 변수의 데이터유형을 지정할 필요가 없다. 할당된 값에 따라 타입이 변한다.
let todayTime = '22';  
typeof todayTime;  // 숫자여도 문자열로 인식
todayTime = 22; 
console.log(typeof todayTime); // 숫자로 인식 Number

// const : 선언할 때 초기화를 해야 하며, 새 값을 할당할 수 없다.
let account; 
account = 2; // let은 초기화 하지 않고, 변수 선언 가능하며 재할당도 가능하다.
//const account; 초기화를 하지 않아 오류발생
//account = 2; 재할당도 불가능

// 상수 const 대문자를 사용
const MAX_TICET = 10;

//주의! const는 동일한 값의 이름을 지정해야 하지만, 값의 내용은 변경할 수 있다.
const bird = {
  name: '참새'
};
bird.name = '비둘기'; //객체의 내용 변경하더라도 동일한 객체 가리키고 있기 때문에 변경가능.


// 연산자 Operators
// 리터럴(literal) : 값을 나타냄, 문(Statement): 코드 한줄로 실행단위
// 표현식(Expressions) : 값으로 평가되는 문

//산술연산자  Arithmetic operators
// 더하기 +, 빼기 -, 곱하기 *, 나누기 /, 나머지 %, 지수(거듭제곱) ** 
const num1 = 20;
const num2 = 30;
9 * num1; // 180
num1 ** 3; // 8000
num2 / num1; // 1.5
5 + 10 * 3; // 35
console.log(5 ** 2); //25

// 연산자의 우선순위
num2 + num1 / 8 + 2; // num1에 8을 나누고, num2 + 2.5 + 2 = 34.5
(num2 + num1) / (8 + 2); // 임의적으로 연산 순위를 바꾸고 싶다면 괄호() 안에 넣으면 우선순위 된다.

// 증가 및 감소 연산자
let num = 2;
num = num + 1;
num++; // 위 코드와 같은 의미의 표현
console.log(num); // 2 + 1 = 3 + 1 = 4 

// 위치에 따라 값이 달라진다.
num = 0;
let num3 = num++; // 0 => 연산을 먼저 한 후 값을 증가시키기 때문이다.
console.log(num); // 1
num3 = ++num; // 0 + 1 = 1 => ++num 연산자를 앞에 배치하면 변수를 증가한 다음에 할당하기 때문에 증가값이 나옴.

// 할당 연산자 Assignment Operators
let b = 3; 
let c = 4;
a = b; // 이제 a와 b가 같은 값이기 때문에 4가 된다.
/**
 *  += : 왼쪽 값 + 오른쪽 값 = 새변수 값 
 *  -= : 왼쪽 값 - 오른쪽 값 = 새변수 값
 * *= : 왼쪽 값 * 오른쪽 값 = 새변수 값
 * /= : 왼쪽 값 / 오른쪽 값 = 새변수 값
 */
a += 2; // 3+2 = 5
a -= 2; // 3
a *= 2 // 6
a /= 2 // 3

/** 비교 연산자 
 * == 값이 동일
 * != 값이 동일하지 않음
 *  === 값과 타입이 동일
 * !== 값과 타입이 같지 않음
 * < 왼쪽 값이 오른쪽 값보다 작음
 * > 왼쪽 값이 오른쪽 값보다 큼
 * <=, >= 작거나 같음, 크거나 같음
 */ 
console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(5 === 2 + 4); // false
console.log(2 === '2'); // false 넘버로 인식되어 2가 된다해도 문자열이기 때문에 타입이 같지 않음.
console.log(5 !== 2 + 4); // true 같지 않다는 연산자가 옳음
console.log(6 < 10); // true 
console.log(20 >= 10); // true

const melon = {
  type: 'fruit',
}
const lemon = {
  type: 'fruit',
}
console.log(melon == lemon); // false 메모리주소가 다르기 때문에 값이 다르다.
console.log(melon.type == lemon.type); // true 
let mango = lemon;
console.log(mango === lemon); // true 메모리 값이 같아지기 때문이다.

// 단항연산자 Unary Operators
// +(양), -(음), !(부정)
let e = 10;
e = -e; // -10
e = -e; // -10 *-10 = 10
let boolean = false;
console.log(!boolean); // false를 부정하기 때문에 true
console.log(!!boolean); // false !!는 불리언으로 변환할 때 사용하기도 한다.

// + 숫자 타입으로 변환할 때 사용하기도 한다.
console.log(+true); // 1
console.log(+null); // 0
console.log(+'안녕하세요'); // NaN
console.log(+undefined); //NaN