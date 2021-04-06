let numberOperations=require('./03. Number Operations_Resources');
let {assert}=require('chai');


describe ('numberOperations', ()=> {
    it ('powNumber', ()=>{
        let result=numberOperations.powNumber(2);
        assert.equal(result,4);
        result=numberOperations.powNumber(-2);
        assert.equal(result,4);
        result=numberOperations.powNumber(0);
        assert.equal(result,0);
    }) 
    it ('numberChecker eith not a number', ()=>{
       assert.throw(()=>numberOperations.numberChecker('test'),'The input is not a number!');
    }) 
    it ('numberChecker with number lower than 100', ()=>{
        let result=numberOperations.numberChecker('99');
        assert.equal(result,'The number is lower than 100!')
        result=numberOperations.numberChecker('0');
        assert.equal(result,'The number is lower than 100!')
        result=numberOperations.numberChecker(50);
        assert.equal(result,'The number is lower than 100!')
     }) 
     it ('numberChecker with number higher than 100', ()=>{
        let result=numberOperations.numberChecker('150');
        assert.equal(result,'The number is greater or equal to 100!')
        result=numberOperations.numberChecker('200');
        assert.equal(result,'The number is greater or equal to 100!')
        result=numberOperations.numberChecker(101);
        assert.equal(result,'The number is greater or equal to 100!')
        result=numberOperations.numberChecker('100');
        assert.equal(result,'The number is greater or equal to 100!')
     }) 
     it ('sumArrays', ()=>{
        let arr1=[1,2,3,4,5];
        let arr2=[1,2,3,4,5];
        let result=numberOperations.sumArrays(arr1,arr2);
        assert.deepEqual(result,[2,4,6,8,10]);
     }) 
     it ('sumArrays', ()=>{
        let arr1=[1,2,3,4,5,6];
        let arr2=[1,2,3,4,5];
        let result=numberOperations.sumArrays(arr1,arr2);
        assert.deepEqual(result,[2,4,6,8,10,6]);
     }) 
     it ('sumArrays', ()=>{
        let arr1=[1,2,3,4,5];
        let arr2=[1,2,3,4,5,8];
        let result=numberOperations.sumArrays(arr1,arr2);
        assert.deepEqual(result,[2,4,6,8,10,8]);
     }) 
     it ('sumArrays', ()=>{
        let arr1=[];
        let arr2=[1,2,3];
        let result=numberOperations.sumArrays(arr1,arr2);
        assert.deepEqual(result,[1,2,3]);
     }) 
})