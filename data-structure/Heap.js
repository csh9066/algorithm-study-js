class MaxHeap {
	constructor(data) {
		this.list = [null, data];
	}

	insert(data) {
		const list = this.list;
		list.push(data);
		let currentIndex = list.length - 1;
		while (currentIndex > 1) {
			// 삽입되 인덱스에서 2를 나누고 반 내림값이 부모의 인덱스임
			let parentIndex = Math.floor(currentIndex / 2);

			// 부모의값이 삽입된 값보다 작을 경우 스왑
			if (list[currentIndex] > list[parentIndex]) {
				[list[currentIndex], list[parentIndex]] = [
					list[parentIndex],
					list[currentIndex],
				];
			} else {
				break;
			}
			currentIndex = parentIndex;
		}
	}

	pop() {
		const list = this.list;
		// 리턴할 최대값을 임시 변수에 저장한다
		const maxData = list[1];
		// 완전 이진 트리를 유지하기 위해 삭제할 1번 인덱스 위치에 마지막 인덱스에 있는 값을 넣고
		// 마짐막 값은 삭제.
		list[1] = list[list.length - 1];
		list.pop();

		let currentIndex = 1;

		while (currentIndex < list.length) {
			let leftChildIndex = currentIndex * 2;
			let rightChildIndex = currentIndex * 2 + 1;

			// 왼쪽 자식 값이랑 오른쪽 자식값이랑 비교해서 더 큰 인덱스 값을 교체할 인덱스값으로 저장한디.
			let changeIndex =
				list[leftChildIndex] > list[rightChildIndex]
					? leftChildIndex
					: rightChildIndex;

			// 스왑
			if (list[changeIndex] > list[currentIndex]) {
				[list[changeIndex], list[currentIndex]] = [
					list[currentIndex],
					list[changeIndex],
				];
				currentIndex = changeIndex;
			} else {
				break;
			}
		}
		return maxData;
	}

	log() {
		console.log(this.list);
	}
}

const heap = new MaxHeap(3);
heap.insert(5);
heap.insert(6);
heap.insert(100);
heap.insert(89);
heap.insert(9);
heap.insert(32);
heap.insert(200);
heap.insert(322);
heap.insert(99);
heap.insert(19);
heap.pop();
heap.log();
