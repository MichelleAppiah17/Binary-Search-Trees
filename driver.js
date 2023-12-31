const Tree = require("./binary.js");

 function generateRandomNumbers(count, max) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
      randomNumbers.push(Math.floor(Math.random() * max));
    }
    return randomNumbers;
  }
  
  const randomNumbers = generateRandomNumbers(20, 100);
  const newTree = new Tree(randomNumbers);
  
  console.log("Is Balanced =>", newTree.isBalanced());
  console.log("Level Order =>", newTree.levelOrder());
  console.log("Inorder =>", newTree.inorder());
  console.log("Preorder =>", newTree.preorder());
  console.log("Postorder =>", newTree.postorder());
  
  const unbalancedNumbers = [150, 160, 170, 180];
  unbalancedNumbers.forEach((num) => newTree.insert(num));
  
  console.log("Is Balanced:", newTree.isBalanced());
  
  newTree.rebalance();

  console.log("After rebalanced :");
  console.log(newTree.isBalanced());
  console.log(newTree.levelOrder());
  console.log(newTree.inorder());
  console.log(newTree.preorder());
  console.log(newTree.postorder());
  