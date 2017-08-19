SET 집합(Set)은 배열과 유사하다!!

**SET은** 중복을 제거할 때 사용한다. Value 를 추가하고 삭제하며 동일 Value는 포함 될 수 없기 때문이다. 
  - new Set, new Set(Iterable) : 새로운 set 만들기
  - size, has, add, delete, forEach, clear
  - 다양한 이터레이터를 리턴: keys, values, entries (Map과의 호환성을 제공)
  - set[Symbol.iterator]() 구문은 set안의 값들을 순회할 수 있는 새로운 이터레이터를 리턴한다. 


> **code:SET**
--------------------------
- var uniqueWords = new Set(words);
- for (var word of uniqueWords) {
- console.log(word);
- }
--------------------------

> **SET** 과 관련된 모든 작업 목록은 다음과 같습니다.
- new Set 구문은 비어 있는 새로운 set 을 만듭니다.
- new Set(iterable) 구문은 새로운 set 을 만들고 인자로 전달된 이터러 (iterable)로 데이터를 채웁니다.
- set.size 구문은 set 안에 담겨 있는 데이터의 개수를 조회합니다.
- set.has(value) 구문은 주어진 값이 set 안에 존재할 경우 true 를 리턴합니다.
- set.add(value) 구문은 주어진 값을 set 에 추가합니다. 만약 그 값이 이미 set 안에 존재하면 아무 일도 일어나지 않습니다.
- set.delete(value) 구문은 set 에서 주어진 값을 제거합니다. 만약 그 값이 set 안에 존재하지 않으면 아무 일도 일어나지 않습니다. 
  .add() 구문과 .delete() 구문은 모두 set 객체  자신을 리턴합니다. 따라서 구문을 체인(chain) 시킬 수 있습니다.
- set[Symbol.iterator]() 구문은 set 안의 값들을 순회할 수 있는 새로운 이터레이터를 리턴합니다. 보통의 경우 이 메소드를 직접 호출할 일은 없습니다. 하지만 이 메소드의 존재 때문에 - set 은 이터러블(iterable) 합니다. 즉, for (v of set) {...} 같은 구문을 쓸 수 있습니다.
- set.forEach(f) 구문은 코드로 설명하는 것이 쉽습니다. 이 구문은 다음 코드를 짧게 쓴 것입니다.

> **code:MAP**
Map은 key-value 쌍으로 이뤄진다. 순회시 분해(destructuring)을 사용할 수 있다. 
---------------------------------------
- for (var [key, value] of addressMap) {
-  console.log(key, ': ', value);
-  } 
-------------

> **해쉬란**
-------------
해쉬는 임의의크기를 가진 데이터를 고정된 데이터의 크기로 변환시키는 것을 말한다
즉 해쉬 알고리즘은 해쉬를 하는 방법에 대한 절차적으로 명세한다.

이를 이용해 특정한 배열의 인덱스나 위치를 입력하고자 하는 데이터의 값을 이용해서 저장하거나 찾을 수 있다.
기존에 사용했더 자료 구조들은 탐색이나 삽입에 선형시간이 걸리기도 했던것에 비해
해쉬를 이용하면 즉시 저장하거나 찾고자하는 위치를 참조할 수있으므로 더욱 빠른 속도로 처리할 수있다.

