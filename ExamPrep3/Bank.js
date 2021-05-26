

class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        for (let i = 0; i < this.allCustomers.length; i++) {
            let currentCustomer = this.allCustomers[i];
            if (currentCustomer.firstName === customer.firstName && currentCustomer.lastName === customer.lastName && currentCustomer.personalId === customer.personalId) {
                throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
            }
        }
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        let isExist = false;
        for (let i = 0; i < this.allCustomers.length; i++) {
            let current = this.allCustomers[i];
            if (current.personalId === personalId) {
                isExist = true;
                if (current.hasOwnProperty('totalMoney')) {
                    current.totalMoney += amount;
                    current.transactions.unshift(`${current.no}. ${current.firstName} ${current.lastName} made deposit of ${amount}$!`);
                    current.no++;
                } else {
                    current.totalMoney = amount;
                    current.transactions = [];
                    current.no = 1;
                    current.transactions.unshift(`${current.no}. ${current.firstName} ${current.lastName} made deposit of ${amount}$!`);
                    current.no++;
                }
                return `${current.totalMoney}$`
            }
        }

        if (!isExist) {
            throw new Error('We have no customer with this ID!');
        }
    }

    withdrawMoney(personalId, amount) {
        let isExist = false;
        for (let i = 0; i < this.allCustomers.length; i++) {
            let current = this.allCustomers[i];
            if (current.personalId === personalId) {
                isExist = true;
                if (current.totalMoney < amount) {
                    throw new Error(`${current.firstName} ${current.lastName} does not have enough money to withdraw that amount!`);
                } else {
                    current.totalMoney -= amount;
                    current.transactions.unshift(`${current.no}. ${current.firstName} ${current.lastName} withdrew ${amount}$!`);
                    current.no++;
                }
                return `${current.totalMoney}$`
            }
        }

        if (!isExist) {
            throw new Error('We have no customer with this ID!');
        }
    }

    customerInfo(personalId) {
        let person = this.allCustomers.find((c) => {
            return c.personalId === personalId;
        });
        if (person === undefined) {
            throw new Error('We have no customer with this ID!');
        } else {
                let infoString = '';
                infoString += `Bank name: ${this._bankName}\n`;
                infoString += `Customer name: ${person.firstName} ${person.lastName}\n`;
                infoString += `Customer ID: ${person.personalId}\n`;
                infoString += `Total Money: ${person.totalMoney}$\n`;
                infoString += `Transactions:\n`;
               infoString+=person.transactions.join('\n');
                return infoString;
            }
        }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
let customer2 = bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 3333333 });
console.log(bank.depositMoney(3333333, 555));
