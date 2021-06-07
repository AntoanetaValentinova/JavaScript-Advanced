const isOddOrEven=require('./evenOrOdd.js');
const {expect}=require('chai');

describe ('isEvenOrOdd', () => {
    it ('test with non string parameter', ()=> {
        expect(isOddOrEven(1)).to.be.undefined;
    }) 
    it ('test with odd length', ()=> {
        expect(isOddOrEven('let')).to.equal('odd');
    }) 
    it ('test with even length', ()=> {
        expect(isOddOrEven('me')).to.equal('even');
    }) 
})