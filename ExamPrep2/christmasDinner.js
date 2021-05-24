class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }

    shopping(product) {
        let productName = product[0];
        let price = product[1];
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(productName);
        this.budget -= price;
        return `You have successfully bought ${productName}!`
    }

    recipes(recipe) {
        let currentRecipe = recipe.recipeName;
        let productsList = recipe.productsList;
        let isExist = true;
        for (let i = 0; i < productsList.length; i++) {
            if (!this.products.includes(productsList[i])) {
                isExist = false;
            }
        }
        if (isExist) {
            this.dishes.push(recipe);
            return `${currentRecipe} has been successfully cooked!`
        } else {
            throw new Error("We do not have this product");
        }
    }

    inviteGuests(name, dish) {
        let currentDish=this.dishes.find(d=>d.recipeName===dish);
        if (currentDish===undefined) {
            throw new Error("We do not have this dish");
        }

        let guestsKeys=Object.keys(this.guests);
        if (guestsKeys.includes(name)) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name]=dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let output='';
        let entries=Object.entries(this.guests);
        entries.forEach(element => {
            const name=element[0];
            const dishName=element[1];
            let dishProducts=this.dishes.find(d=>d.recipeName===dishName).productsList;
            output+=`${name} will eat ${dishName}, which consists of ${dishProducts.join(', ')}\n`;
        });
        return output.trim();
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
