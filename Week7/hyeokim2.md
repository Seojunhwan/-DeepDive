# 7 week) 38 - 39장

[mjs/39.md at master · wikibook/mjs](https://github.com/wikibook/mjs/blob/master/39.md)

# 38 - 39장 문제

### **38장: 브라우저의 렌더링 과정**

- 브라우저의 렌더링 과정 설명에 들어갈 알맞은 단어를 찾으세요

<aside>
💡 1) 브라우저는 HTML, CSS, 자바스크립트, 이미지, 폰트파일 등 렌더링에 필요한 리소스를 **요청**하고 서버로부터 **응답** 받음
2) 렌더링 엔진은 서버로부터 응답된 HTML, CSS를 **파싱**하여 ****1️⃣ 와 2️⃣ 을 생성하고 이를 결합하여 3️⃣ **생성**
3) 자바스크립트 엔진은 서버로부터 응답된 자바스크립트를 파싱하여 AST(Abstract Syntax Tree) 생성, 바이트 코드**로 변환하여 실행.** 이때 자바스크립트는  1️⃣API를 통해 1️⃣ 이나 2️⃣ 을 변경 할 수 있다. 변경된 1️⃣과 2️⃣은 다시 3️⃣ 결합
4) 3️⃣를 기반으로 HTML 요소의 레이아웃 계산, 브라우저 화면에 HTML 요소를 **페인팅한다.**

<details>
<summary>정답</summary>
<div markdown="1">       
1: DOM
2: CCSOM
3: 렌더트리
</div>
</details>

</aside>

- 자바스크립트 파싱과 실행은 브라우저의 렌더링 엔진이 관리한다. ⭕ ❌
- DOM은 _ _ _ _ 문서를 파싱한 결과물이다. _ _ _ _ 요소 간에는 중첩 관계에 의해 부자 관계가 생성된다. 이 관계를 반영하여 모든 노드들을 트리 자료 구조로 구성한다. 이 노드들로 구성된 트리 자료구조를 DOM 이라고 부른다.
<details>
<summary>정답</summary>
<div markdown="1">       
1) 정답은 X. 자바스크립트 파싱과 실행은 자바스크립트 엔진이 관리한다. 
-> 렌더링 엔진은 HTML 파싱하다가 자바스크립트를 로드하는 태그를 만나면 DOM 생성을 중단하고 자바스크립트 엔진에 제어권을 넘긴다. 자바스크립트 엔진은 자바스크립트를 해석하여 AST (추상적 구문 트리)를 생성한다.

2) 정답은 HTML

</div>
</details>


### 39장: DOM

- 다음은 DOM이 생성되는 과정에 대한 설명이다. 빈칸에 들어갈 알맞은 단어를 찾으세요

<aside>
💡 1) HTML 요소는 렌더링 엔진에 의해 파싱되어, DOM을 구성하는 요소 노드 객체로 변환된다.
2) HTML 요소의 어트리뷰트는 1️⃣ 노드로, HTML 요소의 텍스트 콘텐츠는 2️⃣ 노드로 변환된다.
3) HTML 요소 간의 부자 관계를 반영하여 HTML 요소를 객체화한 모든 노드 객체들을 트리 자료 구조로 구성한다.
**→ 노드 객체들로 구성된 트리 자료 구조를 DOM이라고 한다!**

<details>
<summary>정답</summary>
<div markdown="1">       
1) 어트리뷰트
2) 텍스트
</div>
</details>

</aside>

- 위에서 말한 1️⃣ 노드와 2️⃣ 노드, 그리고 요소노드를 아래의 DOM tree에서 찾는다면 어떤 것일까요?

![사진 출처: [https://im-developer.tistory.com/100](https://im-developer.tistory.com/100)](7%20week)%2038%20-%2039%E1%84%8C%E1%85%A1%E1%86%BC%200cd677dc45ef4706be4ced7c5311ee5c/Untitled.png)

사진 출처: [https://im-developer.tistory.com/100](https://im-developer.tistory.com/100)

- DOM은 HTML 문서의 계층적 구조와 정보를 표현하는 것은 물론 노드 객체의 종류, 즉 노드 타입에 따라 필요한 기능을 프로퍼티와 메서드의 집합인 1️⃣로 제공한다.  1️⃣를 통해 HTML 구조나 내용 또는 스타일 등을 동적으로 조작할 수 있다.
- 위의 1️⃣은 보통 자바스크립트로 HTML을 제어할 때 사용하는 여러가지 명령이다. ⭕ ❌

<details>
<summary>정답</summary>
<div markdown="1">       
1) DOM API
2) O. 그렇지만 DOM API = JavaScript인 건 아님

</div>
</details>

- 다음 자바스크립 코드에서 단계마다 일어날 일에 대해 추측해보세요

```jsx
...
<body>
    <ul id="fruits">
        <li>Apple</li>
    </ul>
**<script>
    const fruits = document.getElementById('fruits'); 1️⃣
    fruits.innerHTML = '<li>Orange</li>' 2️⃣
    const list = document.createElement('li'); 3️⃣
    const textNode = document.createTextNode('Banana'); 4️⃣
    list.appendChild(textNode); 5️⃣
    fruits.appendChild(list); 6️⃣
    fruits.removeChild(fruits.firstElementChild); 7️⃣
</script>**
...
```
<details>
<summary>정답</summary>
<div markdown="1">       
1) id가 fruits인 요소를 가져온다. (여기선 ul 태그)
2) fruits안에 <li>Orange<li>를 추가한다. 이때 값이 덮어쓰여져서 원래 있던 Apple은 사라진다.
3) list라는 새로운 li 요소를 만든다.
4) Banana라는 텍스트 노드를 만든다.
5) list에 텍스트 노드를 추가한다. (Banana가 추가된다)
6) fruits의 첫번째 요소를 지운다. (Orange가 사라진다)
</div>
</details>

