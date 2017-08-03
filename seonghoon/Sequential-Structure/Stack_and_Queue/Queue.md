# 자료구조와 알고리즘

## Queue

### 정의
선입선출 원리에 따라 정렬된 컬렉션을의미
새 원소는 뒤에 들어가고, 가장 먼저 빠져나가는 구조는 맨 앞에 있는 원소가 빠져나간다.

```javascript
    function Queue() {
        var items = [];

        this.enqueue = function(element) {
           items.push(element);
        }

        this.dequeue = function() {
            return items.shift();
        }

        this.front = function() {
            return items[0[;
        }

        this.isEmpty = function() {
            return items.length == 0;
        }

        this.clear = function() {
            items = [];
        }

        this.size = function() {
            return items.length;
        }

        this.print = function() {
           console.log(items.toString());
        }
    }
```

### 우선순위 큐

```javascript
    function PriorityQueue() {
        var items = [];

        function QueueElement (element, priority) {
            this.element = element;
            this.priority = priority;
        }

        this.enqueue = function(element, priority) {
            if(this.isEmpty()) {
                items.push(queueElement);
            } else {
                var added = false;
                for(var i = 0; i < items.length; i++) {
                    if(queueElement.priority < items[i].priority) {
                        items.splice(i, 0, queueElement);
                        added = true;
                        break;
                    }
                }

                if(!added) {
                    items.push(queueElement);
                }
            }
        };
    }
```

### 환형 큐

```javascript
    function HotPotato(nameList, num) {
        var queue = new Queue();

        for(var i = 0; i < nameList.length; i++) {
            queue.enqueue(nameList[i]);
        }

        var eliminated = '';
        while(queue.size() > 1) {
            for(var i = 0; i < num; i++) {
                queue.enqueue(queue.dequeue());
            }

             eliminated = queue.dequeue();
             console.log(eliminated + '(을)를 뜨거운 감자 게임에서 퇴장시킵니다.');
        }

        return queue.dequeue();
    }
```


#### 과제
- Queue와 Stack의 다양한 종류를 찾아서 비교 분석 및 정리