# 6 week) 25 ~ 27.7장

# 문제

### ❓ 25 ~ 27.7장 문제

### ✅ 25장: 클래스

### 1️⃣ 클래스의 설명으로 옳지 않은 것은?

1) 클래스 몸체에서 정의할 수 있는 메서드는 constructor(생성자), 프로토타입 메서드, 정적 메서드 3개다. 

2) 클래스는 호이스팅이 발생 되지 않는다.

3) 클래스는 인스턴스를 생성해야하기 때문에 new 연산자와 함께 호출해야 한다.

4) constructor는 별도의 반환문을 가져서는 안된다.

5) constructor 내부에서 this에 추가한 프로퍼티는 인스턴스 프로퍼티가 된다.

6) 클래스는 함수다.

- 정답
    
    정답은 2번. 호이스팅이 발생한다. 그렇게 보이지 않을뿐. let, const 키워드처럼 클래스 선언문 이전에 일시적 사각지대에 빠지기 때문에 호이스팅이 발생하지 않는 것처럼 보인다. (422p 참조)
    

### 2️⃣ 최신 브라우저와 최신 Node.js에서는 클래스 필드를 클래스 몸체에 정의할 수 있습니다. 다음 중 에러를 띄우는 코드는? 또 undefined를 띄우는 코드는 무엇일까요?

1) 

```jsx
class Person {
  this.name = '';
}
```

2)

```jsx
class Person {
  name = 'Lee';

  constructor() {
    console.log(name); 
  }
}

new Person();
```

3) 

```jsx
class Person {
  name;
}

const me = new Person();
console.log(me);
```

4)

```jsx
class Person {
  constructor(name) {
    this.name = name;
  }
}

const me = new Person('Lee');
console.log(me);
```

- 정답
    
    441~422p 참고
    
    에러를 띄우는 코드: 1번 (- 클래스 몸체에서 클래스 필드를 정의하는 경우 this에 클래스 필드를 바인딩해서는 안됨) 
    
    (왜 2번은 에러가 안 일어나는지 저도 모르겠어요)
    
    undefined를 띄우는 코드: 3번 (초기값을 할당하지 않아서)
    
    2번 결과 `Person {name: 'Lee'}`
    
    4번 결과 `Person {name: 'Lee'}`
    

### ✅ 26장: ES6 함수의 추가 기능

### 1️⃣ 다음 중 ES6의 함수에 대한 설명이다. (O/X 문제)

1) ES6 사양에서 정의한 메서드는 인스턴스를 생성할 수 있는 constructor다. ⭕ ❌

2) ES6에서는 함수를 사용목적에 따라 일반함수, 메서드, 화살표 함수로 구분했다. ⭕ ❌

3) ES6 메서드가 아닌 함수는 super 키워드를 사용할 수 없다. ⭕ ❌

- 정답
    
    ❌ ⭕ ⭕ 
    
    1번: ES6 사양에서 정의한 메서드는 인스턴스를 생성할 수 없는 non-constructor다. 따라서 ES6 메서드는 생성자 함수로서 호출할 수 없다. (472p)
    
    2번: 472쪽 참조
    
    3번: 473쪽 참조 (ES6 메서드가 아니라는 것은 일반함수와 화살표 함수를 가리키는 걸까요…?)
    

### 2️⃣ 다음 중 화살표 함수에 대한 설명으로 옳지 않은 것은?

1) 화살표 함수는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.

2) 화살표 함수는 함수 자체의 this 바인딩을 갖지 않고, 상위 스코프의 this를 그대로 참조한다.

3) 화살표 함수가 전역 함수라면 화살표 함수의 this는 전역 객체를 가리킨다.

4) 화살표 함수는 function.prototype.call, function.prototype.apply,  function.prototype.bind 메서드를 사용하여 화살표 내부의 this를 교체할 수 있다.

- 정답
    
    정답: 4번. 교체할 수 없다.화살표 함수는 함수 자체의 this 바인딩을 갖지 않기 때문에. 그렇다고 호출할 수 없다는 건 아님!! 호출은 가능하지만 함수 자체의 this 바인딩을 갖지 않기 때문에 교체 못할 뿐. (항상 상위 스코프의 this 바인딩을 참조함) (482쪽 참조)
    

