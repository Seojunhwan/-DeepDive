# Week 3

# 16. 프로퍼티 어트리뷰트

- 내부 슬롯과 내부 메서드
    
    내부 슬롯과 내부 메서드는 자바스크립트 엔진의 구현 알고리즘을 구현하기 위해 ECMAScript 사양에서 사용하는 의사 프로퍼티와 의사 메서드다.
    
- 프로퍼티 어트리뷰트와 프로퍼티 디스크럽터 객체
    
    자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
    
- 데이터 프로퍼티와 접근자 프로퍼티
    - 데이터 프로퍼티
        
        키와 값으로 구성된 일반적인 프로퍼티. 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티.
        
        1. [[Value]]
            
            → 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값.
            
        2. [[Writable]]
            
            → 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖음.
            
        3. [[Enumerable]]
            
            → 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖음.
            
        4. [[Configurable]]
            
            → 프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖음.
            
    - 접근자 프로퍼티
        
        자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티.
        
        1. [[Get]]
            
            → 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수.
            
        2. [[Set]]
            
            → 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수.
            
        3. [[Enumerable]]
            
            → 데이터 프로퍼티와 동일
            
        4. [[Configurable]]
            
            → 데이터 프로퍼티와 동일
            
        
        ```jsx
        const person = {
        	firstName: 'Ungmo',
        	lastName: 'Lee',
        
        	get fullName() {
        		return `${this.firstName} ${this.lastName};
        	}
        
        	set fullName(name) {
        		// 배열 디스트럭처링 할당: "31.1 배열 디스트럭처링 할당" 참고
        		[this.firstName, this.lastName] = name.split(' ');
        	}
        };
        ```
        
- 프로퍼티 정의
    
    새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것을 말한다.
    
    Object.defineProperty 메서드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다.
    
- 객체 변경 방지
    - 객체 확장 금지
        
        Object.preventExtensions
        
        → 확장이 금지된 객체는 프로퍼티 추가가 금지된다.
        
        프로퍼티 동적 추가와 Object.defineProperty 메서드로 추가하는 방법이 모두 금지된다.
        
    - 객체 밀봉
        
        Object.seal
        
        → 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지가 된다. 밀봉된 객체는 읽기와 쓰기만 가능하다.
        
    - 객체 동결
        
        Object.freeze
        
        → 동결된 객체는 읽기만 가능하다. 추가, 삭제, 재정의 및 쓰기가 되지 않는다.
        
    - 불변 객체
        
        위의 변경 방지 메서드들은 얕은 변경 방지임: 직속 프로퍼티만 변경이 방지되고 중첩 객체까지는 영향을 주지 못한다.
        
        객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면 객체를 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출해야 한다.
        

# 17. 생성자 함수에 의한 객체 생성

- Object 생성자 함수
    
    new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.
    
    ```jsx
    const person = new Object();
    ```
    
    생성자 함수란 new 연산자와 함께 호출하여 객체를 생성하는 함수를 말한다.
    
    하지만 Object 생성자 함수를 사용해 객체를 생성하는 방식은 특별한 이유가 없다면 그다지 유용해 보이지 않는다.
    
- 생성자 함수
    - 객체 리터럴에 의한 객체 생성 방식의 문제점
        
        객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다.
        
        객체가 한두 개라면 넘어갈 수도 있겠지만 만약 수십 개의 객체를 생성해야 한다면 문제가 크다.
        
    - 생성자 함수에 의한 객체 생성 방식의 장점
        
        생성자 함수에 의한 객체 생성 방식은 마치 객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.
        
        ```jsx
        function Circle(radius)
        {
          this.radius = radius;
        
          this.getDiameter = function ()
          {
            return 2 * this.radius;
          };
        }
        
        const Circle1 = new Circle(3);
        const Circle2 = new Circle(10);
        
        console.log(Circle1.getDiameter()); // 6
        console.log(Circle2.getDiameter()); // 20
        ```
        
        생성자 함수는 객체를 생성하는 함수이며, 일반 함수와 동일한 방법으로 생성자 함수를 정의하고 new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.
        
    - 생성자 함수의 인스턴스 생성 과정
        
        생성자 함수의 역할은 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화하는 것이다.
        
        자바스크립트 엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다.
        
        1. 인스턴스 생성과 this 바인딩
            
            암묵적으로 빈 객체가 생성되고, this에 바인딩된다. 이 처리는 런타임 이전에 실행된다.
            
        2. 인스턴스 초기화
            
            런타임 중 this에 바인딩되어 있는 인스턴스를 초기화한다. 이 처리는 개발자가 기술한다.
            
        3. 인스턴스 반환
            
            생성자 함수 내부의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
            
        
        ```jsx
        function Circle(radius)
        {
        	// 1. 암묵적으로 빈 객체가 생성되고 this에 바인딩된다.
        
        	// 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
          this.radius = radius;
        
          this.getDiameter = function ()
          {
            return 2 * this.radius;
          };
        
        	// 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
        }
        
        // 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
        const Circle1 = new Circle(3);
        const Circle2 = new Circle(10);
        
        console.log(Circle1.getDiameter()); // 6
        console.log(Circle2.getDiameter()); // 20
        ```
        
        this가 아닌 다른 객체를 명시적으로 반환할 경우 명시된 객체가 반환되지만, 객체가 아닌 원시 값을 명시적으로 반환할 경우 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
        
        → 생성자 함수 내부에서 return 문을 반드시 생략해야 한다.
        
    - 내부 메서드 [[Call]]과 [[Construct]]
        
        함수가 일반 함수로서 호출되면 함수 객체의 내부 메서드 [[Call]]이 호출되고 new 연산자와 함께 생성자 함수로서 호출되면 내부 메서드 [[Construct]]가 호출된다.
        
        ```jsx
        function foo() {}
        
        // 일반적인 함수로서 호출: [[Call]]이 호출된다.
        foo();
        
        // 생성자 함수로서 호출: [[Construct]]가 호출된다.
        new foo();
        ```
        
        모든 함수 객체는 callable이지만 모든 함수 객체가 constructor인 것은 아니다.
        
    - constructor와 non-constructor의 구분
        
        자바스크립트 엔진은 함수 정의를 평가하여 함수 객체를 생성할 때 함수 정의 방식에 따라 함수를 constructor와 non-constructor로 구분한다.
        
        - constructor : 함수 선언문, 함수 표현식, 클래스
        - non-constructor : 메서드(ES6에서의 축약 표현된 메서드), 화살표 함수
    - new 연산자
        
        new 연산자와 함께 함수를 사용하면 해당 함수는 생성자 함수로 동작한다. 이때 new 연산자와 함께 호출하는 함수는 non-constructor가 아닌 constructor이어야 한다.
        
    - new.target
        
        new.target은 this와 유사하게 constructor인 모든 함수 내부에서 암묵적인 지역 변수와 같이 사용되며 메타 프로퍼티라고 부른다.
        
        new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리키고, new 연산자 없이 일반 함수로서 호출된 함수 내부의 new.target은 undefined다.
        

# 18. 함수와 일급 객체

- 일급 객체
    
    다음과 같은 조건을 만족하는 객체를 일급 객체라 한다.
    
    1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    
    자바스크립트의 함수는 위의 조건을 모두 만족하므로 일급 객체다.
    
    ```jsx
    const increase = function (num) 
    {
        return ++num;
    };
    
    const decrease = function (num)
    {
        return --num;
    };
    
    const auxs = {increase, decrease};
    
    function makeCounter(aux) 
    {
        let num = 0;
    
        return function()
        {
            num = aux(num);
            return num;
        };
    }
    
    const increaser = makeCounter(auxs.increase);
    console.log(increaser()); // 1
    console.log(increaser()); // 2
    ```
    
- 함수 객체의 프로퍼티
    
    함수는 객체이므로 프로퍼티를 가질 수 있다.
    
    - arguments 프로퍼티
        
        프로퍼티 값은 arguments 객체. 함수 외부에서는 참조할 수 없다. 
        
        arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다.
        
        ```jsx
        function sum() {
            let res = 0;
        
            for (let i = 0; i < arguments.length; i++) {
                res += arguments[i];
            }
        
            return res;
        }
        
        console.log(sum());         // 0
        console.log(sum(1, 2));     // 3
        console.log(sum(1, 2, 3));  // 6
        ```
        
    - caller 프로퍼티
        
        caller 프로퍼티는 ECMAScript 사양에 포함되지 않은 비표준 프로퍼티이므로 관심이 없으면 지나쳐도 좋다.
        
    - length 프로퍼티
        
        함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.
        
    - name 프로퍼티
        
        함수의 이름을 나타낸다. 함수를 가리키는 변수의 이름이 아니다.
        
        기명 함수 표현식으로 선언되었을 경우 함수의 이름을 나타내고, 
        익명 함수 표현식으로 선언되었을 경우 함수를 가리키는 변수의 이름을 나타낸다.
        
    - __proto__ 접근자 프로퍼티
        
        __proto__ 프로퍼티는 [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티다. 
        
    - prototype 프로퍼티
        
        생성자 함수로 호출할 수 있는 함수 객체, 즉 constructor만이 소유하는 프로퍼티.
        

# 19. 프로토타입

- 객체지향 프로그래밍
- 상속과 프로토타입
    
    자바스크립트는 프로토타입을 기반으로 상속을 구현한다.
    
    ```jsx
    function Circle(radius) {
        this.radius = radius;
    }
    
    // Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
    // 공유해서 사용할 수 있도록 프로토타입에 추가한다.
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius ** 2;
    }
    ```
    
- 프로토타입 객체
    
    프로토타입은 어떤 객체의 상위 객체의 역할을 하는 객체로서 다른 객체에 공유 프로퍼티를 제공한다.
    
    - __proto__ 접근자 프로퍼티
        
        모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 [[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있다.
        
        - __proto__는 접근자 프로퍼티다.
        - __proto__ 접근자 프로퍼티는 상송을 통해 사용된다.
        - __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유
            
            → 상호 참조에 의해 프로토타입 체인이 생성되는 것을 방지하기 위해서.
            
        - __proto__ 접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 권장하지 않는다.
            
            모든 객체가 __proto__ 접근자 프로퍼티를 사용할 수 있는 것이 아니기 때문.
            
    - 함수 객체의 prototype 프로퍼티
        
        함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
        
        함수 객체는 prototype 프로퍼티를 소유하지만, 일반 객체는 소유하지 않는다.
        
        non-constructor인 화살표 함수와 ES6 메서드 축약 표현으로 정의한 메서드는 prtototype 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않는다.
        
        모든 객체가 가지고 있는(엄밀히 말하면 Object.prototype으로부터 상속받은) __proto__ 접근자 프로퍼티와 함수 객체만이 가지고 있는 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다. 
        
    - 프로토타입의 constructor 프로퍼티와 생성자 함수
        
        모든 프로토타입은 constructor 프로퍼티를 가지고, 이는 prototype 프로퍼티로 자신을 참조하는 생성자 함수를 가리킨다.
        
- 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입
    
    constructor 프로퍼티가 가리키는 생성자 함수는 인스턴스를 생성한 생성자 함수이다.
    
    하지만 리터럴 표기법에 의한 객체 생성 방식과 같이 “명시적으로 new 연산자와 함께 생성자 함수를 호출하여 인스턴스를 생성하지 않는” 객체 생성 방식도 있다. 
    
    프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재한다.
    
    프로토타입의 constructor 프로퍼티를 통해 연결되어 있는 생성자 함수를 리터럴 표기법으로 생성한 객체를 생성한 생성자 함수로 생각해도 크게 무리는 없다.
    
- 프로토타입의 생성 시점
    
    프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다.
    
    - 사용자 정의 생성자 함수와 프로토타입 생성 시점
        
        생성자 함수로서 호출할 수 있는 함수, 즉 constructor는 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
        
        non-constructor는 프로토타입이 생성되지 않는다.
        
        프로토타입도 객체이고 모든 객체는 프로토타입을 가지므로 프로토타입도 자신의 프로토타입을 갖는다. 
        
        → 빌트인 생성자 함수가 아닌 사용자 정의 생성자 함수는 자신이 평가되어 함수 객체로 생성되는 시점에 프로토타입도 더불어 생성되며, 생성된 프로토타입의 프로토타입은 언제나 Object.prototype이다.
        
    - 빌트인 생성자 함수와 프로토타입 생성 시점
        
        모든 빌트인 생성자 함수는 전역 객체가 생성되는 시점에 생성되고, 생성된 프로토타입은 빌트인 생성자 함수의 prototype 프로퍼티에 바인딩된다.
        
        객체가 생성되기 이전에 생성자 함수와 프로토타입은 이미 객체화되어 존재하고, 생성자 함수 또는 리터럴 표기법으로 객체를 생성하면 프로토타입은 생성된 객체의 [[Prototype]] 내부 슬롯에 할당된다.
        
- 객체 생성 방식과 프로토타입의 결정
    
    객체는 추상 연산 OrdinaryObjectCreate에 의해 생성된다. 
    
    프로토타입은 추상 연산에 전달되는 인수에 의해 결정된다. 
    
    - 객체 리터럴에 의해 생성된 객체의 프로토타입
        
        객체 리터럴에 의해 생성된 객체는 Object.prototype을 프로토타입으로 갖게 되며, 이러써 Object.prototype을 상속받는다. 
        
    - Object 생성자 함수에 의해 생성된 객체의 프로토타입
        
        Object 생성자 함수에 의해 생성되는 객체의 프로토타입은 Object.prototype이다.
        
        객체 리터럴과 Object 생성자 함수에 의한 객체 생성 방식의 차이는 프로퍼티를 추가하는 방식에 있다. 
        객체 리터럴 방식은 객체 리터럴 내부에 프로퍼티를 추가하지만 Object 생성자 함수 방식은 일단 빈 객체를 생성한 이후 프로퍼티를 추가해야 한다.
        
    - 생성자 함수에 의해 생성된 객체의 프로토타입
        
        객체 리터럴, Object 생성자 함수와 다르게 생성자 함수의 prototype 프로퍼티에 바인딩되어있는 객체가 전달된다. 
        
- 프로토타입 체인
    
    자바스크립트는 객체의 프로퍼티에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 [[Prototype]] 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. 이를 프로토타입 체인이라 한다. 
    프로토타입 체인은 자바스크립트가 객체 지향 프로그래밍의 상속을 구현하는 매커니즘이다. 
    
    프로토타입 체인의 최상위에 위치하는 객체는 언제나 Object.prototype이다.
    
- 오버라이딩과 프로퍼티 섀도잉
    
    프로토타입 프로퍼티와 같은 이름의 프로퍼티를 인스턴스에 추가하면 프로토타입 체인을 따라 프로토타입 프로퍼티를 검색하여 프로토타입 프로퍼티를 덮어쓰는 것이 아니라 인스턴스 프로퍼티로 추가한다.
    
    덮어쓰는 인스턴스 메서드가 덮이는 프로토타입 메서드를 오버라이딩한다.
    
    상속 관계에 의해 프로퍼티가 가려지는 현상을 프로퍼티 섀도잉이라고 한다.
    
    하위 객체를 통해 프로토타입의 프로퍼티를 변경 또는 삭제하는 것은 불가능하다.
    
- 프로토타입의 교체
    - 생성자 함수에 의한 프로토타입의 교체
        
        ```jsx
        Person.prototype = {
        	sayHello() {
        		console.log(`Hi! My name is ${this.name}`);
        	}
        };
        ```
        
        → 객체 리터럴을 이용해 객체를 만들었을 때 프로토타입에는 constructor 프로퍼티가 들어가나, 위와 같이 바꾸면 constructor 프로퍼티가 없어진다. 따라서 임의적으로 추가해줄 필요가 있다. 
        
    - 인스턴스에 의한 프로토타입의 교체
        
        프로토타입은 생성자 함수의 prototype 프로퍼티뿐만 아니라 인스턴스의 __proto__ 접근자 프로퍼티 (또는 Object.getPrototypeOf 메서드)를 통해 접근할 수 있으므로 이를 통해 (Object.setPrototypeOf 메서드) 프로토타입을 교체할 수 있다. 
        
        ```jsx
        Object.setPrototypeOf(me, parent);
        // me.__proto__ = parent;
        ```
        
        생성자 함수에 의한 프로토타입 교체는 교체된 프로토타입을 생성자 함수가 가리키고 있으나, 인스턴스에 의한 프로토타입 교체는 가리키고 있지 않다. 
        
        → 프로토타입 교체를 통해 상속관계를 동적으로 변경하는 것은 번거로운 작업이므로 직접 교체하지 않는 것이 좋다. 이후 배울 직접 상속이 더 편리하고 안전하다.
        
- instanceof 연산자
    
    이항 연산자로서 좌변에 객체를 가리키는 식별자, 우변에 생성자 함수를 가리키는 식별자를 피연산자로 받는다.
    
    우변의 생성자 함수의 prototype에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 true로 평가되고, 그렇지 않은 경우는 false로 평가된다.
    
    instanceof 연산자는 프로토타입의 constructor 프로퍼티가 가리키는 생성자 함수를 찾는 것이 아니라 생성자 함수의 prototype에 바인딩된 객체가 프로토타입 체인 상에 존재하는지 확인한다.
    
- 직접 상속
    - Object.create에 의한 직접 상속
        
        명시적으로 프로토타입을 지정하여 새로운 객체를 만든다.
        
        첫 번째 매개변수에는 생성할 객체의 프로토타입으로 지정할 객체를 전달하고, 두 번째 매개변수에는 생성할 객체의 프로퍼티 키와 프로퍼티 디스크럽터 객체로 이뤄진 객체를 전달한다.
        
        ```jsx
        //프로토타입이 null인 객체 생성.
        // obj -> null
        let obj = Object.create(null);
        console.log(Object.getPrototypeOf(obj) == null); // true
        // Object.prototype을 상속받지 못한다.
        //console.log(obj.toString()); -> TypeError
        
        // obj -> Object.prototype -> null
        // obj = {};와 동일하다.
        obj = Object.create(Object.prototype);
        console.log(Object.getPrototypeOf(obj) == Object.prototype); // true
        
        // obj => Object.prototype -> null
        // obj = { x: 1 };와 동일하다.
        obj = Object.create(Object.prototype, {
            x: {value: 1, writable: true, enumerable: true, configurable: true}
        });
        // 위 코드는 아래와 동일하다.
        // obj = Object.create(Object.prototype);
        // obj.x = 1;
        console.log(obj.x); // 1
        console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
        
        const myProto = { x: 10 };
        // 임의의 객체를 직접 상속받는다.
        // obj -> myProto -> Object.prototype -> null
        obj = Object.create(myProto);
        console.log(obj.x);
        console.log(Object.getPrototypeOf(obj) === myProto); // true
        
        // 생성자 함수
        function Person(name) {
            this.name = name
        }
        
        // obj -> person.prototype -> Object.prototype -> null
        // obj = new Person('Lee')와 동일하다.
        obj = Object.create(Person.prototype);
        obj.name = 'Lee';
        console.log(obj.name); // Lee
        console.log(Object.getPrototypeOf(obj) === Person.prototype); // true
        ```
        
        - new 연산자가 없이도 객체를 생성할 수 있다.
        - 프로토타입을 지정하면서 객체를 생성할 수 있다.
        - 객체 리터럴에 의해 생성된 객체도 상속받을 수 있다.
    - 객체 리터럴 내부에서 __proto__에 의한 직접 상속
        
        ES6에서는 객체 리터럴 내부에서 __proto__ 접근자 프로퍼티를 사용하여 직접 상속을 구현할 수 있다.
        
- 정적 프로퍼티/메서드
    
    생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메서드를 말한다.
    
    정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없다. 정적 프로퍼티/메서드는 인스턴스의 프로토타입 체인에 속하지 않기 때문이다.
    
- 프로퍼티 존재 확인
    - in 연산자
        
        객체 내에 특정 프로퍼티가 존재하는지 여부를 확인한다.
        
        확인 대상 객체의 프로퍼티뿐만이 아니라 확인 대상 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인한다.
        
    - Object.prototype.hasOwnProperty 메서드
        
        인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환한다. 즉, 상속받은 프로토타입의 프로퍼티 키인 경우 false를 반환한다.
        
- 프로퍼티 열거
    - for … in 문
        
        객체의 모든 프로퍼티를 순회하며 열거한다.
        
        in 연산자처럼 순회 대상 객체의 프로퍼티뿐만 아니라 상속받은 프로토타입의 프로퍼티까지 열거한다.
        
        → for … in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 true인 프로퍼티를 순회하며 열거한다.
        
    - Object.keys/values/entries 메서드
        
        객체 자신의 고유 프로퍼티만 열거하기 위해서는 for … in 문을 사용하는 것보다 Object.keys/values/entries 메서드를 사용하는 것을 권장한다.
        

# Quiz

16장.

1. Cadet이라는 객체가 있다. 객체 안에는 name 프로퍼티가 존재하는데, 이에 대한 프로퍼티 어트리뷰트를 정의하고자 한다. 
name에는 카뎃의 이름이 들어가며, 변경 및 재정의가 불가능해야 된다. 하지만 for … in 문이나 Object.keys 등으로 열거가 가능해야 한다. 
[[Writable]], [[Enumerable]], [[Configurable]]의 값이 각각 어떻게 되는지 서술하시오.
2. p.226 예제에서 lastName의 디스크럽터 객체 프로퍼티는 다 false인데, setter를 이용했을 때 수정이 되는 것을 볼 수 있다. writable, configurable이 false인데 setter로 값의 수정이 가능한 이유는 무엇일까? (질문)

17장. 

다음 설명 중 옳지 않은 것은?

1. this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
2. 객체에서 명시적으로 원시 값을 반환할 경우 this 대신 원시 값이 반환된다.
3. ES6 메서드 축약 표현에 의한 메서드와 화살표 함수는 내부 메서드 [[Call]]을 갖고 있다.
4. 함수 선언문과 함수 표현식은 constructor로 사용할 수 있다.
5. 일반 함수와 생성자 함수에 특별한 형식적 차이는 없다. 

19장.

1) __proto__와 prototype의 차이는 무엇인가?

2) 다음 보기 중 옳지 않은 것은?

1. 객체 리터럴에 의해 생성된 객체의 프로토타입은 Object.prototype이다.
2. Object 생성자 함수에 의해 생성된 객체의 프로토타입은 Object.prototype이다.
3. 생성자 함수에 의해 생성된 객체의 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체다.
4. 아래 코드를 실행하면 Person.prototype에는 constructor 프로퍼티만 포함된다.

```jsx
function Person(name) {
	this.name = name;
}

