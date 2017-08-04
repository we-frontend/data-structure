# Linked List
- 포인터를 통해 원소와의 관계를 연결
- 데이터 검색은 Head부터 루프를 돌리면서 진행한다.

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
    };
