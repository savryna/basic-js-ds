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
    let currentNode = this.rootNode;
    let parentNode = this.rootNode;

    // рут
    if (data === currentNode.data) {
      // рут без потомков
      if (currentNode.left === null && currentNode.right === null) {
        this.root = null;
      }
      // рут с одним потомком
      if (currentNode.left === null || currentNode.right === null) {
        this.rootNode = currentNode.left || currentNode.right;
      }
      if (currentNode.left && currentNode.right) {
        // ищем новый рут
        let min = currentNode.right;
        let parentNode = currentNode;
        while (min.left) {
          parentNode = min;
          min = min.left;
        }
        // мин это листик
        if (min.left === null && min.right === null) {
          this.rootNode = min;
          this.rootNode.left = currentNode.left;
          this.rootNode.right = currentNode.right;
          // console.log(this.p)
          parentNode.left = null;
          // this.parentNode.left = null;
        }
      }
    }

    while (currentNode && currentNode.data !== data) {
      parentNode = currentNode;
      if (data < parentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }

      // удаляю листик, проверяю существует или нет (слева мб 0)
      if (!currentNode.left && !currentNode.right) {
        currentNode === parentNode.left
          ? (parentNode.left = null)
          : (parentNode.right = null);
      }

      // узел только с одним листочком и не рут
      if (
        (currentNode.left && !currentNode.right) ||
        (currentNode.left === null && currentNode.right)
      ) {
        currentNode === parentNode.left
          ? (parentNode.left = currentNode.left || currentNode.right)
          : (parentNode.right = currentNode.left || currentNode.right);
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
