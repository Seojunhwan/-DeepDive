# Week 9

# Quiz

## 44. REST API

1. REST API 설계 원칙에 대해서 빈칸을 채워보자!
    - URI는 _ _ _를 표현해야 한다.
    - _ _ _에 대한 행위는 HTTP 요청 메서드로 표현한다.
2. 5가지 HTTP 요청 메서드
    - 리소스에서 요소를 취득하는 요청 : _ _ _
    - 리소스에 새로운 요소를 생성하는 요청 : _ _ _ _
    - 특정 리소스 전체를 교체할 때 사용하는 요청 : _ _ _
    - 특정 리소스의 일부를 수정할 때 사용하는 요청 : _ _ _ _ _
    - 리소스에서 id를 사용하여 요소를 삭제하는 요청 : _ _ _ _ _ _

## 45. 프로미스

1. 비동기 함수의 처리 결과에 대한 후속 처리는 비동기 함수 내부에서 수행해야 하는 이유는 무엇일까요?
2. 프로미스를 사용함에 있어 좋아진 점을 콜벡 지옥과 에러 처리 면에서 설명해봅시다!
3. 아래 코드의 실행 결과는 무엇이며, 이를 통해 알 수 있는 태스크 큐와 마이크로태스크 큐의 우선순위 차이를 생각해봅시다!
    
    ```jsx
    setTimeout(() => console.log(1), 0);
    
    Promise.resolve()
    	.then(() => console.log(2))
    	.then(() => console.log(3));
    ```
    

## 46. 제너레이터와 async/await

1. 제너레이터와 일반 함수의 차이에 대해서 빈 칸 채우기
    - 제너레이터 함수는 함수 호출자에게 함수 실행의 _ _ _을 양도할 수 있다.
    - 제너레이터 함수는 함수 호출자와 함수의 _ _를 주고받을 수 있다.
    - 제너레이터 함수를 호출하면 _ _ _ _ _ 객체를 반환한다.
2. 다음 함수는 실행하는데 각각 몇 초가 걸리는지 async/await의 기능에 맞춰 설명해봅시다!
    
    ```jsx
    async function foo1() {
        const a = await new Promise(resolve => setTimeout(() => resolve(1), 3000));
        const b = await new Promise(resolve => setTimeout(() => resolve(2), 2000));
        const c = await new Promise(resolve => setTimeout(() => resolve(3), 1000));
    
        console.log([a, b, c]); // [1, 2, 3]
    }
    
    async function foo2() {
        const res = await Promise.all([
            new Promise(resolve => setTimeout(() => resolve(1), 3000)),
            new Promise(resolve => setTimeout(() => resolve(2), 2000)),
            new Promise(resolve => setTimeout(() => resolve(3), 3000)),
        ]);
    
        console.log(res); // [1, 2, 3]
    }
    ```
    

## 47. 에러 처리

try…catch…finally의 각 역할에 대해서 복습해보고, 에러 처리를 어디에 활용할 수 있을 지 생각해봅시다!

---

# 44. REST API

REST는 HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처고, REST API는 REST를 기반으로 서비스 API를 구현한 것을 의미한다.

- REST API의 구성
    
    REST API는 자원, 행위, 표현의 3가지 요소로 구성된다. 
    
- REST API 설계 원칙
    1. URI는 리소스를 표현해야 한다.
        
        URI는 리소스를 표현하는 데 중점을 두어야 한다. 리소스를 식별할 수 있는 이름은 동사보다는 명사를 사용한다. 따라서 이름에 get 같은 행위에 대한 표현이 들어가서는 안 된다.
        
    2. 리소스에 대한 행위는 HTTP 요청 메서드로 표현한다.
        
        HTTP 요청 메서드는 클라이언트가 서버에게 요청의 종류와 목적을 알리는 방법이며, 주로 5가지 요청 메서드를 사용하여 CRUD를 구현한다.
        
