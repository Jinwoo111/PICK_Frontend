interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): void;
    size(): number;
}

class Queue<T> implements IQueue<T> {
    private storage: T[] = [];

    constructor(private capacity: number = Infinity, private front : number = -1, private rear : number = -1) {}

    enqueue(item: T): void {
        if(this.rear===this.capacity){
            throw Error("Queue is Full");
        }
        this.storage.push(item);
        this.rear++;
    }

    dequeue(): void {
        if(this.size() === 0){
            throw Error("Queue is Empty");
        }
        else{
            this.front++;
        }
    }
    size(): number {
        return this.rear - this.front;
    }
}

const queue = new Queue();

queue.enqueue("D");
queue.enqueue("F");
queue.dequeue();
queue.size();