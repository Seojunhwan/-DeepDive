# Ch20. strict mode

**💡strict mode의 사용 목적은 무엇이며 strict mode와 유사한 효과를 얻을 수 있는 도구는 무엇이 있는가?**


<br/>
<br/>

# Ch21. 빌트인 객체


**💡 아래 코드에서 str은 원시값을 갖고있음에도 불구하고 객체처럼 프로퍼티에 접근하거나 메서드를 호출할 수 있는 이유는 무엇인가?**

```jsx
const str = 'hello';

console.log(str.length);    // 5
console.log(str.toUpperCase());    // HELLO
```

<br/>

**💡 아래 코드의 출력값은 무엇이며, 그렇게 출력되는 이유는 무엇인가?**

```jsx
var a = 5;
console.log(window.a); 

let b = 5;
console.log(window.b); 
```

<br/>

**💡 아래 코드의 출력값을 예상해보세요.**
```jsx
let year = "20 years";
let yearAfter = "years 20";

console.log(parseInt(year));
console.log(parseInt(yearAfter));
```

<br/>
<br/>

# Ch22. this

**💡 아래 코드의 출력값을 예상해보세요.**

1.
```jsx
const obj = {
    function foo() {
        console.log(this);
    }
};
obj.foo();
```

2.
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

3.
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

<br/>
<br/>

# Ch23. 실행 컨텍스트

**💡 다음 코드가 실행 컨텍스트 스택에 어떤 순서로 push 되는가?**

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

<br/>

**💡렉시컬 환경과 실행 컨텍스트의 역할을 각각 설명하시오.**


<br/>
<br/>

# Ch24. 클로저

**💡클로저 함수의 장점 2가지를 말해보시오.**

<br/>

**💡Free variable 이란 무엇이며, 아래 코드에서 Free variable 을 찾아보시오.**

```jsx
var x = 10;

function foo() {
	var y = 20;

	function bar() {
		var z = 15;
		var output = x + y + z;
		return output;
	}

	return bar;
}
```

<br/>

**💡 중첩 함수가 클로저로 분류되기 위한 두 가지 조건은?**