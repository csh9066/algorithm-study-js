// 나눗셈으로 안하면 풀 수 없었음 답지 보고 이해 했음 ㅜㅜ 다시 풀어 볼 문제
// 문제
// 배열을 입력받아 output[i]가 자신을 제외한 나머지 모든 요소의
// 곱셈 결과가 되도록 출력하라

// input
// [1,2,3,4]

// output
// [24,12,8,6]

// 나눗셈을 하지 않고 On에 풀이하라
function productExceptSelf(nums = []) {
	const out = [];
	let p = 1;
	// 첫번쨰 out은 자신을 제외한 왼쪽 파티션
	for (let i = 0; i < nums.length; i++) {
		out.push(p);
		p = p * nums[i];
	}
	p = 1;
	// 두번째는 자신을 제외한 오른쪽 파티션 * 왼쪽 파티션
	for (let i = nums.length - 1; i >= 0; i--) {
		out[i] = out[i] * p;
		p = p * nums[i];
	}
	console.log(out);
	return out;
}

productExceptSelf([1, 2, 3, 4]);
