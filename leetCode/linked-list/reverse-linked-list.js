// 연결 리스트를 뒤집어라
// input
// 1>2>3>4>5>null
// ouput
// 5>4>3>2>1>null

const LinkedList = require('./LinkedList');

function reverseList(head, linkedList) {
  /* 
    설명 : 
    1. 노드와 이전 노드를 저장하는 변수 선언
    2. 지역 변수 next 선언 현재 노드의 next는 이전 노드가 되어야 하는데
      변수를 저장 하지 않으면 다음 노드로 갈 수 없기 떄문에 next 변수를 선언 함
    3. 현재 노드의 next는 이전 노드가 되고
    4. prev 노드는 현재 노드 다음 노드는 저장 해놓은 next가 되서
      마지막 노드까지 순환함
  */
  let node = head;
  let prev = null;
  while (node) {
    let next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  linkedList.head = prev;
}

const linkedList = new LinkedList(3);
linkedList.add(5);
linkedList.add(6);
linkedList.add(7);
linkedList.add(8);

reverseList(linkedList.head, linkedList);
linkedList.log();