- JSON Server를 이용한 REST API 실습
    - JSON Server 설치
    - db.json 파일 생성
    - JSON Server 실행
    - GET 요청
        
        ```jsx
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <body>
            <pre></pre>
            <script>
                const xhr = new XMLHttpRequest();
                xhr.open('GET', '/todos/1');
        
                xhr.send();
        
                xhr.onload = () => {
                    if (xhr.status === 200) {
                        document.querySelector('pre').textContent = xhr.response;
                    }
                    else {
                        console.error('Error', xhr.status, xhr.statusText);
                    }
                };
            </script>
        </body>
        
        </html>
        ```
        
    - POST 요청
        
        ```jsx
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <body>
            <pre></pre>
            <script>
                const xhr = new XMLHttpRequest();
        
                xhr.open('POST', '/todos');
        
                xhr.setRequestHeader('content-type', 'application/json');
        
                xhr.send(JSON.stringify({ id: 4, content: 'Angular', completed: false }));
        
                xhr.onload = () => {
                    if (xhr.status === 200 || xhr.status === 201) {
                        document.querySelector('pre').textContent = xhr.response;
                    }
                    else {
                        console.error('Error', xhr.status, xhr.statusText);
                    }
                }
            </script>
        </body>
        
        </html>
        ```
        
    - PUT 요청
    - PATCH 요청
    - DELETE 요청

# 45. 프로미스

- 비동기 처리를 위한 콜백 패턴의 단점
    
    전통적인 콜백 패턴은 콜백 헬로 인해 가독성이 나쁘고 비동기 처리 중 발생한 에러의 처리가 곤란하며 여러 개의 비동기 처리를 한 번에 처리하는 데도 한계가 있다.
    
    - 콜백 헬
        
        비동기 함수를 호출하면 함수 내부의 비동기로 동작하는 코드가 완료되지 않았다 해도 기다리지 않고 즉시 종료된다. 즉, 비동기 함수 내부의 비동기로 동작하는 코드는 비동기 함수가 종료된 이후에 완료된다. 따라서 비동기 함수 내부의 비동기로 동작하는 코드에서 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하면 기대한 대로 동작하지 않는다. 
        
        비동기 함수는 비동기 처리 결과를 외부에 반환할 수 없고, 상위 스코프의 변수에 할당할 수도 없다. 따라서 비동기 함수의 처리 결과에 대한 후속 처리는 비동기 함수 내부에서 수행해야 한다. 이때 비동기 함수를 범용적으로 사용하기 위해 비동기 함수에 비동기 처리 결과에 대한 후속 처리를 수행하는 콜백 함수를 전달하는 것이 일반적이다. 필요에 따라 비동기 처리가 성공하면 호출될 콜백 함수와 비동기 처리가 실패하면 호출될 콜백 함수를 전달할 수 있다. 
        
        콜백 함수를 통해 비동기 처리 결과에 대한 후속 처리를 수행하는 비동기 함수가 비동기 처리 결과를 가지고 또다시 비동기 함수를 호출해야 한다면 콜백 함수 호출이 중첩되어 복잡도가 높아지는 현상이 발생하는데, 이를 콜백 헬이라 한다.
        
    - 에러 처리의 한계
        
        비동기 처리를 위한 콜백 패턴의 문제점 중에서 가장 심각한 것은 에러 처리가 곤란하다는 것이다. 
        
- 프로미스의 생성
    
    Promise 생성자 함수를 new 연산자와 함께 호출하면 프로미스를 생성한다.
    
    프로미스는 비동기 처리 상태와 처리 결과를 관리하는 객체다.
    
    비동기 처리가 성공하면 프로미스는 pending 상태에서 fulfilled 상태로 변화하고, 비동기 처리 결과인 1을 값으로 갖는다.
    
    비동기 처리가 실패하면 프로미스는 pending 상태에서 rejected 상태로 변화하며, 비동기 처리 결과인 Error 객체를 값으로 갖는다.
    
