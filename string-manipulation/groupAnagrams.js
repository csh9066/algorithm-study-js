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
	const hashAnagrams = strs.reduce((anagrams, word) => {
		//단어를 배열로 바꾼다음 정렬 한다음 문자열 키값으로 변환
		const key = Array.from(cur).sort().join('');
		if (!acc[key]) {
			anagrams[key] = [word];
		} else {
			anagrams[key].push(word);
		}
		return anagrams;
	}, {});

	const arrayAnagrams = [];

	for (anaGram in hashAnagrams) {
		arrayAnagrams.push(hashAnagrams[anaGram]);
	}
	return arrayAnagrams;
}

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
