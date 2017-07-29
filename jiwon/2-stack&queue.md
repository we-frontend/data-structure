# DS in JavaScript (2) STACK
* Keywords
> **LIFO**

#### Stack class implementation

```JavaScript
function Stack(){
  var items = [];

  // push - add item to the top of the stack
  this.push = function(element){
      items.push(element);
  }

  // pop - remove item from the top of the stack
  this.pop = function(){
      items.pop();
  }

  // returns the topmost element for information purpose
  this.peek = function(){
      return items[items.length-1];
  }

  // check if the stack is empty
  this.isEmpty = function(){
      return items.length == 0;
  }

  // return the size of stack
  this.size = function(){
      return items.length;
  }

  this.clear = function(){
      items = [];
  }

  this.print = function(){
      console.log(items.toString());
  }
};

// use the Stack class
var stack = new Stack();
stack.push(1);
stack.push(3);
stack.pop();
stack.push(5);
stack.peek();
stack.isEmpty();
//...
```
#### Using Stack to convert decimal to binary
```JavaScript
function baseConverter(decNumber, base){
    var remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF';

    while(decNumber > 0){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while(!remStack.isEmpty()){
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

```

# DS in JavaScript (3) QUEUE
* Keywords
> **FIFO**

#### Queue class implementation

```JavaScript
function Queue(){
    var items = [];

    // add item to the back
    this.enqueue = function(elements){
        items.push(elements);
    }

    // remove item from the front. returns the item.
    this.dequeue = function(){
        return items.shift();
    }

    // return the first item from the queue -- similar to peek
    this.front = function(){
        return items[0];
    }

    this.isEmpty = function(){
        return items.length == 0;
    }

    this.size() = function(){
        return items.length;
    }
}
```

#### Priority Queue

* elements added / removed based on certain type of priority
* 2 options of implementation
    * *queue* them according to the priority
    * *remove* them according to the priority

```JavaScript
// create queue class
function PriorityQueue(){
  // declare list of items
  var items = [];

  this.dequeue = function(){
      return items.shift();
  }

  this.front = function(){
      return items[0];
  }

  this.isEmpty = function(){
      return items.length == 0;
  }

  this.size = function(){
      return items.length;
  }

  this.print = function(){
      console.log(items.toString());
  }

  // declare a subclass that defines element and priority
  function QueueElement (element, priority){
    this.element = element;
    this.priority = priority;
  }
  // declare class function for enqueue
  this.enqueue = function(element, priority){
    // this function uses QueueElement instance
    var queueElement = new QueueElement(element,priority);
    // if the array is empty
    if(this.isEmpty()){
      items.push(queueElement);
    }else{
      // flag to check if element is already added due to priority
      var added = false;
      for (var i=0; i < items.length; i++){
        // continue until meet the same / bigger priority
        if(queueElement.priority < items[i].priority){
          // add element
          items.splice(i, 0, queueElement);
          // change the flag
          added = true;
          break;
        }
      }
      // if element was not added --> highest priority
      if(!added){
        items.push(queueElement);
      }
    }
  }
}

```
*&ast;note* this will make a `min priority queue`. Priority with **lower number** will leave first.

#### Circular Queue

```JavaScript
function hotPotato (nameList, num){
  // creae an instance of a Queue
  var queue = new Queue();
  // enqueue all the names into queue
  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  // declare eliminated variable
  var eliminated = '';
  // until there is one element left in queue
  while(queue.size() > 1){
    // put the first element to the last position
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    // after switching all the elements around, eliminate 1
    eliminated = queue.dequeue();
    console.log(eliminated);
  }
  // last survived one is known the winner
  return queue.dequeue();
}
```
