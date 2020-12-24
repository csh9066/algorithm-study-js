// 문제
// 문자열 배열을 받아 에너그램 단위로 그룹핑하라
// ex)
// input : ["eat", "tea", "tan", "ate", "nat", "bat"]
// output : [
//   ["ate", "eat", "tea"],
//   ["nat", "tan"],
//   ["bat"]
// ]

function groupAnagrams(strs = []) {
  const hahshAnangram = {};

  for (str of strs) {
    const sortedStr = str.split('').sort().join('');

    if (sortedStr in hahshAnangram) {
      hahshAnangram[sortedStr].push(str);
    } else {
      hahshAnangram[sortedStr] = [str];
    }
  }

  return Object.values(hahshAnangram);
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
