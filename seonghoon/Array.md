# 자료구조와 알고리즘

## 배열

### 배열을 사용할 때

같은 타입의 데이터들을 보관하는 자료 형태

### 배열의 생성과 초기화

1. new 연산자
```javascript
    var myArray = new Array();
    var sevenArray = new Array(7); //길이가 7인 배열
    var datasInArray = new Array(1,2,3,4,5,6,7); //배열을 초기화할 때 원소를 생성자에 전달
```

2. 배열 리터럴
```javascript
    var myArray = [];
    var datasArray = [1,2,3,4,5,6,7]; //생성과 동시에 배열의 원소를 초기화
```

3. 배열의 길이

배열이 갖고 있는 `length` 프로퍼티를 통해 배열의 길이를 알 수 있다.

4. 배열의 원소에 접근하는 방법

```javascript
    var selectArray = [1,2,3];
    console.log(selectArray[0]); // `1`이 출력된다.
```

5. 원소 추가와 삭제

```javascript
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    numbers[numbers.length] = 10;
```

자바스크립트에서 배열은 가변 객체이지만 다른 언어의 경우 배열은 가변적이지 않다.
**정해진 길이에 같은 데이터 타입이 들어가는 것을 배열이라고 정의한다.**
따라서 배열의 크기에 변화가 필요하게 되면 새로운 배열을 만들어 그 배열에 값을 할당하는 방식으로 진행한다.

### Methods

- push : 배열 뒤에 값을 추가

```javascript
    numbers.push(11);
    numbers.push(11,12); //원하는 만큼 인자에 전달한다.
    numbers[index] = value; //이러한 형태로 원하고자 하는 index 위치에 값을 할당할 수 있다.
```

- unshift : 배열 앞에 값을 추가

- pop : 배열의 맨 뒤 값을 제거함

`push`와 `pop`은 stack 구조를 모방한 메서드이다.
`shift`와 `unshift`는 queue 구조를 모방한 메서드이다.

배열에 잉여 공간이 발생하면 그 공간은 `undefined`값으로 채워진다.
값이 할당되지 않은 index, 즉 잉여 원소의 공간은 `undefined`이다.

- splice : 배열의 특정 원소를 삭제할 때

```javascript
    numbers.splice(5,3) // index 5번부터 3개의 원소를 제거한다.
    numbers.splice(5,0,1,2,3) // 두 번째 parameter에 `0`이 들어가면 삭제할 원소가 없다는 것으로 간주되며, 그 후에 인자들은 기준이 되는 index를 기점으로 추가되는 값들을 의미한다.
```


### 다차원 배열

배열의 배열을 만들면 2차원 이상의 배열을 구현할 수 있다.



