class Parking {
    constructor (capacity) {
        this.capacity=capacity;
        this.vehicles=[];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length<this.capacity) {
            let newCar={
                model:carModel,
                number:carNumber,
                payed: false
            }
            this.vehicles.push(newCar);
            return `The ${carModel}, with a registration number ${carNumber}, parked.`
        } else {
            throw new Error("Not enough parking space.")
        }
    }

    removeCar(carNumber) {
        for (let i = 0; i < this.vehicles.length; i++) {
            let currentCar=this.vehicles[i];
            if (currentCar.number===carNumber) {
                if (currentCar.payed===false) {
                    throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
                } else {
                    this.vehicles.splice(i,1);
                    return `${carNumber} left the parking lot.`
                }
            }
        }
        throw new Error('The car, you\'re looking for, is not found.');
    }

    pay(carNumber) {
        for (let i = 0; i < this.vehicles.length; i++) {
            let currentCar=this.vehicles[i];
            if (currentCar.number===carNumber) {
                if (currentCar.payed===false) {
                    currentCar.payed=true;
                    return `${carNumber}'s driver successfully payed for his stay.`
                } else {
                    throw new Error(`${carNumber}'s driver has already payed his ticket.`)
                }
            }
        }
        throw new Error(`${carNumber} is not in the parking lot.`);
    }
    
    getStatistics(carNumber) {
        if (carNumber!==undefined) {
            for (let i = 0; i < this.vehicles.length; i++) {
                let currentCar=this.vehicles[i];
                if (currentCar.number===carNumber) {
                    return `${currentCar.model} == ${currentCar.number} - ${currentCar.payed===true? 'Has payed' : 'Not payed'}`;
                }
            }
        } else {
            let output=`The Parking Lot has ${this.capacity-this.vehicles.length} empty spots left.\n`;
            this.vehicles.sort((a,b)=>a.model.localeCompare(b.model))
            .forEach(c=>output+=`${c.model} == ${c.number} - ${c.payed===true? 'Has payed' : 'Not payed'}\n`);
            return output.trim();
        }
    }
}

const parking = new Parking(5);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("BMW", "TX3691CA"));
console.log(parking.addCar("AUDI", "TX3691CA"));
console.log(parking.addCar("Nissan", "TX3691CA"));
console.log(parking.addCar("Mitsubishi", "TX3691CA"));

console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
