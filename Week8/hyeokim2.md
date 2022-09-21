# 8 week) 40 ~ 43장

### <문제>

### ✏️ 40장 이벤트

1️⃣ 다음의 이벤트 핸들러를 제거할 수 있을까요? 제거할 수 없다면 어떻게 해야하나요 

```html
<body>
<button>hello!</button>
<script>
	const button = document.querySelector('button');
	**button.addEventListener('click', () => console.log('button click'));**
</script>
</body>
```

2️⃣ (1)과 (2)의 결과는?

```jsx
<body>
  <nav>
    <ul id="fruits">
      <li id="apple" class="active">Apple</li>
      <li id="banana">Banana</li>
      <li id="orange">Orange</li>
    </ul>
  </nav>
  <div>선택된 내비게이션 아이템: <em class="msg">apple</em></div>
  <script>
    const $fruits = document.getElementById('fruits');
    const $msg = document.querySelector('.msg');

    function activate(e) {
      [...$fruits.children].forEach($fruit => {
        $fruit.classList.toggle('active', $fruit === e.target);
        $msg.textContent = e.target.id;
        **console.log(e.target); //(1)
        console.log(e.currentTarget); //(2)**
      });
    }

    $fruits.onclick = activate;
  </script>
</body>
```

3️⃣ 위의 코드는 <li> 요소에 이벤트 핸들러를 넣는대신 상위요소인 <ul>에 이벤트 핸들러를 넣었습니다. 이 때 상위 요소에 이벤트 핸들러를 넣었기 때문에 생기는 문제가 있습니다. 어떤 문제가 있을까요? 어떻게 해결할 수 있을까요?

4️⃣

```jsx
<div class="container">
    <button class="btn1">Button 1</button>
    <button class="btn2">Button 2</button>
    <button class="btn3">Button 3</button>
  </div>
  <script>

    document.querySelector('.container').onclick = ({ target }) => {
      if (!target.matches('.container > button')) return;
      target.style.color = 'red';
    };

    document.querySelector('.btn2').onclick = e => {
      **//(a)**
      e.target.style.color = 'blue';
    };
  </script>
```

(1) 위의 코드를 실행시켰을 때  btn2의 색은 무슨 색일까요?

(2) btn2의 색을 blue로 바꾸려면 (a)에 어떤 코드를 넣어야 할까요?

5️⃣ (a)와 (b)와 (c)의 결과는?

```jsx
<body>
  <button onclick="handleClick()">btn</button>
  <button class="btn1">btn1</button>
  <button class="btn2">btn2</button>

  <script>
    const btn1 = document.querySelector('.btn1');
    const btn2 = document.querySelector('.btn2');
    
    function handleClick() {
      console.log(this);   // (a)
    }

    btn1.addEventListener('click', function (e) {
      console.log(this); //(b)
    })

    btn2.addEventListener('click', e => {
        console.log(this); //(c)
    })
</script>
</body>
```

---

### ✏️  41장 타이머

무슨 문제를 내야 하지..

---

### ✏️ 42장 비동기 프로그래밍

1️⃣ 다음 중 아래 코드에 대한 설명으로 옳지 않은 것은?

```jsx
function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
}

setTimeout(foo, 0); //(a)
bar();
```

(1) bar 함수가 먼저 호출되고 그 다음에 foo 함수가 호출된다.

(2) (a)에서 setTimeout 함수가 실행되면, 콜백함수인 foo는 바로 브라우저에 의해 테스크 큐에 푸시된다.

(3) bar 함수는 setTimeout 함수가 실행된 뒤, 콜 스택(실행 컨텍스트)에 푸시된다.

(4) 전역 코드 실행이 종료 된 후, 즉 콜 스택에 아무것도 없을 때 foo가 콜스택에 푸시된다.

(5) 이벤트 루프는 콜 스택이 비어있는지 감지 한다.

2️⃣ 다음 단어에 대한 간단한 설명

1) 콜 스택

2) 힙

3) 테스크 큐

4) 이벤트 루프

---

### ✏️ 43장 Ajax

1️⃣ 전통적인 방식과 비교했을 때 ajax의 장점은 무엇일까요? (hint: 동기&비동기, 렌더링, 데이터 통신)

2️⃣ (a)와 (b)의 결과는?

```jsx
const obj = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis']
};

function filter(key, value) {
  return typeof value === 'string' ? undefined : value;
}

const newObj= JSON.stringify(obj, filter, 2);
console.log(typeof(newObj)); //(a)
console.log(newObj); //(b)
```