class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {

    constructor(array) {
        //array with no duplicates, sorted in ascending order
        this.sortedArray = [... new Set(array)].sort((a, b) => a - b);
        this.root = this.buildTree(this.sortedArray);
    }
    
    buildTree = (sortedArray) => {
        if (sortedArray.length === 0) return null;

        let mid = Math.floor(sortedArray.length / 2);
        const newNode = new Node(sortedArray[mid]);
        newNode.left = this.buildTree(sortedArray.slice(0, mid));
        newNode.right = this.buildTree(sortedArray.slice(mid + 1));
        
        return newNode;
    } 

    insert = (value, currentNode = this.root) => {
        const newNode = new Node(value);

        if (currentNode === null) return newNode;
        if (currentNode.value === value) return;

        if (value > currentNode.value) {
            currentNode.right = this.insert(value, currentNode.right)
        } else  {
            currentNode.left = this.insert(value, currentNode.left);
        }

        return currentNode;
    }

    delete = (value, currentNode = this.root) => {
        if (currentNode === null) return currentNode;
        
        if (value < currentNode.value) {
            currentNode.left = this.delete(value, currentNode.left);
            return currentNode;
        } else if (value > currentNode.value) {
            currentNode.right = this.delete(value, currentNode.right);
            return currentNode;
        } else {
            if (currentNode.left == null) return currentNode.right;
            else if (currentNode.right == null) return currentNode.left;

            currentNode.value = this.#minValue(currentNode.right);

            currentNode.right = this.delete(currentNode.value, currentNode.right); 
        }

        return currentNode;    
    } 

    find = (value, currentNode = this.root) => {
        if (currentNode === null || currentNode.value === value) return currentNode;

        if (value > currentNode.value) {
            return this.find(value, currentNode.right);
        } else {
            return this.find(value, currentNode.left);
        }
    }

    levelOrder = (callback) => {
        if (this.root === null) return [];
        const queue = [this.root];
        const results = [];

        while (queue.length !== 0) {
            let level = [];
            for (let i = 0; i < queue.length; i++) {
                const node = queue.shift();
                level.push(node.value);
                if (node.left !== null) queue.push(node.left);
                if (node.right !== null) queue.push(node.right);
                if (callback) callback(node);
            }
            results.push(level);
        }
        if (!callback) return results;
    }

    preorder = (callback, currentNode = this.root, nodeList = []) => {
        if (currentNode === null) return;

        callback ? callback(currentNode) : nodeList.push(currentNode.value);
        this.preorder(callback, currentNode.left, nodeList);
        this.preorder(callback, currentNode.right, nodeList);

        if (nodeList.length > 0) return nodeList;
    }

    inorder = (callback, currentNode = this.root, nodeList = []) => {
        if (currentNode === null) return;

        this.inorder(callback, currentNode.left, nodeList);
        callback ? callback(currentNode) : nodeList.push(currentNode.value);
        this.inorder(callback, currentNode.right, nodeList);

        if (nodeList.length >  0) return nodeList;
    }

    postorder = (callback, currentNode = this.root, nodeList = []) => {
        if (currentNode === null) return;

        this.postorder(callback, currentNode.left, nodeList);
        this.postorder(callback, currentNode.right, nodeList);
        callback ? callback(currentNode) : nodeList.push(currentNode.value);

        if (nodeList.length >  0) return nodeList;
    }

    height = (currentNode = this.root) => {
        if (currentNode === null) return -1;

        const leftHeight = this.height(currentNode.left);
        const rightHeight = this.height(currentNode.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    depth = (node, currentNode = this.root, level = 0) => {
        if (!node) return null;
        if (currentNode == null) return null;
        
        if (currentNode.value === node.value) return level;
        
        let edgeCount = this.depth(node, currentNode.left, level + 1);
        if (edgeCount !== 0) return edgeCount;
        
        return this.depth(node, currentNode.right, level + 1);
    }

    isBalanced = (currentNode = this.root) => {
        if (currentNode === null) return true;
        const heightDiff = Math.abs(this.height(currentNode.left) - this.height(currentNode.right));

        if (heightDiff <= 1 && this.isBalanced(currentNode.left) && this.isBalanced(currentNode.right)) return true;

        return false;
    }

    reBalance = () => {
        if (this.root === null) return;
        const sortedArray = [...new Set(this.inorder().sort((a, b) => a - b))];
        this.root = this.buildTree(sortedArray);
    }

    #minValue = (node) => {
        let min = node.value;
        while (node.left !== null) {
            min = node.left.value;
            node = node.left;
        }

        return min;
    }
      
}

module.exports = { Tree, Node }