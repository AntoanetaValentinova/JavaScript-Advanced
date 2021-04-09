const pizzUni=require('./pizzUni');
const {assert}=require('chai');


describe ('pizzUni', function () {
    it ('makeAnOrder',function () {
        let pizza={orderedPizza: 'pizza', 
        orderedDrink: 'drink'
        };
        assert.equal(pizzUni.makeAnOrder(pizza), `You just ordered ${pizza.orderedPizza} and ${pizza.orderedDrink}.`);
    }) 
    // it ('make order to throw Error',function () {
    //     let obj={
    //         orderedDrink: 'Sambuca'
    //     }
    //     assert.throw(function(){pizzUni.makeAnOrder(obj)},'You must order at least 1 Pizza to finish the order.');
    // }) 
    // it ('make order order only pizza',function () {
    //     let obj={
    //         orderedPizza:'Margarita',
    //     }
    //     let result=pizzUni.makeAnOrder(obj);
    //     assert.equal(result,`You just ordered ${obj.orderedPizza}`);
    // }) 

    // it ('getRemainingWork all ready', function (){
    //     let arr =[{pizzaName:'Margarita',status:'ready'},{pizzaName:'Test',status:'ready'},{pizzaName:'Dominos',status:'ready'}];
    //     let result=pizzUni.getRemainingWork(arr);
    //     assert.equal(result,'All orders are complete!');
    // })
    // it ('get pizzas left', function (){
    //     let arr =[{pizzaName:'Margarita',status:'ready'},{pizzaName:'Test',status:'preparing'},{pizzaName:'Dominos',status:'ready'}];
    //     let result=pizzUni.getRemainingWork(arr);
    //     assert.equal(result,'The following pizzas are still preparing: Test.');
    //     let statusArr =[{pizzaName:'Margarita',status:'preparing'},{pizzaName:'Test',status:'preparing'},{pizzaName:'Dominos',status:'preparing'}];
    //     let pizzasLeft=pizzUni.getRemainingWork(statusArr);
    //     assert.equal(pizzasLeft,`The following pizzas are still preparing: Margarita, Test, Dominos.`);
    // })
    // it ('orderType carryOut', function (){
    //     let result=pizzUni.orderType(10,'Carry Out');
    //     assert.equal(result,9);
    // })
    // it ('orderType delivery', function (){
    //     let result=pizzUni.orderType(10,'Delivery');
    //     assert.equal(result,10);
    // })
})