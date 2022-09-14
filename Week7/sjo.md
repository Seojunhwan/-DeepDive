# Ch38. 브라우저의 렌더링 과정

**💡 `HTTP/1.1`과 `HTTP/2.0`의 차이점에 대해 설명해보세요.**

<details>
<summary><strong>정답 확인</strong></summary>

`HTTP/1.1`은 리소스의 동시 전송이 불가능하여 요청할 리소스의 개수에 비례하여 응답 시간도 증가한다. 반면, `HTTP/2.0`은 다중 요청/응답이 가능하여 페이지 로드 속도가 더 빠르다.

</details>

<br/>
<br/>

**💡 DOM이 무엇인지 한 줄로 설명해보세요.**

<details>
<summary><strong>정답 확인</strong></summary>

HTML 요소 간의 부자 관계를 반영하여 모든 노드들을 트리 자료구조로 구성한 것. HTML 문서를 파싱한 결과물.

</details>

<br/>
<br/>

# Ch39. DOM

**💡 `ele` 요소의 부모요소를 선택하는 코드는?**

<br/>

A) `ele.parentElement`

B) `ele.parentContainer`

C) `ele.parentNode`

D) `ele.getParent()`

<br/>

<details>
<summary><strong>정답 확인</strong></summary>

C

</details>

<br/>
<br/>

**💡 `document.getElementById("t1").childNodes[0]` 는 무엇을 반환할까요?**

```html
<div id="t1">
  <p>A paragraph</p>
</div>
```

A) 텍스트 노드

B) 요소 노드

C) 주석 노드

<br/>

<details>
<summary><strong>정답 확인</strong></summary>

A

</details>

<br/>
<br/>

**💡 `#div1`은 변수 `div1`에, `#div2`는 `div2`에 저장되어 있을 때, 아래 표시된 위치에 `ele`노드를 추가하기 위한 코드로 옳은 것은?**

```html
<div id="div1">I am Div1</div>
<!--Add ele here-->
<div id="div2">I am Div2</div>
```

A) `div1.appendChild(ele)`

B) `div2.appendChild(ele)`

C) `div2.parentNode.insertBefore(div2, ele)`

D) `div2.parentNode.insertBefore(ele, div2)`

<br/>

<details>
<summary><strong>정답 확인</strong></summary>

D: `insertBefore()`의 첫 번째 인수는 추가할 노드이고 두 번째 인수는 추가할 자식의 다음에 위치할 자식입니다.

</details>
