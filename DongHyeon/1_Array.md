# Array
 
* Javascript는 가변(Mutable) 객체이다. Element를 쉽게 추가할 수 있고, Object는 동적으로 크기가 변화한다.

## 선언 및 초기화

1) `new` keyword 사용
```javascript
var Array_1 = new Array();
```

2) `[]`를 통한 선언
```javascript
var Array_1 = []; // 선언(Declare)
var Array_1 = ['first', 'second', 'Third'] // 초기화(initialize)
```

## Element 추가(Adding)&삭제(removing)
1) `push()`: End에 추가 / `array.push(1);`

2) `pop()` : End 삭제(뽑다 = =pop) / `array.pop();`

3) `unshift()`: Frnot에 추가 / `array.unshift(1);`

4) `shift()`: Front 삭제(뽑고 옮기다 == Shift) / `array.shift();`

5) `splice()`: 특정 위치의 Element를 삭제 && 그 위치에 삽입할 수 있음
```javascript
// remove : 1번째 index부터 2개의 Element를 제거
array.splice(1,2);
// add : 2번째 index부터 0개 Element를 제거하고 1,2,3이라는 Element를 삽입
array.splice(2,0,1,2,3); 
```

### `pop()`과 `push()`는 **Stack** 자료구조의 형태를 모방한 Method이고, `shift()`와 `unshift()`는 **Que** 자료구조의 형태를 모방한 Method이다.  

- 다차원 배열
 : 2차원 배열(2차원 테이블화) / ex) array[2][3]
 : 3차원 배열(3차원 테이블화) / ex) array[2][3][4]
- 많이 사용 되는 배열 메소드 정리
1. concat 메소드 : 배열 합치기
 · var newarray = array.concat([0],plusarray) // array라는 배열에 [0]과 plusarray를 합쳐서 반환
# 반복문(2~4)
2. every 메소드 : 결과 값이 false가 될 때까지 배열의 모든 원소를 반복
 · numbers.every(isEven) // nuberes의 원소가 짝수가 아닐때까지 반복
3. some 메소드 : 결과 값이 true가 될 떄가지 배열의 모든 원소를 반복
 · numbers.every(isEven) // nuberes의 원소가 짝수가 될 때까지 반복
4. forEach 메소드 : 조건에 상관없이 배열의 모든 원소를 반복(기능적으로 for in과 비슷)
 · numbers.forEach(function(x){ ~~~~});
# 객체반환(5~6)
5. map 메소드 : 수행결과를 새 배열 객체로 변환하는 메소드
 · var myMap = numbers.map(isEven) // isEven 함수의 결과값이 myMap 배열에 담긴다.
6. filter 메소드 : 함수의 결과 값을 true로 만드는 원소로만 구성된 새 배열을 반환
 · var evenNumbers = numbers.filter(isEven) // 짝수인 원소만을 새로운 배열로 만든다.
7. reverse 메소드 : 원소 순서 거꾸로
 · numbers.reverse();
8. sort 메소드 : 모든 원소를 문자열로 취급하여 사전적으로(Lexiocographically) 정렬
 · numbers.sort(); // -> [1,10,11,2,21,3,41] -> 사전적으로가 뭔 뜻인지 알겠지 미래의 동현아
 · 정렬 로직(function으로) 을 구현 -> numbers.sort(function(a,b){ return a-b;}); // 오름차순으로 정렬
                                -> numbers.sort(function(a.b){ return b-a;}); // 내림차순으로 정렬
cf) 문자열 정렬은 ASCII Code값을 기준으로 정렬한다. (ex - A > a = 대문자가 앞에 나옴)
9. indexOf 메소드 : 앞에서부터 인덱스로 값을 조회
 · numbers.indeOf(9) // 앞에서부터 9번째 index의 값을 반환
10. lastindexOf 메소드 : 뒤에서부터의 인덱스로 값을 조회
 · numbers.lastindexOf(3) // 뒤에서부터 3번째 index의 값을 반환
11. toString 메소드 : 배열의 모든 원소를 단일 문자열로 바꿔준다
 · numbers.toString() // 안에 있는 배열을 “number[0],number[1],number[2],number[3]... ”
12. join 메소드 : 각 원소 사이에 separator를 둘 수 있는 방법
 · nubers.join(‘-’); // “number[0] - number[1] - number[2] - number[3]...”
 -> 배열 내용을 서버에 전송하거나 디코딩할 때 아주 편한 배열 메소드
