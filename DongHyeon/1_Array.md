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

## Element 추가(Adding) & 삭제(Removing)
#### `push()`: End에 추가 / `array.push(1);`

#### `pop()` : End 삭제(뽑다 = =pop) / `array.pop();`

#### `unshift()`: Frnot에 추가 / `array.unshift(1);`

#### `shift()`: Front 삭제(뽑고 옮기다 == Shift) / `array.shift();`

#### `splice()`: 특정 위치의 Element를 삭제 && 그 위치에 삽입할 수 있음
```javascript
// remove : 1번째 index부터 2개의 Element를 제거
array.splice(1,2);
// add : 2번째 index부터 0개 Element를 제거하고 1,2,3이라는 Element를 삽입
array.splice(2,0,1,2,3); 
```

* `pop()`과 `push()`는 **Stack** 자료구조의 형태를 모방한 Method이고,

* `shift()`와 `unshift()`는 **Que** 자료구조의 형태를 모방한 Method이다.  

## 다차원 배열(Two-dimensional and multi-dimensional arrays)
* 2차원 배열(Two-dimensional Array) : 행렬(Matrix) 형태로 표현 // `array[3][2]`
* 3차원 배열(Tree-dimendional Array) : 3차원 행렬(Cube Matrix) 형태로 표현 // `array[3][2][1]`
* 그러나 보통 1차원 배열 여러개로 표현하는 경우가 많다

## 많이 사용되는 배열 Method

### 배열 합치기 
#### `concat()`
 * `var new_array = array.concat([0],plus_array)`
 * array라는 배열에 [0]과 plus_array라는 배열을 합쳐서 반환

### 반복문(iterator)

``` javascript
// sample function(입력받은 숫자가 2의 배수인지 확인)
var isEven = function(x){
    console.log(x);
    return (x%2 === 0); // true || false
}
```

#### `every(Function())` : 배열의 Element를 순차적으로 반복하면서 Function()의 결과 값이 false가 되는 Element에서 Stop
* `numbers.every(isEven)` // numbers 원소가 짝수가 아닐때까지 반복
#### `some(Function())` : 배열의 Element를 순차적으로 반복하면서 Function()의 결과 값이 true가 되는 Element에서 Stop
* `numbers.every(isEven)` // nuberes의 원소가 짝수가 될 때까지 반복
#### `forEach(Function())` : Function조건에 상관없이 배열의 모든 원소를 반복(기능적으로 for in과 비슷)
* `numbers.forEach(function(x){ ~~~~});`
#### `map(Function())` : 수행결과를 새 배열 객체로 변환
* `var myMap = numbers.map(isEven)` // isEven 함수의 결과값(true||false)이 myMap 배열에 담긴다.
#### `filter(Function())` : 함수의 결과 값을 true로 만드는 **Element**로만 구성된 새 배열을 반환
* `var evenNumbers = numbers.filter(isEven)` // 짝수인 원소만을 새로운 배열로 만든다.
#### `reduce(Function(prevValue, currentValue, currentIndex, array), initialValue)` : 순차적으로 배열안에 있는 값을 Function으로 처리해서 최종결과값을 구한다.
* `reduce()`의 상세 사용법은 [Document](https://www.w3schools.com/jsref/jsref_reduce.asp) 참고
##### (code)배열을 다 더한 값을 구해보자
``` javascript
    numbers.reduce(function(previous,current, index){
        return previous + current
    }) // 앞에서부터 두 개씩 더해서 나온 반환 값을 그 다음 값과 더해가면서 진행
```

### 검색과 정렬(Searching and Sorting)
#### `sort()` : 배열의 Element들을 **사전적(Lexicographic)**으로 정렬한다.
* `numbers.sort(); // -> [1, 10, 11, 2, 21, 3, 41] 과 같이 사전적으로 정렬된다.
#### sort 메소드를 Function으로써 return 값을 조절하면 sorting 규칙을 커스텀 할 수 있다.
`array.sort(compareFunction)`
* ascending order : + return
* descending order : - return
* custom order : using `compareFunction`
``` javascript
    funciont compareWeight(a,b){
        return a.weight - b.weight; // 무게의 오름차순으로 객체들을 정렬
    }

```
``` javascript
// 대소문자 구분없이 순서대로 정렬해보자
function ignoreCase(){
    return a.toLowerCase() - b.toLowerCase();
}
```
#### `reverse()` : 배열의 Element 순서를 거꾸로
 * `numbers.reverse();`

#### `indexOf()` : 앞에서부터 첫 번째로 (element)가 위치해 있는 array의 index를 반환
 * `array.IndexOf(4);
#### `lastIndexOf()` : 뒤에서부터 첫 번째로 (element)가 위치해 있는 array의 index를 반환
 * `array.lastIndexOf(4);

### 배열을 문자열로 변환
#### `toString()' : 배열의 모든 Element를 단일 Element로 바꾼다.
* `numbers.toString();` // 안에 있는 배열을 “number[0],number[1],number[2],number[3]... ”
#### `join("Seperator")` : 배열의 모든 Element를 문자열로 바꿔주는데 각 Element 사이에 Seperator를 둘 수 있다.
* `nubers.join(‘-’);` // “number[0] - number[1] - number[2] - number[3]...”
* 배열 내용을 서버에 전송할 떄 **Encoding || Decoding** 할 때 아주 편하다
