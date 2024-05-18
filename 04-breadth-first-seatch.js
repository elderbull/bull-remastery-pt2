class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function bfs(root, target) {
    const queue = [root];
  
    while (queue.length > 0) {
      const current = queue.shift();
  
      if (current.value === target) {
        return true;
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return false;
  }
  
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  
  console.log(bfs(root, 5));
  console.log(bfs(root, 6));