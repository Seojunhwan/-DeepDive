# Week 7

# Quiz

## 38장. 브라우저의 렌더링 과정

1. HTML 문서를 파싱한 결과물인 _ _ _와 CSS 파일이나 style 태그 내의 CSS를 파싱한 결과물인 _ _ _ _ _이 결합되어 _ _  _ _가 생성된다. 
2. 어느 위치에 있는 주석에 코드를 작성해야 하며, 그 이유와 장점에 대해서 설명해봅시다!

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <!-- <script>
        const $apple = document.getElementById('apple');
        $apple.style.color = 'red';
    </script> -->
</head>

<body>
    <ul>
        <li id="apple">Apple</li>
        <li id="banana">Banana</li>
        <li id="orange">Orange</li>
    </ul>
    <!-- <script>
        const $apple = document.getElementById('apple');
        $apple.style.color = 'red';
    </script> -->
</body>

</html>
```

## 39장. DOM

1. 중요한 노드 타입으로 4가지가 제시되어 있습니다. 4가지 노드를 열거하고 개념에 대해 각각 간략하게 설명해봅시다!

2. 요소 노드를 취득하는 각 방법의 차이점에 대해서 설명해봅시다!
    1. id를 이용한 요소 노드 취득
    2. 태그 이름을 이용한 요소 노드 취득
    3. class를 이용한 요소 노드 취득
    4. CSS 선택자를 이용한 요소 노드 취득
    
3. 참고 : DOM에서 소개된 메서드와 프로퍼티!
    1. Node.prototype.childNodes
    2. Element.prototype.children
    3. Node.prototype.firstChild
    4. Node.prototype.lastChild
    5. Element.prototype.firstElementChild
    6. Element.prototype.lastElementChild
    7. Node.prototype.hasChildNodes
    8. Node.prototype.parentNode
    9. Node.prototype.previousSibling
    10. Node.prototype.nextSibling
    11. Element.prototype.previousElementSibling
    12. Element.prototype.nextElementSibling
    13. Node.prototype.nodeType
    14. Node.prototype.nodeName
    15. Node.prototype.nodeValue
    16. Node.prototype.textContent
    17. Element.prototype.innerHTML
    18. Element.prototype.insertAdjacentHTML(position, DOMString)
    19. Document.prototype.createElement(tagName)
    20. Document.prototype.createTextNode(text)
    21. Node.prototype.appendChild(childNode)
    22. Document.prototype.createDocumentFragment
    23. Node.prototype.insertBefore(newNode, childNode)
    24. Node.prototype.cloneNode([deep: true | false])
    25. Node.prototype.replaceChild(newChild, oldChild)
    26. Node.prototype.removeChild(child)
    27. Element.prototype.attributes
    28. Element.prototype.getAttribute/setAttribute
    29. Element.prototype.hasAttribute(attributeName)
    30. Element.prototype.removeAttribute
    
4. HTML 어트리뷰트와 DOM 프로퍼티의 차이점??

## 정답

## 38장.

1. DOM, CSSOM, 렌더 트리
2. 아래의 주석 위치에 코드를 적용해야 한다. 
렌더링 엔진과 자바스크립트 엔진은 파싱이 직렬적으로 수행되는데, 위의 코드를 사용하면 HTML 파싱이 진행되는 도중 script 태그의 코드를 만나게 되고 DOM의 생성이 일시적으로 중단된다. 
script에서는 id가 apple인 요소를 취득하고자 하나 아직 해당 코드에 대한 HTML 요소가 파싱되지 않았기 때문에 에러가 발생한다. 
반면 아래의 위치에 코드를 작성하면 HTML 파싱이 완료된 상태에서 script 태그가 작동하므로 에러가 발생하지 않고, 자바스크립트 코드가 실행되기 이전에 이미 DOM 생성이 완료된 상태이므로 페이지 로딩 시간이 단축되는 이점도 있다. 

## 39장.

1. 다음과 같다.
    1. 문서 노드 : DOM 트리의 최상위에 존재하는 루트 노드로서 document 객체를 가리킨다. DOM 트리의 노드들에 접근하기 위한 진입점 역할을 담당하므로 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해 접근해야 한다.
    2. 요소 노드 : HTML 요소를 가리키는 객체이다. 요소 간의 중첩에 의해 부자 관계를 가지며 이를 통해 정보를 구조화한다. 문서의 구조를 표현한다고 할 수 있다. 
    3. 어트리뷰트 노드 : HTML 요소의 어트리뷰트를 가리키는 객체이며, 어트리뷰트가 지정된 HTML 요소의 요소 노드와 연결되어 있다. 하지만 해당 요소 노드의 부모 노드와는 연결되어있지 않으므로 형제 노드가 아니며, 어트리뷰트 노드에 접근하려면 요소 노드에 먼저 접근해야 한다.
    4. 텍스트 노드 : HTML 요소의 텍스트를 가리키는 객체다. 요소 노드가 문서의 구조를 표현한다면 텍스트 노드는 문서의 정보를 표현한다고 할 수 있다. 텍스트 노드는 리프 노드이며 DOM 트리의 최종단이다.
2. 차이점!
    1. id를 이용한 요소 노드 취득
        
        getElementById를 이용하며, 이 메서드는 Document.prototype의 프로퍼티이므로 document를 통해 호출해야 한다. 
        
        HTML 문서 내에 id가 중첩되는 게 있더라도 에러는 발생하지 않으나 첫 번째 요소 노드만 반환한다. 
        
    2. 태그 이름을 이용한 요소 노드 취득
        
        getElementsByTagName 메서드를 이용하며 인수로 전달한 태그 이름을 갖는 모든 요소 노드들을 탐색하여 반환한다. 
        
        함수는 하나의 값만 반환하므로 이 메서드가 반환하는 HTMLCollection 객체는 유사 배열 객체이면서 이터러블이다. 
        
    3. class를 이용한 요소 노드 취득
        
        getElementsByClassName 메서드를 이용하며 인수로 전달한 class 어트리뷰트 값을 갖는 모든 요소 노드들을 탐색하여 반환한다. 
        
        getElementsByTagName 메서드와 마찬가지로 HTMLCollection 객체를 반환한다.
        
    4. CSS 선택자를 이용한 요소 노드 취득
        
        CSS 선택자는 스타일을 적용하고자 하는 HTML 요소를 특정할 때 사용하는 문법이며, querySelector 메서드를 활용하여 인수로 전달한 CSS 선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환한다.
        
3. 참고사항
4. HTML 어트리뷰트의 역할은 HTML 요소의 초기 상태를 지정하는 것이고, DOM 프로퍼티는 요소 노드의 최신 상태를 관리한다. 유저의 입력이 연관된 어트리뷰트 값이 존재할 경우 HTML 어트리뷰트 값은 변하지 않고, DOM 프로퍼티의 값은 최신 상태의 값으로 변경된다.

# 38장. 브라우저의 렌더링 과정

브라우저는 다음과 같은 과정을 거쳐 렌더링을 수행한다.

1. 브라우저는 HTML, CSS, 자바스크립트, 이미지, 폰트 파일 등 렌더링에 필요한 리소스를 요청하고 서버로부터 응답을 받는다.
2. 브라우저의 렌더링 엔진은 서버로부터 응답된 HTML과 CSS를 파싱하여 DOM과 CSSOM을 생성하고 이들을 결합하여 렌드 트리를 생성한다.
3. 브라우저의 자바스크립트 엔진은 서버로부터 응답된 자바스크립트를 파싱하여 AST를 생성하고 바이트코드로 변환하여 실행한다. 이때 자바스크립트는 DOM API를 통해 DOM이나 CSSOM을 변경할 수 있다. 변경된 DOM과 CSSOM은 다시 렌더 트리로 결합된다.
4. 렌더 트리를 기반으로 HTML 요소의 레이아웃을 계산하고 브라우저 화면에 HTML 요소를 페인팅한다.
- 요청과 응답
    
    브라우저의 핵심 기능은 필요한 리소스를 서버에 요청하고 서버로부터 응답받아 브라우저에 시각적으로 렌더링하는 것이다.
    
- HTTP 1.1과 HTTP 2.0
    
    HTTP: 웹에서 브라우저와 서버가 통신하기 위한 프로토콜.
    
    1. HTTP/1.1 : 다중 요청/응답이 불가능하다는 단점이 존재
    2. HTTP/2 : 커넥션당 여러 개의 요청과 응답이 가능.
- HTML 파싱과 DOM 생성
    
    브라우저가 요청 → 서버가 HTML로 응답, 이때 HTML은 순수 텍스트. 
    
    브라우저가 이해할 수 있는 자료구조로 변환하여 메모리에 저장해야 함.
    
    HTML을 파싱하여 DOM을 생성
    
    **DOM은 HTML 문서를 파싱한 결과물**이다.
    
- CSS 파싱과 CSSOM 생성
    
    렌더링 엔진이 DOM을 생성하다가 CSS를 로드하는 link 태그나 style 태그를 만나면 DOM 생성을 일시 중단하고 CSSOM을 생성함.
    
    파싱이 끝나면 HTML 파싱이 중단된 지점부터 다시 HTML을 파싱하여 DOM 생성 재개.
    
- 렌더 트리 생성
- 자바스크립트 파싱과 실행
- 리플로우와 리페인트
- 자바스크립트 파싱에 의한 HTML 파싱 중단
- script 태그의 async/defer 어트리뷰트

# 39장. DOM

- 노드
    - HTML 요소와 노드 객체
        
        HTML 요소는 HTML 문서를 구성하는 개별적인 요소를 의미한다.
        
        HTML 요소의 어트리뷰트는 어트리뷰트 노드로, 텍스트 콘텐츠는 텍스트 노드로 변환된다.
        
        DOM은 노드 객체의 계층적인 구조로 구성된다.
        
    - 노드 객체의 타입
        
        노드 객체는 총 12개의 종류가 있고 중요한 노드 타입은 다음과 같이 4가지다.
        
        1. 문서 노드
            
            DOM 트리의 최상위에 존재하는 루트 노드로서 document 객체를 가리킨다.
            
            HTML 문서당 document 객체는 유일하며 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다.
            
        2. 요소 노드
            
            HTML 요소를 가리키는 객체다.
            
        3. 어트리뷰트 노드
            
            HTML 요소의 어트리뷰트를 가리키는 객체다.
            
        4. 텍스트 노드
            
            HTML 요소의 텍스트를 가리키는 객체다.
            
    - 노드 객체의 상속 구조
    
    → DOM은 HTML 문서의 계층적 구조와 정보를 표현하는 것은 물론, 노드 객체의 종류, 즉 노드 타입에 따라 필요한 기능을 프로퍼티와 메서드의 집합인 DOM API로 제공한다. 이 DOM API를 통해 HTML의 구조나 내용 또는 스타일 등을 동적으로 조작할 수 있다. HTML을 DOM과 연관지어 바라보아야 한다.
    
- 요소 노드 취득
    - id를 이용한 요소 노드 취득
        
        Document.prototype.getElementById 메서드는 인수로 전달한 id 어트리뷰트 값을 갖는 하나의 요소 노드를 탐색하여 반환한다.
        
        ```jsx
        // id 값이 'banana'인 요소 노드를 탐색하여 반환한다.
        const $elem = document.getElementById('banana');
        
        $elem.style.color = 'red';
        ```
        
        중복된 id를 갖는 요소가 존재할 경우 첫 번째 요소 노드만 반환한다.
        
        id를 갖는 요소가 없는 경우 null을 반환한다.
        
    - 태그 이름을 이용한 요소 노드 취득
        
        Document.prototype/Element.prototype.getElementsByTagName 메서드는 인수로 전달한 ‘태그' 이름을 갖는 모든 요소 노드들을 탐색하여 반환한다.
        
        ```jsx
        // 태그 이름이 li인 요소 노드를 모두 탐색하여 반환한다.
        const $elems = document.getElementsByTagName('li');
        ```
        
        getElementsByTagName 메서드가 반환하는 DOM 컬렉션 객체인 HTMLCollection 객체는 유사 배열 객체이면서 이터러블이다.
        
        HTML 문서의 모든 요소 노드를 취득하려면 getElementsByTagName 메서드의 인수로 ‘*’를 전달한다.
        
    - class를 이용한 요소 노드 취득
        
        Document.prototype/Element.prototype.getElementsByClassName 메서드는 인수로 전달한 class 어트리뷰트 값을 갖는 모든 요소 노드들을 탐색하여 반환한다.
        
    - CSS 선택자를 이용한 요소 노드 취득
        
        CSS 선택자는 스타일을 적용하고자 하는 HTML 요소를 특정할 때 사용하는 문법이다.
        
        Document.prototype/Element.prototype.querySelector 메서드는 인수로 전달한 CSS 선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환한다.
        
        1. 전달된 CSS 선택자를 가지는 요소 노드가 여러 개일 경우 첫 번째 반환
        2. 존재하지 않을 경우 null 반환
        3. 문법에 맞지 않는 CSS 선택자일 경우 DOMException 에러가 발생한다.
        
        Document.prototype/Element.prototype.querySelectorAll 메서드는 인수로 전달한 CSS 선택자를 만족시키는 모든 요소 노드를 탐색하여 반환한다.
        
    - 특정 요소 노드를 취득할 수 있는지 확인
        
        Elements.prototype.matches 메서드는 인수로 전달한 CSS 선택자를 통해 특정 요소 노드를 취득할 수 있는지 확인한다.
        
    - HTMLCollection과 NodeList
        
        둘의 중요한 특징은 노드 객체의 상태 변화를 실시간으로 반영하는 살아있는 객체라는 것이다.
        
- 노드 탐색
    
    요소 노드를 취득한 다음, 취득한 요소 노드를 기점으로 DOM 트리의 노드를 옮겨 다니며 부모, 형제 자식 노드 등을 탐색해야 할 때가 있다.
    
    parentNode, previosSibling, firstChild, childNodes 프로퍼티는 Node.prototype이 제공하고, 프로퍼티 키에 Element가 포함된 previousElementSibling, nextElementSibling과 children 프로퍼티는 Element.prototype이 제공한다.
    
    - 공백 텍스트 노드
        
        텍스트 에디터에서 HTML 문서에 스페이스 키, 탭 키, 엔터 키 등을 입력하면 공백 문자가 추가된다.
        
        노드를 탐색할 때는 공백 문자가 생성한 공백 텍스트 노드에 주의해야 한다.
        
    - 자식 노드 탐색
        
        자식 노드를 탐색하기 위해서는 다음과 같은 노드 탐색 프로퍼티를 사용한다.
        
        | 프로퍼티 | 설명 |
        | --- | --- |
        | Node.prototype.childNodes | 자식 노드를 모두 탐색하여 DOM 컬렉션 객체인 NodeList에 담아 반환한다. 텍스트 노드도 포함되어 있을 수 있다. |
        | Element.prototype.children | 자식 노드 중에서 요소 노드만 모두 탐색하여 DOM 컬렉션 객체인 HTMLCollection에 담아 반환한다. HTMLCollection에는 텍스트 노드가 포함되지 않는다. |
        | Node.prototype.firstChild | 첫 번째 자식 노드를 반환한다. 텍스트 노드이거나 요소 노드다. |
        | Node.prototype.lastChild | 마지막 자식 노드를 반환한다. 텍스트 노드이거나 요소 노드다. |
        | Element.prototype.firstElementChild | 첫 번째 자식 요소 노드를 반환한다. 요소 노드만 반환한다. |
        | Element.prototype.lastElementChild | 마지막 자식 요소 노드를 반환한다. 요소 노드만 반환한다. |
    - 자식 노드 존재 확인
        
        자식 노드가 있는지 확인하려면 Node.prototype.hasChildNodes 메서드를 사용한다.
        
        텍스트 노드를 포함하여 자식 노드의 존재를 확인하므로, 텍스트 노드가 아닌 요소 노드가 존재하는지 확인하려면 children.length 또는 Element 인터페이스의 childElementCount 프로퍼티를 사용한다.
        
    - 요소 노드의 텍스트 노드 탐색
        
        요소 노드의 텍스트노드는 firstChild 프로퍼티로 접근할 수 있다.
        
    - 부모 노드 탐색
        
        Node.prototype.parentNode 프로퍼티를 사용한다. 부모 노드가 텍스트 노드인 경우는 없다.
        
    - 형제 노드 탐색
        
        다음과 같은 노드 탐색 프로퍼티를 사용한다. 단, 어트리뷰트 노드는 요소 노드와 연결되어 있지만 부모 노드가 같은 형제 노드가 아니기 때문에 반환되지 않는다.
        
        | 프로퍼티 | 설명 |
        | --- | --- |
        | Node.prototype.previousSibling | 형제 노드 중 자신의 이전 형제 노드를 탐색하여 반환한다. |
        | Node.prototype.nextSibling | 형제 노드 중 자신의 다음 형제 노드를 탐색하여 반환한다. |
        | Element.prototype.previousElementSibling | 형제 요소 노드 중 자신의 이전 형제 요소 노드를 탐색하여 반환한다. |
        | Element.prototype.previousElementSibling | 형제 요소 노드 중 자신의 다음 형제 요소 노드를 탐색하여 반환한다. |
- 노드 정보 취득
    
    다음과 같은 노드 정보 프로퍼티를 사용한다.
    
    | 프로퍼티 | 설명 |
    | --- | --- |
    | Node.prototype.nodeType | 노드 객체의 종류, 즉 노드 타입을 나타내는 상수를 반환한다. 노드 타입 상수는 Node에 정의되어 있다. |
    | Node.prototype.nodeName | 노드의 이름을 문자열로 반환한다. |
- 요소 노드의 텍스트 조작
    - nodeValue
        
        노드 객체의 nodeValue 프로퍼티를 참조하면 노드 객체의 값을 반환한다. 노드 객체의 값이란 텍스트 노드의 택스트이다.
        
    - textContent
        
        Node.prototype.textContent 프로퍼티는 요소 노드의 텍스트와 모든 자손 노드의 텍스트를 모두 취득하거나 변경한다. 
        
        요소 노드의 childNodes 프로퍼티가 반환한 모든 노드들의 텍스트 노드의 값, 즉 텍스트를 모두 반환한다.
        
- DOM 조작
    
    새로운 노드를 생성하여 DOM에 추가하거나 기존 노드를 삭제 또는 교체하는 것을 말한다.
    
    - innerHTML
        
        요소 노드의 HTML 마크업을 취득하거나 변경한다.
        
        요소 노드의 innerHTML 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당한 문자열에 포함되어 있는 HTML 마크업이 파싱되어 요소 노드의 자식 노드로 DOM에 반영된다.
        
        사용자로부터 입력받은 데이터를 그대로 innerHTML 프로퍼티에 할당하는 것은 크로스 사이트 스크립팅 공격에 취약하므로 위험하다.
        
        복잡하지 않은 요소를 새롭게 추가할 때 유용하지만 기존 요소를 제거하지 않으면서 위치를 지정해 새로운 요소를 삽입해야 할 때는 사용하지 않는 것이 좋다.
        
    - insertAdjacentHTML 메서드
        
        Element.prototype.insertAdjacentHTML 메서드는 기존 요소를 제거하지 않으면서 위치를 지정해 새로운 요소를 삽입한다.
        
        기존 요소에는 영향을 주지 않고 새롭게 삽입될 요소만을 파싱하여 자식 요소로 추가하므로 기존의 자식 노드를 모두 제거하고 다시 처음부터 새롭게 자식 노드를 생성하여 자식 요소로 추가하는 innerHTML 프로퍼티보다 효율적이고 빠르다.
        
        크로스 사이트 스크립팅 공격에 취약하다는 점은 동일하다.
        
    - 노드 생성과 추가
        
        앞의 두 메서드는 HTML 마크업 문자열을 파싱하여 노드를 생성하고 DOM에 반영한다. DOM은 노드를 직접 생성/삽입/삭제/치환하는 메서드도 제공한다.
        
        - 요소 노드 생성
            
            Document.prototype.createElement 메서드는 요소 노드를 생성하여 반환한다. 
            
            createElement 메서드로 생성한 요소 노드는 DOM에 추가되지 않으며, 요소 노드의 자식노드인 텍스트 노드도 없는 상태이다.
            
        - 텍스트 노드 생성
            
            Document.prototype.createTextNode 메서드는 텍스트 노드를 생성하여 반환한다.
            
            역시 텍스트 노드를 생성할 뿐 요소 노드에 추가하지는 않는다.
            
        - 텍스트 노드를 요소 노드의 자식 노드로 추가
            
            Node.prototype.appendChild 메서드는 매개변수 childNode에게 인수로 전달한 노드를 appendChild 메서드를 호출한 노드의 마지막 자식 노드로 추가한다.
            
        - 요소 노드를 DOM에 추가
            
            Node.prototype.appendChild 메서드를 이용하여 텍스트 노드와 부자 관계로 연결한 요소 노드를 마지막 자식 요소로 추가한다.
            
    - 복수의 노드 생성과 추가
        
        위의 방법으로 하나씩 할 경우 그만큼 리플로우와 리페인트가 발생하며 비효율적이다. 컨테이너를 이용하면 DOM은 한 번만 변경된다.
        
        그냥 container를 <div>로 구현하면 불필요한 div 요소가 추가된다. 이를 막기 위해 Document.prototype.createDocumentFragment 메서드를 활용할 수 있다.
        
    - 노드 삽입
        - 마지막 노드로 추가
            
            Node.prototype.appendChild 메서드는 인수로 전달받은 노들르 자신을 호출한 노드의 마지막 자식 노드로 DOM에 추가한다.
            
        - 지정한 위치에 노드 삽입
            
            Node.prototype.insertBefore(newNode, childNode) 메서드는 첫 번째 인수로 전달받은 노드를 두 번째 인수로 전달받은 노드 앞에 삽입한다.
            
            두 번째 인수로 전달받은 노드는 반드시 insertBefore 메서드를 호출한 노드의 자식 노드이어야 한다.
            
    - 노드 이동
        
        DOM에 이미 존재하는 노드를 appendChild 또는 insertBefore 메서드를 사용하여 DOM에 다시 추가하면 현재 위치에서 노드를 제거하고 새로운 위치에 노드를 추가한다. 즉, 노드가 이동한다.
        
    - 노드 복사
        
        Node.prototype.cloneNode([deep: true | false]) 메서드는 노드의 사본을 생성하여 반환한다. true를 전달하면 깊은 복사하고, false를 전달하거나 생략하면 얕은 복사한다.
        
    - 노드 교체
        
        Node.prototype.replaceChild(newChild, oldChild) 메서드는 자신을 호출한 노드의 자식 노드를 다른 노드로 대체한다.
        
    - 노드 삭제
        
        Node.prototyep.removeChild(child) 메서드는 child 매개변수에 인수로 전달한 노드를 DOM에서 삭제한다. 
        
- 어트리뷰트
    - 어트리뷰트 노드와 attributes 프로퍼티
        
        HTML 문서의 구성 요소인 HTML 요소는 여러 개의 어트리뷰트를 가질 수 있다.
        
        ```jsx
        <input id="user" type="text" value="ungmo2">
        ```
        
        글로벌 어트리뷰트와 이벤트 핸들러 어트리뷰트는 모든 HTML 요소에서 공통적으로 사용할 수 있지만 특정 HTML 요소에만 한정적으로 사용 가능한 어트리뷰트도 있다.
        
        HTML 문서가 파싱될 때 HTML 요소의 어트리뷰트는 어트리뷰트 노드로 변환되어 요소 노드와 연결된다. 이때, HTML 어트리뷰트당 하나의 어트리뷰트 노드가 생성된다. 즉, 위 input 요소는 3개의 어트리뷰트가 있으므로 3개의 어트리뷰트 노드가 생성된다. 
        
    - HTML 어트리뷰트 조작
        
        요소 노드의 attributes 프로퍼티는 getter만 존재하는 읽기 전용 접근자 프로퍼티이다. 
        
        HTML 어트리뷰트 값을 참조하려면 Element.prototype.getAttribute(attributeName) 메서드를 사용하고, HTML 어트리뷰트 값을 변경하려면 Element.prototype.setAttribute(attributeName, attributeValue) 메서드를 사용한다.
        
        특정 HTML 어트리뷰트가 존재하는지 확인하려면 Element.prototype.hasAttribute(attributeName) 메서드를 사용하고, 특정 HTML 어트리뷰트를 삭제하려면 Element.prototype.removeAttribute(attributeName) 메서드를 사용한다.
        
    - HTML 어트리뷰트 vs. DOM 프로퍼티
        
        요소 노드 객체에는 HTML 어트리뷰트에 대응하는 프로퍼티가 존재하며, DOM 프로퍼티들은 HTML 어트리뷰트의 값을 초기값으로 가지고 있다. 
        
        HTML 어트리뷰트는 DOM에서 중복 관리되고 있는 것처럼 보이나, 그렇지 않다. 
        
        HTML 어트리뷰트의 역할은 **HTML 요소의 초기 상태를 지정하는 것**이다. HTML 어트리뷰트 값은 HTML 요소의 초기 상태를 의미하며 이는 변하지 않는다. 
        
        요소 노드는 **상태**를 가지고 있다. 
        
        이처럼 요소 노드는 2개의 상태, 즉 초기 상태와 최신 상태를 관리해야 한다. 요소 노드의 초기 상태는 어트리뷰트 노드가 관리하며, 요소 노드의 최신 상태는 DOM 프로퍼티가 관리한다.
        
        - 어트리뷰트 노드
            
            HTML 어트리뷰트로 지정한 HTML 요소의 초기 상태는 어트리뷰트 노드에서 관리한다.
            
            어트리뷰트 노드가 관리하는 초기 상태 값을 취득하려나 변경하려면 getAttribute/setAttribute 메서드를 사용한다.
            
        - DOM 프로퍼티
            
            사용자가 입력한 최신 상태는 HTML 어트리뷰트에 대응하는 요소 노드의 DOM 프로퍼티가 고나리한다. DOM 프로퍼티는 사용자의 입력에 의한 상태 변화에 반응하여 언제나 최신 상태를 유지한다.
            
            DOM 프로퍼티에 값을 할당하는 것은 HTML 요소의 최신 상태 값을 변경하는 것을 의미하며, 어트리뷰트 값에는 어떠한 영향도 주지 않는다.
            
    - data 어트리뷰트와 dataset 프로퍼티
        
        data 어트리뷰트와 dataset 프로퍼티를 사용하면 HTML 요소에 정의한 사용자 정의 어트리뷰트와 자바스크립트 간에 데이터를 교환할 수 있다. data 어트리뷰트는 data-user-id, data-role과 같이 data- 접두사 다음에 임의의 이름을 붙여 사용한다. 
        
- 스타일
    - 인라인 스타일 조작
        
        HTMLElement.prototype.style 프로퍼티는 setter와 getter 모두 존재하는 접근자 프로퍼티로서 요소 노드의 인라인 스타일을 취득하거나 추가 또는 변경한다. 
        
    - 클래스 조작
        
        .으로 시작하는 클래스 선택자를 사용하여 CSS class를 미리 정의한 다음, HTML 요소의 class 어트리뷰트 값을 변경하여 HTML 요소의 스타일을 변경할 수도 있다. 
        
        - className
            
            Element.prototype.className 프로퍼티는 setter와 getter 모두 존재하는 접근자 프로퍼티로서 HTML 요소의 class 어트리뷰트 값을 취득하거나 변경한다.
            
            className 프로퍼티는 문자열을 반환하므로 공백으로 구분된 여러 개의 클래스를 반환하는 경우 다루기가 불편하다.
            
        - classList
            
            Element.prototype.classList 프로퍼티는 class 어트리뷰트의 정보를 담은 DOMTokenList 객체를 반환한다. 
            
            DOMTokenList 객체는 class 어트리뷰트의 정보를 나타내는 컬렉션 객체로서 유사 배열 객체이면서 이터러블이다. 
            
    - 요소에 적용되어 있는 CSS 스타일 참조
        
        style 프로퍼티는 인라인 스타일만 반환하므로 클래스를 적용한 스타일이나 상속을 통해 암묵적으로 적용된 스타일은 style 프로퍼티로 참조할 수 없다. 
        
        window.getComputedStyle(element[, pseudo]) 메서드는 첫 번째 인수로 전달한 요소 노드에 적용되어있는 평가 스타일을 CSSStyleDeclaration 객체에 담아 반환한다. 
        
        두 번째 인수로 :after, :before와 같은 의사 요소를 지정하는 문자열을 전달할 수 있다. 
        
- DOM 표준