const me = new Person('Lee');
```

1. 1, 2번에 의해, 객체 리터럴, Object 생성자 함수에 의해 생성된 객체는 Object.prototype에 담긴 다양한 빌트인 메서드를 사용할 수 있으나, 3, 4번에 의해, 생성자 함수에 의해 생성된 객체는 빌트인 메서드를 사용할 수 없다.

---

답

16장.

[[Writable]]: false

[[Enumerable]]: true

[[Configurable]]: false

17장. 

2번. 원시 값을 반환할 경우 암묵적으로 this를 반환한다.

19장.

1)

자바스크립트의 함수는 객체이다.

함수를 정의할 때 함수의 Prototype 객체도 같이 생성되며 둘이 연결된다.

새로운 객체가 생성될 때는 __proto__ 프로퍼티가 같이 생성된다.

만약 이 새로운 객체가 위의 함수로부터 생성된 객체라면 __proto__는 함수의 Prototype을 가리킨다.

__proto__ 접근자 프로퍼티는 객체가 자신의 프로토타입에 접근 또는 교체하기 위해 사용하며, prototype 프로퍼티는 생성자 함수가 자신이 생성할 객체의 프로토타입을 할당하기 위해 사용한다.

2) 

5번. Person.prototype의 프로토타입은 Object.prototype이므로 프로토타입 체인에 의해 Person.prototype에 없는 빌트인 메서드를 참조하면 Object.prototype으로 가서 검색한다.