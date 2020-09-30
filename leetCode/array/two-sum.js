// 문제
// 덧셈하여 타겟을 만들 수 있는 배열의 두 숫자 인덱스를 리턴하라

// input
// nums = [2, 7, 11, 15], target = 9

// output
// [0, 1]

// 내가 처음 푼 방법
// 시간 복잡도 On^2 구림
function twoSum(nums, target) {
	const result = [];

	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				result.push(nums[i], nums[j]);
			}
		}
	}
	return result;
}

// 두번째 개선한 방법
// 시간 복잡도On - 객체 이용
function twoSum2(nums = [], target) {
	const numsMap = {};
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (numsMap.hasOwnProperty(complement)) {
			console.log(i, numsMap[complement]);
		}
		numsMap[nums[i]] = i;
	}
}

console.log(twoSum2([1, 2, 3, 4, 5, 6, 7], 5));