### ✅ 27장: 배열

### 1️⃣ 다음의 결과는?

```jsx
const arr = [1,2,3,4,5];
arr.length = 4;
console.log(arr); //1

const arr2 = [, , , 1];
console.log(arr2.length); //2

const arr3 = [];
console.log(arr3.length); //3

const arr4 = new Array(4);
console.log(arr4.length); //4

const arr4 = Array.of(4);
console.log(arr4.length); //5

arr['a'] = 6;
console.log(arr); //6
```

- 정답
    
    1번) [1, 2, 3, 4]
    2번) 4 (499페이지 희소배열 참고) 
    3번) 0 (500페이지 참고) 
    4번) 4 (501페이지 참고)
    
    5번) 1 (502페이지 참고)
    6번) [1, 2, 3, 4, a: 6] (506페이지 참고)
    

---

# 내용 정리

### ☑️ 25장: 클래스

**25.1 클래스는 프로토타입의 문법적 설탕인가?**

클래스 없이도 생성자 함수와 프로토타입을 통해 객체지향 언어의 상속을 구현할 수 있다.

**25.2 클래스 정의**

- 클래스 선언문

```jsx
class Person {}
```

- 표현식으로도 클래스 정의 가능

```jsx
//익명 클래스 표현식
const Person = class {};

//기명 클래스 표현식
const Person = class MyClass {};
```

- 클래스는 값처럼 사용할 수 있는 일급 객체

```
1. 무명의 리터럴로 생성할 수 있다. 즉 런타임에 생성이 가능
2. 변수나 자료구조(객체, 배열)에 저장할 수 있다.
3. 함수의 매개변수에 전달할 수 있다.
4. 함수의 반환값으로 사용할 수 있다.
```

- 클래스 몸체에는 0개 이상의 메서드만 정의 가능.
- constructor(생성자), 프로토타입 메서드, 정적 메서드

```jsx
// 클래스 선언문
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public하다.
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  // 정적 메서드
  static sayHello() {
    console.log('Hello!');
  }
}

// 인스턴스 생성
const me = new Person('Lee');

// 인스턴스의 프로퍼티 참조
console.log(me.name); // Lee
// 프로토타입 메서드 호출
me.sayHi(); // Hi! My name is Lee
// 정적 메서드 호출
Person.sayHello(); // Hello!
```

**25.3 클래스 호이스팅**

- 클래스는 함수 평가된다
- 클래스는 정의 이전에 참여할 수 없다.
- 호이스팅이 발생하지 않는 것처럼 보이나 const, let처럼일시적 사각지대에 빠진것임
- var, let, const, function, class 키워드를 사용하여 선언된 모든 식별자는 호이스팅된다. 선언문은 런타임 이전에 먼저 실행되기 때문이다.

**25.4 인스턴스 생성**

- 클래스는 생성자 함수이며 new 연산자와 함께 호출되어 인스턴스를 생성한다.
- 반드시 new 연산자와 함께 호출해야 한다!

```jsx
class Person {}

// 클래스를 new 연산자 없이 호출하면 타입 에러가 발생한다.
const me = Person();
// TypeError: Class constructor Foo cannot be invoked without 'new'
```

- 클래스를 가리키는 식별자(person)를 사용해 인스턴스를 생성하지 않고 기명 클래스 표현식의 클래스 이름(Myclass)를 사용해 인스턴스를 생성하면 에러가 발생!

```jsx
**const Person = class MyClass {};** ❌

// 함수 표현식과 마찬가지로 클래스를 가리키는 식별자로 인스턴스를 생성해야 한다.
const me = new Person();

// 클래스 이름 MyClass는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자다.
console.log(MyClass); // ReferenceError: MyClass is not defined

**const you = new MyClass();** ❌ // ReferenceError: MyClass is not defined
```

**25.5 메서드**

**____25.5.1 constructor**

```jsx
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}
```

- constructor는 인스턴스를 생성하고 초기화하기 위한 특수한 메서드다.
- 클래스는 인스턴스를 생성하기 위한 생성자 함수다. new 연산자와 함께 클래스를 호출하면 클래스는 인스턴스를 생성한다

