class Vacationer {
    constructor (fullName,creditCard) {
        this.fullName = fullName;
        this.idNumber=this.generateIDNumber();
        this.creditCard=this.creditCardInfo(creditCard);
        this.wishList=[];
    }

    get fullName () {
        return this._fullName;
    }

    set fullName (input) {
        if (input.length!==3) {
            throw new Error('Name must include first name, middle name and last name');
        }
        let reg=/^[A-Z]{1}[a-z]+$/gm;
        for (let i = 0; i < input.length; i++) {
            if (!input[i].match(reg)) {
                throw new Error('Invalid full name');
            }
        }
        this._fullName={
            firstName: input[0],
            middleName: input[1],
            lastName: input[2]
         }
    }

    creditCardInfo(input) {
        if (input===undefined) {
            return {
                cardNumber: 1111,
                expirationDate: '',
                securityNumber: 111
            }
        } else {
            if (input.length!==3) {
                throw new Error('Missing credit card information');
            }
            if (typeof input[0]!=='number'||typeof input[2]!=='number') {
                throw new Error('Invalid credit card details');
            }
            return {
                cardNumber: input[0],
                expirationDate: input[1],
                securityNumber: input[2]
            }
        }
    }

    generateIDNumber() {
        let id=231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length;
        if (this.fullName.lastName.endsWith('a')||this.fullName.lastName.endsWith('e')||this.fullName.lastName.endsWith('o')||
        this.fullName.lastName.endsWith('i')||this.fullName.lastName.endsWith('u')) {
            id+='8';
        }else {
            id+='7';
        }
        return id;
    }

    addCreditCardInfo(input) {
        if (input.length!==3) {
            throw new Error('Missing credit card information');
        }
        if (typeof input[0]!=='Number'||typeof input[2]!=='Number') {
            throw new Error('Invalid credit card details');
        }
        this.creditCard={
            cardNumber: input[0],
            expirationDate: input[1],
            securityNumber: input[2]
        }
    }

    addDestinationToWishList(destination) {
        for (let i = 0; i < this.wishList.length; i++) {
            if (this.wishList[i]===destination) {
                throw new Error("Destination already exists in wishlist");
            }
        }
        this.wishList.push(destination);
        this.wishList.sort((a,b)=>a.length-b.length);
    }

    getVacationerInfo() {
        let output='';
        output+=`Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\n`
        output+=`ID number: ${this.idNumber}\n`;
        output+=`Wishlist:\n` 
        if (this.wishList.length===0) {
            output+='empty\n'
        } else {
           output+=`${this.wishList.join(', ')}\n`
  
        }
        output+= `Credit Card:\n`
        output+=  `Card Number: ${this.creditCard.cardNumber}\n`
        output+= `Expiration Date: ${this.creditCard.expirationDate}\n`
        output+= `Security Number: ${this.creditCard.securityNumber}`
        return output;
    }
}

let vacationer1 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], [123456789, "10/01/2018", 777]);

// // Initialize vacationers with 2 and 3 parameters
// let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
// let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
// [123456789, "10/01/2018", 777]);

// // //Should throw an error (Invalid full name)
// // try {
// //     let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
// // } catch (err) {
// //     console.log("Error: " + err.message);
// // }

// // //Should throw an error (Missing credit card information)
// // try {
// //     let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
// //     vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
// // } catch (err) {
// //     console.log("Error: " + err.message);
// // }

// vacationer1.addDestinationToWishList('Spain');
// vacationer1.addDestinationToWishList('Germany');
// vacationer1.addDestinationToWishList('Bali');

// // Return information about the vacationers
// console.log(vacationer1.getVacationerInfo());
// console.log(vacationer2.getVacationerInfo());

