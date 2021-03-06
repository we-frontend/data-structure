# Set(집합)
- **중복되지 않는 유일한 값을 저장하기 위한 자료구조**
- 정렬되지 않은(Unordered) 컬렉션
- 배열이 아닌 객체로 집합(Element)을 표현한다.
- 2011년 ECMAScript 6부터 Set 클래스의 구현이 됨.
``` javascript
    function Set(){
        var items = {};
    }
```
- [참고] Object에 keys라는 메소드가 있는데, 객체의 모든 프로퍼티를 배열로 변환한다.(비교적 최신 브라우저에서만 작동)
`Object.keys(items).length; // items라는 객체를 배열로 변환하여 Element의 개수를 구하는 응용법` 

##### has(Element) 메소드
- 해당 Element가 존재하는지 확인
- `in` 연산자 활용
``` javascript
    this.has = function(value){
        return value in items; // items에 value가 존재하는지 확인
    }
```

- `hasOwnProperty` 메소드 활용 : JS의 모든 객체는 hasOwnProperty 메소드를 상속한다.
``` javascript
    this.has = function(value){
        return items.hasOwnProperty(value);
    }
```

##### Add 메소드
``` javascript
    this.add = function(value){
        if(!this.has(value)){
            items[value] = value;  // key와 value를 동일하게 저장하는 이유는 나중에 값 찾기 편해서 ㅎㅎ
            return true;
        }
        return false;
    };
```

##### Remove 메소드
``` javascript
    this.remove = function(value){
        if(this.has(value)){
            delete items[value];  // 간단히 delete 연산자로 삭제
            return true;
        }
        return false;
    };
```
##### Clear 메소드
- Set의 모든 원소를 삭제하고 싶을 때 사용할 clear 메소드를 정의해보자.
``` javascript
    this.clear = function(){
        items = {};
    };
```

### 집합 연산
- 합집합(Union) : 두 집합 중 어느 한쪽이라도 포함된 원소로 구성된 집합
``` javascript
    this.Union = funcion(otherSet){
        var unionSet = new Set();
        var values = Object.keys(this.items); // 모든 원소를 배열 형태로 추출

        for(var i = 0; i<values.length; i++){
            unionSet.add(values[i]); // 추출된 원소를 루프로 반복하면서 unionSet에 추가
        }
        
        values = Object.keys(otherSet.items); // otherSet의 모든 원소들에 대해서는 동일한 작업 진행
        for (var i = 0; i<values.length; i++){
            unionSet.add(values[i]);
        }
        
        return unionSet;
    };
```
- 교집합(Intersection) : 두 집합 모두 포함되어 있는 원소로 구성된 집합
``` javascript
    this.Intersection = function(otherSet){
        var intersectionSet = new Set();
        var values = Object.keys(this.items);
        
        for(var i=0; i<values.length; i++){  // 원래 Set의 Element가 다른 Set도 가지고 있을 때 add
            if(otherSet.has(value[i]){
                intersectionSet.add(values[i]);
            }
        return intersectionSet;
    };
```
- 차집합(Difference) : A에는 속하지만 B에는 속하지 않는 Element의 집합
``` javascript
    this.Difference = function(otherSet){
        var differenceSet = new Set();
        var values = Object.keys(this.items);
        
        for(var i=0; i<values.length; i++){ // 원래 Set의 Element 중 다른 Set이 가지고 있지 않을 때 add 
            if(!otherSet.has(value[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    };
```
- 부분집합(Subset) : A의 모든 Element는 B에 존재해야 한다.
``` javascript
    // A(this)가 B(otherSet)의 부분집합인지(true) 아닌지(false) 확인하는 메소드 subset()
    this.subset = function(otherSet){
    
    if(this.size()>otherSet.size()){
        return false; // A가 B의 부분집합인지 확인하는데 크기가 더 크면 할 필요 없이 부분집합이 X(false)
    }else{
        var values = Object.keys(this.items); // 하나라도 A의 Element가 B에 없는지 확인(1개라도 없으면 false)
        for(var i=0; i<values.length; i++){
            if(!otherSet.has(values[i])){
                return false;
            }
        }
        return true;
    }};
```

# Dictionary(딕셔너리) & Hash(해시)
- Set(집합)처럼 유일한 값(반복되지 않는 값)을 저장하기 위한 자료구조
- [key(키), value(값)] 형태로 저장

## Dictionary(딕셔너리)
- 데이터를 [key,value] 쌍으로 담아두는 자료 구조
- key : value를 찾기 위한 **식별자**
- Dictionary(딕셔너리)는 **Map(맵)**이라고도 한다.
- ECMAScript 6에서 Map 클래스(딕셔너리)에 대해서 구현 명세가 수록되어 있음
[ECMAScript 6 Map 클래스](http://goo.gl/dm8VP6)
``` javascript
    function Dictionary(){
        var items = {};
    }
```
- Set처럼 Dictionary도 배열 대신 객체에 Element를 보관한다.

##### get과 values 메소드
- get 메소드 : 딕셔너리에서 key로 어떤 원소를 찾아 그 값을 알고 싶을 때 사용할 메소드를 정의해 보자.
``` javascript
    this.get = function(key){
        return this.has(key) ? items[key] : undefined; // 참이면(존재) items[key] 반환, 거짓이면 undefined
    }
```
- values 메소드 : 딕셔너리 전체 원소의 값을 배열로 반환하는 메소드를 정의해 보자.
``` javascript
    this.values = function(){
        var values = [];
        for(var k in items){
            if(this.has(k)){
                values.push(items[k]);
            }
        }
    };
```

## Hash(해시)
- 어떤 키에 해당하는 값의 **주소**를 테이블에서 찾아주는 함수를 사용하여 조회한다.
- 자료구조에서 특정 값을 가장 신속하게 찾는 방법
- loselose Hash function : 키를 구성하는 문자의 ASCII 값을 단순히 더한다.
- Hash Table 만들기
``` javascript
    function HashTable(){
        var table = [];
        
    // loselose function 선언
    // key를 구성하는 문자의 모든 아스키 값을 합하는 함수
    var loseloseHashCode = function(key){
        var hash = 0;
        for(var i = 0; i<key.length; i++){
            hash += key.charCodeAt(i); // string 클래스의 charCodeAt 내장 메소드 사용
        }
        return hash % 37; // hash를 임의의 숫자로 나눈 나머지를 최종값으로 반환
    }; 
    
    // put 메소드 구현 : 원소를 추가
    // key를 해시 함수에 넣고 반환된 결과 값(position)을 테이블의 인덱스로 사용한다.
    this.put = function(key, value){
        var position = loseloseHashCode(key);
        table[position] = value;
    };
    
    // get 메소드 구현 : 키에 해당하는 원소를 찾아 값을 반환한다.
    this.get = function(key){
        return table[loseloseHashCode(key)];
    };
    
    // remove 메소드 구현 : 키에 해당하는 원소를 찾아 삭제한다.
    // 해당 key의 인덱스를 찾고 해당하는 table 배열 값을 undefined로 만들어 준다.
    this.remove = function(key){
        thable[loseloseHashCode(key)] = undefined;
    };
    }
```

#### Hasch Collision(해시 충돌)
- key는 다른데 Hash 함수 값이 같아져 충돌하게 되는 경우
- Hash 함수가 조잡하게 짜이는 경우 변환하는 과정에서 Hash 함수 값이 같아지는 경우가 생겨 이러한 문제가 발생한다.
- Hash 충돌을 피할 수 있는 처리 방법 : 체이닝, 선형 탐사, 이중 해싱 방법
- Seperate Chaining(체이닝)
