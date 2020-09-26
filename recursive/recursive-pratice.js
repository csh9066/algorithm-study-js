function factorial(n) {
	if (n < 1) {
		return n;
	}
	return n + factorial(n - 1);
}

function palindrome(str = '') {
	if (str.length <= 1) {
		return true;
	}

	if (str[0] === str[str.length - 1]) {
		console.log(str);
		return palindrome(str.slice(1, -1));
	} else {
		return false;
	}
}

// 1, 정수 n에 대해
// 2. n이 홀수이면 3 X n + 1 을 하고,
// 3. n이 짝수이면 n 을 2로 나눕니다.
// 4. 이렇게 계속 진행해서 n 이 결국 1이 될 때까지 2와 3의 과정을 반복합니다.

function test(n) {
	console.log(n);
	if (n === 1) {
		return n;
	}

	if (n % 2 === 0) {
		return test(n / 2);
	} else {
		return test(3 * n + 1);
	}
}
