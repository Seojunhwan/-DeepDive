## 이벤트 버블링과 이벤트 위임

**1. 아래 코드의 p태그 영역을 클릭했을 때 alert 이벤트는 몇 번 발생할까요?**

[코드](https://codepen.io/gywn-dev/pen/jOxwjdZ)

(1) 1번 (2) 3번 (3) 5번

이유도 생각해 보세요!

<details>
<summary> 해설 </summary>

1. 이벤트 캡처링에 따라 document 객체에서부터 p태그까지 이벤트 객체가 전파됩니다. <u>이 때, 이벤트 핸들러 어트리뷰트 방식으로 등록했으므로 핸들러가 캐치하지 못해서 alert문이 작동하지는 않습니다.</u>
2. `<p>` 에 할당된 `onclick` 핸들러가 동작합니다.
3. 바깥의 `<div>` 에 할당된 핸들러가 동작합니다.
4. 그 바깥의 `<form>` 에 할당된 핸들러가 동작합니다.
5. `document` 객체를 만날 때까지, 각 요소에 할당된 `onclick` 핸들러가 동작합니다.

alert의 내부 코드를 `eventPhase` 를 출력하도록 바꾸면 이를 확인해볼 수 있습니다.(p.773)

</details>

<br/>

**2. React 에서 DOM 요소 기본동작 방지하기**

브라우저 기본 동작을 취소할 수 있는 방법은 두 가지가 있습니다.

1. 첫 번째 방법은 `event` 객체를 사용하는 것입니다. 이때 `event` 객체에 구현된 `event.preventDefault()` 메서드를 사용합니다.
2. 핸들러가 `addEventListener`가 아닌 `on<event>`를 사용해 할당되었다면 `false`를 반환하게 해 기본 동작을 막을 수도 있습니다.

책 p.760을 참고하면 React는 모던 자바스크립트 생태계의 일부로, 이벤트 핸들러 어트리뷰트 방식(위의 2번 방식)을 사용 중임을 알 수 있습니다.

[코드](https://codepen.io/gywn-dev/pen/OJZgKJg)

```jsx
const element = (
  <form onsubmit="console.log('You clicked submit.'); return false">
    <button type="submit">Submit</button>
  </form>
);
ReactDOM.render(element, document.getElementById("root"));
```

일반 HTML의 폼에서 타입이 submit 인 버튼을 누르면 데이터가 전송되는 것이 기본 동작입니다.

따라서 위 코드의 의도대로라면 서버로 아무것도 전송되지 않고, console.log에 해당하는 문자열만 출력되어야 합니다.

하지만 개발자 도구로 출력해 보면 서버로 데이터가 전송되며 404 에러를 발생시킨 것을 확인할 수 있습니다.

즉 리액트에서는 return false 방식으로 기본 동작을 제어하는 것을 허용하지 않고 있는 것인데요.

기본 동작을 방지하려면 위 코드를 어떻게 바꿀 수 있을까요? (위의 두 방식 중 1번 방식을 사용하면 될 것 같습니다!)

<details>
<summary> 해설 </summary>

```jsx
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

</details>

<details>
<summary> 참고 </summary>

[왜 리액트는 return false를 금지했는지?](https://stackoverflow.com/questions/31191841/react-js-cant-return-false-anymore-is-there-an-equivalent)

[이유 2](https://stackoverflow.com/questions/49856490/preventdefault-vs-return-false-when-it-comes-to-reactjs)

짧게 요약하자면, 리액트가 가상 DOM API를 활용하는 라이브러리이기 때문입니다.

[공식문서](https://ko.reactjs.org/docs/events.html)에 따르면, 리액트에서 이벤트 핸들러는 모든 브라우저에서 이벤트를 동일하게 처리하기 위한 이벤트 래퍼 `SyntheticEvent` 객체를 전달받습니다. `stopPropagation()` 과 `preventDefault()`를 포함해서 인터페이스는 브라우저의 고유 이벤트와 같지만 모든 브라우저에서 동일하게 동작합니다.

브라우저의 고유 이벤트가 필요하다면 `nativeEvent` 어트리뷰트를 참조해야 합니다. 리액트의 **합성 이벤트는 브라우저 고유 이벤트에 직접 대응되지 않으며 다릅니다.**

리액트의 이벤트 핸들러 내부에서 return false 하는 것은, 실제 DOM 트리를 통해 전파/발생되는 nativeEvent가 아니라 **리액트의 가상 DOM 상에서 발생하는 syntheticEvent에게** false를 돌려주는 것과 같습니다.

이 때 리액트의 가상 DOM은 단지 리액트에서 제공하는 API로서 실제 DOM과는 다르게 작동할 수 있으므로, 이벤트 핸들러의 return 값 역시 실제 DOM과 다르게 사용할 가능성이 있습니다. 이로 인해 명시적으로 핸들러 내부에서 preventDefault 메서드를 사용할 것이 강제됩니다!

</details>
