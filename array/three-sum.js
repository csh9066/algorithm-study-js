// 문제
// 배열을 입력받아 합으로 0을 만들 수 있는 3개의 엘리먼트를 출력하라

// input
// nums = [-1, 0, 1, 2, -1, -4]

// output
// [
//   [-1, 0, 1],
//   [-1 -1 ,2]
// ]

function threeSum(nums = []) {
	nums.sort((a, b) => a - b);
	const result = [];
	for (let i = 0; i < nums.length - 2; i++) {
		// nums는 정렬된 배열임 동일한 값을 반복하는건 무의미 함으로 contiue;
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		for (let j = i + 1; j < nums.length - 1; j++) {
			if (j > i + 1 && nums[j] === nums[j - 1]) continue;
			for (let k = j + 1; k < nums.length; k++) {
				if (k > j + 1 && nums[k] === nums[k - 1]) continue;
				if (nums[i] + nums[k] + nums[j] === 0) {
					result.push([nums[i], nums[k], nums[j]]);
				}
			}
		}
	}
	return result;
}

// two point 방법
// On^2 성능
function threeSum2(nums = []) {
	nums.sort((a, b) => a - b);
	const result = [];
	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		let [left, right] = [i + 1, nums.length - 1];
		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];
			if (sum < 0) {
				left++;
			} else if (sum > 0) {
				right--;
			} else {
				result.push([nums[i], nums[left], nums[right]]);
				while (left < right && nums[left] === nums[left + 1]) {
					left++;
				}
				while (left < right && nums[right] === nums[right - 1]) {
					right--;
				}
				left++;
				right--;
			}
		}
	}
	return result;
}

threeSum2([-1, 0, 1, 2, -1, -4]);
