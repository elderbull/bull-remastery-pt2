class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function bft(root) {
    const result = [];
    const queue = [root];
  
    while (queue.length > 0) {
      const currentLevelValues = [];
      const levelSize = queue.length;
  
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        currentLevelValues.push(node.value);
  
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      result.push(currentLevelValues);
    }
  
    return result;
  }
  
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);
  
console.log(bft(root));