// 이터레이션 프로토콜 Iteration protocal - 순회 가능한 데이터 모음
// 이터러블 Iterable - for...of, sparead - 배열, 문자열, Map, Set

const array = [1, 2, 3, 4, 5, 6];
for (const item of array) {
  console.log(item);
} // 순회하면서 값 반환

// console.log(array.values());
for (let item of array.values()) {
  console.log(item);
}
console.log(array.keys());
console.log(array.entries());

console.log([...array]); // 스프레드 문법
const [a, b, ...rest] = array;
console.log(a, b, ...array);

const object = { 0: 1, 1: 2, 2: 3 };
console.log(Symbol.iterator in object); // object는 이터러블이 아니기 때문에 false 반환
// for (const item of object) {
//   console.log(item);
// } 따라서, for...of 구문으로 사용할 수 없다.
console.log({ ...object }); // 객체 내부에서 스프레드 문법은 사용가능

// 이터레이터 Iterator - [Symbol.iterator] 호출하면 반환되는 것. {next: value} 메서드 호출하면 value, done 객체 반환.
const array2 = ['a', 'b', 'c', 'd'];
const iterator = array2[Symbol.iterator](); // 배열은 이터레이터 
console.log('next' in iterator); // next 메서드
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const iterator2 = array.values();
while (true) {
  const num = iterator2.next();
  if (num.done) break;
  console.log(num.value);
}

const double1 = {
  [Symbol.iterator]: () => {
    const max = 15;
    let num = 0;
    return {
      next() {
        return { value: num++ ** 2, done: num > max };
      },
    };
  },
};
for (const num of double1) {
  console.log(num);
}

// Generator
function* doubleGenerator() {
  for (let i = 0; i < 15; i++) {
    console.log(i);
    yield i ** 2;
  }
}
const double2 = doubleGenerator();
let next = double2.next();

// Spread 값들을 펼쳐서 값의 목록으로 만듬
console.log(...[1, 2, 3]);
console.log(...'Hello');
// console.log(... {0:1, 1:2}); // 일반적인 객체는 안됨

const spreadArray = [... [1, 2], ...[3, 4]];
console.log(spreadArray);

const arr1 = [1, 2];
const arr2 = [3, 4];
// spread1.splice(1, 0, arr2);
// console.log(arr1); 
Array.prototype.slice.apply(arr1, [1, 0].concat(arr2));
console.log(arr1);
// 스프레드 문법 사용 
arr1.splice(1, 0, ...arr2);
console.log(arr1);

function sum (first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);

// 구조분해 할당
const num = [1, 2, 3];
const first = num[0];
const second = num[1];
const third = num[2];
console.log(first, second, third);
// 배열리터럴로 변수 선언
const [first1, second1, third1] = num;
console.log(first1, second1, third1);

const colors = ['red', 'green', 'blue', 'pink'];
const [one, two, ...others] = colors;
console.log(one);
console.log(...others);

const suji = { name: 'suji', age: 25, job:'store manager'};
function display({name, age, job}) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(suji);

// Set : 중복X 유일한 값의 집합, 순서의미 X, 인덱스 요소 접근 X
const set = new Set(); // 객체 생성
console.log(set);

const set1 = new Set([10, 20, 30, 40, 50]);
console.log(set1);
const set2 = new Set('numbers');
console.log(set2);
// 중복 제거
const overlap = array => [...new Set(array)];
console.log(overlap([10, 20, 30, 30, 40, 10, 50]));
// 사이즈 확인
const { size } = new Set([1, 2, 3, 1, 2, 3]);
console.log(size); // 중복은 안 세기 때문에 = 3
// 요소 추가
set.add(1).add(2).add(2);
console.log(set); // 중복 제거한 후 = {1, 2} 2개 출력
// 요소 존재 확인
console.log(set.has(1)); // true
console.log(set.has(3)); // false
// 요소 삭제
set.delete(1);
console.log(set);
set.delete(3);
console.log(set); // 존재하지 않는 요소 삭제하려고 하면 무시됨
set.clear(); // 요소 전부 삭제
console.log(set); 
// 요소 순회
const set3 = [1, 2, 3, 4, 5, 6];
for (const item of set3) {
  console.log(item);
}
console.log([...set3]); 
const [x, y, ...other] = set3;
console.log(x, y, ...other);

// Map 키, 값
// 생성
const map = new Map();
console.log(map);
const map2 = new Map([['key0', 'value0'], ['key1', 'value1']]);
console.log(map2);
const map3 = new Map([['key0', 'value0'], ['key0', 'value1']]);
console.log(map3); // key가 중복되면 값이 덮어씌어진다.
// 요소 추가
map2.set('key2', 'value2');
console.log(map2);
console.log(map2.size);
console.log(map2.has('key1'));
map2.forEach((value, key) => console.log(key, value));
console.log(map2.keys());
console.log(map2.entries());

// Symbol 유일한 키 생성
const map4 = new Map();
const key0 = Symbol('key');
const key1 = Symbol('key');
console.log(map.set(key0, 'Hi'));
console.log(key0 === key1); // false
// 동일한 이름 사용
const key2 = Symbol.for('key');
const key3 = Symbol.for('key');
console.log(key2 === key3); // true