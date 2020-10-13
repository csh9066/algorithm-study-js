// 연결 리스트를 홀수 노드 다음에 짝수 노드가 오도록 재구성하라
// 공간 복잡도 O(1) 시긴 복잡도 O(n)에 풀이하라
// input
// 1>2>3>4>5>null
// output
// 1>3>5>2>4>null

// 풀이
var oddEvenList = function (head) {
  // 예외 처리 안하면 테스트 통과 안되서 예외처리 했다
  if (!head) {
    return null;
  }
  // root는 리턴 변수
  const root = head;
  let oddNode = head;
  let evenNode = head.next;
  // evnenode의 꼬리와 연결 시켜줄 변수
  let evenNodeRoot = evenNode;

  while (evenNode && evenNode.next) {
    oddNode.next = oddNode.next.next;
    evenNode.next = evenNode.next.next;
    oddNode = oddNode.next;
    evenNode = evenNode.next;
  }

  oddNode.next = evenNodeRoot;
  return root;
};