**<문제 끝>**

---

# **38장: 브라우저의 렌더링 과정**

브라우저가 HTML, CSS, 자바스크립트로 작성된 텍스트를 어떻게 파싱(해석)하여 브라우저에 렌더링하는지 살펴보자

<aside>
💡 **브라우저의 렌더링 과정**

1) 브라우저가 렌더링에 필요한 리소스를 **요청**하고 서버로부터 **응답** 받음
2) (렌더링 엔진) 서버로부터 응답된 HTML, CSS를 **파싱**하여 **DOM**과 **CSSOM**을 생성하고 이를 결합하여 **렌더트리 생성**
3) (자바스크립트 엔진) 서버로부터 응답된 자바스크립트를 파싱하여 AST(Abstract Syntax Tree) 생성, **바이트코드로 변환하여 실행.** 이때 자바스크립트는 DOM API를 통해 DOM이나 CSSOM을 변경 할 수 있다. 변경된 DOM과 CSSOM은 다시 렌더트리 결합
4) 렌더트리를 기반으로 HTML 요소의 레이아웃 계산, 브라우저 화면에 HTML 요소를 **페인팅**

</aside>

 

### ☑️ **38.1 요청과 응답**

- 브라우저의 핵심 기능: 렌더링에 필요한 리소스를 서버에 요청하고 서버가 응답한 리소스를 파싱하여 렌더링
- 서버에 요청 전송하기 위해 브라우저는 주소창을 제공. 엔터키를 누를 시 URL의 호스트 이름(도메인?)은 DNS를 통해 IP 주소로 변환, 이 IP를 갖는 서버에서 요청을 전송함
    
    ![Untitled](7%20week)%2038%20-%2039%E1%84%8C%E1%85%A1%E1%86%BC%200cd677dc45ef4706be4ced7c5311ee5c/Untitled%201.png)
    
- 요청과 응답은 개발자 도구의 network 패널에 확인할 수 있다.
    
    

### ☑️ 38.2 HTTP 1.1과 HTTP 2.0

- HTTP1.1은 기본적으로 커넥션당 하나의 요청과 응답만 처리한다. → 동시 전송이 불가능한 구조. 요청이 많을수록 응답 시간 길어짐
- HTTP2.0은 다중요청/응답이 가능

### ☑️ **38.3 HTML 파싱과 DOM 생성**

- **(브라우저의 렌더링 엔진)** 응답받은 HTML 문서를 파싱하여 브라우저가 이해할 수 있는 자료구조인 **DOM(Document Object Model)**을 생성한다.

1) 바이트 `1010…`

→ 서버에 존재하던 HTML 파일이 브라우저의 요청에 의해 응답된다. 브라우저는 서버가 응답한  HTML 문서를 바이트 형태로 응답받는다. 

2) 문자 `<html><head>…</html>` 

→ 바이트형태의 HTML 문서는 meta 태그의 charset 어트리뷰트에 의해 지정된 인코딩 방식을 기준으로 문자열로 변환된다.

3) 토큰 `{startTag: ‘html’…}` 

→ 문자열로 변환된 HTML 문서를 읽어 들여 문법적 의미를 갖는 코드의 최소 단위인 토큰들로 분해

4)  노드 `html head meta …` 

→  각 토큰들을 객체로 변환하여 노드를 생성. 이는 DOM을 구성하는 기본요소가 된다.

5) **DOM**

→ HTML 요소는 중첩 관계를 갖는다. HTML 요소 간에는 중첩 관계에 의해 부자 관계가 생성된다. 이 관계를 반영하여 모든 노드들을 트리 자료 구조로 구성한다. 이 노드들로 구성된 트리 자료구조를 DOM이라 부른다.

- **즉 DOM은 HTML 문서를 파싱한 결과물이다.**
    
    ![Untitled](7%20week)%2038%20-%2039%E1%84%8C%E1%85%A1%E1%86%BC%200cd677dc45ef4706be4ced7c5311ee5c/Untitled%202.png)
    

### ☑️ **38.4 CSS 파싱과 CSSOM 생성**

- **렌더링 엔진**은 HTML을 한줄씩 파싱하며 DOM을 생성, 그러다가 CSS를 로드하는 태그를 만나면 DOM 생성을 일시 중단하고 CSSOM을 생성한다. CSS 파싱 완료되면 다시 HTML 파싱

![Untitled](7%20week)%2038%20-%2039%E1%84%8C%E1%85%A1%E1%86%BC%200cd677dc45ef4706be4ced7c5311ee5c/Untitled%203.png)

### ☑️ **38.5 렌더 트리 생성**

