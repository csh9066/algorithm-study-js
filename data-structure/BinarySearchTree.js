function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}

function BST(data) {
	this.head = new Node(data);

	this.insert = (data) => {
		let currentNode = this.head;
		const newNode = new Node(data);
		while (true) {
			if (currentNode.data < data) {
				if (currentNode.right) {
					currentNode = currentNode.right;
				} else {
					currentNode.right = newNode;
					break;
				}
			} else if (currentNode.data > data) {
				if (currentNode.left) {
					currentNode = currentNode.left;
				} else {
					currentNode.left = newNode;
					break;
				}
			}
		}
	};

	this.search = (data) => {
		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.data === data) return true;

			if (currentNode.data < data) {
				currentNode = currentNode.right;
			} else if (currentNode.data > data) {
				currentNode = currentNode.right;
			}
		}
		return false;
	};

	this.delete = (data) => {
		let currentNode = this.head;
		let parentNode = this.head;
		let isSearch = false;

		while (currentNode) {
			if (currentNode.data === data) {
				isSearch = true;
				break;
			}

			parentNode = currentNode;

			if (currentNode.data < data) {
				currentNode = currentNode.right;
			} else {
				currentNode = currentNode.left;
			}
		}

		if (!isSearch) return isSearch;

		// 삭제할 데이터가 leaf node 일 떄
		if (!currentNode.left && !currentNode.right) {
			if (parentNode.data < data) {
				parentNode.right = null;
			} else {
				parentNode.left = null;
			}
		}

		// child node가 왼쪽만 있을 떄
		else if (currentNode.left && !currentNode.right) {
			if (parentNode.data < data) {
				parentNode.right = currentNode.left;
			} else {
				parentNode.left = currentNode.left;
			}
		}
		// child node가 오른쪽만 있을 때
		else if (!currentNode.left && currentNode.right) {
			if (parentNode.data < data) {
				parentNode.right = currentNode.right;
			} else {
				parentNode.left = currentNode.right;
			}
		}
		//child node가 둘 다 있을 때
		else if (currentNode.left && currentNode.right) {
			// changeNode는 교체할 노드 보통 제거할 노드 바로 오른쪽 자식 노드에 제일 작은 노드를 선정함
			let changeNode = currentNode.right;
			let changeNodeParent = currentNode.right;

			//changeNode 선정
			while (changeNode.left) {
				changeNodeParent = changeNode;
				changeNode = changeNode.left;
			}

			// changeNode의 부모 노드와 연결을 설정함
			// 만약에 삭제할 노드의 오른쪽 노드가 있으면 부모 노드의 왼쪽 노드와 연결 시키고
			// 없을 경우 참조를 끊어 줌
			if (changeNode !== changeNodeParent) {
				if (changeNode.right) {
					changeNodeParent.left = changeNode.right;
				} else {
					changeNodeParent.left = null;
				}
			}

			if (parentNode.data < data) {
				parentNode.right = changeNode;
			} else {
				parentNode.right = changeNode;
			}

			changeNode.right = currentNode.right;
			changeNode.left = currentNode.left;
		}
	};
}

const tree = new BST(3);
tree.insert(4);
tree.insert(2);
tree.insert(1);
tree.insert(7);
tree.delete(4);
console.log(tree.search(3));