→ 생성자 함수와 마찬가지로, constructor 내부에서 this에 추가한 프로퍼티는 인스턴스 프로퍼티가 된다.

- constructor는 메서드로 해석되는 것이 아니라 클래스가 평가되어 새성한 함수 객체 코드의 일부가 된다. 클래스 정의가 평가되면 constructor의 기술된 동작을 하는 함수 객체가 생성된다.

- constructor는 생성자 함수와 유사하지만 몇 가지 차이가 있다.
    - constructor는 생략 할 수 있다.
    - constructor는 클래스 내에 최대 한 개만 존재할 수 잇다
    - constructor를 생략하면 클래스에 빈 constructor가 암묵적으로 정의된다. → 빈 객체 생성
    - 프로퍼티가 추가되어 초기화된 인스턴스를 생성하려면 constructor 내부에서 this에 인스턴스 프로퍼티를 추가한다.
    
    ```jsx
    class Person {
      constructor() {
        // 고정값으로 인스턴스 초기화
        this.name = 'Lee';
        this.address = 'Seoul';
      }
    }
    
    // 인스턴스 프로퍼티가 추가된다.
    const me = new Person();
    console.log(me); // Person {name: "Lee", address: "Seoul"}
    ```
    
    ❗ 인스턴스 초기화하려면 constructor를 생략해서는 안된다.
    
    - constructor는 별도의 반환문을 가지지 않아야 한다. 암묵적으로 this, 즉 인스턴스를 반환하기 때문
    

**____25.5.2 프로토타입 메서드**

```jsx
// 생성자 함수
function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
**Person.prototype.sayHi** = function () {
  console.log(`Hi! My name is ${this.name}`); ⭕
};

// 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`); ⭕
  }

const me = new Person('Lee');
me.sayHi(); // Hi! My name is Lee
```

- 클래스 몸체에 정의한 메서드는 prototype 프로퍼티에 메서드를 추가하지 않아도 기본적으로 프로토타입 메서드가 된다.
- 클래스가 생성한 인스턴스는 프로토타입 체인의 일원이 된다.

→ 클래스는 생성자 함수와 같이 인스턴스를 생성하는 생성자 함수다. 

→ 클래스는 생성자 함수와 마찬가지로 프로토타입 기반의 객체 생성 메커니즘이다.

**____25.5.3 정적 메서드**

- 정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있는 메서드

```jsx
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }

  // 정적 메서드
  **static sayHi**() {
    console.log('Hi!');
  }
}
```

- 클래스에서는 메서드에 static 키워드를 붙이면 정적 메서드(클래스 메서드)가 된다.

```jsx
// 정적 메서드는 클래스로 호출한다.
// 정적 메서드는 인스턴스 없이도 호출할 수 있다.
Person.sayHi(); // Hi! ⭕

// 인스턴스 생성
const me = new Person('Lee');
me.sayHi(); // TypeError: me.sayHi is not a function ❌
```

- 정적 메서드는 클래스 정의 이후 인스턴스를 생성하지 않아도 호출할 수 있다.
- 정적 메서드는 인스턴스로 호출할 수 없다. 인스턴스의 프로토타입 체인상에는 클래스가 존재하지 않기 때문에 인스턴스로 클래스의 메서드를 상속받을 수 없다.

**____25.5.4 정적 메서드와 프로토타입 메서드의 차이**

```jsx
class Square {
  // 정적 메서드
  static area(width, height) {
    **return width * height;**
  }
}

console.log(Square.area(10, 10)); // 100
```

```jsx
class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // 프로토타입 메서드
  area() {
    **return this.width * this.height;**
  }
}

