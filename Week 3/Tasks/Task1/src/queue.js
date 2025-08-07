var Deque = require("collections/deque");

var queue = Deque([1, 2, 3, 4, 5, 6, 7]);


function reverse_queue(queue) {
    stack = [];
    
    while (queue.length > 0) {
        stack.push(queue.pop());
    }

    while (stack) {
        queue.add(stack.pop())
    }
}