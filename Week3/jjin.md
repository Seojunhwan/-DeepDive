# 16~19 문제

# 16 프로퍼티 어트리뷰트

### Q. 데이터 프로퍼티가 무엇인지 말하고 다음 표를 채우시오

| 프로퍼티 어트리뷰트 | 프로퍼티 디스크립터 객체의 프로퍼티 | 설명 |
| --- | --- | --- |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

### A.

| 프로퍼티 어트리뷰트 | 프로퍼티 디스크립터 객체의 프로퍼티 | 설명 |
| --- | --- | --- |
| [[Value]]  | value | 프로퍼티 키를 통해 접근하면 반환되는 값 |
| [[Writable]],  | writable | false인 경우 [[Value]] 값 변경 불가 |
| [[Enumerable]],  | enumarable | false인 경우 for … in 문이나 Object.keys 메서드 등으로 열거 불가 |
| [[Configurable]] | configurable | 재정의 가능 여부, false인 경우 프로퍼티의 삭제, 프로퍼티 어트리뷰트 값의 변경이 금지됨. 
단, [[Writable]]이 true인 경우 [[Value]]의 변경과 [[Writable]]을 false로 변경하는 것은 허용된다. |

### Q. 접근자 프로퍼티가 무엇인지 말하고 다음 표를 채우시오

| 프로퍼티 어트리뷰트 | 프로퍼티 디스크립터 객체의 프로퍼티 | 설명 |
| --- | --- | --- |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

### A.

| 프로퍼티 어트리뷰트 | 프로퍼티 디스크립터 객체의 프로퍼티 | 설명 |
| --- | --- | --- |
| [[Get]] | get | 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수. 즉, 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수가 호출되고 그 결과가 프로퍼티 값으로 반환된다. |
| [[Set]] | set | 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수. 즉, 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트 [[Set]]의 값, 즉 setter 함수가 호출되고 그 결과가 프로퍼티 값으로 저장된다. |
| [[Enumerable]] | enumerable |  |
| [[Configurable]] | configurable |  |

# 17 생성자 함수에 의한 객체 생성

### Q. 생성자 함수 Circle(radius)이 new 연산자 없이 호출될 위험을 회피할 수 있는 방법 세가지로 코딩하시오.

### A.

1) 파스칼 케이스

2) new.target

```jsx
function Circle(radius) {
	if(!new.target){
		return new Circle(radius);
	}
}
```

3) 스코프 세이프 생성자 패턴

```jsx
// new와 함께 호출되지 않았다면 this는 window를 가리킴
if (!(this instanceof Circle)) { 
	return new Circle(radius);
}
```

# 18 함수와 일급 객체

### Q. 함수의 4가지 특성을 말하고 그 특성이 드러나도록 함수를 활용해 보시오

### A.

```jsx
//1, 2. 런타임에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num) {
	return ++num;
};

const decrease = function (num) {
	return --num;
};

//2. 객체에 저장
const auxs = {increase, decrease};

//3. 매개변수에 전달
function makeCounter(aux) {
	let num = 0;

	return function () {
		num = aux(num);
		return num;
	};
}

const increaser = makeCounter(auxs.increase);
const decreaser = makeCounter(auxs.decrease);
console.log(increaser()); // 1
console.log(increaser()); // 2
console.log(decreaser()); // -1
console.log(decreaser()); // -2
```

# 19 프로토타입

### Q1. 프로토타입 (객체)는 어떨 때 사용되는가?

### A. 19.3

객체간 상속을 구현. 프로토타입은 부모 객체 역할을 하는 객체로서 자식 객체에 공유 프로퍼티(메서드 포함)을 제공해 자식 객체가 자신의 프로퍼티처럼 자유롭게 사용할 수 있다.

### Q2. 객체 리터럴에 의해 생성된 객체, 생성자 함수에 의해 생성된 객체의 프로토타입은 무엇인가?

### A. 19.3

Object.prototype

prototype 프로퍼티에 바인딩되어 있는 객체

### Q3. __proto__ 접근자 프로퍼티는 어떨 때 사용되는가?

### A. 19.3

getter/setter 접근자 함수를 통해 [[Prototype]] 내부 슬롯에 간접 접근하는 데 사용된다.

내부 슬롯은 프로퍼티가 아니며, 내부 슬롯과 내부 메서드는 직접 접근이 불가하여 접근자 프로퍼티로 간접 접근한다.