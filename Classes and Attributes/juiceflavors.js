function solve(arr) {
    let juices=[];
    let result=[];
    class Juice {
        constructor(name,quantity) {
            this.name=name;
            this.quantity=quantity;
        }
        createBottle () {
            let numberBottles=0;
            if (this.quantity>=1000) {
                numberBottles=Math.floor(this.quantity/1000);
                this.quantity-=numberBottles*1000;
            }
            if (numberBottles!==0) {
                let juice=result.find(e=>e.name===this.name);
                if (juice===undefined) {
                    let newJuice=new Bottle(this.name,numberBottles);
                    result.push(newJuice);
                } else {
                    juice.numberBottles+=numberBottles;
                }
            }
        }
    }

    class Bottle {
        constructor (name,numberBottles) {
            this.name=name;
            this._numberBottles=numberBottles;
        }

        get numberBottles () {
            return this._numberBottles;
        }

        set numberBottles(value) {
            this._numberBottles=value;
        }
    }
    arr.forEach(e=>{
        let tokens=e.split(' => ');
        let fruit=tokens[0];
        let quantity=Number(tokens[1]);
        let currentJuice=juices.find(e=>e.name===fruit);

        if (currentJuice===undefined) {
            let newJuice=new Juice(fruit,quantity);
            newJuice.createBottle();
            juices.push(newJuice);
        } else {
            currentJuice.quantity+=quantity;
           currentJuice.createBottle();
        }
    })
    let output='';
    result.forEach(e=>output+=`${e.name} => ${e.numberBottles}\n`)
    return output;
}

console.log(solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']));

console.log(solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']));