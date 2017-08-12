# Linked List
- 포인터를 통해 원소와의 관계를 연결
- 데이터 검색은 Head부터 루프를 돌리면서 진행한다.
- **배열(Array)와 달리 다른 원소를 이동하지 않고도 원소를 쉽게 추가/삭제할 수 있다는 강점이 있다.**

### Linked List의 구성
- Node : Linked List의 Element
- length : Linked List Element 개수
- head : Linkde List를 연결 해 주는 주소의 역할

### Lincked List 구현
``` javascript
    function LinkedList() {
        Var Node = function(element){  // Node에 대한 형성
            this.element - element;
            this.next = null;
        };
        
        var len = 0;
        var head = null;
```
##### 원소 추가(Append)
``` javascript

    this.append = function(element){
        var node = new Node(element), current;            
        if(head === null) {
                head = node;
        }
        else{
            current = head;
        }        
        while(currend.next){
            current = current.next
        }           
        current.next = node;
        length++;
        };
```

##### 원소 삭제(removeAt)
``` javascript

    this.removeAt(position){
        if(position>-1 && position<length){  // position 값이 범위 안인지 확인
            var current = head,
            previous,
            index = 0;
        }
        
        if(position === 0){ 
            head = current.next;
        } else{
            while(index++<position){
                previous = current;
                current = current.next
            } // position 위치까지 위치 이동
            
            previous.next = current.next; // 현재의 다음과 이전 것을 연결 === 현재를 삭제
        }
        
        length --; // 삭제되었으므로 길이 한개 줄임
        
        return current.element;
    };
```

##### 원소 삽입(insert)
``` javascript

    this.insert = function(position, element){
        if(position>-1 && position<length){  // position 값이 범위 안인지 확인
            var node = new Node(element), // element를 가진 새로운 node(insert 예정)를 생성
            current = head,
            previous,
            index = 0;
        }
        
        if(position === 0){
            node.next = current;
            head = node;
        }else{
            while(index++<position){
                previous = current;
                current = current.next;
            }
            
            node.next = current;  // Insertion 진행
            previous.next = node;
        }
        
        length ++; // 한 개 insert 되었으므로 length 한 개 추가
        return true;
    };

```

##### toString 메소드 구현
LinkedList 객체를 문자열로 변환
``` javascript

    this.toString = function(){
        var current = head;
        var string = ' ';
        
        while(current){   // 리스트의 모든 원소를 순회하면서 element를 string 변수에 추가
            string += current.element;
            current = current.next;
        }
        return string;
    }
```

##### indexOf 메소드 구현
원소 값을 인자로 받아 리스트에서 해당 원소의 인덱스를 반환 + 없으면 -1을 반환
``` javascript

    this.indexOf = function(element){
        var current = head,
            index = -1; // 시작점 설정, 초기 index값 설정
        
        while(current){  // 리스트를 순회하면서 element가 발견되면 현재 인덱스를 반환
            if(element ==== current.element){
                return index;
            }
            index ++;
            current = current.next;
        }
        return -1; // 리스트에 element가 없다면 -1 반환
    }
```

### 이중 연결 리스트(Doubly Linked list)
- 이중 연결 리스트는 다음 노드와 이전 노드, 2개의 연결 정보를 이중으로 가지고 있다.
- Previous : 이전 List를 가르킴
- Next : 다음 List를 가르침
- Element : 해당 List의 Element
- 연결 리스트와 메소드 구현 방식은 거의 비슷하지만, 새로 추가되는 **Previous**만 신경 써주면 된다.
- prev, next의 연결만 안 끊어지게끔 순서만 신경써주면 됩니다.

##### Doubly Linked list의 구현
``` javascript

    function DoublyLinkedList(){
        var Node = function(element){
            this.element = element;
            this.next = null;
            this.prev = null;
        }
        
        var length = 0;
        var head = null;
        var tail = null;
    }
```

### 환형 연결 리스트(circular linked list)
- 일반 연결 리스트일 경우 : 마지막 원소의 next가 null이 아닌 첫 번째 원소(head)를 가르킴.
- 이중 연결 리스트일 경우 : `tail.next = head;` + `head.prev = tail;`
