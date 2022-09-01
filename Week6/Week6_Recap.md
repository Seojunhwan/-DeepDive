# Week6_Recap

# 34. 이터러블

이터러블 프로토콜 : 순회 가능한 데이터 컬렉션을 만들기 위해 ECMAScript 사양에 정의하여 미리 약속한 규칙.

이터러블 프로토콜을 준수한 객체를 이터러블이라고 하며, for … of 문으로 순회할 수 있고 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.

```jsx
const arrayLike = {
	0: "Hello",
  1: "World",
  length: 2
} // -> 이터러블 아님
5. Array.from(arrayLike) // -> 이터러블 아님
```

- 이터러블, 이터레이터는 무엇인가?
    
    [https://inpa.tistory.com/entry/JS-📚-이터러블-이터레이터-💯완벽-이해](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9D%B4%ED%84%B0%EB%9F%AC%EB%B8%94-%EC%9D%B4%ED%84%B0%EB%A0%88%EC%9D%B4%ED%84%B0-%F0%9F%92%AF%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4)
    

# 35. 스프레드 문법

스프레드 문법은 어떠한 이터러블의 요소들을 값들의 목록으로 만들어주는 문법으로, 값 하나를 반환하는 연산자가 아니고, 따라서 변수에 할당할 수 없다.

스프레드 문법은 Math의 여러 함수들과 같은 곳에 자주 쓰인다.

스프레드 문법은 Rest 파라미터와 형태가 동일하므로 혼동할 수 있다. Rest 문법은 전달된 인자를 하나의 배열로 전달받기 위해 매개변수 이름 앞에 …을 붙이는 것이고, 스프레드 문법은 여러 개의 값이 하나로 뭉쳐 있는 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만드는 것이다.

```jsx
[...["hello"]] // ['Hello']
[..."hello!"]  // ['H', 'e', 'l', 'l', 'o']
```

스프레드 문법은 React의 상태관리에서 배열 아이템을 추가할 때도 유용하게 사용된다.

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // 리액트 훅 선언
  const [searches, setSearches] = useState([]);
  const [query, setQuery] = useState("hello42");

  //추가 버튼을 클릭할 때마다 실행되는 함수
  const handleClick = () => {
    setSearches(searches => [...searches, query])
  }
}
```

# 36. 디스트럭처링 할당

객체 디스트럭처링 할당을 이용하여 함수에 인자를 전달할 수 있다. 기본적으로 함수의 parameter에 기본값을 할당해 사용할 수 있지만, 함수를 호출할 때 값을 명시해주면 명시해준 값이 우선시된다.

```jsx
function printHello({name = 'Lee', age = 10}) {
	console.log(`Hello, My name is ${name}. My age is ${age}`);
}

printHello({name: 'Kim', age: 20}); // Hello, My name is Kim. My age is 20
```

배열 디스트럭처링 할당의 대상은 **이터러블**이어야 하며, 할당 기준은 배열의 **인덱스**이다.

객체 디스트럭처링 할당의 대상은 **객체**이어야 하며, 할당 기준은 **프로퍼티 키**다. 

디스트럭처링 할당 시, 할당할 대상을 주지 않거나 올바르지 않은 타입의 데이터를 대상으로 할당할 경우 오류가 발생한다. 

배열 디스트럭처링 할당을 이용하면 두 변수의 값을 손쉽게 변경할 수 있다.

```jsx
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b); // 20 10
```

# 37. Set과 Map

Set 객체는 요소 순서에 의미가 없다.

Set의 size 프로퍼티와 Map의 size 프로퍼티는 setter 함수가 없어 size 프로퍼티로 Set 객체의 요소 개수를 변경할 수 없다. 

Set의 add 메서드와 Map의 set 메서드는 새로운 객체를 반환하므로 메서드를 호출한 후 메서드를 연속적으로 호출할 수 있다.

Set와 Map의 delete 메서드는 객체의 특정 요소를 삭제하는데 사용되며 연속적으로 호출할 수 없다.

존재하지 않는 Set 객체의 요소 혹은 Map 객체의 요소를 삭제하려 할 경우 에러 없이 무시되고 false를 반환한다.

Set 객체의 요소를 순회하는 forEach 메서드 내 콜백 함수는 3개의 인수를 전달받을 수 있으며, 첫 번째 인수와 두 번째 인수는 일치하는 값이 들어간다.

자바스크립트는 교집합, 합집합, 차집합 등의 집합 연산을 지원하는 내부 메서드가 존재하지 않고, 다른 지원 메서드를 이용해 구현해야 한다.

Map 객체는 이터러블이고, 이터러블이면서 동시에 이터레이터인 객체를 반환하는 메서드를 제공한다.

Object와 Map의 형태는 비슷하다. 하지만 지원하는 것이 다르므로 Object 대신 Map을 사용해야 하는 경우가 있다. Object는 이터러블이 아니고, Map은 이터러블이므로 순회하는데 있어서 Map이 유리하다.