class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function dfs(node, target) {
    if (node === null) return false;
  
    if (node.value === target) return true;
  
    const foundInLeft = dfs(node.left, target);
    if (foundInLeft) return true;
  
    const foundInRight = dfs(node.right, target);
    if (foundInRight) return true;
  
    return false;
  }
  
  const root = new TreeNode(27);
  root.left = new TreeNode(14);
  root.right = new TreeNode(35);
  root.left.left = new TreeNode(10);
  root.left.right = new TreeNode(5);
  
  console.log(dfs(root, 14));
  console.log(dfs(root, 2));
  console.log(dfs(root, 0));
  console.log(dfs(root, 10));