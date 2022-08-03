# Ch10. 객체 리터럴

### 💡 자바스크립트에서 객체란?

<br />

자바스크립트는 **객체** 기반의 프로그래밍 언어로, 원시 값을 제외한 나머지는 모두 객체다.

객체의 구조는 `프로퍼티` 의 집합이며, `프로퍼티` 는 `key` 와 `value` 로 구성되어 있다.

더불어 `value` 가 만약 함수일 경우 따로 `method` 라고 지칭한다.

```js
const object = {
  [key] : value,
  print : () => console.log("hi")
}
```

<br />

### 🏭 객체 만들기

<br />

자바스크립트에선 아래와 같이 다양한 방법으로 객체를 만들 수 있으나, 주로 객체 리터럴을 통해 생성합니다.

- 객체 리터럴
- Object 생성자 함수
- 생성자 함수
- Object.create `method`
- Class

```js
// 객체 리터럴 방식
const junseo = {
  name : "junseo",
  callName : function () {
    console.log(this.name)
  }
}

junseo.callName(); // junseo

// Object 생성자 함수
const junseo = new Object();

junseo.name = "junseo";
junseo.callName = function () {
    console.log(this.name)
}

junseo.callName(); // junseo

// 생성자 함수 방식
function User (name:string) {
  this.name = name;
  this.callName = function () {
    console.log(this.name)
  }
}

const junseo = new User("junseo");

junseo.callName(); // junseo
```

> 이렇듯 다양한 방법으로 객체를 만들 수 있으며, **객체 리터럴** 방식의 경우 같은 객체를 여러 개 생성해야 할 경우 반복되는 코드가 많아질 수 있으므로 이럴 땐 `class` 나, `생성자 함수 방식` 을 주로 사용합니다.

<br />


### ✍🏻 프로퍼티 이름 짓기

<br />

객체는 `프로퍼티` 의 집합으로 객체에 저장된 값에 접근하기 위해선 `프로퍼티` 즉 ,`key` 를 이쁘게 작성해야 한다.

- `camelCase` 로 작성하자.
- 식별자 네이밍 규칙으로 작성하지 못한다면 따옴표를 붙히자.
- 대괄호를 사용한다면 동적으로 `프로퍼티` 의 `key` 로 사용할 수 있다.

```js
const obj = {
  totalPrice : 2000, // 가능 ✅
  origin-price : 1000, // 불가능 ❌
}

const obj = {
  totalPrice : 2000, // 가능 ✅
  'origin-price' : 1000, // 가능 ✅
}

const id = getMyId(); // 비동기나 소켓 통신을 할 때 용이하게 사용할 수 있습니다!
const name = getMyName();
const obj = {
  [id] : name,
}
```
<br />

### 🏷 마침표, 대괄호 표기법

<br />

프로퍼티에 접근하는 방법은 아래와 같이 2가지가 있다.
1. 마침표 표기법
2. 대괄호 표기법
   - 동적으로 프로퍼티 키를 생성하는 것과 마찬가지로 동적인 값을 통해 객체에 접근할 수 있다.

```js
const obj = {
  name : "junseo",
}

console.log(obj.name); // junseo
console.log(obj['name']); // junseo
console.log(obj.age); // undefined
```

> 상기 코드와 같이 객체에 존재하지 않는 프로퍼티에 접근하면 `undefined` 를 반환한다.

<br />

### 🗝 -> 🔑 프로퍼티 덮어씌우기

<br />

아래 예시와 같이 프로퍼티 키를 중복 선언하면 덮어 씌어지므로 주의해야 합니다!

```js
const obj = {
  name : "junseo",
  language : ["javascript", "typescript"]
}

const obj2 = {...obj, name : "jun"};
console.log(obj2); // {name : "jun", language : ["javascript", "typescript"]}
```

<br />

### 🧹 프로퍼티 삭제하기

<br />

`delete` 연산자를 사용하여 객체의 프로퍼티를 삭제할 수 있다.

```js
const obj = {
  name : "junseo",
  language : ["javascript", "typescript"]
}

console.log(obj.language); // language : ["javascript", "typescript"]

delete obj.language

console.log(obj.language); // undefined
```

<br />

### ⚽️ ES6 와 함께 객체 갖고 놀기

ES6 에서는 프로퍼티 값을 변수로 사용할 경우 객체를 생성할 때 키를 생략할 수 있고, 프로퍼티 키를 변수 이름으로 자동 생성합니다.

<br />

```js
const x = 1;
const y = 2;

const obj = {x, y};

console.log(obj); // {x : 1, y : 2};
```

<br />


# Ch11. 원시 값과 객체의 비교

### 원시 값

자바스크립트에서 원시 값은 **변경 불가능한 값**으로, 변수에 할당된 값을 변경을 시도한다면 새롭게 메모리 공간을 확보 및 변경한 값을 저장한 후 해당 메모리의 주소를 변수에 할당합니다.

<br />

### 값에 의한 전달

자바스크립트에서 변수(a)에 원시 값을 갖는 변수(b)를 할당하면 변수 a 엔 변수 b 의 값이 **복사되어 전달**된다.

```js
const a = 1;
const b = a;
```

이 때 `a` 변수에 저장되어 있는 값과 `b` 변수에 저장되어 있는 **값은 같으나** **메모리 주소가 다르기에 ** 한 쪽에서 재할당을 하더라도 서로 간섭할 수 없다.

### 객체

객체의 경우는 **변경 가능한 값**으로 객체를 할당한 변수는 해당 메모리 주소를 통해 메모리 공간에 접근하여 참조 값에 접근을 할 수 있다.

> **참조 값** = 생성된 객체가 저장된 메모리 공간의 주소

객체는 **재할당 없이** 프로퍼티를 추가, 삭제, 갱신을 할 수 있으며 이는 원시 값을 갈아 끼우는 방식이라고 이해하면 쉽다.

<br />

### 참조에 의한 전달

```js
const a = {
  name : "junseo",
};
const b = a;

b.name = "jun";
console.log(b);
```

객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달되며 이를 **참조에 의한 전달** 이라고 합니다.

상기 코드처럼 이는 객체 즉, 참조 값을 복사한 것으로 깊은 복사를 하지 않는 한 참조 값이 가르키고 있는 값을 변경한다면 원본에도 영향을 받습니다.

<br />

# Ch12. 함수

### 함수 정의

함수 정의엔 아래와 같은 방법이 있습니다.

```js
// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 표현식
const add = function(x, y) {
  return x + y;
}

// Function 생성자 함수
const add = new Function('x', 'y', 'return x + y');

// 화살표 함수
const add = (x, y) => x + y;
```
