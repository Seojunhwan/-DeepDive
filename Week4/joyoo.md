# Week 4

# Quiz

20장.

strict mode를 적용할 때 전역과 함수 단위로 사용하는 것을 피해야 하는 이유를 설명하고, 어떤 방법을 사용하는 것이 권장되는지 설명하시오.

21장. 

1. 문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체를 _ _  _ _라 한다.
2. 각 줄에 대한 출력값은?

```jsx
console.log(typeof Infinity); // ?
console.log(typeof NaN); // ?
console.log(typeof undefined); // ?

console.log(isNaN(Date())); // ?
console.log(isNaN(new Date())); // ?
console.log(isNaN(new Date().toString())); // ?
```

22장.

함수를 호출하는 방식에 따라 this에 무엇이 바인딩되는지 설명하시오.

1. 일반 함수 호출
2. 메서드 호출
3. 생성자 함수 호출
4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출

23장.

1. 식별자와 스코프는 실행 컨텍스트의 _ _ _  _ _으로 관리하고 코드 실행 순서는 _ _  _ _ _ _  _ _으로 관리한다.
2. 렉시컬 환경을 이루는 두 개의 컴포넌트에 대해 설명하시오.

24장.

# 20. strict mode

- strict mode란?
    
    ```jsx
    function foo() {
        x = 10;
    }
    foo();
    
    console.log(x); // 10
    ```
    
    → 암묵적 전역과 같은 것들은 개발자의 의도와 상관없이 발생할 수 있으므로 오류를 발생시키는 원인이 될 가능성이 크다.
    
    strict mode는 ES5부터 추가되었고, 자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시킨다.
    
    필자는 strict mode보다 린트 도구의 사용을 선호한다고 적혀있다.
    
- strict mode의 적용
    
    strict mode를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 
    
    ```jsx
    ‘use strict’;
    ```
    
    를 추가한다. 전역의 선두에 추가하면 스크립트 전체에 strict mode가 적용된다.
    
- 전역에 strict mode를 적용하는 것은 피하자
    
    전역에 적용한 strict mode는 스크립트 단위로 적용하므로 다른 스크립트에 영향을 주지 않고 해당 스크립트에 한정되어 적용된다.
    
    strict mode 스크립트와 non-strict mode 스크립트를 혼용하는 것은 오류를 발생시킬 수 있다.
    
- 함수 단위로 strict mode를 적용하는 것도 피하자
    
    함수 단위로 strict mode를 적용할 수도 있으나 함수에 따라 strict mode를 선택적으로 사용하는 것은 바람직하지 않고, 모든 함수에 일일이 strict mode를 적용하는 것은 번거로운 일이다.
    
    ⇒ strict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.
    
    ```jsx
    // 즉시 실행 함수의 선두에 strict mode 적용
    (function() {
    	'use strict';
    
    	// Do something...
    }());
    ```
    
- strict mode가 발생시키는 에러
    - 암묵적 전역
        
        선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.
        
        ```jsx
        (function () {
        	'use strict';
        
        	x = 1;
        	console.log(x); // ReferenceError: x is not defined
        }());
        ```
        
    - 변수, 함수, 매개변수의 삭제
        
        delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다.
        
        ```jsx
        (function() {
            'use strict';
        
            var x = 1;
            delete x; // SyntaxError: Delete of an unqualifed identifier in strict mode.
        
            function foo(a) {
                delete a; // SyntaxError: Delete of an unqualifed identifier in strict mode.
            }
            delete foo; // SyntaxError: Delete of an unqualifed identifier in strict mode.
        }());
        ```
        
    - 매개변수 이름의 중복
        
        중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다.
        
        ```jsx
        (function() {
            'use strict';
        
            // SyntaxError: Duplicate parameter name not allowed in this context
            function foo(x, x) {
                return x + x;
            }
            console.log(foo(1, 2));
        }());
        ```
        
    - with 문의 사용
        
        with 문을 사용하면 SyntaxError가 발생한다. with 문은 전달된 객체를 스코프 체인에 추가한다.
        
        ```jsx
        (function () {
            'use strict';
        
            // SyntaxError: Strict mode ode may not include a with statement
            with({ x : 1 }) {
                console.log(x);
            }
        }());
        ```
        
- strict mode 적용에 의한 변화
    - 일반함수의 this
        
        strict mode에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다. 
        
        ```jsx
        (function () {
            'use strict';
        
            function foo() {
                console.log(this);
            }
            foo(); // undefined
            new foo(); // foo {}
        }());
        ```
        
    - arguments 객체
        
        strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.
        

