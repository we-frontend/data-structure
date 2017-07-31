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

## 변수 : var, let, const
* var 변수의 부작용으로 ECMA6부터 let, const의 새로운 선언방법이 생김
* var는 **Functional-scope**이다. === 유효범위가 함수 단위
* let과 const는 **Block-scope**이다. === 유효범위가 Block, 즉 `{}`로 감싸지는 범위
* const : 상수 선언 -> 재할당 할 수 없다.
``` javascript
    const foo = 0;
    foo = 1;
    // syntex Error -> 재할당 할 수 없는 상수임
```
* let : 값의 변경이 가능함(**재할당가능**). 즉 var보다 let을 사용하는 것이 좋다
``` javascript
    let foo = 0;
    foo = 1; // 에러가 생기지 않음
```
#### TDZ(Temporal Dead Zone)
* var과 달리 let과 const는 hoisting되지 않는다.
* let과 const를 선언 전 사용했을 때 SyntexError가 발생하는데, 그 구간(선언되기 전까지의 구간)을 TDZ라고 한다.
``` javascript
console.log(aVar); // undefined
console.log(aLet); // causes ReferenceError: aLet is not defined
var aVar = 1;
let aLet = 2;
```
* let과 const는 Block-scope이기 때문에 아래와 같은 TDZ가 발생한다.
``` javascript
let x = 'outer value';
(function() {
  // start TDZ for x
  console.log(x);
  let x = 'inner value'; // declaration ends TDZ for x
}());
```
#### 결론
* ES6 에선 var는 지양하고 가급적 let과 const를 사용하자
* 변수는 let으로, 상수는 const로 선언하여 block-scope를 적용하자.
* 참조형은 const로 선언하자(array, object 등) 
``` javascript
    const arg = [0,1];
    const obj = {foo:'bar'};
    
    const newArg = [...arg]; // array의 값을 복사(copy)할 땐 ... 연산자 사용
    const newObj = object.assign({},obj); // object의 값을 복사(copy)할 땐 assign(); 메소드 사용
    
    newArg[0] = 10;
    newObj.foo = 'rab';
    
    console.log(arg,obj);
    // [0,1], {foo: 'bar'}
    
    console.log(newArg, newObj);
    // [10,1], {foo: 'rab}
    // 상수(const)여도 참조 값은 재할당 할 수 있음 
```
* 참고 : [ES6-var, let, 그리고 const](http://blog.nekoromancer.kr/2016/01/26/es6-var-let-%EA%B7%B8%EB%A6%AC%EA%B3%A0-const/)

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
* 참고 : [템플릿 문자열](http://hacks.mozilla.or.kr/2015/08/es6-in-depth-template-strings-2/)
