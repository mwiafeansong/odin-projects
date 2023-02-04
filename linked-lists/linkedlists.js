function Node(value = null) {
    nextNode = null;
    
    return { value, nextNode }
}


function LinkedList() {
    let head = null;
    let length = 0;

    const append = (value) => {
        const newNode = Node(value);
        length++;

        if (head === null) {
            head = newNode;
            return;
        };
        
        let pointerNode = head;
        while (pointerNode.nextNode !== null) {
            pointerNode = pointerNode.nextNode;
        }

        pointerNode.nextNode = newNode;
    }

    const prepend = (value) => {
        const newNode = Node(value);
        length++;

        if (head === null) return head = newNode;

        newNode.nextNode = head;
        head = newNode;
    }

    const size = () => {
        return length;
    }

    const listHead = () => {
        return head;
    }

    const listTail = () => {
        if (!head) return null;
        
        let pointerNode = head;
        while (pointerNode.nextNode !== null) {
            pointerNode = pointerNode.nextNode;
        }

        return pointerNode;
    }

    const at = (index) => {
        if (index >= length || index < 0) return null;
        
        let pointerNode = head;
        for (let i = 0; i < index; i++) {
            pointerNode = pointerNode.nextNode;
        }

        return pointerNode;
    }

    const pop = () => {
        if (head === null) return null;

        if (length === 1) {
            head = null;
            return;
        }

        let currentNode = head;
        let previousNode
        while (currentNode.nextNode !== null) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        currentNode = null;
        previousNode.nextNode = null;
        length--   
    }

    const contains = (value) => {
        if (head === null) return false;

        let pointerNode = head;
        while (pointerNode.nextNode !== null) {
            if (pointerNode.value === value) return true;
            pointerNode = pointerNode.nextNode;
        }

        return pointerNode.value === value ? true : false; 
    }

    const find = (value) => {
        if (head === null) return null;
        if (head.nextNode === null) {
            return head.value === value ? 0 : null;
        }

        let pointerNode = head;
        for (let i = 0; pointerNode.nextNode !== null; i++) {
            if (pointerNode.value === value) return i;
            pointerNode = pointerNode.nextNode;
        }

        return pointerNode.value === value ? i : null;
    }

    const printList = () => {
        if (head === null) return 'null';
        if (head.nextNode === null) return head.value.toString();

        let str = '';
        let pointerNode = head;
        while (pointerNode.nextNode !== null) {
            str += pointerNode.value.toString() + ' -> ';
            pointerNode = pointerNode.nextNode;
        }

        return str += pointerNode.value.toString();
    }

    const insertAt = (value, index) => {
        if (index < 0 || index > length) return;
        if (!head || index === length || index === 0) {
            this.append(value);
            return;
        }

        const newNode = Node(value);
        let previousNode;
        let currentNode = head;

        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        } 
        
        newNode.nextNode = currentNode;
        previousNode.nextNode = newNode;

        length++;
    }

    const removeAt = (index) => {
        if (index < 0 || index >= length) return;
        
        let previousNode;
        let currentNode = head;

        if (index === 0) {
            head = currentNode.nextNode;
            length--
            return;
        }

        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        previousNode.nextNode = currentNode.nextNode;
        currentNode = null;

        length--;
    }
    
    return { append, prepend, size, listHead, listTail, at, pop, contains, find, printList, length, insertAt, removeAt }
}


// const list = LinkedList();

// list.append(3);
// list.append(2);
// list.append(1);
// list.append(4);
// list.append(5);

//console.log(list.printList());
//console.log(list.size());
//console.log(list.listHead());
//console.log(list.listTail());
//console.log(list.at(1));
//console.log(list.at(5));
//console.log(list.contains(4));
//console.log(list.contains(8));
//list.pop();
//console.log(list.printList());
//console.log(list.size())

//list.insertAt(150, 1);
//list.removeAt(0);
//console.log(list.printList());
//console.log(list.size())

