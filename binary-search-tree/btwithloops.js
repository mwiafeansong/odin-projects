class MyNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class myTree {
    constructor(array) {
        //array with no duplicates, sorted in ascending order
        this.sortedArray = [... new Set(array)].sort((a, b) => a - b);
        this.root = this.buildTree(this.sortedArray);
    }
    
    buildTree = (sortedArray) => {
        if (sortedArray.length === 0) return null;

        let mid = Math.floor(sortedArray.length / 2);
        const newNode = new MyNode(sortedArray[mid]);
        newNode.left = this.buildTree(sortedArray.slice(0, mid));
        newNode.right = this.buildTree(sortedArray.slice(mid + 1));
        
        return newNode;
    } 

    insert = (value) => {
        let newNode = new MyNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let prevNode;
        let currentNode = this.root;

        while(currentNode !== null) {
            if (value > currentNode) {
                prevNode = currentNode;
                currentNode = currentNode.right;
            } else if (value < currentNode) {
                prevNode = currentNode;
                currentNode = currentNode.left;
            }    
        }

        if (value > prevNode.value) prevNode.right = newNode;
        else prevNode.left = newNode;    
    }    
}