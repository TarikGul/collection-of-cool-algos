class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
} 

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(val) {
        const newNode = new ListNode(val);

        if (this.head === null) {
            this.head = newNode;
        } else {

            let current = this.head;

            while (current.next !== null) {
                current = current.next
            };

            current.next = newNode;
        }
    }

    get(index) {
        if (index > -1) {
            let current = this.head;

            let i = 0;

            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;
            }

            return current !== null ? current.val : undefined;
        } else {
            return undefined;
        }
    }

    remove(index) {

        if((this.head === null) || (index < 0)) {
            throw new RangeError(`Index ${index} does not exist in the list`);
        };

        if (index === 0) {
            const { data } = this.head;

            this.head = this.head.next;

            return data;
        };

        let current = this.head;

        let previous = null;

        let i = 0;

        while ((current !== null) && (i < index)) {

            previous = current;

            current = current.next;

            i++;
        };

        if (current !== null) {
            previous.current = current.next;

            return current.val;
        };

        throw new RangeError(`Index ${index} does not exist in the list.`)
    }

    *values() {

        let current = this.head;

        while (current !== null) {
            yield current.val;
            current = current.next;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    } 
}

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

const list = new LinkedList();
list.add("red");
list.add("orange");
list.add("yellow");

// get the second item in the list
console.log(list.get(1));       // "orange"

// print out all items
for (const color of list) {
    console.log(color);
}

// remove the second item in the list    
console.log(list.remove(1));    // "orange"

// get the new first item in the list
console.log(list.get(1));       // "yellow"

// convert to an array
const array1 = [...list.values()];
const array2 = [...list];
console.log(array1, array2);