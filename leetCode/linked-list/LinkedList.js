// 자바스크립으로 링크드리스트 직접 구현
function Node(data, next = null) {
	this.data = data;
	this.next = next;
}

module.exports = function LinkedList(data) {
	this.head = data ? new Node(data) : null;

	this.add = function (data, next = null) {
		const newNode = new Node(data, null);
		if (!this.head) {
			this.head = newNode;
		} else {
			let curNode = this.head;
			while (curNode.next) {
				curNode = curNode.next;
			}
			curNode.next = newNode;
		}
	};

	this.removeAt = function (data) {
		let curNode = this.head;
		//해드 일경우
		if (data === this.head.data) {
			console.log(`${curNode.data} head 삭제`);
			this.head = curNode.next;
			return;
		}

		while (curNode.next) {
			if (curNode.next.data === data) {
				console.log(`${curNode.next.data} 삭제`);
				curNode.next = curNode.next.next;
				return;
			}
			curNode = curNode.next;
		}
	};

	this.log = function () {
		let curNode = this.head;
		if (!curNode) return;

		while (curNode) {
			console.log(curNode.data);
			curNode = curNode.next;
		}
	};
};
