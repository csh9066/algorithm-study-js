// 문제
// 주어진 문자열이 회문인지 확인하라.
// 대소문자를 구분하지 않으며, 영문자와 숫자만을 대상으로 한다
// ex)
// input : "A man, a plain, a cannal: Panama"
// output: true

// input : "race a car"
// output: false

function isPalindrome(s = '') {
	const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
	return str === str.split('').reverse().join('');
}

// 배열로 처리하는 방법
function isPalinrome2(s = '') {
	const strs = s
		.toLowerCase()
		.replace(/[^a-z0-9]/g, '')
		.split('');

	let [left, right] = [0, strs.length - 1];
	while (left < right) {
		if (strs[left] === strs[right]) {
			left++;
			right--;
		} else {
			return false;
		}
	}
	return true;
}
