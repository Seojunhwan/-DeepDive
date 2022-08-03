# 퀴즈

## CH16. 프로퍼티 어트리뷰트

> 본문에 따르면, `접근자 프로퍼티` 란 **다른 데이터 프로퍼티의 값을 읽거나 저장할 때** 호출되는 `접근자 함수` 로 구성된 프로퍼티입니다. 

1. 일반적으로 데이터 프로퍼티의 값은 `=` (OO OOO) 를 통해 할당되지만, 접근자 함수를 사용하면 OOO OOO 을 사용하여 할당합니다.
2. 위와 같은 방식의 차이가 갖는 접근자 함수의 장점은 무엇이 있을까요?

<br/>

## CH17. 생성자 함수에 의한 객체 생성
함수 호출 방식에 따른 `this` 바인딩을 맞춰 보세요.

함수 호출 방식 | `this` 가 가리키는 값
:---------:|:---------------:
일반 함수로서 호출  | ???
메서드로서 호출     | ???
생성자 함수로서 호출 | ???

<br/>

## CH19. 프로토타입
#### 📢 호출 간의 차이점
```js
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

// 아래 네 종류의 호출 결과를 각각 예측해보세요.
rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
```

#### 🐹 빠른 햄스터와 게으른 햄스터

- `hamster` 라는 조상 객체를 갖는 두 객체 `speedy` 와 `lazy` 를 만들었습니다. 
	- 각 객체는 `eat` 메서드를 통해 배열 안에 먹은 음식 이름을 집어넣을 수 있습니다.
	- `speedy.eat()` 메서드를 사용해 `speedy` 객체에게 음식을 집어넣었다면, `lazy` 객체도 영향을 받을까요?

```js
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// 햄스터 speedy가 음식을 먹습니다.
speedy.eat("apple");
alert( speedy.stomach ); // apple
alert( lazy.stomach ); // 출력 결과를 예상해봅시다.
```
<details>
<summary><strong>🤔 출력 결과가 예상과 다르다 ?</strong></summary>

#### (1) 왜 두 객체가 `stomach` 배열을 공유할까
1. 메서드 `speedy.eat` 은 프로토타입 `hamster` 에서 발견되는데, 점 앞엔 객체 `speedy` 가 있으므로 **`this` 엔 `speedy` 가 할당**되어 메서드가 실행된다.

2. `this.stomach.push()` 를 실행하려면 프로퍼티 `stomach` 을 찾아서 여기에 `push` 를 호출해야 한다. 그런데 `this` 인 `speedy` 엔 프로퍼티 `stomach` 이 없다.

3. `stomach` 을 찾기위해 프로토타입 체인을 거슬러 올라가보니 `hamster` 에 `stomach` 이 있는것을 발견한다.

4. `push` 메서드는 프로토타입 `hamster` 에 있는 `stomach` 을 대상으로 동작하여 프로토타입에 `food` ( `speedy` 에서 호출한 시점에서 `apple` ) 가 추가된다.

#### (2) 왜 두 객체가 별도의 `stomach` 배열을 가지려면?
1. `this.stomach = 'apple'` 을 사용해 데이터를 할당
	- 앞서 보았듯 `this` 인 `speedy` 엔 프로퍼티 `stomach` 이 없다.따라서 `this.stomach =` 는 **객체 자체에 해당 프로퍼티를 동적 생성**하며, `push` 와 달리 프로토타입 체인에서 `stomach` 을 찾지는 않기 때문에 의도한 대로 잘 작동한다.
2. `speedy`, `lazy` 각각의 객체에 `stomach` 배열 생성
	- 특정 객체의 상태를 설명하는 프로퍼티는 조상 객체가 아닌 객체 자체에 정의하는 것이 이런 문제를 차단할 수 있는 일반적인 방법이다.
</details>