- 프로미스의 후속 처리 메서드
    
    프로미스의 비동기 처리 상태가 변화하면 이에 따른 후속 처리를 해야 한다. 예를 들어, 프로미스가 fulfilled 상태가 되면 프로미스의 처리 결과를 가지고 무언가를 해야 하고, 프로미스가 rejected가 되면 프로미스의 처리 결과를 가지고 에러 처리를 해야 한다.
    
    프로미스의 비동기 처리 상태가 변화하면 후속 처리 메서드에 인수로 전달한 콜백 함수가 선택적으로 호출된다.
    
    - Promise.prototype.then
        
        then 메서드는 두 개의 콜백 함수를 인수로 전달받는다.
        
        1. 첫 번째 콜백함수는 프로미스가 fulfilled 상태가 되면 호출한다. 이때 콜백 함수는 프로미스의 비동기 처리 결과를 인수로 전달받는다.
        2. 두 번째 콜백 함수는 프로미스가 rejected 상태가 되면 호출한다. 이때 콜백 함수는 프로미스의 에러를 인수로 전달받는다.
        
        then 메서드는 언제나 프로미스를 반환한다.
        
    - Promise.prototype.catch
        
        catch 메서드는 한 개의 콜백 함수를 인수로 전달받는다. catch 메서드의 콜백 함수는 프로미스가 rejected 상태인 경우만 호출된다.
        
    - Promise.prototype.finally
        
        finally 메서드는 한 개의 콜백 함수를 인수로 전달받는다. finally 메서드의 콜백 함수는 프로미스의 성공 또는 실패와 상관없이 무조건 한 번 호출된다.
        
        finally 메서드는 프로미스의 상태와 상관없이 공통적으로 수행해야 할 처리 내용이 있을 때 유용하다.
        
- 프로미스의 에러 처리
    
    비동기 처리를 위한 콜백 패턴은 에러 처리가 곤란하다는 문제가 있는데, 프로미스는 에러를 문제없이 처리할 수 있다. 
    
    get은 프로미스를 반환하며, 결과에 대한 후속 처리는 프로미스가 제공하는 후속 처리 메서드 then, catch, finally를 사용하여 수행한다. 비동기 처리에서 발생한 에러는 then 메서드의 두 번째 콜백 함수로 처리할 수 있다. 
    
    then 메서드의 두 번째 콜백 함수는 첫 번째 콜백 함수에서 발생한 에러를 캐치하지 못한다. 따라서 에러 처리는 then 메서드에서 하지 말고 catch 메서드에서 하는 것을 권장한다.
    
- 프로미스 체이닝
    
    then, catch, finally 후속 처리 메서드는 언제나 프로미스를 반환하므로 연속적으로 호출할 수 있다. 이를 프로미스 체이닝이라 한다. 
    
    후속처리 메서드의 콜백 함수가 프로미스가 아닌 값을 반환하더라도 그 값을 암묵적으로 resolve 또는 reject하여 프로미스를 생성해 반환한다. 
    
    콜백 패턴은 가독성이 좋지 않다. 이 문제는 async/await을 통해 해결할 수 있다.
    
- 프로미스의 정적 메서드
    
    Promise는 주로 생성자 함수로 사용되지만 함수도 객체이므로 메서드를 가질 수 있다. Promise는 5가지 정적 메서드를 제공한다.
    
    - Promise.resolve / Promise.reject
        
        이미 존재하는 값을 래핑하여 프로미스를 생성하기 위해 사용한다.
        
        ```jsx
        const resolvedPromise = Promise.resolve([1, 2, 3]);
        resolvedPromise.then(console.log);
        ```
        
    - Promise.all
        
        여러 개의 비동기 처리를 모두 병렬 처리할 때 사용한다.
        
        all 메서드로 전달된 프로미스들에 대한 처리 순서가 보장된다.
        
    - Promise.race
        
        all 메서드와 동일하게 프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다.
        
        모든 프로미스가 fulfilled 상태가 되는 것을 기다리지 않고, 가장 먼저 fulfilled 상태가 된 프로미스의 처리 결과를 resolve하는 새로운 프로미스를 반환한다.
        
    - Promise.allSettled
        
        프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다. 전달받은 프로미스가 모두 settled 상태가 되면 처리 결과를 배열로 반환한다. 
        
        메서드가 반환한 배열에는 fulfilled 또는 rejected 상태와는 상관없이 Promise.allSettled 메서드가 인수로 전달받은 모든 프로미스들의 처리 결과가 모두 담겨 있다.
        
