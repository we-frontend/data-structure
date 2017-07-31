# 꿀 Tip을 정리.

## Hoisting(호이스팅) : 끌어올리다.
* 선언을 상단으로 이동하는 Javascript의 행동
* 변수와 함수의 **선언**을 아래에서 가장 위로 끌어올려 먼저 진행
* 그러나 변수 할당은 해당 위치에서 진행
* 그러나 변수의 할당&초기화는 해당 위치에서 이뤄진다.
* 변수
``` javascript
    foo = 2
    var foo;
    // 위는 암묵적으로 아래와 같이 이해됩니다:
    var foo;
    foo = 2; 
```
* 함수
``` javascript
    hoisted(); // 이렇게 먼저 선언됨

    function hoisted() {
    console.log("foo");
} 
```

## Template String
* 변수를 문자열로 출려하는데 + 로 감싸고 하는 것이 매우 더럽다.
``` javascript
    var edu = 3;
    console.log(edu + "입니다.");
```
* **ECMA6** 부터 ${ }를 통해 변수를 쉽고 보기 좋게 출력할 수 있다.
``` javascript
    var edu = 3;
    console.log("${edu} 입니다.");
```
* 참고 : [템플릿 문자열 in mozilla](http://hacks.mozilla.or.kr/2015/08/es6-in-depth-template-strings-2/)
