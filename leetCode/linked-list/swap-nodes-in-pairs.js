// 연결 리스트를 입력받아 pair 단위로 스왑하라
// input
// 1 > 2 > 3 > 4
// output
// 2 > 1 > 4 > 3

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
  // 리턴을 위한 더미 노드
  const root = new ListNode(0);
  let prev = root;
  let node = head;
  root.next = node;
  while (node && node.next) {
    let next = node.next;

    node.next = next.next;
    next.next = node;

    prev.next = next;

    prev = node;
    node = node.next;
  }
  return root.next;
};
