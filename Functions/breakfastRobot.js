function solve() {
 
    function solution() {
        let recipes = {
            "apple":  new Map(),
            "lemonade": new Map(),
            "burger": new Map(),
            "eggs": new Map(),
            "turkey": new Map()
        };
        recipes.apple.set("carbohydrate", 1);
        recipes.apple.set("flavour", 2);
        recipes.lemonade.set("carbohydrate", 10);
        recipes.lemonade.set("flavour", 20);
        recipes.burger.set("carbohydrate", 5);
        recipes.burger.set("fat", 7);
        recipes.burger.set("flavour", 3);
        recipes.eggs.set("protein", 5);
        recipes.eggs.set("fat", 1);
        recipes.eggs.set("flavour", 1);
        recipes.turkey.set("protein", 10);
        recipes.turkey.set("carbohydrate", 10);
        recipes.turkey.set("fat", 10);
        recipes.turkey.set("flavour", 10);
 
        const atStock = {
            "protein": 0,
            "carbohydrate": 0,
            "fat": 0,
            "flavour": 0,
        };
 
        const cook = {
            "restock": (...args) => {
                let microElement = args.shift();
                let quantity = args.shift();
                atStock[microElement] += quantity;
                // console.log("Success");
                return "Success";
            },
            "prepare": (...args) => {
                let recipe = args.shift();
                recipe = recipes[recipe];
                let quantity = args.shift();
                for (let [key, value] of recipe) {
                    if (atStock[key] < value * quantity) {
                        // console.log(`Error: not enough ${key} in stock`);
                        // return;
                        return `Error: not enough ${key} in stock`;
                    }
                }
                for (let [key, value] of recipe) {
                    atStock[key] -= value * quantity;
                }
                // console.log("Success");
                return "Success";
            },
            "report": () => {
                let output = [];
                Object.entries(atStock).forEach( (el) => {
                    output.push(`${el[0]}=${el[1]}`);
                });
                // console.log(output);
                return output.join(" ");
            }
        };
 
        function processor(args) {
            let com = args.split(" ");
            return eval(`cook.${com.shift()}("${com[0]}", ${com[1]})`);
        }
        return processor;
    }
 
    let manager = solution();
    console.log(manager("restock flavour 50"));
    console.log(manager("prepare lemonade 4"));
    console.log(manager("report"));
 
}
 
solve();