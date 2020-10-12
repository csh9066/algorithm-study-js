// 역순으로 저장된 연결 리스트의 숫자를 더하라
// Input
// (2 > 4 > 3) + (5 > 6 > 4)
// optput
// 7 > 0 > 8

function ListNode(data) {
  this.val = data;
  this.next = null;
}

// 첫 번째 문제 풀이
// 링크드 리스트를 뒤집고 > 뒤집은 링크드 리스트를 배열로 바꾼다 >
// 배열을 문자열로 바꾸고 다시 정수로 바꿔서 더하고 또 문자열로 바꾼다 >
// 더한 값을 다시 배열로 바꾸고 배열을 다시 뒤집힌 링크드 리스트로 바꾼다
// 이 방법은 책에 나온 그대로 했는데 파이썬과 다르게 leecode 테스트를 통과하지 못했다.
// number가 20대자리 이상으로 가면 지수 표기법으로 변하는데 다시 문자열로 바꾸는 과정에서 지수 표기법 그대로 문자로 바꿔서 에로 사항이 있음
var addTwoNumbers = function (l1, l2) {
  function reverseLinkedList(head) {
    let node = head;
    let prev = null;

    while (node) {
      let next = node.next;
      node.next = prev;
      [prev, node] = [node, next];
    }
    return prev;
  }

  function toArray(head) {
    const resultArray = [];
    let node = head;
    while (node) {
      resultArray.push(node.val);
      node = node.next;
    }
    return resultArray;
  }

  function toReverseLinkedList(array) {
    array.reverse();
    let node = new ListNode(array[0]);
    let head = node;
    for (let i = 1; i < array.length; i++) {
      node.next = new ListNode(array[i]);
      node = node.next;
    }

    return head;
  }

  const a = toArray(reverseLinkedList(l1));
  const b = toArray(reverseLinkedList(l2));

  const sum = parseInt(a.join('')) + parseInt(b.join('')) + '';

  return toReverseLinkedList(sum.split(''));
};

// 두 번째 문제 풀이
// 전가산기 방법 - leecode 테스트 코드 다 통과했다
// 위에 방법보다 깔끔하고 직관적이다
var addTwoNumbers = function (l1, l2) {
  // 자릿 수
  let carry = 0;
  // 다음 노드를 연결 하기 위한 전역 노드 생성
  let node = new ListNode(0);
  // 리턴 할 값 루트 노드는 쓸데 없는 노드니 다음 노드를 리턴 함
  let head = node;
  while (l1 || l2 || carry) {
    let sum = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    // 자릿수랑 노드를 더한 값을 넣는다 10의 자리가 넘으면 다음 자릿수값이 되기떄문 10의 나머지값을 넣는다
    node.next = new ListNode((sum + carry) % 10);
    node = node.next;
    // 더한값이 10이 넘으면 자릿수를 올린다
    carry = sum + carry >= 10 ? 1 : 0;
  }
  return head.next;
};
