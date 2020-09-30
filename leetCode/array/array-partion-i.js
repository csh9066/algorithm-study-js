// 문제
// n개의 페어를 이용한 min(a, b)의 합으로 만들 수 있는 가장 큰 수를 출력하라

// input
// [1, 4, 3, 2]

// outpput
// 4

// n은 2가 되며, 최대 합은 4이다. min(1 ,2) + min(3, 4) = 4

function arrayPairSum(nums = []) {
	// let sum = 0;
	const pair = [];
	nums.sort();

	const sum = nums.reduce((acc, num, i) => {
		if (i % 2 === 0) {
			return acc + num;
		}
		return acc;
	}, 0);
	console.log(sum);
	return sum;
}

arrayPairSum([1, 4, 3, 2]);