# 21. 빌트인 객체

- 자바스크립트 객체의 분류
    1. 표준 빌트인 객체
        
        → ECMAScript 사양에 정의된 객체로, 자바스크립트 실행 환경과 관계없이 언제나 사용할 수 있으며, 별도의 선언 없이 전역 변수처럼 언제나 참조할 수 있다.
        
    2. 호스트 객체
        
        → ECMAScript 사양에 정의되어 있지 않지만 자바스크립트 실행 환경에서 추가로 제공하는 객체를 말한다. 이는 자바스크립트 실행 환경마다 차이가 있다.
        
    3. 사용자 정의 객체
        
        → 표준 빌트인 객체와 호스트 객체처럼 기본 제공되는 객체가 아닌 사용자가 직접 정의한 객체를 말한다.
        
- 표준 빌트인 객체
    
    Object, String, Number, Boolean, Symbol, Date, Math, RegExp, Array, Map/Set, WeakMap/WeakSet, Function, Promise, Reflect, Proxy, JSON, Error 등..
    
    표준 빌트인 객체의 prototype 프로퍼티에 바인딩된 객체는 다양한 기능의 빌트인 프로토타입 메서드를 제공한다.
    
- 원시값과 래퍼 객체
    
    원시값을 객체처럼 사용하면 자바스크립트 엔진은 암묵적으로 연간된 객체를 생성하여 생성된 객체로 프로퍼티에 접근하거나 메서드를 호출하고 다시 원시값으로 되돌린다. 
    
    이처럼 문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체를 래퍼 객체라 한다.
    
    ```jsx
    // 1. 식별자 str은 문자열을 값으로 가지고 있다.
    const str = 'hello';
    
    // 2. 식별자 str은 암묵적으로 생성된 래퍼 객체를 기리킨다.
    // 식별자 str의 값 'hello'는 래퍼 객체의 [[string data]] 내부 슬롯에 할당된다.
    // 래퍼 객체에 name 프로퍼티가 동적 추가된다.
    str.name = 'Lee';
    
    // 3. 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
    // 이때 2. 에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.
    
    // 4. 식별자 str은 새롭게 암묵적으로 생성된[2. 에서 생성된 래퍼 객체와는 다른) 래퍼 객체를 가리킨다.
    // 새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 않는다.
    console.log(str.name); // undefined
    
    // 5. 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
    // 이때 4. 에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.
    console.log(typeof str, str); // string Hello
    ```
    
