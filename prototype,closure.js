// 프로토타입 Prototype 상속으로 불필요한 중복제거
// 객체지향프로그램은 상태와 동작을 하나로 묶어서 생각, 객체가 가지고 있는 [[Prototype]]은 객체 상속을 위해 사용된다.
// 객체는 [[Prototype]]이라는 은닉 private 속성가지는데, 프로토타입이 되는 다른 객체를 가리킴
let fun= function () {
  this.a = 1;
  this.b = 2;
}
let func = new fun(); // func 객체는 a, b 속성을 가짐
fun.prototype.b = 3;
fun.prototype.c = 4;
// func.[[prototype]]은 b, c 속성을 가짐

console.log(fun.a); // 1 출력 = fun이 a 속성 가지고 있음
console.log(fun.b); // 2 출력 = fun이 b 속성가지지만, 프로토타입은 값을 쓰지 않음 = 메소드 오버라이딩
console.log(fun.c); // fun은 c 속성을 가지지 않고, fun.[[prototype]]은 가지기 때문에 값 4 출력
console.log(fun.d); // fund은 d속성을 가지지 않고, 프로토타입도 가지지 않기 때문에 = null , undefined

function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
}
const circle = new Circle(2);
const circle1 = new Circle(3);
console.log(circle.getArea());
console.log(circle1.getArea());

// 모든 객체 '__proto__' [[Prototype]] 접근 가능
const object1 = {};
const objects = { a: 1 };
object1.__proto__; // getter 함수 
object1.__proto__ = objects; // setter 함수로 프로토타입 교체
console.log(object1.a);

// Property Descriptor 
const cat = { name: '야옹이', age: 3 }
const descrips = Object.getOwnPropertyDescriptors(cat);
const descrip = Object.getOwnPropertyDescriptor(cat.name);
Object.defineProperty(cat, 'name', {
  value: '고양이',
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(cat.name); // '고양이'
console.log(Object.keys(cat)); // [age]
delete cat.name; // 삭제 불가

// 오버라이딩: 상위 클래스의 메서드를 하위 클래스가 재정의
const Student = (function () {
  function Student(name) {
    this.name = name;
  }
  Student.prototype.sayHi = function() {
    console.log('Hello, ${this.name}');
  }
  return Student;
}());
const me = new Student('Kim');
me.sayHi = function () {
  console.log('Hello, I am ${this.name}');
}
me.sayHi();
// instanceOf
console.log(me instanceof Student);

let i = {
  a: 2,
  b: function(c) {
    return this.a + 1; // 상속함수 실행 = this 변수가 상속된 오브젝트 가리킴
  }
};
console.log(i.b); // this는 o를 가리키기 때문에 3출력

let p = object.create(i); // 프로토타입을 o로 가지는 p
p.a = 10; // p에 새로운 a 속성 추가
console.log(p.b()); // this는 p를 가리키기 때문에 o함수는 b를 상속받아, this.a는 p의 속성 a가 됨

// class 키워드 이용해서 객체 만드는 것은 프로토타입 기반으로 한다.
class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}
class Dog extends Animal {
  play() {
    console.log('together playing');
  }
}
class Cat extends Animal {
  scratch() {
    console.log('😾');
  }
}

// 프로토타입 상속 종류
// 위임형 상속(Delegation inheritance)
class furniture {
  constructor(name) {
    this.name = name || 'desk';
  }
  chair () {
    return `This is my chair and ${this.name}`;
  }
}
const sofa = new furniture('sofa');
const table = sofa.table();
console.log(table); // This is my chair and sofa.

// 연결형 상속 (Concatenative inheritance)
const proto = {
  hello: function hello() {
    return `Hello, my name is ${ this.name }`;
  }
};

const george = Object.assign({}, proto, {name: 'George'});
const msg = george.hello();
console.log(msg); // Hello, my name is George

// 동결시키는 함수 Object.freeze
const tree = { name: 'bigTree'}
const apple = { name: '사과', emoji: '🍎', from: tree}
Object.freeze(apple);
apple.name = '망고'; // 수정불가
apple.sugar = 5; // 추가불가
delete apple.name; // 삭제불가
tree.name = 'middleTree'; // 얕게 동결시키기 때문에 변경가능

// 밀봉시키는 함수 Object.seal
const mango = { name: '애플망고', emoji: '🥭'};
Object.assign(mango.apple); // 객체를 복사할 수 있음
Object.seal(mango); 
mango.name = '망고'; // 수정가능
delete mango.emoji; // 삭제불가

// 확장을 금지하는 함수 Object.preventExtensions
const lemon = { name: '레몬' }
Object.preventExtensions(lemon);
console.log(Object.isExtensible(lemon)); // 확장불가능
lemon.name = '신레몬'; // 수정가능
delete lemon.name; // 삭제가능
lemon.emoji = '🍋'; // 추가불가능

// Closures 클로져: 함수와 그 함수가 선언된 렉시컬 환경과의 조합, 함수의 내부가 외부 상태에 접근할 수 있는 권한
const x = 1;
function outer() {
  const x = 10;
}
function inner() {
  console.log(x); // 10 외부함수 outer의 x변수 접근가능
}
outer();

// 렉시컬 스코프: 함수를 어디서 호출했는지가 아닌, 어디에 정의했는지에 따라 상위 스코프 결정
const y = 1;
function outer() {
  const y = 10;
  inner();
}
function inner() {
  console.log(x); 
}
outer();
inner(); 

// 캡슐화, 정보은닉
function numberCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}
const increase = numberCounter();
increase();

// 최근 JavaScript는 class 자주 사용
class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();

// 비엄격모드에서는 항상 객체 참조, 엄격모드에서는 어떠한 값이든 가능
// 전역 문맥
console.log(this === window); // 웹브라우저 - window객체가 전역객체
a = 40;
console.log(window.a); // 40
this.b = "MDN";
console.log(window.b); // "MDN"
// globalThis프로퍼티는 실행중인 컨텍스트와 상관없이 항상 전역 객체 얻을 수 있음

// 함수에서 this 값 호출 
function funct() {
  // "use strict" 엄격모드의 this는 실행문맥에 진입, 설정된 값 유지 = undefined
  return this;
}
funct() === window; // 웹 브라우저
funct() === global; // 노드환경
funct() === undefined;

// bind method 호출하면 코드 범위를 가지지만, this는 새로운 함수 생성 bind()의 첫번째 매개변수
function binding () {
  return this.a;
}
let g = binding.bind({a: 'hello'});
console.log(g()); // 'hello'
let h = binding.bind({a: 'HI'}); // bind는 한번만 동작
console.log(h()); // 'hello'
let z = {a: 40, binding: f, g: g, h: h};
console.log(z.a, z.binding(), z.g(), z.h()); // 40, 40, hello, hello

// 화살표 함수 this를 감싸는 정적 범위
let globalObject = this;
let obj3 = (() => this);
console.log(obj3() === globalObject); // true

// 객체의 메서드로 호출: this 그 객체의 값 사용
let p = { prop: 40};
function independent() {
  return this.prop;
}
p.f = independent;
console.log(p.f()); // logs 40

// 객체의 프로토타입에서의 this
let y = {
  f: function() { return this.a + this.b;}
};
let v = object.create(y);
v.a = 1;
v.b = 4;
console.log(v.f()); // 5

// 접근자와 설정자 this
function sum() {
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  }
};

Object.defineProperty(o, 'sum', {
    get: sum, enumerable: true, configurable: true});

console.log(o.average, o.sum); // 2, 6