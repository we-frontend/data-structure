# 자료구조와 알고리즘

## 연결 리스트
- 배열과의 다른 점은 원소들이 메모리상에 연속적으로 위치하지 않는다.
- 포인터를 통해 원소와의 관계를 유지한다.
- 데이터 검색은 헤드부터 루프검색을 통해 진행된다.

```javascript
    function LinkedList() {
        var Node = function(element) {
            this.element = element;
            this.next = null;
        };

        var length = 0;
        var head = null;

        this.append = function(element) {
            var node = new Node(element),
                current;

            if(head === null) {
                head = node;
            } else {
                current = head;
            }

            while(current.next) {
                current = current.next
            }

            current.next = node;

            length++;
        };

        this.insert = function(position, element) {};
        this.removeAt = function(position) {};
        this.remove = functino(element) {};
        this.indexOf = function(element) {};
        this.isEmpty = function() {};
        this.size = function() {};
        this.toString = function() {};
        this.print = function() {};
    }
```

## 연결 리스트의 구성

- Node = 연결 리스트의 원소
- length = 연결 리스트의 갯수
- head = 연결이 시작되는 지점을 참조하는 것

## 이중 연결 리스트 (doubly linked list)
노드가 갖고 있는 정보가 next, prev를 모두 갖고있는 형태를 말한다.

## 환형 연결 리스트 (circular linked list)
마지막 노드의 next가 첫번째 노드를 가리키는 구조

## 이중 환형 연결리스트 (doubly circular linked list)
prev 속성이 추가된 환형 연결 리스트

### 참조
- [자바스크립트 가비지 컬렉터](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management);