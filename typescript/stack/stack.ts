interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}

class Stack<T> implements IStack<T> {
    private storage: T[] = [];

    constructor(private capacity: number = Infinity) {}

    push(item: T): void {
        if(this.size() === this.capacity) {
            throw Error("Stack is Full");
        }
        this.storage.push(item);
    }

    pop(): T | undefined {
      if(this.size() === 0){
        throw Error("Stack is Empty");
      }
      else{
        return this.storage.pop();
      }
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    size(): number {
        return this.storage.length;
    }
}

const S = new Stack<string>();
S.push("F");
S.push("C");
S.pop();
S.size();