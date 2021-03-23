class List {
    constructor() {
        this.list = [];
    }
    add(elemenent) {
        this.list.push(elemenent);
        this.list.sort((a, b) => a - b);
    }
    remove(index) {
        if (index >= 0 && index < this.list.length) {
            this.list=this.list.filter((e, i) => i !== index).sort((a, b) => a - b);
        }
    }

    get(index) {
        if (index >= 0 && index < this.list.length) {
            let element = this.list.find((e, i) => i === index);
            return element;
        }
    }
    size() {
        return this.list.length;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));