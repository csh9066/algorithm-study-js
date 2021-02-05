function solution(people, limit) {
  // 오름 차순으로 정렬한 다음
  // 투 포인트 슬라이드 방식 으로 풀이
  people.sort((a, b) => a - b);

  let answer = 0;
  let [left, right] = [0, people.length - 1];

  while (left < right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      right--;
    }
    answer++;
  }

  if (left === right) {
    answer++;
  }

  return answer;
}
