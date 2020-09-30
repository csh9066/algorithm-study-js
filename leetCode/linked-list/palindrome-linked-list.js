function isPalindrome(head) {
	const list = [];
	let node = head;
	while (node) {
		list.push(node.data);
		node = node.next;
	}
	let [left, right] = [0, list.length - 1];
	while (left < right) {
		if (list[left] === list[right]) {
			left++;
			right--;
		} else {
			return false;
		}
	}
	return true;
}
