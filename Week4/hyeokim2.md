# 20~24 문제

### 20. strict mode

- 다음 중 strict mode에 대한 설명으로 옳지 않은 것은?

1) strict mode를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 ‘use strict’;를 추가한다.

2) strict mode를 적용했을 때, 선언하지 않은 변수를 참조하면 ReferenceError를 발생시킨다.

3) strict mode를 적용했을 때, 중복된 매개변수 이름을 사용하면 Syntax Error를 발생시킨다.

4) strict mode를 적용했을 때, 함수를 일반함수로서 호출하면 this에 undefined가 바인딩된다.

5) strict mode를 적용했을 때, 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영된다.

### 21. 빌트인 객체

- 다음 중 출력값이 실제와 다른 것은?

```jsx
1.
const str = 'string';
str.name = 'name';
console.log(str.name); //undefined
```

```jsx
2.
console.log(window.Infinity === Infinity) //true
```

```jsx
3.
console.log(isNaN(' ')); // false
console.log(isNaN(null)); // false
console.log(isNaN(true)); // true
```

```jsx
4. 
console.log(parseInt(' Hello 40 ')); //NaN
console.log(parseInt('1', 2)); //1
```

```jsx
5.
var x = 10;
y = 20;

delete x;
delete y;

console.log(window.x); // 10
console.log(window.y); //undefined
```

### 22. this

- 다음 중 출력값이 실제와 다른 것은?

```jsx
console.log(this) //(1) window

function foo() {
	console.log(this);
}
foo(); //(2) window

const obj = { foo };
obj.foo(); // (3) foo

const foo2 = obj.foo;
foo2(); // (4) foo
```

### 23. 실행 컨텍스트

- 실행 컨텍스트 중 전역 렉시컬 환경 생성에 대한 설명으로 옳지 않은 것은?
    
    (1) 전역 코드 평가 과정에서 var 키워드로  선언한 전역 변수와 함수 선언문으로 정의된 전역 함수는 전역 환경 레코드의 객체 환경 레코드에 연결된 `BindingObject`를 통해 전역 객체의 프로퍼티와 메서드가 된다.
    
    (2) let, const키워드로 선언한 전역 변수는 선언적 환경 레코드에 등록되고 관리된다.
    
    (3) const 키워드로 선언한 변수는 선언단계와 초기화 단계가 분리되어 진행되기 때문에, 초기화에 도달하기 전까지 일시적 사각지대에 빠지게 된다. 
    
    (4) 전역 코드에서 this는 전역 객체를 가리키므로, 전역 환경 레코드의 `[[GlobalThisValue]]` 내부 슬롯에는 전역 객체가 바인딩 된다.
    
    (5) 외부 렉시컬 환경에 대한 참조 결정 시, 전역 렉시컬 환경의 외부 외부 렉시컬 환경에 대한 참조에 전역 렉시컬이 할당된다.
    

### 24. 클로저

- 
    - 다음 중 클로저에 대한 설명으로 옳지 않은 것은?
        
        (1) 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명주기가 종료한 외부 함수의 변수를 참조할 수 있다. 이러한 중첩함수를 클로저라고 부른다.
        
        (2) 외부 함수의 생명주기가 종료되었더라도 중첩함수가 이를 [[Environment]] 내부 슬롯으로 참조하고 있다면 외부 함수의 렉시컬 환경은 소멸되지 않는다.
        
        (3) 아래 코드에서 inner은 클로저가 아니다.
        
        ```jsx
        function outer() {
        	const a = 1;
        
        	function inner() {
        		const b = 3;
        		console.log(b);
        	}
        	return inner;
        }
        
        const inner = outer();
        inner();
        ```
        
        (4) 아래 코드에서 inner은 클로저다
        
        ```jsx
        function outer() {
        	const a = 1;
        
        	function inner() {
        		const b = 3;
        		console.log(b);
        	}
        	inner();
        }
        outer();
        ```
        
        (5) 아래 코드에서 inner은 클로저다
        
        ```jsx
        function outer() {
        	const a = 1;
        
        	function inner() {
        		debugger;
        		const b = 3;
        		console.log(a);
        	}
        	return inner;
        }
        const inner = outer();
        inner();
        ```