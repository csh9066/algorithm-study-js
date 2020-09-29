function merge(leftList = [], rightList = []) {
	const result = [];
	while (leftList.length > 0 || rightList.length > 0) {
		if (leftList.length > 0 && rightList.length > 0) {
			if (leftList[0] <= rightList[0]) {
				result.push(leftList.shift());
			} else if (leftList[0] > rightList[0]) {
				result.push(rightList.shift());
			}
		} else if (leftList.length === 0) {
			result.push(rightList.shift());
		} else {
			result.push(leftList.shift());
		}
	}
	return result;
}

function mergeSort(list = []) {
	if (list.length <= 1) {
		return list;
	}
	const mid = Math.floor(list.length / 2);
	const leftList = list.slice(0, mid);
	const rightList = list.slice(mid, list.length);

	return merge(leftList, rightList);
}

console.log(mergeSort([7, 9, 11, 3, 6, 9]));
