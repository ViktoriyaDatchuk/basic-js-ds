const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addValue(this.treeRoot, data);

    function addValue(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addValue(node.left, data);
      } else {
        node.right = addValue(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasValue(this.treeRoot, data);

    function hasValue(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? hasValue(node.left, data) : hasValue(node.right, data);
    }
  }

  find(data) {
    return hasNode(this.treeRoot, data);

    function hasNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? hasNode(node.left, data) : hasNode(node.right, data);
    }
  }

  remove(data) {
    console.log(this.treeRoot)
    this.treeRoot = removeNode(this.treeRoot, data);

      function removeNode(node, data) {
        if (!node) {
          return null;
        }

        if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else if (data > node.data) {
          node.right = removeNode(node.right, data);
          return node;
        } else {
          if (!node.left && !node.right) {
            return null;
          }

          if (!node.left) {
            node = node.right;
            return node;
          }

          if (!node.right) {
            node = node.left;
            return node;
          }
      
          let minRight = node.right;
          while(minRight.left) {
            minRight = minRight.left;
          }
          node.data = minRight.data;
          node.right = removeNode(node.right, minRight.data);
          return node;
        }
      }
    }

  min() {
    if (!this.treeRoot) {
      return;
    }

    let min = this.treeRoot;
    while(min.left) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    if (!this.treeRoot) {
      return;
    }

    let max = this.treeRoot;
    while(max.right) {
      max = max.right;
    }

    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};