- 렌더링 엔진이 HTML과  CSS를 파싱하면 DOM과 CSSOM이 만들어지고 이 둘은 렌더 트리로 결합된다. **렌더 트리**는 렌더링을 위한 트리의 자료구조다. → 이를 바탕으로 레이아웃 계산 및 브라우저 화면에 픽셀을 렌더링하는 페인팅 처리에 입력됨
- 브라우저의 렌더링 과정은 반복해서 실행될 수 있다.

### ☑️ **38.6 자바스크립트 파싱과 실행**

- **자바스크립트 파싱과 실행**은 브라우저의 렌더링 엔진이 아닌 자바스크립트 엔진이 처리
- 렌더링 엔진은 HTML 파싱하다가 자바스크립트를 로드하는 태그를 만나면 DOM 생성을 중단하고 자바스크립트 엔진에 제어권을 넘긴다. 자바스크립트 엔진은 자바스크립트를 해석하여 AST (추상적 구문 트리)를 생성한다.
- 파싱의 결과물로서 생성된 AST는 중간 코드인 바이트 코드로 변환되고 인터 프리터에 의해 실행된다…

![Untitled](7%20week)%2038%20-%2039%E1%84%8C%E1%85%A1%E1%86%BC%200cd677dc45ef4706be4ced7c5311ee5c/Untitled%204.png)

### ☑️ 38.7 리플로우와 리페인트

- **리플로우, 리페인트**: 자바스크립트 코드에 DOM이나 CSSOM을 변경하는 DOM API가 사용되면? DOM이나 CSSOMD이 변경된다. → 변경된 DOM과 CSSOM은 다시 렌더 트리로 결합 → 변경 사항 적용해 레이아웃과 페인트 과정 거쳐 리렌더링함

![Untitled](7%20week)%2038%20-%2039%E1%84%8C%E1%85%A1%E1%86%BC%200cd677dc45ef4706be4ced7c5311ee5c/Untitled%205.png)

- 리플로우: 레이아웃 다시 계산 / 리페인트: 재결합된 렌터 트리를 기반으로 다시 페인트 하는 것

→ 레이아웃에 영향이 없으면 리페인트만 실행됨!

### ☑️ 38.8 자바스크립트 파싱에 의한 HTML 파싱 중단

- 순차적으로 파싱하기 때문에 자바스크립트 코드에서 DOM을 변경하는 DOM API를 사용했는데 DOM 생성이 완료되지 않은 경우 문제가 발생할 수도 있다.

→ body의 가장 밑에 <script> 넣기

### ☑️ 38.9 script 태그의 async/defer 어트리뷰트

- 위 문제를 해결하기 위해 script 태그에 async와 defer 어트리뷰트 추가
- async는 HTML 파싱과 외부 자바스크립트 로드가 비동기적으로 동시에 진행되므로 순서보장이 필요할 경우 사용X
- defer의 경우 DOM 생성이 완료된 직후에 자바스크립트 파싱과 실행 진행. 고로 DOM 생성이 완료된 이후 실행되어야 할 자바스크립트에 유용

---

# 39장: DOM

- DOM은 HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조다.

### ☑️ 39.1 노드

### ➡️ **39.1.1 HTML 요소와 노드 객체**

- HTML 요소는 렌더링 엔진에 의해 파싱되어 DOM을 구성하는 요소 노드 객체로 변환
- HTML 요소의 어트리뷰트는 어트리뷰트 노드로, HTML 요소의 텍스트 콘텐츠는 텍스트 노드로 변환된다.
- HTML 요소 간의 부자 관계를 반영하여 HTML 요소를 객체화한 모든 노드 객체들을 **트리 자료 구조로 구성한다.**

**→ 노드 객체들로 구성된 트리 자료구조를 DOM이라고 한다!**

### **➡️ 39.1.2 노드 객체의 타입**

- 노드 객체엔 12개의 종류 (노드 타입)이 있다.
    
    (1) 문서 노드: DOM 트리 최상위에 존재하는 루트 노드. document 객체 가리킴
    
    (2) 요소 노드:  HTML 요소를 가리키는 객체 (문서의 구조를 표현)
    
    (3) 어트리뷰트 노드:  HTML 요소의 어트리뷰트를 가리킨다. 지정된 요소 노드와 연결되어 있다. 어트리뷰트 노드에 접근하려면 먼저 요소 노드에 접근해야 함
    
    (4) 텍스트 노드: HTML 요소의 텍스트를 가리킴. 텍스트 노드도 접근하려면 요소 노드에 접근해야 함.
    
    … 그 외 여러개가 있음
    

### **➡️ 39.1.3 노드 객체의 상속 구조**

![Untitled](7%20week)%2038%20-%2039%E1%84%8C%E1%85%A1%E1%86%BC%200cd677dc45ef4706be4ced7c5311ee5c/Untitled%206.png)

- 노드 객체도 자바스크립트 객체이므로 프로토타입에 의한 상속 구조를 갖는다.

ex) input 요소 노드 객체는 HTMLInputElement, HTMLElement, Element, Node, EventTarget, Object의 prototype에 바인딩되어 있는 프로토타입 객체를 상속 받는다. 즉 input 요소 노드 객체는 프로토타입 체인에 있는 모든 프로토타입의 프로퍼티나 메서드를 상속받아 사용할 수 있다.

