#### 04 변수

###### `var` 와 `let`, `const` 의 차이점

1. `var` 키워드는 `?? 레벨 스코프` 다.
2. `let`, `const` 키워드는 `?? 레벨 스코프` 다.
3. `var` 키워드는 선언과 동시에 `???` 한다.

###### 2개의 `for` 문이 있습니다. 결과를 예측해 보세요

```js
for (var i = 0; i < 6; i++) {
  setTimeout(() => console.log(i), 100);
}

for (let i = 0; i < 6; i++) {
  setTimeout(() => console.log(i), 100);
}
```

#### 06 데이터 타입

원시값인 `문자열 = string` 은 `immutable` 한 값입니다! (모든 원시값이 다 그래요!)

아래와 같은 코드가 있습니다! 메모리와 관련해 어떠한 과정을 거치는지 설명해 주세요!

```js
const str = "Hello!"; // 0x12345678

console.log(str.toUpperCase());
```

#### 07 연산자

#### 08 제어문

```js
const arr = [];

if (arr) {
  console.log(arr);
}

arr.push(1);

if (arr) {
  console.log(arr);
}
```

출력값을 예측해 보세요!
