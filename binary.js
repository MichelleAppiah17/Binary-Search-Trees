const Node = require("./nodes")
  
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
  
  
    height(node = this.root) {
      if (node === null) return 0;
  
      const leftHeight = this.height(node.leftChild);
      const rightHeight = this.height(node.rightChild);
  
      return Math.max(leftHeight, rightHeight) + 1;
    }
    
    depth(node) {
      if (node === null) {
        return 0;
      }
  
      let depth = 0;
      let current = node;
      while (current !== null) {
        depth++;
        current = current.parent;
      }
  
      return depth;
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
  
  module.exports = Tree;