- 마이크로태스크 큐
    
    프로미스의 후속 처리 메서드의 콜백 함수는 태스크 큐가 아니라 마이크로태스크 큐에 저장된다.
    
    마이크로태스크 큐는 태스크 큐와는 별도의 큐다. 마이크로태스크 큐에는 프로미스의 후속 처리 메서드의 콜백 함수가 일시 저장된다. 
    
    마이크로태스크 큐는 태스크 큐보다 우선순위가 높다. 즉, 이벤트 루프는 콜 스택이 비면 먼저 마이크로태스크 큐에서 대기하고 있는 함수를 가져와 실행한다. 이후 마이크로태스크 큐가 비면 태스크 큐에서 대기하고 있는 함수를 가져와 실행한다.
    
- fetch
    
    fetch 함수는 XMLHttpRequest 객체와 마찬가지로 HTTP 요청 전송 기능을 제공하는 클라이언트 사이트 Web API다.
    
    fetch 함수는 HTTP 응답을 나타내는 Response 객체를 래핑한 Promise 객체를 반환한다.
    
    fetch 함수가 반환하는 프로미스는 기본적으로 404 Not Found나 500 Internal Server Error와 같은 HTTP 에러가 발생해도 에러를 reject하지 않고 불리언 타입의 ok 상태를 false로 설정한 Response 객체를 resolve한다. 오프라인 등의 네트워크 장애나 CORS 에러에 의해 요청이 완료되지 못한 경우에만 프로미스를 reject한다.
    

# 46. 제너레이터와 async/await

- 제너레이터란?
    
    코드 블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수.
    
    1. 제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 앙도할 수 있다.
    2. 제너레이터 함수는 함수 호출자와 함수의 상태를 주고받을 수 있다. 
    3. 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
- 제너레이터 함수의 정의
    
    function* 키워드로 선언한다. 그리고 하나 이상의 yield 표현식을 포함한다.
    
    ```jsx
    // 제너레이터 함수 선언문
    function* genDecFunc() {
        yield 1;
    }
    
    // 제너레이터 함수 표현식
    const genExpFunc = function* () {
        yield 1;
    }
    
    // 제너레이터 메서드
    const obj = {
        * genObjMethod() {
            yield 1;
        }
    }
    
    // 제너레이터 클래스 메서드
    class MyClass {
        * genClsMethod() {
            yield 1;
        }
    }
    ```
    
- 제너레이터 객체
    
    제너레이터 함수를 호출하면 일반 함수처럼 함수 코드 블록을 실행하는 것이 아니라 제너레이터 객체를 생성해 반환한다. 제너레이터 함수가 반환한 제너레이터 객체는 이터러블이면서 동시에 이터레이터다. 
    
- 제너레이터의 일시 중지와 재개
    
    yield 키워드와 next 메서드를 통해 실행을 일시 중지했다가 필요한 시점에 다시 재개할 수 있다. 
    
    제너레이터 객체의 next 메서드를 호출하면 yield 표현식까지 실행되고 일시 중지된다. 이때 함수의 제어권이 호출자로 양도된다.
    
    next 메서드는 value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환한다. next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티에는 yield 표현식에서 yield된 값이 할당되고 done 프로퍼티에는 제너레이터 함수가 끝까지 실행되었는지를 나타내는 불리언 값이 할당된다.
    
