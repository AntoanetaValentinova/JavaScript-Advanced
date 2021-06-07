const lookupChar=require('./charr');
const {expect}=require('chai');

describe ('char', ()=> {
    it ('function should return undefined with no string parameter', ()=>{
        expect(lookupChar(1,1)).to.equal(undefined);
    })
    it ('function should return undefined with no number parameter', ()=>{
        expect(lookupChar('test','1')).to.equal(undefined);
    })
    it('should return undefined on lookupChar', () => {
        expect(lookupChar("test", 1.23)).to.equal(undefined);
    })
    it ('function should return incorrect with index less than 0', ()=>{
        expect(lookupChar('test',-4)).to.equal("Incorrect index");
    })
    it ('function should return incorrect with index less than 0 2', ()=>{
        expect(lookupChar('test',-50)).to.equal("Incorrect index");
    })
    it ('function should return incorrect with index greater than string length 2', ()=>{
        expect(lookupChar('test',25)).to.equal("Incorrect index");
    })
    it ('function should return incorrect with index greater than string length 3', ()=>{
        expect(lookupChar('test',4)).to.equal("Incorrect index");
    })
    it ('function should return incorrect with index greater than string length', ()=>{
        expect(lookupChar('test',100)).to.equal('Incorrect index');
    })
    it ('function should return correnct index', ()=>{
        expect(lookupChar('test',1)).to.equal('e');
    })
    it ('function should return correnct index 2', ()=>{
        expect(lookupChar('test',3)).to.equal('t');
    })
})