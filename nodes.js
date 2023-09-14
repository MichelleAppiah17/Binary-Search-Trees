
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }

    insertNode(currentNode = this.root, value) {
        if (currentNode === null) {
          return new Node(value)
        }
    
        if (currentNode.value > value) {
          currentNode.left = this.insertNode(currentNode.left, value);
        } else if (value > currentNode.value) {
          currentNode.right = this.insertNode(currentNode.right, value);
        }

        return currentNode;
    }

    deleteNode(currentNode = this.root, value) {
        if (currentNode === null) {
          return null;
        }
        if (currentNode.value > value) {
          currentNode.left = this.deleteNode(currentNode.left, value);
        } else if (currentNode.value < value) {
          currentNode.right = this.deleteNode(currentNode.right, value);
        } else {
          if (currentNode.left === null && currentNode.right === null) {
            currentNode = null;
          } else if (currentNode.left === null) {
           currentNode = currentNode.right;
          } else if (currentNode.right === null) {
            currentNode = currentNode.left;
          } else {
            const minRightNode = this.findMin(currentNode.right);
            currentNode.value = minRightNode.value;
            currentNode.right = this.deleteNode(currentNode.right, minRightNode.value);
          }
        }
    
        return currentNode;
    }

    find(value, node = this.root) {
      if (node === null || node.value === value) return node;
  
      if (node.value < value) {
        return this.find(value, node.rightChild);
      } else {
        return this.find(value, node.leftChild);
      }
    }
    
    findMin(node) {
        while (node.left !== null) {
          node = node.left;
        }
        return node;
    }

    levelOrderNode(callback) {
        let current = this;
        const queue = [current];
        const result = [];
        while (queue.length > 0) {
          result.push(current);
          queue.splice(0, 1);
          if (current.left) queue.push(current.left);
          if (current.right) queue.push(current.right);
          current = queue[0];
        }
        if (callback) return callback(result);
        return result;
    }

    inorderNode(node, result, callback) {
        if (node === null) {
          return;
        }
    
        this.inorderNode(node.left, result, callback);
        if (callback) {
          callback(node.data);
        } else {
          result.push(node.data);
        }
        this.inorderNode(node.right, result, callback);
    }

    preorderNode(node, result, callback) {
        if (node === null) {
          return;
        }
    
        if (callback) {
          callback(node.data);
        } else {
          result.push(node.data);
        }
        this.preorderNode(node.left, result, callback);
        this.preorderNode(node.right, result, callback);
    }

    postorderNode(node, result, callback) {
        if (node === null) {
          return;
        }
    
        this.postorderNode(node.left, result, callback);
        this.postorderNode(node.right, result, callback);
        if (callback) {
          callback(node.data);
        } else {
          result.push(node.data);
        }
    }
   
  }

  module.exports = Node;