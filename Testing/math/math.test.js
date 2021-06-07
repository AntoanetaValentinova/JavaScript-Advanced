const mathEnforcer=require('./math');
const {expect}=require('chai');
const { subtractTen } = require('./math');
const sum = require('../sumOfNumbers/sumOfNumbers');

describe ('mathEnforcer',()=> {
    it ('addFive shold return undefinet with not a number', ()=>{
        expect(mathEnforcer.addFive('try')).to.equal(undefined);
    })
    it ('addFive shold return correct value with integer number', ()=>{
        expect(mathEnforcer.addFive(1)).to.equal(6);
    })
    it ('addFive shold return correct value with negative integer number', ()=>{
        expect(mathEnforcer.addFive(-1)).to.equal(4);
    })
    it ('addFive shold return correct value with  floating point number', ()=>{
        expect(mathEnforcer.addFive(1.23)).to.equal(6.23);
    })
    it ('addFive shold return correct value with negative floating point number', ()=>{
        expect(mathEnforcer.addFive(-1.5)).to.equal(3.5);
    })
    it ('substract shold return undefine with not a number', ()=>{
        expect(mathEnforcer.subtractTen('try')).to.equal(undefined);
    })
    it ('substract shold return correct value with integer number', ()=>{
        expect(mathEnforcer.subtractTen(12)).to.equal(2);
    })
    it ('substract shold return correct value with negative number', ()=>{
        expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
    })
    it ('substract shold return correct value with floating point number', ()=>{
        expect(mathEnforcer.subtractTen(20.50)).to.equal(10.50);
    })
    it ('sumNums shold return undefine with not a number', ()=>{
        expect(mathEnforcer.sum('try','try')).to.equal(undefined);
    })
    it ('sumNums shold return undefine with not a number 1', ()=>{
        expect(mathEnforcer.sum('try',1)).to.equal(undefined);
    })
    it ('sumNums shold return undefine with not a number 2', ()=>{
        expect(mathEnforcer.sum(1,'try')).to.equal(undefined);
    })
    it ('sumNums shold return correct value with integer numbers', ()=>{
        expect(mathEnforcer.sum(1,2)).to.equal(3);
    })
    it ('sumNums shold return correct value with negative numbers', ()=>{
        expect(mathEnforcer.sum(-1,-2)).to.equal(-3);
    })
    it ('sumNums shold return correct value with one negative number', ()=>{
        expect(mathEnforcer.sum(-1,2)).to.equal(1);
    })
    it ('sumNums shold return correct value with floating points numbers', ()=>{
        expect(mathEnforcer.sum(1.5,1.5)).to.equal(3);
    })
    it ('sumNums shold return correct value with floating points number', ()=>{
        expect(mathEnforcer.sum(1.5,1)).to.equal(2.5);
    })
})