// 문제
// 괄호로 된 입력값이 올바른지 판별하라
// 입력
// ()[]{}
// 출력
// true

var isValid = function (s) {
  const stack = [];
  const table = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < s.length; i++) {
    if (table.hasOwnProperty(s[i])) {
      stack.push(s[i]);
    } else if (table[stack.pop()] !== s[i]) {
      return false;
    }
  }

  return stack.length === 0;
};
