const { Tree, Node } = require('./binaryTree.js')

function prettyPrint(node, prefix = '', isLeft = true) {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '|   ' : '   '}`, false);
    }
    console.log(`${prefix}${isLeft ? '|___' : '|---'}${node.value}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '   ' : '|  '}`, true);
    }
}

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
//prettyPrint(tree.root);
tree.insert(0);
tree.insert(31);
tree.insert(100);
console.log(tree.isBalanced());
tree.reBalance();
console.log(tree.isBalanced());
console.log(tree.levelOrder());
console.log(tree.preorder());
console.log(tree.inorder());
console.log(tree.postorder());