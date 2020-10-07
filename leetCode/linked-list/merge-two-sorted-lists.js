// 문제
// 정렬되어 있는 두 연결 리스트를 합쳐라

// input
// 1 > 2 > 4     1 > 3 > 4

// output
// 1 > 1 > 2 > 3 > 4 > 4
const LinkedList = require('./LinkedList');

function mergeTwoLists(list1, list2) {
  //처음 더미 리스트를 만듬
  let node = new LinkedList(1).head;
  // 리턴할 값
  const head = node;

  while (list1 || list2) {
    // case1 list1 list2 둘다 있을 때
    if (list1 && list2) {
      // 작은쪽을 새로운 노드의 다음 값에 연결한 다음 다음 노드로
      if (list1.data > list2.data) {
        node.next = list2;
        list2 = list2.next;
      } else {
        node.next = list1;
        list1 = list1.next;
      }
    }
    // case2 list1가 없을 때 당므 노드에 list2 연결
    else if (!list1) {
      node.next = list2;
      list2 = list2.next;
    }
    // case3 list2가 없을 때 위와 반대
    else if (!list2) {
      node.next = list1;
      list1 = list1.next;
    }
    node = node.next;
  }
  return head.next;
}

const list1 = new LinkedList(1);
list1.add(2);
list1.add(4);
const list2 = new LinkedList(1);
list2.add(3);
list2.add(4);

const merge = mergeTwoLists(list1.head, list2.head);
console.log(merge);
