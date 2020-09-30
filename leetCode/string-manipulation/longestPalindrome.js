// *아직 못 풀었음 타임 아웃 나와서 다시 풀어야함*

// 문제
// 가장 긴 펠린드롬 부분 문자열을 출력하라
// ex)
// input : "babad"
// output : "bab" or "aba"

// input : "cbbd"
// output: "bb"
function isPalindrome(str = '') {
	const reverseStr = str.split('').reverse().join('');
	return reverseStr === str;
}

// 첫번째로 푼 문제 타임아웃 나옴
function getLongestPalindrome(s = '') {
	function isPalindrome(str = '') {
		const reverseStr = str.split('').reverse().join('');
		return reverseStr === str;
	}

	let maxPalindrome = '';

	for (let i = 0; i < s.length; i++) {
		for (let j = s.length; j > i; j--) {
			const substr = s.substring(i, j);
			if (isPalindrome(substr)) {
				if (maxPalindrome.length < substr.length) {
					maxPalindrome = substr;
				}
			}
		}
	}
	return maxPalindrome;
}

console.log(getLongestPalindrome('cbbd'));
