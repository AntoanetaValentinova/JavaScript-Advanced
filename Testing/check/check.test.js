const { expect }=require('chai');
const isSymmetric = require('./check');

describe ('check',()=> {
    it ('check if return false with invalid input', ()=> {
        expect(isSymmetric(1)).to.be.false;
    })
    it ('check  return true if array is simetric', ()=> {
        expect(isSymmetric([1,1])).to.be.true;
    })
    it ('check  return true if array is simetric with strings', ()=> {
        expect(isSymmetric(['a','a'])).to.be.true;
    })
    it ('check  return false if array is not simetric', ()=> {
        expect(isSymmetric(['a','b'])).to.be.false;
    })
    it ('check  return false if array is not simetric with numbers', ()=> {
        expect(isSymmetric([1,2])).to.be.false;
    })
    it ('check  return true if array is  simetric with odd array length', ()=> {
        expect(isSymmetric([1,2,1])).to.be.true;
    })
    it ('check  return true if array is  simetric with different types', ()=> {
        expect(isSymmetric([1,'1'])).to.be.false;
    })
})