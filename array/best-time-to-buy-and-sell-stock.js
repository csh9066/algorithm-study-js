// 문제
// 한 번의 거래로 낼 수 있는 최대 이익을 산출하라

// input
// [7, 1, 5 ,3, 6, 4]

// output
// 5

// 1일 때 사서 6일 떄 팔면 5의 이익을 얻는다
// 인덱스는 시간임 On으로 풀기

function maxProfit(prices = []) {
	let maxProfit = 0;
	let minIndex = 0;

	for (let i = 1; i < prices.length; i++) {
		const compare = prices[i] - prices[minIndex];
		if (maxProfit < compare) {
			maxProfit = compare;
		}
		if (prices[minIndex] > prices[i]) {
			minIndex = i;
		}
	}
	return maxProfit;
}
maxProfit([7, 1, 5, 3, 6, 4]);