- 전역 객체
    
    표준 빌트인 객체와 환경에 따른 호스트 객체, 그리고 var 키워드로 선언한 전역 변수와 전역 함수를 프로퍼티로 갖는다.
    
    1. 전역 객체는 개발자가 의도적으로 생성할 수 없다.
    2. 전역 객체의 프로퍼티를 참조할 때 window(또는 global)를 생략할 수 있다. 
    - 빌트인 전역 프로퍼티
        
        → 전역 객체의 프로퍼티. 
        
        1. Infinity
            
            무한대를 나타내는 숫자값 Infinity를 갖는다.
            
        2. NaN
            
            숫자가 아님을 나타내는 숫자값 NaN을 갖는다.
            
        3. undefined
            
            원시 타입 undefined를 값으로 갖는다.
            
    - 빌트인 전역 함수
        
        애플리케이션 전역에서 호출할 수 있는 빌트인 함수로서 전역 객체의 메서드다.
        
        1. eval
            
            자바스크립트 코드를 나타내는 문자열을 인수로 전달받는다.
            
            ```jsx
            // 표현식인 문
            eval('1 + 2;');
            // 표현식이 아닌 문
            eval('var x = 5;'); // -> undefined
            
            // eval 함수에 의해 런타임에 변수 선언문이 실행되어 x 변수가 선언되었다.
            console.log(x); // 5
            
            // 객체 리터럴은 반드시 괄호로 둘러싼다.
            const o = eval('({ a: 1 })');
            console.log(o); // { a: 1 }
            
            // 함수 리터럴은 반드시 괄호로 둘러싼다.
            const f = eval('(function () { return 1;})');
            console.log(f()); // 1
            ```
            
            eval 함수는 자신이 호출된 위치에 해당하는 기존의 스코프를 런타임에 동적으로 수정한다.
            
            eval 함수를 통해 사용자로부터 입력받은 콘텐츠를 실행하는 것은 보안에 매우 취약하며, eval 함수를 통해 실행되는 코드는 자바스크립트 엔진에 의해 최적화가 수행되지 않으므로 일반적인 코드 실행에 비해 처리 속도가 느리다. 따라서 eval 함수의 사용은 금지해야 한다.
            
        2. isFinite
            
            전달받은 인수가 정상적인 유한수인지 검사하여 유한수이면 true를 반환하고, 무한수이면 false를 반환한다.
            
            숫자가 아니면 숫자로 타입 변환 후 검사를 수행하며 인수가 NaN으로 평가되면 false를 반환한다.
            
            isFinite(null)은 true를 반환한다. null 을 숫자로 타입 변환하면 0이 되기 때문이다.
            
        3. isNaN
            
            전달받은 인수가 NaN인지 검사하여 그 결과를 불리언 타입으로 반환한다.
            
            Q. isNaN(Date())는 true, isNaN(new Date())는 false이다. 이유는 무엇인가?
            
        4. parseFloat
            
            전달받은 문자열 인수를 실수로 해석하여 반환한다.
            
            공백으로 구분된 문자열은 첫 번째 문자열만 변환한다.
            
            첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
            
            앞뒤 공백은 무시된다.
            
        5. parseInt
            
            전달받은 문자열 인수를 정수로 해석하여 반환한다.
            
            ```jsx
            parseInt('10');     // -> 10
            parseInt('10.123'); // -> 10
            ```
            
            전달받은 인수가 문자열이 아니면 문자열로 변환한다음 정수로 해석하여 반환한다.
            
            두 번째 인수로 진법을 나타내는 기수를 전달할 수 있다. 기수를 지정하면 첫 번째 인수로 전달된 문자열을 해당 기수의 숫자로 해석하여 반환한다. 이때 반환값은 언제나 10진수다.
            
            기수를 지정하여 10진수 숫자를 해당 기수의 문자열로 변환하여 반환하고 싶을 때는 Number.prototype.toString 메서드를 사용한다.
            
            첫 번째 인수로 전달한 문자열의 첫 번째 문자가 해당 지수의 숫자로 변환될 수 없다면 NaN을 반환한다.
            
            하지만 첫 번째로 전달한 문자열의 두 번째 문자부터 해당 진수를 나타내는 숫자가 아닌 문자와 마주치면 이 문자와 계속되는 문자들은 전부 무시되며 해석된 정수값만 반환한다.
            
            첫 번째 인수로 전달한 문자열에 공백이 있다면 첫 번째 문자열만 해석하여 반환하며, 앞뒤 공백은 무시된다. 만일 첫 번재 문자열을 숫자로 해석할 수 없는 경우 NaN을 반환한다.
            
        6. encodeURI / decodeURI
            
            완전한 URI를 문자열로 전달받아 이스케이프 처리를 위해 인코딩한다. URI는 인터넷에 있는 자원을 나타내는 유일한 주소를 말하며, URI의 하위개념으로 URL, URN이 있다.
            
        7. encodeURIComponent / decodeURIComponent
            
            URI 구성 요소를 인수로 전달받아 인코딩한다.
            
            encodeURIComponent 함수는 인수로 전달된 문자열을 URI의 구성요소인 쿼리 스트링의 일부로 간주한다. 따라서 쿼리 스트링 구분자로 사용되는 =, ?, &까지 인코딩한다.
            
            반면 encodeURI 함수는 매개변수로 전달된 문자열을 완전한 URI 전체라고 간주한다. 따라서 쿼리 스트링 구분자로 사용되는 =, ?, &은 인코딩하지 않는다. 
            
    - 암묵적 전역
        
        ```jsx
        var x = 10; // 전역 변수
        
        function foo() {
            // 선언하지 않은 식별자에 값을 할당
            y = 20; // window.y = 20;
        }
        foo();
        
        // 선언하지 않은 식별자 y를 전역에서 참조할 수 있다.
        console.log(x + y); // 30
        ```
        
        x는 전역 변수이고, y는 전역 객체의 프로퍼티이다. 따라서 x는 호이스팅이 발생하고, y는 호이스팅이 발생하지 않는다.
        

# 22. this

- this 키워드
    
    메서드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.
    
    this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다. this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
    
    this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.
    
    ```jsx
    // this는 어디서든지 참조 가능하다.
    // 전역에서 this는 전역 객체 window를 가리킨다.
    console.log(this);
    
    function square(number) {
        // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
        console.log(this);
        return number * number;
    }
    square(2);
    
    const person = {
        name: 'Lee',
        getName() {
            // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
            console.log(this);
            return this.name;
        }
    };
    console.log(person.getName());
    
    function Person(name) {
        this.name = name;
        // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
        console.log(this);
    }
    
    const me = new Person('Lee');
    ```
    
