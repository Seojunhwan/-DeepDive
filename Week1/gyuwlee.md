### CH04. 변수 : 호이스팅과 함수
```
console.log(variable)
var variable = "Hi";
console.log(variable)
```
위의 코드를 실행하면, 각각 `undefined` 와 `Hi` 가 출력될 것입니다.
`ReferenceError` 는 발생하지 않습니다.

그러면 변수가 아닌, 함수에서 호이스팅은 어떤 형태로 나타날까요?

아래 코드는 네 가지 방식으로 함수를 작성합니다:
1. `함수 선언식` 으로 작성
2. `const` 키워드 사용, `함수 표현식` 으로 작성
3. `let` 키워드 사용, `화살표 함수` 로 작성
4. `var` 키워드 사용, `화살표 함수` 로 작성

```js
console.log(dec(2,3))
console.log(exp(2,3))
console.log(arrow(2,3))
console.log(arrow2(2,3))

function dec(num, num2) {
    console.log(num + num2);
}

const exp = function(num1, num2) {
    console.log(num + num2);
  }

let arrow2 = (num, num2) => {
	return num + num2
} 

var arrow = (num, num2) => {
	console.log(num + num2); 
} 
```

각 함수의 호이스팅 여부 및, 만약 호이스팅이 되지 않는다면 `ReferenceError` 에 의한 것이 맞는지 생각해 봅시다.

<br/>

### CH06. 데이터 타입 : 자료형 예측
```js
typeof(15)

typeof(5.5)

typeof(NaN)

typeof("hello")

typeof(`nice ${2} meet you`)

typeof(true)

typeof(1 != 2)

"foo" + "s"

1 + "3"

"bar" + 5
```
자료형을 예측해 봅시당

<br/>

### CH07. 연산자 + CH09. 타입 변환
#### 1) 다른 형을 가진 값 간의 비교
(1) 숫자와 문자열 자료형 간 비교는 가능할까요?
```js
console.log( '2' > 1 ); 
console.log( '01' == 1 );
```
(2) 각각 `true`, `false` 로 평가되는 값이 동등(`==`) 할 수 있을까요?
```js
let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // ??
```
<br/>

#### 2) `null` 이나 `undefined` 와 비교하기
(1) `null >= 0` 의 평가값은 `true` 입니다. 그렇다면 아래의 나머지 두 코드 중 어떤 것이 `true` 일까요?
```js
console.log( null >= 0 ); // true
console.log( null > 0 );
console.log( null == 0 );
```
(2) 다음 중 `true` 인 코드를 찾아봅시다. 만약 `false` 라면 어째서인지도 생각해 봅시다.
```js
console.log( undefined > 0 );
console.log( undefined < 0 );
console.log( undefined == 0 );
```

### CH08. 제어문
(1) 아래 코드는 의도대로 작동할까요?
```js
arg = 4
switch (arg) {
  case (arg < 5):
    console.log( '5 미만입니다.' );
    break;

  default:
    console.log( '알 수 없는 값입니다.' );
}
```
(2) 아래 코드를 실행시켜, 값으로 `6` 을 입력하면 어떻게 될까요?
```js
let arg = prompt("값을 입력해주세요.");
switch (arg) {
  case '0':
  case '1':
  case '2':
  case '3':
  case '4':
    console.log( '5 미만입니다.' );
    break;

  case '5':
    console.log( '5입니다.' );
    break;

  case 6:
    console.log( '6입니다.' );
    break;

  default:
    console.log( '알 수 없는 값입니다.' );
}
```
switch 문은 **일치 비교** 로 조건을 확인하므로, 자료형이 중요합니다.

동일한 코드를 if 문으로 작성해 봅시다:
```js
let arg = prompt("값을 입력해주세요.");
if (arg === '0' || arg === '1'
	arg === '2' || arg === '3'
	arg === '4')
    console.log( '5 미만입니다.' );
else if (arg === '5')
    console.log( '5입니다.' );
else if (arg === 6)
    console.log( '6입니다.' );
else
    console.log( '알 수 없는 값입니다.' );
```
조건이 `||` 나 `&&` 로 길어질수록, `case` 로 분리하는 `switch` 문의 가독성이 더 높을 수 있습니다.

하지만 `if` 문을 사용하면 조건의 표현이 보다 자유롭다는 장점이 있습니다. 
만약 `arg` 의 자료형이 문자가 아닌 숫자였다면, `if` 문에서 `if (arg < 5)` 로 훨씬 간결하게 작성할 수 있습니다.

