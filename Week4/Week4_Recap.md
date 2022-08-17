# Week4 Recap
## Ch20. Strict Mode
- `Strict mode` 를 명시적으로 사용하는 대신, `ESLint` 와 같은 도구를 사용해서 에러를 바로 확인하고 컨벤션 수정을 제안받는 등의 기능을 활용할 수 있다.
	- `ESLint` 의 경우 사용자가 임의의 룰을 추가할 수도 있다.

<br/>

## Ch21. 빌트인 객체
```jsx
console.log(isNaN(' ')); // false
console.log(isNaN(null)); // false
console.log(isNaN(true)); // true
```
- `isNaN` 은 인자로 주어진 값을 최대한 숫자로 변환하려 함
	- `true` 는 1, `' '` 과 `nul` l은 0으로 변환되어 위의 세 경우 모두 `false` 를 리턴한다.

```jsx
var x = 10;

function foo() {
  y = 20;
}
foo();

console.log(x + y);
```
- 변수 `y` 를 선언한 부분은 없지만, `foo()` 로 함수를 호출한 시점에서 전역변수 `y` 를 찾을 수 없어도 암묵적으로 `window,y` 로 해석되어 전역 객체의 프로퍼티로 추가된다. 
	- 따라서 맨 아래 `console.log(x + y)` 의 결과는 정상적으로 출력된다.
	- 변수가 아니므로 호이스팅이 발생하지 않는다.

```jsx
var a = 5;
console.log(window.a);  // var로 선언된 변수는 전역 객체의 프로퍼티가 된다.

let b = 5;
console.log(window.b); 
```
- var로 선언된 변수는 전역 객체의 프로퍼티가 된다.
- let 과 const 는 전역 객체의 프로퍼티로 들어가지 않는다.
- 하지만 `var` 로 선언된 변수 `a` 를 `delete` 연산자로 삭제하는 것은 불가능하다. `delete` 연산자의 다음과 같은 특성 때문이다:
	- Non-configurable 속성은 삭제 할 수 없습니다. 이것은 Math, Array, Object와 같은 built-in objects의 속성들이나 Object.defineProperty() 같은 메소드로 만든 non-configurable속성들을 포함합니다.
	- var, let, const로 선언된 변수는 non-configurable 속성으로 구분되며, delete로 삭제될 수 없습니다.
	- `var` 로 선언된 어떠한 프로퍼티라도 글로벌 스코프나 함수 스코프로부터 삭제될 수 없다.
	- let과 const로 선언한 속성은 어느 스코프에 정의되어 있건 삭제 할 수 없습니다.
	- 결국, delete는 글로벌 스코프의 어떤 함수도 삭제 할 수 없다. (함수 정의식이건 함수 표현식이건 삭제 불가)
	- 오브젝트의 속성으로 있는 함수인 경우(글로벌 스코프를 제외하고)는 delete로 삭제할 수 있습니다.

#### 래퍼 객체
- 문자열, 숫자, 불리언 값 등에 대해 객체처럼 접근하면 생성되는 임시 객체
- **원시값에 대해 Object의 메서드를 사용하고자 할 때** 잠시 래퍼 객체를 통해 Object 자료형으로 변환된다.
	- 메서드가 적용되고 난 원시값은 식별자에 새로 할당되고, 래퍼 객체는 가비지 컬렉션의 대상이 된다.

```jsx
console.log(typeof Infinity); // number
console.log(typeof NaN); // number
console.log(typeof undefined); // undefined

console.log(isNaN(Date())); // true
console.log(isNaN(new Date())); // false
console.log(isNaN(new Date().toString())); // true
```
- `Date()` 와 같이 일반 함수로 호출했으므로 객체가 리턴되어 `true`
- `new Date()` 와 같이 생성자 함수로 호출했으므로 `false`
	- 명시적으로 `Number()` 로 변환한다면 숫자 형태의 값으로 바뀐다.
	- 따라서 `isNaN` 의 인자일 때도 숫자로 암묵적 변환된다.

<br/>

## 22. this
#### `this` 란?
- **자기 참조 변수**
- 자신이 속한 객체를 가리키는 식별자를 재귀적으로 참조한다.
- this가 가리키는 값은 **코드가 평가될 때** 결정된다. (실행 이전)

#### this가 가리키는 값
- 일반 함수 호출 : Window
- 메서드 호출 : 체이닝 연산자 (`.`) 바로 앞의 요소, 즉 메서드를 호출한 객체
- 생성자 함수 : 생성자 함수 호출을 통해 만들어질 인스턴스
- Function.prototype.apply/call/bind에 의한 간접 호출 : 첫 번째 인자로 받은 값

```js
console.log(this) //(1) Window

function foo() {
	console.log(this);
}

foo(); //(2) Window

const obj = { foo };
obj.foo(); // (3) obj

const foo2 = obj.foo;
foo2(); // (4) Window
```
- 위처럼 동일한 함수도 다양한 방식으로 호출할 수 있다.
- `this` 바인딩은 함수 호출 **방식**에 따라 동적으로 결정된다.

#### 메서드 내부 함수의 this 바인딩 (p.350)
- 메서드 내부의 `setTimeout` 함수의 `this` 바인딩을 전역 객체가 아닌, 메서드의 this 바인딩과 일치하도록 해 본다.
```js
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
```

