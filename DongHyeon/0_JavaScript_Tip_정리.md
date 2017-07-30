# 꿀 Tip을 정리.

## Hoisting(호이스팅)

## Template String
* 변수를 문자열로 출려하는데 + 로 감싸고 하는 것이 매우 더럽다.
``` javascript
    var edu = 3;
    console.log(edu + "입니다.");
```
* **ECMA6** 부터 ${ }를 통해 변수를 쉽고 보기 좋게 출력할 수 있다.
''' javascript
    var edu = 3;
    console.log("${3} 입니다."
```
* 참고 : [템플릿 문자열 in mozilla](http://hacks.mozilla.or.kr/2015/08/es6-in-depth-template-strings-2/)
