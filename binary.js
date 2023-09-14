import Node from "./nodes"
  
  class Tree {
    constructor(array) {
      this.sortedArray = [...new Set(array)].sort((a, b) => a - b);
      this.root = this.buildTree(this.sortedArray);
    }
  
    buildTree(sortedArray) {
      if (sortedArray.length === 0) {
        return null;
      }
  
      var middleIndex = Math.floor(sortedArray.length / 2);
      var rootNode = new Node(sortedArray[middleIndex]);
  
      rootNode.left = this.buildTree(sortedArray.slice(0, middleIndex));
      rootNode.right = this.buildTree(sortedArray.slice(middleIndex + 1));
  
      return rootNode;
    }
  
    insert(value) {
      this.root = this.insertNode(this.root, value);
    }
  
    delete(value) {
      this.root = this.deleteNode(this.root, value);
    }
  
  
    find(value) {
      return this.findNode(this.root, value);
    }
  
   

    levelOrder() {
      if (this.root) {
        return this.root.levelOrderNode(this.root.displayNodeData);
       }
    }
  
    inorder(callback) {
      const result = [];
      this.inorderNode(this.root, result, callback);
      return result;
    }
  
    preorder(callback) {
      const result = [];
      this.preorderNode(this.root, result, callback);
      return result;
    }
  
    postorder(callback) {
      const result = [];
      this.postorderNode(this.root, result, callback);
      return result;
    }
  
  
    findHeight(node) {
        if (!this.root) return 
        "This tree is empty";
        if (!node) return 0;
        if (!(node instanceof Node)) 
        return "Data not found in this tree";
        const leavesArr = node.findLeavesNode(node);
        const nodeDepth = this.findDepth(node.data);
        return this.root.findHeightNode(leavesArr, nodeDepth);
    }
    
    findDepth(nodeData) {
        if (!this.root) {
          return -1;
        } else return this.root.findDepthNode(nodeData);
    }
    
  
    isBalanced() {
      return this.checkBalanced(this.root);
    }
  
    checkBalanced(node) {
      if (node === null) {
        return true;
      }
  
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
  
      if (Math.abs(leftHeight - rightHeight) <= 1 && this.checkBalanced(node.left) && this.checkBalanced(node.right)) {
        return true;
      }
  
      return false;
    }
  
    rebalance() {
      const elements = this.levelOrder();
      this.root = this.buildTree(elements);
    }
  }
  
  export default Tree;