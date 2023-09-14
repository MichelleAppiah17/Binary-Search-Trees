class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }

    insertNode(node, value) {
        if (node === null) {
          return new Node(value);
        }
    
        if (value < node.data) {
          node.left = this.insertNode(node.left, value);
        } else if (value > node.data) {
          node.right = this.insertNode(node.right, value);
        }
    
        return node;
    }

    deleteNode(node, value) {
        if (node === null) {
          return null;
        }
    
        if (value < node.data) {
          node.left = this.deleteNode(node.left, value);
        } else if (value > node.data) {
          node.right = this.deleteNode(node.right, value);
        } else {
          if (node.left === null && node.right === null) {
            node = null;
          } else if (node.left === null) {
            node = node.right;
          } else if (node.right === null) {
            node = node.left;
          } else {
            const minRightNode = this.findMin(node.right);
            node.data = minRightNode.data;
            node.right = this.deleteNode(node.right, minRightNode.data);
          }
        }
    
        return node;
      
    }

    findMin(node) {
        while (node.left !== null) {
          node = node.left;
        }
        return node;
    }

    findNode(data) {
        let node;
        if (data === this.data) return (node = this);
        else if (data < this.data && this.left) {
          node = this.left.findNode(data);
          return node;
        } else if (data > this.data && this.right) {
          node = this.right.findNode(data);
          return node;
        }
        return "Data not found in this tree";
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

    findHeightNode(leavesArr, nodeDepth) {
        leavesArr = leavesArr.map((node) => this.findDepthNode(node.data));
        const deepest = Math.max(...leavesArr);
        return deepest - nodeDepth;
    }
    
    findDepthNode(data, height = -1) {
        height++;
        if (data === this.data) return height;
        else if (data < this.data && this.left) return this.left.findDepthNode(data, height);
        else if (data > this.data && this.right) return this.right.findDepthNode(data, height);
        return "Data not found in this tree";
    }
   
  }

  export default Node;