const square = new Square(10, 10);
console.log(square.area()); // 100
```

- 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로 호출한다.
- 정적 메서드는 인스턴스 프로퍼티를 참조하지 않는다
- 인스턴스 프로퍼티를 참조해야 한다면 정적 메서드 대신 프로토타입 메서드를 사용해야 한다.

- this를 사용하지 않은 메서드는 정적 메서드로 정의하는 것이 좋다..

**____25.5.5 클래스에서 정의한 메서드의 특징**

1) function 키워드를 생략한 메서드 축약 표현을 사용한다

2) 객체 리터럴과는 다르게 클래스에 메서드를 정의할 때는 콤마가 필요없다

3) 암묵적으로 strict mode로 실행된다.

4) for..in 문이나 object.keys 메서드 등으로 열거할 수 없다 ⇒ `[[Enumerable]]`의 값이 false다.

5) 내부 메서드 `[[Construct]]`를 갖지 않는 non-constructor다. 따라서 new 연산자와 함께 호출할 수 없다.

**25.6 클래스의 인스턴스 생성 과정**

- new 연산자와 함께 클래스를 호출하면 생성자 함수와 마찬가지로 클래스의 내부 메서드 `[[Construct]]`가 호출된다. 클래스는 new 연산자 없이 호출할 수 없다.
- 인스턴스 생성 과정
    
    1) 인스턴스 생성과 this 바인딩
    
    2) 인스턴스 초기화
    
    3) 인스턴스 반환
    

**25.7 프로퍼티**

**____25.7.1 인스턴스 프로퍼티**

- 인스턴스 프로퍼티는 constructor 내부에서 정의해야 한다.

```jsx
class Person {
  constructor(name) {
    // 인스턴스 프로퍼티
    this.name = name;
  }
}

const me = new Person('Lee');
console.log(me); // Person {name: "Lee"}
```

- 클래스가 암묵적으로 생성한 빈 객체, 즉 인스턴스에 프로퍼티가 추가되어 인스턴스가 초기화된다.

**____25.7.2 접근자 프로퍼티**

- 접근자 프로퍼티란 자체적으로 값(`[[Value]]` 내부 슬롯)을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.
- 접근자 프로퍼티도 클래스에서 사용 가능

```jsx
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  **get fullName()** {
    return `${this.firstName} ${this.lastName}`;
  }

  // setter 함수
  **set fullName(name)** {
    [this.firstName, this.lastName] = name.split(' ');
  }
}

const me = new Person('Ungmo', 'Lee');

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${me.firstName} ${me.lastName}`); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
me.fullName = 'Heegun Lee';
console.log(me); // {firstName: "Heegun", lastName: "Lee"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(me.fullName); // Heegun Lee

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName'));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}
```

- 접근자 프로퍼티는 접근자 함수 getter와 setter로 구분되어 있다.
- 클래스의 메서드는 기본적으로 프로토타입 메서드가 된다. → 클래스의 접근자 프로퍼티 또한 인스턴스 프로퍼티가 아닌 프로토타입의 프로퍼티가 된다.

**____25.7.3 클래스 필드 정의 제안**

- 자바스크립트의 클래스에서 인스턴스 프로퍼티를 선언하고 초기화하려면 반드시 constructor 내부에서 this에 프로퍼티를 추가해야 한다.
- 최신 브라우저와 최신 node.js에서는 클래스 필드를 클래스 몸체에 정의할 수 있다.

```jsx
class Person {
  // 클래스 필드 정의
  name = 'Lee';
}

const me = new Person();
console.log(me); // Person {name: "Lee"}
```

- 클래스 필드를 참조하는 경우 자바스크립트에서는 this를 반드시 사용해야한다.

```jsx
class Person {
  // 클래스 필드
  name = 'Lee';

  constructor() {
    console.log(name); // ReferenceError: name is not defined
		console.log(this.name) ⭕
  }
}

new Person();
```

- 클래스에 초기값을 할당하지 않으면 undefined를 갖는다 → 고로 constructor에서 클래스 필드를 초기화하자

```jsx
class Person {
  constructor(name) {
    this.name = name;
  }
}

const me = new Person('Lee');
console.log(me); // Person {name: "Lee"}
```

- 함수를 클래스 필드에 할당할 수 있다. 즉 클래스 필드를 통해 메서드를 정의할 수 있다. → 다만 이 때 함수가 프로토타입 메서드로 가야하는데, 인스턴스 자체의 메서드로 간다. 모든 클래스 필드는 인스턴스 프로퍼티가 되기 때문이다. 따라서 클래스 필드에 함수를 할당하는 것은 권장하지 않는다.