- 함수 호출 방식과 this 바인딩
    - 일반 함수 호출
        
        기본적으로 this에는 전역 객체가 바인딩된다. 
        
        어떤 함수라도 일반 함수로 호출되면 this에 전역 객체가 바인딩된다.
        
    - 메서드 호출
        
        메서드를 호출한 객체, 즉 메서드를 호출할 때 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체가 바인딩된다.
        
        이때 메서드 내부의 this는 메서드를 소유한 객체가 아닌 “메서드를 호출한 객체"에 바인딩된다.
        
        ```jsx
        const person = {
            name: 'Lee',
            getname() {
                // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
                return this.name;
            }
        };
        
        // 메서드 getName을 호출한 객체는 person이다.
        console.log(person.getname()); // Lee
        
        const anotherPerson = {
            name: 'Kim'
        };
        // getName 메서드를 anotherPerson 객체의 메서드로 할당
        anotherPerson.getName = person.getName;
        
        // getName 메서드를 호출한 객체는 anotherPerson이다.
        console.log(anotherPerson.getName());
        
        // getName 메서드를 변수에 할당
        const getName = person.getName;
        
        // getName 메서드를 일반 함수로 호출
        console.log(getName()); // ''
        // 일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
        // 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값으니 ''이다.
        // Node.js 환경에서 this.name은 undefined이다.
        ```
        
    - 생성자 함수 호출
        
        생성자 함수 내부의 this에는 생성자 함수가 (미래에) 생성할 인스턴스가 바인딩된다.
        
    - Function.prototype.apply/call/bind 메서드에 의한 간접 호출
        
        ~.apply, ~.call 메서드는 this로 사용할 객체와 인수 리스트를 인수로 전달받아 함수를 호출한다.
        
        ~bind 메서드는 함수를 호출하지 않으나 첫 번째 인수로 전달한 값으로 this 바인딩이 교체된 함수를 새롭게 생성해 반환한다.
        

# 23. 실행 컨텍스트

- 소스코드의 타입
    - 전역 코드
    - 함수 코드
    - eval 코드
    - 모듈 코드
- 소스코드의 평가와 실행
    
    모든 소스코드는 실행에 앞서 평가 과정을 거치며 코드를 실행하기 위한 준비를 한다.
    
- 실행 컨텍스트의 역할
    1. 선언에 의해 생성된 모든 식별자를 스코프를 구분하여 등록하고 상태 변화를 지속적으로 관리할 수 있어야 한다.
    2. 스코프는 중첩 관계에 의해 스코프 체인을 형성해야 한다. 즉, 스코프 체인을 통해 상위 스코프로 이동하며 식별자를 검색할 수 있어야 한다.
    3. 현재 실행 중인 코드의 실행 순서를 변경할 수 있어야 하며 다시 되돌아갈 수도 있어야 한다.
    
    ⇒ 실행 컨텍스트의 역할.
    
- 실행 컨텍스트 스택
    
    코드의 실행 순서를 관리하며, 실행 컨텍스트 스택의 최상위에 존재하는 실행 컨텍스트는 언제나 현재 실행 중인 코드의 실행 컨텍스트이다.
    
- 렉시컬 환경
    
    식별자와 식별자에 바인딩된 값, 그리고 상위 스코프에 대한 참조를 기록하는 자료구조로 실행 컨텍스트를 구성하는 컴포넌트이다.
    
    스코프와 식별자를 관리한다.
    
- 실행 컨텍스트의 생성과 식별자 검색 과정
    - 전역 객체 생성
        
        전역 객체는 전역 코드가 평가되기 이전에 생성된다.
        
        전역 객체도 Object.prototype을 상속받는다. 즉, 전역 객체도 프로토타입 체인의 일원이다.
        
    - 전역 코드 평가
        
        소스가 로드되면 자바스크립트 엔진은 전역 코드를 평가한다.
        
        1. 전역 실행 컨텍스트 생성
            
            먼저 비어있는 전역 실행 컨텍스트를 생성하여 실행 컨텍스트 스택에 푸시, 이는 실행 중인 실행 컨텍스트가 된다.
            
        2. 전역 레시컬 환경 생성
            
            전역 렉시컬 환경을 생성하고 전역 실행 컨텍스트에 바인딩.
            
            2.1. 전역 환경 레코드 생성
            
            2.1.1. 객체 환경 레코드 생성
            
            2.1.2. 선언적 환경 레코드 생성
            
            2.2. this 바인딩
            
            2.3. 외부 렉시컬 환경에 대한 참조 결정
            
    - 전역 코드 실행
    - foo 함수 코드 평가
    - foo 함수 코드 실행
    - bar 함수 코드 평가
    - bar 함수 코드 실행
    - bar 함수 코드 실행 종료
    - foo 함수 코드 실행 종료
    - 전역 코드 실행 종료
