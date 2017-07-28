# 자료구조와 알고리즘

## Stack

### 정의
LIFO (후입선출) 원리에 따라 정렬된 컬렉션이다.
자바스크립트를 예로 하자면, 함수의 호출이 내부에서 중첩이 될 때
가장 마지막에 호출된 함수 스코프가 가장 먼저 반환되는 구조를 예로 들 수 있다.
[MDN Link](https://developer.mozilla.org/ko/docs/Web/JavaScript/EventLoop)
또한 컴파일러에서 사용되는 자료 구조로서, 변수나 메서드 호출을 컴퓨터 메모리에 저장할 때 쓰인다.


### Stack 만들기

- Spec List
1. Data Store
2. Check status stack
3. Actions ( related Data )

### Stack Class
```javascript


    function Stack() { //Stack Class 정의
        var items = [];

        this.push = function(ele) {
            items.push(ele);
        };

        this.pop = function() {
            return items.pop();
        }

        this.peek = function() {
            return items[items.length - 1];
        }

        this.isEmpty = function() {
            return items.length == 0;
        }

        this.size = function() {
            return items.length;
        }

        this.clear = function() {
            items = [];
        }

        this.print = function() {
            console.log(utens,toString());
        }
    };


```

### Example
- 10진수를 2진수로 변환

```javascript
    function divideBy2(decNumber) {
        var remStack = new Stack(),
            rem,
            binaryString = '';

        while(decNumber > 0) {
            rem = Math.floor(decNumber % 2);
            remStack.push(rem);
            decNumbeer = Math.floor(decNumber / 2);
        }

        while(!remStack.isEmpty()) {
            binaryString += remStack.pop().toString();
        }

        return binaryString;
    }


    //expand the method

    function baseConverter(decNumber, base) {
        var remStack = new Stack(),
            rem,
            baseString = '',
            digits = '0123456789ABCDEF';

        while (decNumber > 0) {
            rem = Math.floor(decNumber % base);
            remStack.push(rem);
            decNumber = Math.floor(decNumber / base);
        }

        while (!remStack.isEmpty()) {
            baseString += digits[remStack.pop()];
        }

        return baseString;
    }
```


### 과제

1. ES6로 Stack 클래스 표현 및 divideBy2 예제 ES6로 변환
2. Stack과 관련된 알고리즘 풀기
3. 자바스크립트 런타임 개념과 컴파일러가 구문을 해석하는 관점 정리하기