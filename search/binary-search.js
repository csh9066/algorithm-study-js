function binarySeacrh(list = [], searchData) {
	if (!list.length) return false;
	if (list.length === 1 && list[0] !== searchData) return true;
	if (list.length === 1 && list[0] === searchData) return true;

	const mid = Math.floor(list.length / 2);

	if (list[mid] === searchData) return true;

	if (list[mid] < searchData) {
		return binarySeacrh(list.slice(mid + 1), searchData);
	} else {
		return binarySeacrh(list.slice(0, mid), searchData);
	}
}

//test
binarySeacrh([3, 4, 5, 6, 8, 9, 10], 10);
