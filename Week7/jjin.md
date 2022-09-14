## 38.

Scheme

Host

Port

Path

Query

Fragment

를 설명하고 URI를 작성하여 예시를 드시오.

## 39. DOM

1. 요소 노드를 취득하는 3가지 방법으로 코딩하여 취득해보시오
2. 다음 선택자가 의미하는 것을 말하시오

```html
* { ... } p { ... } #foo { ... } .foo { ... } input[type=text] div p div > p p +
ul p ~ ul a:hover p::before
```

- ```html
  * { ... } // 전체 선택자 p { ... } // 태그 선택자 #foo { ... } // id 선택자
  .foo { ... } // class 선택자 input[type=text] { ... } // 어트리뷰트 선택자 div
  p { ... } // 후손 선택자: div 요소의 후손 요소 중 p 요소 모두 div > p { ... }
  // 자식 선택자: div 요소의 자식 요소 중 p 요소 모두 p + ul { ... } // 인접
  형제 선택자: p 요소의 형제 요소 중 p 바로 뒤에 위치하는 ul 요소 p ~ ul { ... }
  // 일반 형제 선택자: p 요소의 형제 요소 중 p 뒤에 위치하는 ul 요소 모두
  a:hover { ... } // 가상 클래스 선택자: hover 상태인 a 요소 모두 p::before {
  ...} // 가상 요소 선택자: p 요소의 콘텐츠의 앞에 위치하는 공간을 선택. //
  일반적으로 content 프로퍼티와 함께 사용된다.
  ```
