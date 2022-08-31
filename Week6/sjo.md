# Ch35. 스프레드 문법

**💡 아래와 같이 배열과 객체를 스프레드 문법으로 나타냈을때 결과값을 예상해보세요.**

```jsx
[...["hello"]]
[..."hello!"]

const f_name = {f_name: "Sara"}
const l_name = {l_name: "Jo"}

const fullName = {...f_name,...l_name}
console.log(fullName)
```

<br/>

**💡 스프레드 문법을 이용하면 Math 함수를 이용할 때 단 하나의 인자만 전달하여 사용할 수 있습니다. 아래 코드의 결과값을 예상해보세요.**

```jsx
const numbers = [37, -17, 7, 0];
console.log(Math.min(numbers));
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));
```

<br/>

**💡 스프레드 문법은 React의 상태관리에서 배열 아이템을 추가할 때도 유용하게 사용됩니다. 아래 코드를 보고 추가 버튼을 클릭할 때마다 어떤 처리가 실행되는지 예상해보세요.**

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

  // ...
```

<br/>
<br/>

# Ch36. 디스트럭처링 할당

**💡 아래 코드의 결과값을 예상해보세요.**

```jsx
function getScores() {
  return [70, 80, 90, 100];
}

let [x, y, ...args] = getScores();
console.log(x);
console.log(y);
console.log(args);
```

<br/>

**💡 배열 디스트럭처링 할당을 이용하면 손쉽게 두 변수의 값을 맞바꿀 수 있습니다. 아래 두 변수의 값을 코드 한 줄로 서로 바꾸어보세요.**

```jsx
let a = 10;
let b = 20;
```

<br/>
<br/>

# Ch37. Set과 Map

**💡  Object 대신 Map을 사용해야 할 경우에는 어떤 것이 있을까요?**