- 노드 객체의 상속 구조는 개발자 도구의 Element 패널 우측의 Properties 패널에서 확인할 수 있다.

**→ DOM은 HTML 문서의 계층적 구조와 정보를 표현하는 것은 물론 노드 객체의 종류, 즉 노드 타입에 따라 필요한 기능을 프로퍼티와 메서드의 집합인 DOM API로 제공한다. DOM API를 통해 HTML 구조나 내용 또는 스타일 등을 동적으로 조작할 수 있다.**

**→ 상속 구조를 자세히 알아야 할 필요는 없다….**

---

### ☑️ 39.2 요소 노드 취득

**➡️ 39.2.1 id를 이용한 요소 노드 취득**

- `**document/element.getElementById**(’banana’);`
- 존재하지 않을 경우 null 반환

**➡️ 39.2.2 태그 이름을 이용한 요소 노드 취득**

- `**document/element.getElementsByTagName(’li’);**`
- DOM 컬렉션 객체인 HTMLCollection 객체 반환. 유사 배열 객체면서 이터러블임
- 없으면 빈 HTMLCollection 객체 반환
- 모든 요소 취득 ‘*’

**➡️ 39.2.3 class를 이용한 요소 노드 취득**

- `**document/element.getElementsByClassName(’friut’);**`
- HTMLCollection 객체 반환
- 취득한 모든 요소 노드의 style.color 프로퍼티값 바꾸기

```jsx
[...$apples].forEach(elem => { elem.style.color = 'blue'; }
```

**➡️ 39.2.4 CSS 선택자를 이용한 요소 노드 취득**

- 인수로 전달한 CSS 선택자를 만족시키는
- `**document/element.querySelector('.banana');` → 하나만**
- `**document/element.querySelectorAll('ul > li');` → 모두**
    
    → 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 NodeList를 반환한다.
    
- 모든 요소 취득 ‘*’

→ id 어트리뷰트가 있는 요소 노드를 취득하는 경우 getElementById 메서드 사용, 그 외에는 querySelector, querySelectorAll 사용하는 걸 권장

➡️ **39.2.5 특정 요소 노드를 취득할 수 있는지 확인**

- `**$apple.matches( #fruits > li.apple’));**`
- true / false
- 이벤트 위임을 사용할 때 유용

**➡️ 39.2.6 HTMLCollection과 NodeList**

- 둘 다 DOM API가 여러개 결과값을 반환하기 위한 DOM 컬렉션 객체
- 둘 다 유사 배열 객체이면서 이터러블
- 살아있는 객체라는 점. HTMLCollection은 언제나 live 객체로 동작, 그러나 NodeList는 대부분의 경우 정적 상태를 유지하는 non-live 객체. 경우에 따라 live 객체로 동작하기도.

- HTMLCollection
    - `getElementsByTagName`, `getElementsByClassName`메서드가 반환
    - 노드 객체의 상태 변화를 실시간으로 반영하는 살아있는 DOM 컬렉션 객체
    - 실시간으로 반영하기 대문에 for문으로 노드 객체 상태 변경할 때 주의. for문을 역방향으로 순회하거나 while 문으로 노드 객체가 남아있지 않을때까지 반복하거나… 제일 좋은 방법은 배열로 변환하여 forEach를 쓰는 것!
    
- NodeList
    - `querySelectorAll`메서드의 반환
    - 실시간으로 노드 객체의 상태 변경 반영 안함
    - 근데 childNodes 프로퍼티가 반환하는 NodeList 객체는 라이브 객체임

**→ 이런 번거로움 피하려면 HTMLCollection이든 NodeList 객체든 배열로 변환하여 사용하자**

---

### **☑️ 39.3 노드 탐색**

- 요소 노드를 취득한 다음, 취득한 요소 노드를 기점으로 DOM 트리의 노드의 옮겨다니며 부모, 형제, 자식 노드 등을 탐색해야 될 때가 있다.
- DOM 트리 상의 노드를 탐색할 수 있도록 Node, Element 인터페이스는 트리 탐색 프로퍼티를 제공한다.
- 노드 탐색 프로퍼티는 읽기 전용 접근자 프로퍼티다. (값 할당X)

**➡️ 39.3.1 공백 텍스트 노드**

![회색이 공백 텍스트 노드](7%20week)%2038%20-%2039%E1%84%8C%E1%85%A1%E1%86%BC%200cd677dc45ef4706be4ced7c5311ee5c/Untitled%207.png)

회색이 공백 텍스트 노드

- HTML 요소 사이의 스페이스, 탭, 줄바꿈 등의 공백 문자가 생성한 텍스트 노드.

**➡️ 39.3.2 자식 노드 탐색**

- 자식 노드를 탐색하기 위한 노드 탐색 프로퍼티들 *(유용하게…쓰이나?)*

ex) `$fruits.childNodes`

| Node.prototype.childNodes  | 자식 노드를 모두 탐색해 Nodelist에 담아 반환. 요소 노드뿐만 아니라 텍스트 노드도 포함됨 |
| --- | --- |
| Element.prototype.children  | 자식 노드 중 요소 노드만 탐색해 HTMLCollection에 담아 반환. 텍스트 노드가 포함x |
| Node.prototype.firstChild | 첫번째 자식 노드 반환. 텍스트 노드거나 요소 노드 |
| Node.prototype.lastChild  | 마지막 자식 노드 반환. 위랑 동일 |
| Element.prototype.firstElementChild | 첫번째 자식 요소 노드 반환. 요소 노드만 |
| Element.prototype.lastElementChild | 마지막 자식 요소 노드 반환. 위랑 동일 |

