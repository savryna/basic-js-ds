const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
      return;
    }

    let currentNode = this.rootNode;
    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = new Node(data);
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = new Node(data);
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    if (!this.rootNode) {
      return false;
    }
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    if (!this.rootNode) {
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    if (!this.rootNode.has(data)) {
      return;
    }
    let currentNode = this.rootNode;
    while (currentNode) {
      // удаляю листик
      if (
        currentNode === data &&
        currentNode.left === null &&
        currentNode.right === null
      ) {
        currentNode = new Node(null);
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let min = this.rootNode;
    while (min.left !== null) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let max = this.rootNode;
    while (max.right !== null) {
      max = max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree,
};

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);
console.log(tree.find(14));
// console.log(tree.has(8));
// console.log(tree.has(7));
// console.log(tree.has(4));
