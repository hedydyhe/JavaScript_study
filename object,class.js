// 객체 object : 연관된 속성을 가짐 
const lemon = new Object();
lemon.name = '레몬'; // 속성 추가
lemon.color = '노란색';
lemon.emoji = '🍋';
// 중괄호 안에 넣어서 표현할 수도 있다.
const lemon = {
  name: '레몬',
  color: '노란색',
  emoji: '🍋',
};
lemon.price; // 객체에 할당되지 않는 속성은 undefined (null 아님)
// 대괄호 표기법을 사용해서 표현가능.
lemon['name'] = '레몬';
lemon['color'] = '노란색';
// 공백이나 하이픈이 있거나 숫자로 시작할 때는 대괄호 표현법만 가능하다.
// 대괄호 표기법은 속성이름을 동적으로 결정하는 런타임까지 결정 할 수 없는 경우 유용하다.

// 속성이름 key : 문자열, 기호만 사용가능, 기호가 아닌 것들은 대괄호 안에 문자열로 반환됨
const obj = {
  name: 'object',
  ['object-type']: 'function',
}

// 자기의 속성 안에 있는 것을 이용할 때는 'this'를 사용한다.
const melon = {
  name: '멜론',
  color: '초록색',
  display: function() {
    console.log(`$(this.name): '🍈`);
  },
};
melon.display;

// 속성삭제 : delete 연산자 이용하여 속성제거 가능
delete myObj.a; // a 객체 삭제
console.log('a' in myObj); // false 반환

// 객체 만드는 방법
// 1. 객체 initializer : 리터럴 표기법으로 문 실행할 때마다 객체 생성
const obj2 = {
  property1: value1, // 식별자 identifier로 이름짓기
  2: value2, // 숫자로 이름 짓기
  'property n' : value3 // 문자열로 이름짓기
}
let x;
if (cond) {
  x = {greeting2: 'hi there'}
} // 표현식이 참인 x인 경우에만 변수에 할당함.

const myHonda = {color: 'blue', wheels: 4, engine: {cylinders: 4, size:2.2}};
// 속성을 여러개 사용해서 생성할 수 있고, engine 속성처럼 자체 속성을 가질 수도 있다. 

// 2. 생성자 함수 사용 : 객체의 유형을 정의하고, 대문자 이니셜을 사용한다. 
// 객체의 유형 정의 : 이름, 속성 및 메서드 지정하는 함수 만듬
function Fruit(name, color, emoji, owner) {
  this.name = name; // this를 이용하여 전달된 값을 속성의 값으로 할당한다.
  this.color = color;
  this.emoji = emoji;
  this.owner = owner; // 새 객체 만들 수 있음
}
const orange = new Fruit('orange', '주황색', '🍊', Hedy ); // 인스턴스를 만들어 호출할 수 있다.
const graph = new Fruit('graph', 'blue', '🍇', Chersu);
graph.owner.name // 객체 Chersu를 인수로 전달하여 호출할 수 있다.
orange.color = 'orange'; // 이전에 정의한 객체에 속성을 추가할 수 있다.

// getter, setter 정의
// getter : 특정 속성 값을 가져오는 메서드
// setter : 특정 속성 값을 설정하는 메서드
const myObj = { 
  a: 8, // 객체의 속성 : 숫자 8
  get b() { // 제곱을 반환하는 getter
    return this.a++;
  },
  set c(x) { // 값의 절반 값이 반환되는 setter
    this.a = x / 2;
  }
}

console.log(myObj.a); // 8
console.log(myObj.b); // 64 
myObj.c = 50;
console.log(myObj.a); // 25

// class 클래스
class Name {} // 선언
console.log(typeof Name); // class는 함수(functoin)
const myName = new Name();
console.log(myName); // 인스턴스(Instance) 생성

// 메서드(Method) : contructor(생성자), prototype, 정적 메서드
class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  // 메서드 추가
  eatFood() {
    console.log(`${this.name}은 음식을 먹는다.`)
  }
}
const dog = new Animal('멍멍이', 'brown');
console.log(dog);
dog.eatFood();

// static 메서드: 인스턴스를 만들지 않아도 호출가능
class Hello {
  constructor(name) {
    this.name = name;
  }
  static koreaHello() {
    console.log('안녕하세요');
  }
}
Hello.koreaHello(); 

// 접근자 프로퍼티 
class City {
  constructor (country, capital){
    this.country = country;
    this.capital = capital;
  }
  get cityName() {
    return `${this.country}, ${this.capital}`;
  }
  set cityName(name) {
    [this.country, this.capital] = name.split(' ');
  }
}
const cityOne = new City('korea', 'Seoul');
console.log(cityOne);

// Private '#'
class Person {
  #name; // 외부에서 접근이 불가능, 내부에서만 가능
  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }
  get name() {
    return this.#name;
  }
}
const you = new Person('kim', 25);
console.log(you.name);  

// 상속 class: 클래스를 상속받아 새로운 클래스로 extends 
class Employee {
  constructor(name, hoursPerMonth, payRate) {
    this. name = name;
    this. hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class DecemberEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, hoursPerMonth) {
    super(name, hoursPerMonth, DecemberEmployee.PAY_RATE);
  }
}

class NovemberEmployee extends Employee {
  static PAY_RATE = 6000;
  constructor(name, hoursPerMonth, ) {
    super(name, hoursPerMonth, NovemberEmployee.PAY_RATE);
  }
}
const miseon = new DecemberEmployee('미선',  35);
const minju = new NovemberEmployee('민주', 20);
console.log(miseon.calculatePay());
console.log(minju.calculatePay());