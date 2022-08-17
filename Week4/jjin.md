## 21

1. 자바스크립트 전역 객체의 빌트인 전역 함수 eval에 대해 설명하시오.`
2. 다음 코드의 어느 곳에서 에러가 발생하는지, 왜인지 설명하시오

```jsx
var x = 10;

function foo() {
  y = 20;
}
foo();
```

## 22. this

1. 함수 호출 방식 4가지를 말하고 그에 따른 this의 바인딩 위치를 설명하시오.
2. 메서드 foo 내부의 setTimeout함수의 this 바인딩을 전역 객체가 아닌, foo의 this 바인딩과 일치하도록 두 가지 방법으로 코딩하시오.

## 23. 실행 컨텍스트

## 24. 클로저

1. 다음 코드의 실행결과를 예상하고 각 코드가 가지는 문제점이나 부족한 점을 지적하시오.

```jsx
function Person(name, age) {
  this.name = name; // public
  let _age = age; // private

  // 인스턴스 메서드
  this.sayHi = function () {
    console.log(`Hi! I'm ${this.name}, I'm ${this.age}`);
  };
}

const me = new Person("Jin", 20);
me.sayHi(); // Hi! I'm Jin, I'm 20.
console.log(me.name); // 20
console.log(me._age); // undefined
```

```jsx
const Person = (function () {
  let _age = 0; // private

  // 생성자 함수
  function Person(name, age) {
    this.name = name;
    _age = age;
  }

  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log(`Hi! I'm ${this.name}, I'm ${this.age}`);
  };

  // 생성자 함수를 반환
  return Person;
})();

const me = new Person("Jin", 20);
me.sayHi(); // Hi ~
console.log(me._age); // undefined
```

## 21

1. 발생하지 않음

## 22

1.

1. 일반 함수 호출
1. 메서드 호출
1. 생성자 함수 호출
1. Function.prototype.apply/call/bind 메서드에 의한 간접 호출

1.

```jsx
var value = 1;

const obj = {
  value: 100,
  foo() {
    // this 바인딩(obj)을 변수 that에 할당한다.
    const that = this;

    // 콜백 함수 내부에서 this 대신 that을 참조한다.
    setTimeout(function () {
      console.log(that.value); // 100
    }, 100);
  },
};

obj.foo();
```

이외에도 js는 this를 명시적으로 바인딩할 수 있는 Function.prototype.apply, Function.prototype.call, Function.prototype.bind 메서드 제공

```jsx
var value = 1;

const obj = {
  value: 100,
  foo() {
    setTimeout(
      function () {
        console.log(this.value); // 100
      }.bind(this),
      100
    );
  },
};

obj.foo();
```
