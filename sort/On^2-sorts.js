function bubblidSort(array = []) {
	for (let i = 0; i < array.length - 1; i++) {
		let isSwapped = false;

		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				isSwapped = true;
			}
		}

		// 만약 한번도 스왑 되지 않았으면 이미 정렬 완료된 배열이기 때문 멈춤
		if (!isSwapped) {
			break;
		}
	}
	console.log(array);
}

function selectionSort(array = []) {
	for (let i = 0; i < array.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				minIndex = j;
			}
		}
		[array[i], array[minIndex]] = [array[minIndex], array[i]];
	}
	console.log(array);
}

function insertionSort(array = []) {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j > 0; j--) {
			if (array[j - 1] > array[j]) {
				[array[j - 1], array[j]] = [array[j], array[j - 1]];
			} else {
				break;
			}
		}
	}
	console.log(array);
}

bubblidSort([3, 4, 5, 1, 7, 9, 2, 10, 11, 100, 32, 102, 403]);
