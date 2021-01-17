var Queue = /** @class */ (function () {
    function Queue(capacity, front, rear) {
        if (capacity === void 0) { capacity = Infinity; }
        if (front === void 0) { front = -1; }
        if (rear === void 0) { rear = -1; }
        this.capacity = capacity;
        this.front = front;
        this.rear = rear;
        this.storage = [];
    }
    Queue.prototype.enqueue = function (item) {
        if (this.rear === this.capacity) {
            throw Error("Queue is Full");
        }
        this.storage.push(item);
        this.rear++;
    };
    Queue.prototype.dequeue = function () {
        if (this.size() === 0) {
            throw Error("Queue is Empty");
        }
        else {
            this.front++;
        }
    };
    Queue.prototype.size = function () {
        return this.rear - this.front;
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue("D");
queue.enqueue("F");
queue.dequeue();
queue.size();
