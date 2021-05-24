const dealership=require('./dealership');
const { assert }=require('chai');


describe ('dealership', ()=> {
    it ('newCarCost', ()=> {
        assert.equal(dealership.newCarCost('Audi A4 B8',30000),15000);
    })
    it ('newCarCost2',()=>{
        assert.equal(dealership.newCarCost('Audi A6 4K',40000),20000);
    })
    it ('newCarCost3',()=>{
        assert.equal(dealership.newCarCost('Audi TT 8J',28000),14000);
    })
    it ('newCarCost4',()=>{
        assert.equal(dealership.newCarCost('Audi A8 D5',50000),25000);
    })
    it ('newCarCost5',()=>{
        assert.equal(dealership.newCarCost('BMW',30000),30000);
    })
    it ('carEquipment', ()=> {
        let extras=['extra1','extra2','extra3','extra4','extra5'];
        let indexes=[2,3];
        let result=dealership.carEquipment(extras,indexes);
        assert.deepEqual(result,['extra3','extra4']);
    })
    it ('carEquipment2', ()=> {
        let extras=['extra1','extra2','extra3','extra4','extra5'];
        let indexes2=[];
        let result2=dealership.carEquipment(extras,indexes2)
        assert.deepEqual(result2,[]);
    })
    it ('euroCategory', ()=> {
        assert.equal(dealership.euroCategory(4),`We have added 5% discount to the final price: ${15000-(15000*0.05)}.`);
    })
    it ('euroCategory', ()=> {
        assert.equal(dealership.euroCategory(6),`We have added 5% discount to the final price: ${15000-(15000*0.05)}.`);
    })
    it ('euroCategory', ()=> {
        assert.equal(dealership.euroCategory(3),'Your euro category is low, so there is no discount from the final price!');
    })
})