**➡️ 39.3.3 자식 노드 존재 확인**

- `**Node.prototype.hasChildeNodes**`
- 텍스트 요소 포함 자식 노드 확인

`ex) $fruits.hasChildNodes();`

- 텍스트 노드가 아닌 요소 노드만 존재하는지 확인하려면 children.length 혹은 childElementCount 프로퍼티 사용

**➡️ 39.3.4 요소 노드의 텍스트 노드 탐색**

- 요소 노드의 텍스트 노드는 요소 노드의 자식 노드!!

→ 요소 노드의 텍스트 노드는 firstChild 프로퍼티로 접근 가능.

→ 물론 firstChild가 반환한 건 요소노드거나 텍스트 노드…?

`ex) document.getElementById(’foo’).firstChild //#text`

**➡️ 39.3.5 부모 노드 탐색**

- `Node.prototype.parentNode` 프로퍼티 사용

`ex) $banana.prantNode // ul#fruits`

**➡️ 39.3.6 형제 노드 탐색**

| Node.prototype.previousSibling | 텍스트 노드 or 요소 노드 |
| --- | --- |
| Node.prototype.nextSibling | 텍스트 노드 or 요소 노드 |
| Node.prototype.previousElementSibling | 요소 노드만 |
| Node.prototype.nextElementSibling | 요소 노드만 |

### **☑️ 39.4 노드 정보 취득**

- 노드 객체에 대한 정보를 취득하려면 다음과 같은 노드 정보 프로퍼티 사용 (`nodeType, nodeName`)

### **☑️ 39.5 요소 노드의 텍스트 조작**

**➡️ 39.5.1 nodeValue**

- 노드 객체의 nodeValue 프로퍼티를 참조하면 노드 객체의 값을 반환 (= 텍스트 노드의 텍스트. 따라서 요소 노드나 문서 노드를 참조하면 null반환)

```jsx
$textNode.nodeValue = 'World'
```

**➡️ 39.5.2 textContent**

- 요소 노드의 textContent 프로퍼티를 참조하면, 요소 노드의 childNodes 프로퍼티가 반환한 모든 노드들의 텍스트 노드의 값, 즉 텍스트를 모두 반환한다.

```jsx

...
//#foo 요소 노드의 모든 자식 노드가 제거되고 할당된 문자열이 텍스트로 추가된다.
//이때 HTML 마크업이 파싱되지 않는다 -> 그냥 다 문자열로 들어감

document.getElementById('foo').textContent = 'Hi <span>there!</span>';

```

- nodeValue 프로퍼티는 textContent와 비교했을 때 코드가 더 복잡
- innerText도 비슷한 역할을 하는데, CSS를 고려해야 해서 textContent 프로퍼티보다 느리다.

---

### **☑️ 39.6 DOM 조작**

- 새로운 노드를 생성하여 DOM 추가하거나 기존 노드를 삭제, 교체하는 것

→ 리플로우와 리페인트가 발생!! 성능 저하의 원인이 되기도

**➡️ 39.6.1 innerHTML**

- `Element.prototype.innerHTML`
- 요소 노드의 콘텐츠 영역 내에 포함된 모든 HTML 마크업을 문자열로 반환한다.
- 문자열 할당하면 요소 노드의 모든 자식 노드가 제거, 할당된 문자열에 포함되어 있는 HTML 마크업이 파싱되어 요소 노드의 자식 노드로 DOM에 반영됨
- (문제점1) 근데 사용자로부터 입력받은 데이터를 그대로 innerHTML 프로퍼티에 할당하는 것은 크로스 사이트 스크립팅 공격에 취약함! → HTML 새니티제이션으로 잠재적 위험을 제거하기도…. → DOMPurify
- (문제점2) 기존의 자식 노드까지 모두 제거하고 처음부터 다시 새롭게 자식 노드를 생성해야 하므로 효율적이지 않음!
- (문제점3) 삽입 위치 지정 못함. 무조건 마지막에 넣어짐 → `**insertAdjacentHTML**` 메서드를 사용합시다

**➡️ 39.6.2 insertAdjacentHTML 메서드**

- `Element.prototype.insertAdjacentHTML(position, DOMStirng)`
- 기존 요소를 제거하지 않으면서 위치를 지정해 새로운 요소를 삽입함
- 첫번째 인수(삽입할 위치): beforebegin, afterbegin, beforeend, afterend

**➡️ 39.6.3 노드 생성과 추가**

- 요소 노드 생성
    - Document.prototype.createElement(tagName)
    - `const $li = document.createElement(’li’);`
    - 홀로 존재하는 상태. DOM에 자동으로 추가되지는 않기때문에 추가하는 과정이 필요
- 텍스트 노드 생성
    - Document.prototype.createTextNode(text)
    - `const textNode = document.createTextNode(’banana’);`
    - 홀로 존재하는 상태. 요소 노드에 추가되지 않음. 추가하는 처리가 별도로 필요
