# 6 week) 34 ~ 37장

### 문제

✅ 34장 이터러블

1️⃣ 이터러블 _ _ _ *은 순회 가능한 데이터 컬렉션(자료구조)를 만들기 위해 ECMAScript 사양에 정의하여 미리 약속한 규칙이다.*  이터러블 _ _ _ _를 준수한 객체를 이터러블이라고 한다. 이터러블은 _ _ _ _ _ 문으로 순회할 수 있으며 _ _ _ _ 문법과 배열 _ _ _ _ _ _  할당의 대상으로 사용할 수 있다.

2️⃣ 다음 중 이터러블이 아닌 것은?

```jsx
1. const array = [ 1, 2, 3, 4, 5]
2. const text = 'hello'
3. const map = new Map();
4. const arrayLike = {
	0: "Hello",
  1: "World",
  length: 2
}
5. Array.from(arrayLike)
```

✅ 35장 스프레드 문법

1️⃣ 다음의 결과는?

```jsx
const arr = [1, 2, 3];
const max = Math.max(arr);
const max2 = Math.max(...arr);
console.log(max, max2);
```

~~2️⃣ 다음의 결과는?~~

```jsx
~~const arr1 = [1,2];
const arr2 = [3,4];

const aa = [...arr1, ...arr2];
console.log(aa);

const bb = arr1.splice(1, 0, arr2);
console.log(bb);

const cc = arr1.splice(1, 0, ...arr2);
console.log(cc);~~
```

✅ 36장 디스트럭처링 할당

배열 디스트럭처링 할당을 위한 변수에 Rest 요소 …를 사용할 수 있다. 다음의 결과는?

```jsx
function printHello({name = 'Lee', age = 10}) {
	console.log(`Hello, My name is ${name}. My age is ${age}`);
}

printHello({name: 'Kim', age: 20});
```

✅ 37장. Set과 Map

---

34장. 이터러블

이터레이션 프로토콜: 순회가능한 데이터 컬렉션(자료구조)을 만들기 위해 ECMAScript 사양에 정의하여 미리 약속한 규칙이다.

→ 이터러블 프로토콜을 준수한 객체를 이터러블, 이터레이터 프로토콜을 준수한 객체를 이터레이터라고 한다.

34.1.1 이터러블

**이터러블:** 자료를 반복할 수 있는 객체. 이터러블 프로토콜을 준수한 객체를 이터러블이라고 한다. 이터레이터를 리턴하는 **[Symbol.iterator()] 메서드를 구현하거나 상속받는다**. (없으면 순회 안함) for..of문으로 순회 가능, 스프레드 문법과 디스트럭처링 할당의 대상으로 사용할 수 있다.

- 배열, 문자열, Map, Set 등은 이터러블이다.
- 일반 객체도 이터러블 프로토콜을 준수하도록 구현하면 이터러블이 된다. (보통은 이터러블 아님). 일반 객체도 스프레드 문법 사용은 가능.

34.1.2 이터레이터

이터레이터: 이터러블의 [Symbol.iterator()] 메서드 를 호출하면  이터레이터를 반환한다. 이터레이터는  next 메서드를 가진다.

- 이터레이터의 next 메서드는 이터러블의 각 요소를 순회하기 위한 포인터의 역할을 한다. 즉 next 메서드를 호출하면 이터러블을 순차적으로 한 단계씩 순회하며 순회 결과를 나타내는 **이터레이터 리절트 객체를 반환한다.** (vlaue는 현재 순회중인 이터러블의 값, done 프로퍼티는 이터러블의 순회 완료 여부를 나타냄)

34.4 이터러블과 유사 배열 객체

```jsx
const Arraylike = {
	0 : 1,
	1 : 2,
	2 : 3,
	length: 3
};
```

→ 유사 배열 객체는 length 프로퍼티를 갖기 때문에 for문으로 순회 가능

유사배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있다.

Symbol.iterator 메서드가 없기 때문에 for..of 문으로는 순회 불가

→ 이터러블과 유사 배열은 대개 *배열이 아니기 때문에* `push`, `pop` 등의 메서드를 지원하지 않습니다. 이터러블과 유사 배열을 배열처럼 다루고 싶을 때 이런 특징은 불편함을 초래합니다. `range`에 배열 메서드를 사용해 무언가를 하고 싶을 때처럼 말이죠. 어떻게 하면 이터러블과 유사 배열에 배열 메서드를 적용할 수 있을까요? 범용 메서드 [Array.from](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)는 이터러블이나 유사 배열을 받아 ‘진짜’ `Array`를 만들어줍니다. 이 과정을 거치면 이터러블이나 유사 배열에 배열 메서드를 사용할 수 있습니다.

[iterable 객체](https://ko.javascript.info/iterable)