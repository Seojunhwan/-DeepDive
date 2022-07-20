# Ch4. 변수

<br/>

## 📘 변수(variable)

하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름 ⇒ 값의 위치를 가리키는 상징적인 이름    
<br/>
<br/>


## 📘 var, let, const

### var

- 변수를 재 선언해도 에러가 발생하지 않는다.

```jsx
var name = 'hello'
console.log(name) // hello

var name = 'javascript'
console.log(name) // javascript
```
<br/>

### let

- 변수를 재 선언하면 에러 메세지가 나온다.

```jsx
let name = 'hello'
console.log(name) // hello

let name = 'javascript'
console.log(name) 
// Uncaught SyntaxError: Identifier 'name' has already been declared
```

<br/>

### const

- 변수 재선언, 재할당 모두 불가능하다.

```jsx
const name = 'hello'
console.log(name) // hello

const name = 'javascript'
console.log(name) 
// Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'react'
console.log(name) 
// Uncaught TypeError: Assignment to constant variable.
```

- 반드시 선언과 초기화가 동시에 진행되어야 한다.

```jsx
const name; 
// output: Uncaught SyntaxError: Missing initializer in const declaration
const name = 'javascript';
```

<br/>
<br/>

## 📘 ****스코프 (Scope)****

스코프란 유효한 참조 범위를 뜻하며, 기존의 방법인 var 로 선언한 변수와 let 또는 const 로 선언한 변수의 스코프는 다름.

<br/>

### ****1. var : 함수 레벨 스코프 (function-level scope)****

```jsx
function func() {
	if (true) {
    	var a = 5;
        console.log(a); // 5
    }
    console.log(a); // 5
}

func(); // 5
console.log(a); // ReferenceError: a is not defined
```

함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없음. 즉, 함수 내부에서 선언한 변수는 지역 변수이고 함수 외부에서 선언한 변수는 모두 전역 변수로 취급됨.

<br/>
<br/>

### ****2. let, const : 블록 레벨 스코프 (block-level scope)****

```jsx
function func() {
	if (true) {
    	let a = 5;
        console.log(a); // 5
    }
    console.log(a); // ReferenceError: a is not defined
}

console.log(a); // ReferenceError: a is not defined
```

함수, if문, for문, while문, try/catch문 등의 모든 코드 블록 ({...}) 내부에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없음. 즉, 코드 블록 내부에서 선언한 변수는 지역 변수로 취급됨.

<br/>
<br/>

📚  참고

[https://velog.io/@bathingape/JavaScript-var-let-const-차이점](https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90)

[https://80000coding.oopy.io/e17. 1710-536f-43f2-823b-663389f5fbfa](https://80000coding.oopy.io/e1721710-536f-43f2-823b-663389f5fbfa)

<br/>
<br/>

## 💡 연습문제

**1. 아래 코드 실행시에 출력되는 값과 그 값이 출력되는 이유는?**

```jsx
console.log(score);
var score;
```

<br/>


**2. 아래 식별자 이름들 중 사용할 수 없는 식별자 이름은?**

```
var person;
var first_name;
var this;
var FIRSTNAME;
var 42seoul;
var #sjo;
```

<br/>

**3. 아래 두 코드의 실행결과는? (var, let의 차이)**

```jsx
function func() {
	if (true) {
    	var a = 5;
    }
    console.log(a); 
}

func(); 
```

```jsx
function func() {
	if (true) {
    	let a = 5;
    }
    console.log(a);
}

func(); 
```

<br/>

# Ch5. 표현식과 문

<br/>

**💡 값, 리터럴, 표현식, 문을 설명하시오.**

<br/>

# Ch6. 데이터 타입

<br/>

**💡 undefined와 null의 차이는 무엇인가? undefined 와 undeclared의 차이는 무엇인가?**

<br/>

# Ch7. 연산자

<br/>

**💡 아래 코드 실행 시 결과값을 예상해보세요.**

```jsx
var x = 1;

console.log(x++); 

console.log(++x);

console.log(x--);

var y = true;

console.log(+y);

console.log(y);

console.log(NaN === NaN);
```
<br/>

# Ch8. 제어문

<br/>

**💡 1부터 100까지 100번 반복되는 반복문이 있습니다. 3의 배수일 때는 fizz, 5의 배수일 때는 buzz, 3과 5의 공배수일 때는 fizzbuzz가 출력되는 코드를 작성해보세요. (for loop, while loop 이용)**

<br/>

# Ch9. 타입 변환과 단축 평가

<br/>

**💡 명시적 타입변환, 암묵적 타입변환 두 가지를 이용하여 var x = 10; 을 문자열 형태로 변환해 보시오.**

<br/>

**💡 옵셔널 체이닝 연산자와 null 병합 연산자에 대해 설명하시오.**


