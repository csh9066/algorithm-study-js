// 문제
// 금지된 단어를 제외한 가장 흔하게 등장하는 단어를 출력하라.
// 대소문자 구분을 하지 않으며, 구두점(마췸표, 쉼표 등)또한 무시한다.

function mostCommonWord(paragraph, banned = []) {
  const words = paragraph
    .toLocaleLowerCase()
    .split(/\W+/)
    .filter((word) => !banned.includes(word))
    .reduce((acc, cur) => {
      if (!acc[cur]) {
        acc[cur] = 1;
      } else {
        acc[cur]++;
      }
      return acc;
    }, {});

  let maxCount = 0;
  let result;

  for (const word in words) {
    if (maxCount < words[word]) {
      maxCount = words[word];
      result = word;
    }
  }

  return result;
}
