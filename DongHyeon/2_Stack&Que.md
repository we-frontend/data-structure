# Stack
* First In First Out
* 컴파일러에서 사용되는 자료구조
* 변수나 메소드 호출을 메모리에 저장할 때 사용

## Stack Method
* Stack도 Array이기 때문에 Array Method와 비슷
* pop() : Stack **마지막** Element 반환 후 스택에서 삭제  //  `item.pop();`
* push(원소s) : Stack 마지막 Element 뒤에 추가  // `item.push(3);`
* peek() : Stack 마지막 Element를 반환하되 삭제하지 않음(값 확인하는 용도)  //  `item.peek();`
* isEmpty() : Stack이 비어있는지 확인 true || false  //  `item.isEmpty();`
* clear() : Stack 안을 비운다
* size() : Stack Element의 개수

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

# Que
* First In Last Out

## Que Method
* Que도 Array이기 때문에 Array Method와 비슷
* dequeue() : Que **첫 번째** Element 반환 후 스택에서 삭제  //  `item.Que();`
* enqueue(원소s) : Que 마지막 Element 뒤에 추가  //  `item.enqueue(3);`
* front() : Que 첫 번째 Element를 반환하되 삭제하지 않음(값 확인하는 용도, Stack의 peek과 비슷한 용도)  //  `item.front();`
* isEmpty() : Que가 비어있는지 확인 true || false  //  `item.isEmpty();`
* clear() : Que 안을 비운다
* size() : Stack Element의 개수