- 실행 컨텍스트와 블록 레벨 스코프

# 24. 클로저

> 클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.
> 
- 렉시컬 스코프
    
    자바스크립트 엔진은 함수를 어디서 호출했는지가 아니라 함수를 어디에 정의했는지에 따라 상위 스코프를 결정한다. 이를 렉시컬 스코프라 한다.
    
    > **렉시컬 환경의 “외부 렉시컬 환경에 대한 참조"에 저장할 참조값, 즉 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 환경에 의해 결정된다. 이것이 바로 렉시컬 스코프다.**
    > 
- 함수 객체의 내부 슬롯 [[Environment]]
    
    함수가 정의된 환경과 호출되는 환경은 다를 수 있기에 렉시컬 스코프가 가능하려면 자신이 정의된 환경, 즉 상위 스코프를 기억해야 한다.
    
    이를 위해 함수는 자신의 내부 슬롯 [[Environment]]에 자신이 정의된 환경, 즉 상위 스코프를 저장한다.
    
    외부 렉시컬 환경에 대한 참조는 함수 객체의 내부 슬롯 [[Environment]]에 저장된 렉시컬 환경의 참조가 할당된다.
    
- 클로저와 렉시컬 환경
    
    ```jsx
    const x = 1;
    
    function outer() {
    	const x = 10;
    	const inner = function () { console.log(x); };
    	return inner;
    }
    
    const innerFunc = outer();
    innerFunc(); // 10
    ```
    
    → return inner;로 반환된 후 outer 함수의 실행 컨텍스트는 실행 컨텍스트에서 제거되므로 지역변수 x 역시 사라져야 하는데, 결과는 outer의 10이 리턴된다. 
    
    이처럼 외부함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다. 이러한 중첩 함수를 클로저라고 부른다.
    
- 클로저의 활용
    
    클로저는 상태를 안전하게 변경하고 유지하기 위해 사용한다. 상태를 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하기 위해 사용한다.
    
    ```jsx
    // 카운트 상태 변경 함수
    const increase = (function () {
        // 카운트 상태 변수
        let num = 0;
    
        // 클로저
        return function () {
            // 카운트 상태를 1만큼 증가시킨다.
            return ++num;
        }
    }());
    
    console.log(increase()); // 1
    console.log(increase()); // 2
    console.log(increase()); // 3
    ```
    
    즉시 실행 함수는 한 번만 실행되므로 num 변수가 계속 초기화될 일은 없고, num은 외부에서 접근할 수 없으므로 의도치 않은 변경을 걱정할 필요가 없다.
    
- 캡슐화와 정보 은닉
- 자주 발생하는 실수

정답.

20장.

전역으로 사용할 경우 스크립트 단위로 적용되는데, strict mode 스크립트와 non-strict mode 스크립트를 혼용하면 오류가 발생할 수 있다. 

함수 단위로 하는 경우 모든 함수에 일일이 strict mode를 적용하는 것은 번거로운 일이며, 함수마다 어떤 건 적용하고 어떤 건 적용하지 않는 것은 바람직하지 않다.

즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 strict mode를 적용하는 것이 바람직하다.

21장.

1. 래퍼 객체
2. number, number, undefined, true, false, true

22장.

1. 일반 함수 호출 : 전역 객체(global object)
2. 메서드 호출 : 메서드를 호출한 객체, 즉 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체
3. 생성자 함수 호출 : 생성자 함수가 (미래에) 생성할 인스턴스
4. ~.apply, ~.call, ~.bind 메서드 : this로 사용할 객체를 인수로 전달받음.

23장.

1. 렉시컬 환경, 실행 컨텍스트 스택
2. 환경 레코드 : 스코프에 포함된 식별자를 등록하고 식별자에 바인딩된 값을 관리하는 저장소. 
외부 렉시컬 환경에 대한 참조 : 상위스코프를 가리킨다. → 단방향 링크드 리스트인 스코프 체인을 구현한다.