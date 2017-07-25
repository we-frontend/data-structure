# Stack
* First In First Out
* 컴파일러에서 사용되는 자료구조
* 변수나 메소드 호출을 메모리에 저장할 때 사용

## Stack Method
* Stack도 Array이기 때문에 Array Method와 비슷
* pop()
* push(원소s)
* peek()
* isEmpty()
* clear()
* size()

### (Code)10진수를 2진수로 바꿔보자
```
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
