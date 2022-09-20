#### 이벤트

1. 이벤트 캡처링과 버블링에 대해 간단히 설명을 해주세요.
   <br>
2. 아래와 같이 쓰여진 코드는 추후 문제가 발생할 여지가 있습니다. 이유는 무엇이며, 개선한다면 어떻게 개선할 수 있을까요?

```js
const apple = document.getElementById("apple");
const banana = document.getElementById("banana");
const orange = document.getElementById("orange");

const fruitList = document.getElementById("fruit-list");

[apple, banana, orange].forEach((fruit) => {
  fruit.addEventListener("click", () => {
    console.log(fruit);
  });
});
```

<br/>

3. 리액트로 작성한 간단한 모달입니다. 개선할 점이 보이네요! `event 버블링` 을 잘 활용하여 이를 해결해 보세요!

<a><https://stackblitz.com/edit/react-ts-i4smg3?file=App.tsx></a>

#### 타이머

1. `setTimeout` 이나 `setInterval` 함수의 2번째 인자로 주어지는 시간은 `ms` 단위입니다. 이는 해당 시간이 지난 후 1번째 인자인 `콜백함수` 를 실행하라는 의미인데요, 이 때 해당 시간을 정확하게 지키지는 못 할 수 있습니다. 이유가 무엇인가요?
   <br/>
2. `쓰로틀` 이나 `디바운스` 가 무엇이며, 이는 어디에 사용할 수 있는지 설명해 주세요.

> 리액트에서 쓰로틀이나 디바운스와 같은 기법을 활용하여 처리하던 것들을 react 18 버전이 나오며 useDeferredValue 를 활용해 처리할 수 있게 되었습니다.

#### 비동기 처리

1. 한 번에 하나의 명령만 실행이 가능한 싱글 스레드 언어인 자바스크립트가 `setTimeout` 이나 `setInterval`, `HTTP 요청` 등을 `블로킹` 하지 않고 어떻게 처리하나요?

<br/>

2. 이벤트 핸들러 함수는 이벤트가 발생하면 태스크 큐를 거쳐 콜스택에 쌓여 실행된다 (O, X)

<br/>

3. 자바스크립트 엔진은 타이머나 이벤트 루프, 태스크 큐를 제공한다 (O, X)

> 그래도 실행하는 스레드는 하나이기에 게임이나 AI 같은 무거운 연산은 브라우저의 WebWorker (스레드가 많음) 라는 곳에서 담당하게 되며, HTTP 요청이나 캐싱의 경우 ServiceWorker 라는 곳에서 전담하게 됩니다.
