### 원시 값과 객체의 비교

> 깊은 복사와 얕은 복사에 관한 문제입니다.

```js
const obj = {
  name: "junseo",
  language: {
    programing: ["js", "ts", "react", "next"],
    communication: ["korean"],
  },
};

const obj2 = { ...obj };

obj.language.programing.push("nest");
obj2.name = "gamja";

console.log(obj);
console.log(obj2);

// 값을 예측해 보세요!
```

### 함수

1. 함수 표현식과 함수 선언식의 차이를 설명해 주세요!
2. 함수에서 `return` 을 명시하지 않으면 `???` 가 반환됩니다! ??? 란 무엇인가요?
3. ES6 에선 화살표 함수가 추가됐습니다. 화살표 함수 반환 값을 `return` 을 사용하지 않고 반환해 보세요! (객체도 반환해 보세요!)
4. 함수의 매개변수는 많은 것보단 적으면 좋습니다! 이유를 설명하시고, 많아지면 객체를 사용해야한다는데 이것 또한 이유를 설명해 주세요!
   1. 매개변수로 원시 값을 주면 값에 의한 전달, 객체로 전달하면 참조에 의한 전달이 됩니다. 혹시 이로 인해 발생할 수 있는 문제점을 설명해 주세요!

### 스코프

1. 문제 재탕좀 하겠습니닷,,

```js
for (var i = 0; i < 6; i++) {
  setTimeout(() => console.log(i), 100);
}

for (let i = 0; i < 6; i++) {
  setTimeout(() => console.log(i), 100);
}

// 2개의 for 문이 있습니다. 결과를 예측해 보세요!
```

2. 호이스팅은 `???` 단위로 동작합니다. `var` 의 경우는 조금 특별한데 `var`, `let`, `const` 의 차이를 설명해주세요!

### 전역 변수의 문제점

### let, const 키워드와 블록 레벨 스코프

1. `const` 키워드로 변수를 선언한다면 선언과 동시에 초기화를 해줘야 합니다! 이유을 설명해 주세요.

```js
const temp = {};

temp.a = "a";
// 이것은 왜 될까요?!
```

2. `var` 키워드는 갖다 버리세요.
