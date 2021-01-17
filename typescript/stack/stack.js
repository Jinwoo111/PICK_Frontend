var Stack = /** @class */ (function () {
    function Stack(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    Stack.prototype.push = function (item) {
        if (this.size() === this.capacity) {
            throw Error("Stack is Full");
        }
        this.storage.push(item);
    };
    Stack.prototype.pop = function () {
        if (this.size() === 0) {
            throw Error("Stack is Empty");
        }
        else {
            return this.storage.pop();
        }
    };
    Stack.prototype.peek = function () {
        return this.storage[this.size() - 1];
    };
    Stack.prototype.size = function () {
        return this.storage.length;
    };
    return Stack;
}());
var S = new Stack();
S.push("F");
S.push("C");
S.pop();
S.size();