____25.7.4 private 필드 정의 제안

- 인스턴스 프로퍼티는 인스턴스를 통해 클래스 외부에서 언제나 참조할 수 있다. 언제나 public 하다.
- 최근에 private 필드 가능해짐. 앞에 #만 붙이면 됨

```jsx
class Person {
  // private 필드 정의
  #name = '';

  constructor(name) {
    // private 필드 참조
    this.#name = name;
  }
}

const me = new Person('Lee');

// private 필드 #name은 클래스 외부에서 참조할 수 없다.
console.log(me.#name);
// SyntaxError: Private field '#name' must be declared in an enclosing class
```

- 클래스 내부에서만 private 필드 참조 가능
- 접근자프로퍼티를 통해 간접적으로 접근하는 방법은 유효함
- private 필드는 반드시 몸체에 정의해야 한다.

```jsx
class Person {
  constructor(name) {
    // private 필드는 클래스 몸체에서 정의해야 한다.
    this.#name = name; ❌
    // SyntaxError: Private field '#name' must be declared in an enclosing class
  }
}
```

**____25.7.5 static 필드 정의 제안**

- 최근에 새로 제안됨

```jsx
class MyMath {
  // static public 필드 정의
  static PI = 22 / 7;

  // static private 필드 정의
  static #num = 10;

  // static 메서드
  static increment() {
    return ++MyMath.#num;
  }
}

console.log(MyMath.PI); // 3.142857142857143
console.log(MyMath.increment()); // 11
```

**25.8 상속에 의한 클래스 확장**

**____25.8.1 클래스 상속과 생성자 함수 상속**

- 기존 클래스를 상속받아 새로운 클래스를 확장하여 정의하는 것

```jsx
class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() { return 'eat'; }

  move() { return 'move'; }
}

// 상속을 통해 Animal 클래스를 확장한 Bird 클래스
class Bird extends Animal {
  fly() { return 'fly'; }
}

const bird = new Bird(1, 5);

console.log(bird); // Bird {age: 1, weight: 5}
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true

console.log(bird.eat());  // eat
console.log(bird.move()); // move
console.log(bird.fly());  // fly
```

**____25.8.2 extends 키워드**

```jsx
// 수퍼(베이스/부모)클래스
class Base {}

// 서브(파생/자식)클래스
class Derived extends Base {}
```

**____25.8.3 동적 상속**

- extends 키워드는 클래스 뿐만 아니라 생성자 함수를 상속받아 클래스를 확장할 수도 있다.
- extends 키워드 다음에는 [[Construct]]  내부 메서드를 갖는 함수 객체로 평가될 수 있는 모든 표현식을 사용할 수 있다.

```jsx
function Base1() {}

class Base2 {}

let condition = true;

// 조건에 따라 동적으로 상속 대상을 결정하는 서브클래스
**class Derived extends (condition ? Base1 : Base2)** {}

const derived = new Derived();
console.log(derived); // Derived {}

console.log(derived instanceof Base1); // true
console.log(derived instanceof Base2); // false
```

**____25.8.4 서브클래스의 constructor**

- 클래스에서 constructor를 생략하면, 클래스에 다음과 같이 비어있는 constructor가 암묵적으로 생성된다.

```jsx
constructor() {}
```

- 서브 클래스에서 constructor를 생략하면 클래스에 다음과 같은 constructor가 암묵적으로 정의된다. args는 new 연산자와 함께 클래스를 호출할 때 전달한 인수의 리스트다.

```jsx
constructor(...args) { super(...args); }
```

- 다음과 같이 수퍼 클래스와 서브 클래스 모두 constructor를 생략하면? 아래와 같이 생성된다.

```jsx
// 수퍼클래스
class Base {}

// 서브클래스
class Derived extends Base {}

---

// 수퍼클래스
class Base {
  constructor() {}
}

// 서브클래스
class Derived extends Base {
  constructor() { super(); }
}

const derived = new Derived();
console.log(derived); // Derived {}
```

**____25.8.5 super 키워드**

- super 키워드는 함수처럼 호출할 수도 있고 this와 같이 식별자처럼 참조할 수 있는 특수한 키워드다.
    - super를 호출하면 수퍼 클래스의 constructor를 호출한다.
    - super를 참조하면 수퍼 클래스의 메서드를 호출할 수 있다.
