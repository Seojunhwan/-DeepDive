# Ch10. 객체 리터럴

**💡 다음 중 에러가 발생하는 코드를 모두 골라보세요.**

1.

```jsx
var foo = {
  "": "",
};

console.log(foo);
```

<br/>

2.

```jsx
var foo = {
  var: "",
  function: "",
};

console.log(foo);
```

<br/>

3.

```jsx
var person = {
	first-name: 'Sara',
	last-name: 'Jo'
};
```

<br/>

4.

```jsx
var foo = {
  name: "Sara",
  name: "Jo",
};

console.log(foo);
```

<br/>

5.

```jsx
var person = {
  name: "Lee",
};

console.log(person[name]);
```

<br/>

6.

```jsx
var person = {
  name: "Lee",
};

console.log(person.age);
```

<br/>

7.

```jsx
var person = {
  name: "Lee",
};

person.age = 20;

delete person.age;
delete person.address;
```

<br/>
<br/>

# Ch11. 원시 값과 객체의 비교

<br/>

**💡 결과 값을 예상해보세요.**

1.

```jsx
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const copiedObj = { ...obj };

copiedObj.b.c = 3;

console.log(obj === copiedObj);
console.log(obj.b.c === copiedObj.b.c);
```

<br/>

2.

```jsx
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

function copyObj(obj) {
  const result = {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      result[key] = copyObj(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

const copiedObj = copyObj(obj);

copiedObj.b.c = 3;

console.log(obj.b.c === copiedObj.b.c);
```

<br/>

3.

```jsx
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const copiedObj = JSON.parse(JSON.stringify(obj));

copiedObj.b.c = 3;

console.log(obj.b.c === copiedObj.b.c);
```

<br/>

**💡 객체가 원시 값이 아닌 변경 가능한 값을 갖는 이유는 무엇일까?**

<br/>
<br/>

# Ch11. 함수

**💡 결과 값을 예상해보세요.**

1.

```jsx
function add(x, y) {
  return x + y;
}

console.log(add(2));
console.log(add("a", "b"));
console.log(add(2, 5, 10));
```

<br/>

2.

```jsx
const myFunc = (str) => {
  if (str.length > 1) {
    return myFunc(str.slice(1));
  }

  return str;
};

console.log(myFunc("Hello world"));
```

<br/>
<br/>

# Ch13. 스코프

**💡 결과 값을 예상해보세요.**

1.

```jsx
var text = "outside";
function logIt() {
  console.log(text);
  var text = "inside";
}
logIt();
```

<br/>

2.

```jsx
function foo() {
  let a = (b = 0);
  a++;
  return a;
}
foo();
console.log(typeof a);
console.log(typeof b);
```