- 텍스트 노드를 요소 노드의 자식 노드로 추가
    - Node.prototye.appendChilde(childeNode)
    - 호출한 노드의 마지막 자식노드로 추가
    - `$li.appendChild(textNode);`

→ 근데 요소 노드에 자식 노드가 하나도 없다면 그냥 textContent 프로퍼티를 사용하는 게 낫다.

```jsx
$li.textContent = 'Banana';
```

물론 자식 노드가 있으면 모두 제거되기 때문에 없을 때만!

- 요소 노드를 DOM에 추가
    - Node.prototype.appendChild를 통하여 요소 노드를 #fruit 요소 노드의 마지막 자식 요소로 추가해주자.
    
    ```jsx
    $fruits.appendChild($li);
    ```
    

**➡️ 39.6.4 복수의 노드 생성과 추가**

```jsx
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits"></ul>
  </body>
  <script>
    const $fruits = document.getElementById('fruits');

    // 컨테이너 요소 노드 생성
    const $container = document.createElement('div');

    ['Apple', 'Banana', 'Orange'].forEach(text => {
      // 1. 요소 노드 생성
      const $li = document.createElement('li');

      // 2. 텍스트 노드 생성
      const textNode = document.createTextNode(text);

      // 3. 텍스트 노드를 $li 요소 노드의 자식 노드로 추가
      $li.appendChild(textNode);

      // 4. $li 요소 노드를 컨테이너 요소의 마지막 자식 노드로 추가
      $container.appendChild($li);
    });

    // 5. 컨테이너 요소 노드를 #fruits 요소 노드의 마지막 자식 노드로 추가
    $fruits.appendChild($container);
  </script>
</html>
```

- 컨테이너를 생성해서 넣어주자
- 근데 이런 방법은 불필요한 컨테이너 요소 (div)가 DOM에 추가된다는 부작용이 있다.

→ **DocumentFragment 노드를 통해 해결! (부모 노드가 없어 기존 DOM과는 별도로 존재해 기존 DOM에는 어떠한 변경도 발생하지 않음. DOM에 추가하면 자신은 제거되고 자식 노드만 추가됨)**

```jsx
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits"></ul>
  </body>
  <script>
    const $fruits = document.getElementById('fruits');

    // DocumentFragment 노드 생성
    const $fragment = document.createDocumentFragment();

    ['Apple', 'Banana', 'Orange'].forEach(text => {
      // 1. 요소 노드 생성
      const $li = document.createElement('li');

      // 2. 텍스트 노드 생성
      const textNode = document.createTextNode(text);

      // 3. 텍스트 노드를 $li 요소 노드의 자식 노드로 추가
      $li.appendChild(textNode);

      // 4. $li 요소 노드를 DocumentFragment 노드의 마지막 자식 노드로 추가
      $fragment.appendChild($li);
    });

    // 5. DocumentFragment 노드를 #fruits 요소 노드의 마지막 자식 노드로 추가
    $fruits.appendChild($fragment);
  </script>
</html>
```

**➡️ 39.6.5 노드 삽입**

- 마지막 노드로 추가
    - Node.prototype.appendChild
- 지정한 위치에 노드 삽입
    - Node.prototye.insertBefore(newNode, childNode)
    - 첫번째 인수로 받은 노드를 두번째 인수로 받은 노드 앞에 삽입
    - 두번째 인수가 null이면 appendChild처럼 동작

**➡️ 39.6.6 노드 이동**

- DOM에 이미 존재하는 노드를 `appendChild` 또는 `insertBefore` 메서드를 사용하여 DOM에 다시 추가하면 현재 위치에서 노드를 제거하고 새로운 위치에 노드를 추가한다. 즉, 노드가 이동한다.

**➡️ 39.6.7 노드 복사**

- Node.prototype.cloneNode([deep: true | false ])
- deep에 true를 전달하면 깊은 복사, false 혹은 생략하면 얕은 복사.
- 얕은 복사시 생성된 요소는 자손 노드를 복사하지 않으므로 텍스트 노드도 없음…

ex) `const $deepClone = $fruits.cloneNode(true);`

**➡️ 39.6.8 노드 교체**

- Node.prototype.replaceChild(newChild, oldChild);

**➡️39.6.9 노드 삭제**

- Node.prototype.removeCHild(child);
- 인수로 전달한 노드는 removeChild를 호출한 노드의 자식 노드여야.

```jsx
const $fruits = document.getElementById('fruits');

    // #fruits 요소 노드의 마지막 요소를 DOM에서 삭제
    $fruits.removeChild($fruits.lastElementChild);
```

### **☑️ 39.7 어트리뷰트**

**➡️ 39.7.1 어트리뷰트 노드와 attributes 프로퍼티**

- 요소 노드의 모든 어트리뷰트 노드는 요소 노드의 Element.prototype.attributes 프로퍼티로 취득할 수 있다. attributes 프로퍼티는 getter만 존재하는 읽기 전용 접근자 프로퍼티다

**➡️ 39.7.2 HTML 어트리뷰트 조작**