- super 호출: super를 호출하면 수퍼클래스의 constructor(super-constructor)를 호출한다.
    
    ```jsx
    // 수퍼클래스
    class Base {
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
    }
    
    // 서브클래스
    class Derived extends Base {
      **// 다음과 같이 암묵적으로 constructor가 정의된다.
      // constructor(...args) { super(...args); }**
    }
    
    const derived = new Derived(1, 2);
    console.log(derived); // Derived {a: 1, b: 2}
    ```
    
- super를 호출할 때 주의할 사항은?
    - 서브클래스에서 constructor를 생략하지 않는 경우 서브클래스의 constructor에서는 반드시 super를 호출해야 한다.
    - 서브클래스의 constructor에서 super를 호출하기 전까지 this를 참조할 수 없다.
    - super는 반드시 서브클래스의 constructor에서만 호출한다

- super 참조: 메서드 내에서 super를 참조하면 수퍼 클래스의 메서드를 호출할 수 있다.
    - 서브클래스 프로토타입 메서드의 내에서 super.sayHi는 수퍼클래스의 프로토타입 메서드 sayHi를 가리킨다.

```jsx
// 수퍼클래스
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

// 서브클래스
class Derived extends Base {
  sayHi() {
    // super.sayHi는 수퍼클래스의 프로토타입 메서드를 가리킨다.
    return `${super.sayHi()}. how are you doing?`;
  }
}

const derived = new Derived('Lee');
console.log(derived.sayHi()); // Hi! Lee. how are you doing?
```

- es6의 메서드 축약 표현으로 정의된 함수만이 `[[HomeObject]]`를 갖는다. 즉, 메서드 축약 표현으로 정의된 함수만이 super참조를 할 수 있다.
    - 서브클래스의 정적 메서드 내에서 super.sayHi는 수퍼클래스의 정적 메서드 sayHi를 가리킨다. → static한 애들끼리도 super에 접근할 수 있다.

**____25.8.6 상속 클래스의 인스턴스 생성 과정**

1) 서브클래스의 super 호출

2) 수퍼클래스의 인스턴스 생성과 this바인딩

3) 수퍼클래스의 인스턴스 초기화

4) 서브클래스 constructor로의 복귀와 this 바인딩

5) 서브클래스의 인스턴스 초기화

6) 인스턴스 반환

**____25.8.7 표준 빌트인 생성자 함수 확장**

- extends의 키워드를 통해 표준 빌트인 생성자 함수 확장 가능

```jsx
// Array 생성자 함수를 상속받아 확장한 MyArray
class MyArray extends Array {
  // 중복된 배열 요소를 제거하고 반환한다: [1, 1, 2, 3] => [1, 2, 3]
  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }

  // 모든 배열 요소의 평균을 구한다: [1, 2, 3] => 2
  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray); // MyArray(4) [1, 1, 2, 3]

// MyArray.prototype.uniq 호출
console.log(myArray.uniq()); // MyArray(3) [1, 2, 3]
// MyArray.prototype.average 호출
console.log(myArray.average()); // 1.75
```

### ☑️ 26장: ES6 함수의 추가 기능 (정리 안됨)

26.1 함수의 구분

26.2 메서드

26.3 화살표 함수

____26.3.1 화살표 함수 정의

____26.3.2 화살표 함수와 일반 함수의 차이

____26.3.3 this

____26.3.4 super

____26.3.5 arguments

26.4 Rest 파라미터

____26.4.1 기본 문법

____26.4.2 Rest 파라미터와 arguments 객체

26.5 매개변수 기본값

### ☑️ 27장: 배열 (정리 안됨)

27.1 배열이란?

27.2 자바스크립트 배열은 배열이 아니다

27.3 length 프로퍼티와 희소 배열

27.4 배열 생성

____27.4.1 배열 리터럴

____27.4.2 Array 생성자 함수

____27.4.3 Array.of

____27.4.4 Array.from

27.5 배열 요소의 참조

27.6 배열 요소의 추가와 갱신

27.7 배열 요소의 삭제