#### 객체 내부 프로퍼티와 메서드의 this 차이
```jsx
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

console.log(user.ref.name); 
```
- makeUser를 일반 함수로 호출했으므로 this는 Window다.
- makeUser 의 return 문은 객체 리터럴 즉 '값'이다.
	- **프로퍼티** ref의 this는 여전히 Window에 바인딩되어 있다.
- 따라서 user.ref.name은 window.name과 같아 Undefined를 반환한다.

```jsx
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

console.log(user.ref().name);
```
- **메서드** ref의 this 는 해당 메서드를 포함하고 있는 객체를 가리킨다.
- 즉 makeUser가 return 한 객체 리터럴 그 자체를 가리킨다.
- 해당 객체는 name 프로퍼티를 가지고 있으므로 그 값인 John을 반환한다.

<br/>

## 23. 실행 컨텍스트
- 소스코드를 실행하는 데 필요한 환경을 제공하고 코드의 실행 결과를 실제로 관리하는 영역
- 식별자를 등록하고 관리하는 스코프와 코드 실행 순서 관리를 구현한 내부 메커니즘
- 식별자와 스코프는 실행 컨텍스트의 렉시컬 환경으로 관리하고, 코드 실행 순서는 실행 컨텍스트 스택( `콜스택` )으로 관리한다.
```jsx
const x = 1;                       // (1)

function foo() {                   // (2)
	const y = 2;                   // (3)

	function bar() {
		const z = 3;               // (4)
		console.log(x + y + z);    // (5)
	}
	bar();                         // (6)
}

foo();
```
- 1 - 2 - 3 - 6 - 4 - 5 순서대로 실행 컨텍스트 스택에 push된다.
- function bar() {} 는 함수 표현식이 아닌 선언식이다.
	- 따라서 함수 선언 및 초기화 과정과 같이 선언부가 먼저 평가되는 것이 아니라, function bar 스코프 전체가 한 번에 평가되므로 함수 호출이 먼저 이뤄지고 나서 함수를 읽어 온다.

#### 렉시컬 환경
- 식별자와 그에 바인딩된 값, 상위 스코프에 대한 참조를 기록하는 자료구조
- 렉시컬 환경은 다음 두 개의 컴포넌트로 이루어진다:
	- 환경 레코드 : 식별자와 스코프에 대한 정보
	- 외부 렉시컬 환경에 대한 참조 : 상위 스코프

#### 전역 렉시컬 환경
- 전역 코드 평가 과정에서 var 키워드로 선언한 전역 변수와 함수 선언문으로 정의된 전역 함수는 전역 환경 레코드의 객체 환경 레코드에 연결된 `BindingObject`를 통해 전역 객체의 프로퍼티와 메서드가 된다.
    
- let, const키워드로 선언한 전역 변수는 선언적 환경 레코드에 등록되고 관리된다.

- const 키워드로 선언한 변수는 선언단계와 초기화 단계가 분리되어 진행되기 때문에, 초기화에 도달하기 전까지 일시적 사각지대에 빠지게 된다. 

- 전역 코드에서 this는 전역 객체를 가리키므로, 전역 환경 레코드의 `[[GlobalThisValue]]` 내부 슬롯에는 전역 객체가 바인딩 된다.

- 외부 렉시컬 환경에 대한 참조 결정 시, 전역 렉시컬 환경애서는 참조할 외부 렉시컬 환경이 없으므로 null 이 할당된다.

#### 스코프 체이닝
- 자신의 환경 레코드에서 변수를 찾을 수 없다면, 상위 스코프의 환경 레코드를 참조하여 변수를 탐색한다.
- 스코프 체인은 단방향 링크드 리스트 구조이므로 한 번에 전역 객체(최상위 스코프)로 올라가는 것은 불가능하다. 즉 한 단계 위의 스코프부터 차례차례 참조하여 올라가게 된다.

#### 객체 환경 레코드와 선언적 환경 레코드 (p. 370-372)
- 객체 환경 레코드 : var 로 선언한 변수
- 선언적 환경 레코드 : let, const 로 선언한 변수

#### 실행 컨텍스트의 소멸
- 실행 컨텍스트는 **모든 실행을 마치고 나서** 콜스택에서 제거된다.

<br/>

## 24. 클로져 (p.393, 415)
- 클로져는 함수가 정의되었을 때의 환경을 기억한다.

- 클로저 함수 사용 시 장점은 다음과 같다 :
	- 특정 함수만 값에 접근하여 상태 변경을 가능하게 하는 것(정보 은닉)

- `Free variable` 이란?
```jsx
var x = 10;

function foo() {
	var y = 20; // free variable

	function bar() {
		var z = 15;
		var output = x + y + z;
		return output;
	}

	return bar;
}
```

- 중첩 함수가 외부 함수보다 오래 유지되는 경우

- 해당 함수의 정의가 평가되어 함수 객체를 생성할 때, 함수 객체의 `[[Environment]]` 내부 슬롯에 함수 객체 정의 시점의 환경이 저장된다.

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
- sayHi 메서드가 인스턴스 메서드이므로 Person 객체가 생성될 때마다 매번 중복 생성된다. (P.411)
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