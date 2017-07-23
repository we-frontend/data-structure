# Javascript Data Structure & Algorithm

30p

함수형 언어

- http://dev-momo.tistory.com/entry/Functional-Programming-in-Javascript
- https://medium.com/@jooyunghan/함수형-프로그래밍이란-무엇인가-fab4e960d263
- https://perfectacle.github.io/categories/Programming/ECMAScript/함수형-JS/
- http://www.mimul.com/pebble/default/2014/10/04/1412396596338.html
- https://github.com/functionandjs/book/wiki
- https://medium.com/@lazysoul/함수형-프로그래밍이란-d881230f2a5e



37p

키워드 var

- 없으면 전역 변수일 것
- strict mode에서는 error가 발생할 듯
- 이제는 const > let이 당연한 수순
  - http://hacks.mozilla.or.kr/2016/03/es6-in-depth-let-and-const/



38p

변수 Scope

- 더이상 functional scope만 존재하지 않는다
- lexical scope와 closure를 언급하지 않는 것은 문제(+ hoisting)
  - http://jdm.kr/blog/126
  - https://www.testdome.com/for-developers/solve-question/8518
  - http://chanlee.github.io/2013/12/10/understand-javascript-closure/
  - http://blog.javarouka.me/2012/01/javascripts-closure.html

```javascript
function registerHandlers() {
  var as = document.getElementsByTagName('a');
  var max = as.length;
  
  for (var i = 0; i < max; i++) {
    (function() {
      var idx = i;
      as[i].onclick = function() {
        alert(idx);
      }
    })();
  }
}
```



43p Truthy, Falsy / 44p 동등 연산자

- https://dorey.github.io/JavaScript-Equality-Table/
  - `==`는 503호 또는 IE급 적폐이다



46p ===

- 이 이유를 포함한 여러 이유들로 인해 Redux에서는 reducer를 함수형으로 만든 것일 듯
  - https://www.vobour.com/book/view/4xs2cCCQnTP5EKcTn



47p -- || ++

- 차라리 Python처럼 -= 1, += 1로만 사용하는 것이 더 좋다고 생각함
  - 붙이는 위치에 따른 평가 순서가 다름



49p 루프문

- 이러한 기본적인 for문 외에도 for in과 for of가 존재



50p 함수

- 중요하다고 예상하는 이유
  - http://steadypost.net/post/lecture/id/13/
    - [Callback Hell과 Promise Pattern](https://medium.com/@pitzcarraldo/callback-hell-과-promise-pattern-471976ffd139)
    - https://gist.github.com/marocchino/841e2ff62f59f420f9d9
    - http://meetup.toast.com/posts/73
- 익명 함수를 만드는 다른 방법
  - http://hacks.mozilla.or.kr/2015/09/es6-in-depth-arrow-functions/



51p 객체

- http://insanehong.kr/post/javascript-object/
- 클래스가 생겼음
  - http://hacks.mozilla.or.kr/2016/03/es6-in-depth-classes/



52p 디버깅 툴

- https://vimeo.com/210529323/70e46c1ac5



68p reduce

- https://gamecodingschool.org/2015/06/16/javascript-reduce-함수/



스터디 내용

- [findIndex](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)