- HTML 어트리튜브 값 참조: `Element.prototype.getAttributes(attributeName)` 메서드 사용
- HTML 어트리뷰트 값 변경: `Element.prototype.setAttributes(attributeName, attributeValue)`
- 특정 HTML 어트리뷰트 존재 확인: `Element.prototype.hasAttributes(attributeName)`
- 특정 HTML 어트리뷰트 삭제: `Element.prototype.removeAttributes(attributeName)`

**➡️ 39.7.3 HTML 어트리뷰트 vs. DOM 프로퍼티**

- 요소 노드 객체에는 HTML 어트리뷰트에 대응하는 프로퍼티 (이하 DOM 프로퍼티)가 존재한다.
    - 예를 들어 <input id = “user” type =”text” value=”ungmo2”> 요소가 파싱되어 생성된 요소 노드 객체에는 id, type, value 어트리뷰트에 대응하는 id, type, value 프로퍼티가 존재하며, 이 DOM 프로퍼티들은 HTML 어트리뷰트의 값을 초기값으로 가지고 있다.
    
    → HTML 어트리뷰트는 DOM에서 중복관리되어있는 것처럼 보임 (요소 노드의 attribues 프로퍼티에서 관리하는 어트리뷰트 노드, HTML 어트리뷰트에 대응하는 요소 노드의 프로퍼티 (DOM 프로퍼티)) 그러나 중복 관리 아님!
    
    - HTML 어트리뷰트의 역할: HTML 요소의 초기 상태 지정. 변하지 않음
    
    → (초기) input 요소의 요소 노드가 생성되어 첫 렌더링이 끝난 시점에서 어트리뷰트 노드의 어트리뷰트 값과 요소 노드의 value 프로퍼티에 할당된 값은 HTML 어트리뷰트 값과 동일하다. 하지만 첫 렌더링 이후 사용자가 input 요소에 무언가를 입력하기 시작하면 상황이 달라짐
    
    - 요소 노드는 2개의 상태, 초기 상태와 최신상태를 관리해야 한다. 초기 상태는 어트리뷰트 노드가 관리, 최신 상태는 DOM 프로퍼티가 관리한다.
    
- 어트리뷰트 노드
    - HTML 어트리뷰트로 지정한 HTML 요소의 초기 상태는 어트리뷰트 노드에서 관리한다.
    - HTML 요소에 지정한 어트리뷰트 값은 사용자의 입력에 의해 변하지 않음. BUT setAttribue 메서드를 통해서는 가능?

- DOM 프로퍼티
    - 사용자가 입력한 최신 상태는 HTML 어트리뷰트에 대응하는 요소 노드의 DOM 프로퍼티가 관리한다.
    - DOM 프로퍼티는 사용자 입력에 의한 상태 변화에 반응하여 언제나 최신 상태를 유지한다.
    
    ```jsx
    <!DOCTYPE html>
    <html>
    <body>
      <input id="user" type="text" value="ungmo2">
      <script>
        const $input = document.getElementById('user');
    
        // 사용자가 input 요소의 입력 필드에 값을 입력할 때마다 input 요소 노드의
        // value 프로퍼티 값, 즉 최신 상태 값을 취득한다. value 프로퍼티 값은 사용자의 입력에
        // 의해 동적으로 변경된다.
        $input.oninput = () => {
          console.log('value 프로퍼티 값', **$input.value**);
        };
    
        // getAttribute 메서드로 취득한 HTML 어트리뷰트 값, 즉 초기 상태 값은 변하지 않고 유지된다.
        console.log('value 어트리뷰트 값', $input.getAttribute('value'));
      </script>
    </body>
    </html>
    ```
    
    - 단, 사용자 입력에 의한 상태 변화와 관계있는 DOM 프로퍼티만 최신 상태 값을 유지함

- HTML 어트리뷰트와 DOM 프로퍼티의 대응 관계
    - 대부분의 HTML 어트리뷰트는 HTML 어트리뷰트 이름과 동일한 DOM 프로퍼티와 1:1로 대응한다.
    - 그렇지만 안 그런 경우도 있다…

- DOM 프로퍼티 값의 타입
    - getAttribute 메서드로 취득한 어트리뷰트 값은 언제나 문자열이다. 하지만 DOM 프로퍼티로 취득한 최신 상태 값은 문자열이 아닐 수도 있다. (ex checkbox 요소의 checked 어트리뷰트 값은 문자열이지만 checked 프로퍼티 값은 불리언 타입이다)

**➡️ 39.7.4 data 어트리뷰트와 dataset 프로퍼티**

- data 어트리뷰트와 dataset 프로퍼티를 사용하면 HTML 요소에 정의한 사용자 정의 어트리뷰트와 자브스크립트 간에 데이터를 교환할 수 있다.
- data-user-id, data-role과 같이 data- 접두사를 붙여 data어트리뷰트를 사용

```jsx
<li id="1" data-user-id="7621" data-role="admin">Lee</li>
<li id="2" data-user-id="9524" data-role="subscriber">Kim</li>
```

- dataset 프로퍼티는 HTML 요소의 모든 data 어트리뷰트의 정보를 제공하는 DOMStringMap 객체를 반환한다. DomStringMAP 객체는 data 어트리뷰트의 data- 접두사 다음에 붙인 임이의 이름을 카멜 케이스로 변환한 프로퍼티를 가지고 있다. 이 프로퍼티로 data 어트리뷰트의 값을 취득하거나 변경할 수 있다.

