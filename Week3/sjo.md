# Ch17. 생성자 함수에 의한 객체 생성

**💡 출력값을 예상해보세요.**

```jsx
const name = new String("sjo");
console.log(typeof name);
console.log(name);

const num = new Number(123);
console.log(typeof num);
console.log(num);

const func = new Function("x", "return x * x");
console.log(typeof func);

const str = String("hello");
console.log(typeof str);
console.log(str);
```

<br/>

**💡 객체 리터럴에 의한 객체 생성 방식에 비해 생성자 함수에 의한 객체 생성 방식이 갖는 장점은 무엇인가?**

<br/>

**💡 출력값을 예상해보세요.**

```jsx
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = Circle(5);

console.log(circle1.getDiameter());
console.log(circle2);
```

<br/>

**💡 생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 ES6에서 지원하는 프로퍼티는?**

<br/>

**💡 출력값을 예상해보세요.**

1.

```jsx
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle = new Circle(1);
console.log(circle);
```

2.

```jsx
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  return {};
}

const circle = new Circle(1);
console.log(circle);
```

3.

```jsx
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  return 100;
}

const circle = new Circle(1);
console.log(circle);
```

<br/>
<br/>

# Ch18. 함수와 일급 객체

<br/>

**💡 console.log와 console.dir의 차이는 무엇일까?**

```jsx
let DOMel = document.getElementById("foo");
let obj = { a: 1, b: 2 };
let arr = [1, 2, 3];

console.log(DOMel);
console.dir(DOMel);

console.log(obj);
console.dir(obj);

console.log(arr);
console.dir(arr);
```

<br/>
