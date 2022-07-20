# Ch4. 변수

### 💡 함수 호이스팅

<br />

1. `함수 선언식` 으로 작성  
   => 함수 정의 자체가 호이스팅 되기 때문에 에러 없이 잘 실행됨
2. `const` 키워드 사용, `함수 표현식` 으로 작성  
   => 변수 선언만 호이스팅 되기 때문에 ReferenceError 발생
3. `let` 키워드 사용, `화살표 함수` 로 작성  
   => 변수 선언만 호이스팅 되기 때문에 ReferenceError 발생
4. `var` 키워드 사용, `화살표 함수` 로 작성  
   => 변수로 선언(호이스팅)된 이후에 함수로 호출되었으므로 TypeError 발생

```js
console.log(dec(2, 3)); // 5
console.log(exp(2, 3)); // ReferenceError: exp is not defined
console.log(arrow(2, 3)); // ReferenceError: arrow is not defined
console.log(arrow2(2, 3)); // TypeError: arrow2 is not a function

function dec(num1, num2) {
  return num1 + num2;
}

const exp = function (num1, num2) {
  return num1 + num2;
};

let arrow = (num1, num2) => {
  return num1 + num2;
};

var arrow2 = (num1, num2) => {
  return num1 + num2;
};
```

<br />
<br />

### 💡 undefined의 연산

<br />

- undefined와 undefined 연산 => NaN
- undefined와 number 연산 => NaN
- undefined와 string 연산 => string

```jsx
console.log(a + b); // NaN
a = 20;
var a;
console.log(a + b); // NaN
var b;
console.log(b + "hi"); // undefinedhi
```

<br />
<br />

### 💡 var과 let의 차이

<br />

- var는 함수 레벨 스코프 => 함수 내에서 하나의 값으로 참조되기 때문에 6이 6번 출력된다.
- let은 블록 레벨 스코프 => 블록(for 문)이 실행될 때마다 블록 내 각자의 값이 참조되기 때문에 0부터 5까지 차례로 출력된다.

```js
for (var i = 0; i < 6; i++) {
  setTimeout(() => console.log(i), 100);
} // 6 6 6 6 6 6

for (let i = 0; i < 6; i++) {
  setTimeout(() => console.log(i), 100);
} // 0 1 2 3 4 5
```

<br />
<br />
<br />

# Ch5. 표현식과 문

### 💡 값, 리터럴, 표현식, 문이란?

<br />

- 값: 식(표현식)이 평가되어 생성된 결과
- 리터럴: 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법
- 표현식: 값으로 평가될 수 있는 문. 즉, 표현식이 평가되면 새로운 값을 생성하거나 기존값을 참조.
- 문: 프로그램을 구성하는 기본 단위이자 최소 실행 단위

<br />
<br />
<br />

# Ch6. 데이터 타입

### 💡 Javascript의 7가지 데이터 타입

<br />

- `number`
- `string`
- `boolean`
- `undefined`
- `null`
- `symbol`
- `object`

```js
typeof 15; // number
typeof NaN; // number
typeof "hello"; // string
typeof `nice ${2} meet you`; // string
typeof true; // boolean
typeof (1 != 2); // boolean
typeof { name: "a", age: 5 }; // object
```

<br />
<br />

### 💡 undefined, null, undeclared

<br />

- `undefined`: 변수가 선언되었으나 값이 대입되지 않은 변수 혹은 속성
- `null`: 객체가 없음. undefined가 '없음'을 나타내는 값일지라도, 대입한 적 없는 변수 혹은 속성과, 명시적으로 '없음'을 나타내는 경우를 구분하기 위해  프로그래머의 입장에서 명시적으로 부재를 나타내고 싶다면 항상 null을 사용하는 것이 좋다.
- `undeclared`: 변수가 선언되지 않음

```jsx
typeof null  // 'object'
typeof undefined. // 'undefined'
```

<br />
<br />
<br />

# Ch7. 연산자

### 💡 숫자와 문자열 자료형 간 비교

<br />

- 숫자와 문자열 간 대소비교/동등비교 연산 시 암묵적 타입 변환을 통해 타입을 일치시킨 후 값을 비교한다.

```js
console.log("2" > 1); // true
console.log("01" == 1); // true
```

<br/>

### 💡 null, undefined 와 비교

<br/>

- null은 대소 비교 시에 숫자 0 값으로 암묵적인 타입 변환이되고, 동등 비교시에는 타입 변환이 되지 않는다.

```js
console.log(null >= 0); // true
console.log(null > 0); // false
console.log(null == 0); // false
```

- undefined는 대소 비교 시에 NaN 으로 타입이 변환된다.

```js
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
```

<br />
<br />
<br />

# Ch8. 제어문

### 💡 switch 문

<br />

- switch문의 표현식 값과 case문은 일치하는 경우에만 실행흐름을 옮긴다.
- 아래 코드의 경우 표현식의 값이 `arg = 4` 이지만 case 문의 `arg < 5` 는 `true` 값을 가지기 때문에 default문이 실행된다.

```js
arg = 4;
switch (arg) {
  case arg < 5:
    console.log("5 미만입니다.");
    break;

  default:
    console.log("알 수 없는 값입니다.");
}
```

<br/>

### 💡 중첩 for문의 탈출

<br />

- 중첩 for문을 탈출하려면 레이블 문을 사용한다.

```js
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i + j === 2) break outer;
  }
}
```

<br />

### 💡 조건문에서 배열의 처리

<br/>

- 선언된 배열은 빈 배열이라도 true 값으로 간주된다.

```js
const arr = [];

if (arr) {
  console.log(arr);
}

arr.push(1);

if (arr) {
  console.log(arr);
}

// []
// [1]
```

<br />
<br />
<br />

# Ch9. 타입 변환과 단축 평가

### 💡 옵셔널 체이닝 연산자와 null 병합 연산자란?

<br />

- 옵셔널 체이닝 연산자 => `?.`  
  : 좌항이 `null`또는 `undefined`이면 `undefined`를 반환하고 그렇지 않으면 우항의 프로퍼티 값 참조

- null 병합 연산자 => `??`  
  : 좌항이 `null`또는 `undefined`이면 우항의 피연산자를 반환하고 그렇지 않으면 좌항의 피연산자를 반환