```jsx
<!DOCTYPE html>
<html>
<body>
  <ul class="users">
    <li id="1" data-user-id="7621" data-role="admin">Lee</li>
    <li id="2" data-user-id="9524" data-role="subscriber">Kim</li>
  </ul>
  <script>
    const users = [...document.querySelector('.users').children];

    // user-id가 '7621'인 요소 노드를 취득한다.
    const user = users.find(user => user.dataset.userId === '7621');
    // user-id가 '7621'인 요소 노드에서 data-role의 값을 취득한다.
    console.log(user.dataset.role); // "admin"

    // user-id가 '7621'인 요소 노드의 data-role 값을 변경한다.
    user.dataset.role = 'subscriber';
    // dataset 프로퍼티는 DOMStringMap 객체를 반환한다.
    console.log(user.dataset); // DOMStringMap {userId: "7621", role: "subscriber"}
  </script>
</body>
</html>
```

### **☑️ 39.8 스타일**

**➡️ 39.8.1 인라인 스타일 조작**

- [HTMLElement.prototype.style](http://HTMLElement.prototype.style) 프로퍼티는 setter와 getter 모두 존재하는 접근자 프로퍼티로서 요소 노드의 인라인 스타일을 취득하거나 추가 또는 변경한다.
- `$div.style.color = ‘blue’`
- CSS 프로퍼티는 케밥 케이스를 따른다
    - `$div.style.backgroundColor = 'yellow';`
- CSSStyleDeclaration 객체의 프로퍼티는 카멜 케이스를 따른다.
    - `$div.style['background-color'] = 'yellow';`

**➡️ 39.8.2 클래스 조작**

- ClassName
    - Element.prototype.className 프로퍼티는 setter와 getter 모두 존재하는 접근자 프로퍼티로서 HTML 요소의 class 어트리뷰트 값을 취득하거나 변경한다.
    
    ```jsx
    const $box = document.querySelector('.box');
    
        // .box 요소의 class 어트리뷰트 값을 취득
        console.log($box.className); // 'box red'
    
        // .box 요소의 class 어트리뷰트 값 중에서 'red'만 'blue'로 변경
        $box.className = $box.className.replace('red', 'blue');
    ```
    
    className 프로퍼티는 문자열을 반환하므로 공백으로 구분된 여러 개의 클래스를 반환하는 경우 다루기가 불편하다.
    
- classList
    - Element.prototype.classList 프로퍼티는 class 어트리뷰트의 정보를 담은 DOMTokenList 객체를 반환한다.
    
    ```jsx
    <script>
        const $box = document.querySelector('.box');
    
        // .box 요소의 class 어트리뷰트 정보를 담은 DOMTokenList 객체를 취득
        // classList가 반환하는 DOMTokenList 객체는 HTMLCollection과 NodeList와 같이
        // 노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는(live) 객체다.
        console.log($box.classList);
        // DOMTokenList(2) [length: 2, value: "box blue", 0: "box", 1: "blue"]
    
        // .box 요소의 class 어트리뷰트 값 중에서 'red'만 'blue'로 변경
        **$box.classList.replace('red', 'blue');**
      </script>
    ```
    
    DOMTokenList 객체는 class 어트리뷰트의 정보를 나타내는 컬렉션 객체로서 유사배열객체이면서 이터러블이다. 이 객체는 다음과 같이 유용한 메서드들을 제공한다.
    
    - `add(className)`
    - `remove(className)`
    - `item(index)`
    - `contains(className)`
    - `replace(oldClassName, newClassName)`
    - `toggle(className[, force])`
    

**➡️ 39.8.3 요소에 적용되어 있는 CSS 스타일 참조**

- style 프로퍼티는 인라인 스타일만 반환하기 때문에 HTML 요소에 적용되어있는 모든 CSS 스타일을 참조하려면 getComputedStyle 메서드를 사용한다.
- window.getComputedStyle(element[, pseudo]) 메서드는 첫번째 인수로 전달한 요소 노드에 적용되어있는 평가된 스타일을 CSSStyleDeclaration에 담아 반환한다.

```jsx
const $box = document.querySelector('.box');

    // .box 요소에 적용된 모든 CSS 스타일을 담고 있는 CSSStyleDeclaration 객체를 취득
    const computedStyle = window.getComputedStyle($box);
    console.log(computedStyle); // CSSStyleDeclaration

    // 임베딩 스타일
    console.log(computedStyle.width); // 100px
    console.log(computedStyle.height); // 50px
    console.log(computedStyle.backgroundColor); // rgb(255, 248, 220)
    console.log(computedStyle.border); // 1px solid rgb(0, 0, 0)

    // 상속 스타일(body -> .box)
    console.log(computedStyle.color); // rgb(255, 0, 0)

    // 기본 스타일
    console.log(computedStyle.display); // block
```

- getComputedStyle 메서드의 두번째 인수(pseudo)로 :after, :before과 같은 의사 요소를 지정하는 문자열을 전달할 수 있다…

```jsx
// 의사 요소 :before의 스타일을 취득한다.
    const computedStyle = window.getComputedStyle($box, ':before');
    console.log(computedStyle.content); // "Hello"
```

### **☑️ 39.9 DOM 표준**