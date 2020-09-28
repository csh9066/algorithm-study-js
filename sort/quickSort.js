function partition(array = [], left, right) {
	const pivot = left;
	left++;

	while (left <= right) {
		while (array[pivot] > array[left]) {
			left++;
		}
		while (array[pivot] < array[right] && left <= right) {
			right--;
		}
		if (left < right) {
			[array[left], array[right]] = [array[right], array[left]];
		}
	}

	[array[right], array[pivot]] = [array[pivot], array[right]];
	return right;
}

function quickSort(array = [], left, right) {
	if (left >= right) {
		return;
	}

	const pivot = partition(array, left, right);

	quickSort(array, left, pivot - 1);
	quickSort(array, pivot + 1, right);
}
