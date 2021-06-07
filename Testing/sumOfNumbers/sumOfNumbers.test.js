const sum =require('./sumOfNumbers');
const {expect}=require('chai');


describe ('Sum function', ()=> {
    it ('sums single number',()=> {
        expect(sum([1])).to.equal(1);
    })
    it ('sums multiple number',()=> {
        expect(sum([1,1])).to.equal(2);
    })
    it ('sums different numbers',()=> {
        expect(sum([1,2])).to.equal(3);
    })
})