- 제너레이터의 활용
    - 이터러블의 구현
        
        제너레이터 함수를 사용하면 이터레이션 프로토콜을 준수해 이터러블을 생성하는 방식보다 간단히 이터러블을 구현할 수 있다. 
        
    - 비동기 처리
        
        제너레이터 함수는 next 메서드와 yield 표현식을 통해 함수 호출자와 함수의 상태를 주고받을 수 있다. 이러한 특성을 활용하면 프로미스를 사용한 비동기 처리를 동기 처리처럼 구현할 수 있다. 
        
- async/await
    
    제너레이터를 사용해서 비동기 처리를 동기 처리처럼 동작하도록 구현하면 코드가 장황해지고 가독성도 나빠진다. ES8에서는 async/await이 도입되었다.
    
    async/await는 프로미스를 기반으로 동작하며, 프로미스의 후속 처리 메서드 없이 마치 동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현할 수 있다.
    
    - async 함수
        
        await 키워드는 반드시 async 함수 내부에서 사용해야 한다. async 함수는 async 키워드를 사용해 정의하며 언제나 프로미스를 반환한다. 
        
    - await 키워드
        
        await 키워드는 프로미스가 settled 상태가 될 때까지 대기하다가 settled 상태가 되면 프로미스가 resolve한 처리 결과를 반환한다.
        
    - 에러 처리
        
        async 함수 내에서 catch 문을 사용해서 에러 처리를 하지 않으면 async 함수는 발생한 에러를 reject하는 프로미스를 반환한다. 따라서 async 함수를 호출하고 Promise.prototype.catch 후속 처리 메서드를 사용해 에러를 캐치할 수도 있다. 
        

# 47. 에러 처리

- 에러 처리의 필요성
    
    에러는 언제나 발생할 수 있으며, 방치하면 프로그램이 강제 종료된다. 
    
    try…catch 문을 사용해 에러에 적절하게 대응하면 계속해서 코드를 실행시킬 수 있다. 
    
    직접적으로 에러가 발생하지 않는 예외적인 상황이 발생할 수도 있다. 적절하게 대응해야 에러를 다룰 수 있다.
    
- try…catch…finally 문
    
    에러 처리 방법에는 크게 두 가지가 있다.
    
    1. querySelector나 Array#find 메서드처럼 예외적인 상황이 발생하면 반환하는 값을 if 문이나 단축 평가 또는 옵셔널 체이닝 연산자를 통해 확인하여 처리하는 방법
    2. 에러 처리 코드를 미리 등록해 두고 에러가 발생하면 에러 처리 코드로 점프하도록 하는 방법
    
    ```jsx
    try {
    	// 실행할 코드(에러가 발생할 가능성이 있는 코드)
    } catch (err) {
    	// try 코드 블록에서 에러가 발생하면 이 코드 블록의 코드가 실행된다.
    	// err에는 try 코드 블록에서 발생한 Error 객체가 전달된다.
    } finally {
    	// 에러 발생과 상관없이 반드시 한 번 실행된다.
    }
    ```
    
- Error 객체
    
    Error 생성자 함수는 에러 객체를 생성하며, 에러를 상새히 설명하는 에러 메시지를 인수로 전달할 수 있다.
    
- throw 문
    
    Error 생성자 함수로 에러 객체를 생성한다고 에러가 발생하는 것은 아니다.
    
    에러를 발생시키려면 try 코드 블록에서 throw 문으로 에러 객체를 던져야 한다.
    
    ```jsx
    try {
    	// 에러 객체를 던지면 catch 코드 블록이 실행되기 시작한다.
    	throw new Error('something wrong');
    } catch (error) {
    	console.log(error);
    }
    ```
    
- 에러의 전파
    
    에러는 콜 스택의 아래 방향으로 전파된다.
    
    ```jsx
    const foo = () => {
        throw Error('foo에서 발생한 에러'); // 4
    }
    
    const bar = () => {
        foo(); // 3
    };
    
    const baz = () => {
        bar(); // 2
    }
    
    try {
        baz(); // 1
    } catch (err) {
        console.error(err);
    }
    ```