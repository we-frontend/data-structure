# Stack
* Last in First out
* 컴파일러에서 사용되는 자료구조
* 변수나 메소드 호출을 메모리에 저장할 때 사용

## Stack Method
* Stack도 Array이기 때문에 Array Method와 비슷
* `pop()` : Stack **마지막** Element 반환 후 스택에서 삭제  //  `item.pop();`
* `push(원소s)` : Stack 마지막 Element 뒤에 추가  // `item.push(3);`
* `peek()` : Stack 마지막 Element를 반환하되 삭제하지 않음(값 확인하는 용도)  //  `item.peek();`
* `isEmpty()` : Stack이 비어있는지 확인 true || false  //  `item.isEmpty();`
* `clear()` : Stack 안을 비운다
* `size()` : Stack Element의 개수

### (Code) 10진수를 2진수로 바꿔보자
```javascript
function divideBy2(decnumber){
  var remstack = [];
  var rem;
  var binarystring = "";
  while(decnumber>1){               // 
  rem = Math.floor(decnumber%2);
    remstack.push(rem);
    decnumber = Math.floor(decnumber/2);
    }
  while(!remstack.isEmpty){
    binarystring += remstack.pop().toString();
    }
  return binarystring;
```

### (Code)하노이의 탑
```javascript
function hanoi(n){
    if(n===1){
        return 1;
    }
    else{
        return hanoi(n-1)*2 + 1; // (n-1)만큼 하노이탑 옮기고 젤로 큰 1개 목표지로 옮긴 후 (n-1)만큼 하노이 탑(재귀)
   }
}
```

# Queue
* Last in First out

## Queue Method
* Queue도 Array이기 때문에 Array Method와 비슷
* `dequeue()` : Queue **첫 번째** Element 반환 후 스택에서 삭제  //  `item.dequeue();`
* `enqueue(원소s)` : Queue 마지막 Element 뒤에 추가  //  `item.enqueue(3);`
* `front()` : Queue 첫 번째 Element를 반환하되 삭제하지 않음(값 확인하는 용도, Stack의 peek과 비슷한 용도)  //  `item.front();`
* `isEmpty()` : Queue가 비어있는지 확인 true || false  //  `item.isEmpty();`
* `clear()` : Queue 안을 비운다
* `size()` : Queue Element의 개수

## 우선순위 큐(priority queue)
### 최소 우선순위 큐(min priority queue) : 우선순위를 설정해 원소를 정확한 위치에 추가
``` javascript
    function PriortyQueue(){
    
        var item = [];

        function QueueElement(element, priority){
            this.element = element;
            this.priority = priority;
        }

        this.enqueue = function(element, priority){
            var queueElement = new QueueElement(element, priority);

            if(this.isEmpty()){
                items.push(queueElement);
            }
            else{
            var added = false;
            for(var i=0; i<items.length; i++){
                items.splice(i, 0, queueElement);
                added = true;
                break;
                }
            }
            if(!added){
                items.push(queueElement);
            }
        }
    };
```

### 환형 큐(circular queue)
#### (example) 뜨거운 감자 게임
``` javascript
    function hotPotato(nameList, num){
        var queue = new Queue(); // 큐 인스턴스 생성
        
        for (var i=0; i<nameList.length; i++){ // 게임 참가자 전원의 이름을 배열로 읽어들여 큐에 추가
            queue.enqueue(nameList[i]);
        }
    }
    
    var eliminated = '';
    while(queue.size()>1){  // queue 안에 한명이 남을 때까지 반복
        for(var i=0; i<num; i++){
            queue.enqueue(queue.dequeue()); // 맨 앞의 원소를 꺼내어 맨 끝에 다시 넣는다.(뜨거운 감자 게임 흉내)
        }
        eliminated = queue.dequeue(); // 지정 횟수만큼 위의 프로세스를 돌린 후 뜨거운 감자를 들고 있던 사람을 퇴장시킴
        console.log(eliminated + '를 뜨거운 감자 게임에서 퇴장시킵니다.');
    }
    
    return queue.dequeue(); // 가장 마지막에 남아있는 1명이 승자가 된다.
    }
    // Test
    var names = ['1', '2', '3', '4', '5'];
    var winner = hotPotato(names, 7);
    console.log('승자는' + winner);
    // "승자는 1"
```
