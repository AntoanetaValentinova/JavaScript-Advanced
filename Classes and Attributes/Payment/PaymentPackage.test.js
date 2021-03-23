let PaymentPackage=require('./PaymentPackage');
const {expect}=require('chai');
const {assert}=require('chai');

describe ('Payment', ()=> {
    it ('constructor',()=>{
        let payment=new PaymentPackage('test',10);
        expect(payment.name).to.equal('test');
        expect(payment.value).to.equal(10);
        expect(payment.VAT).to.equal(20);
        expect(payment.active).to.equal(true);
    })
    it ('name', ()=> {
        let payment=new PaymentPackage('test',10);
        assert.equal(payment.name,'test');
        assert.throw(()=>{payment.name=2},'Name must be a non-empty string');
        assert.throw(()=>{payment.name=undefined},'Name must be a non-empty string');
        assert.throw(()=>{payment.name=''},'Name must be a non-empty string');
        payment.name='changed';
        assert.equal(payment.name,'changed');

    })
    it ('name', ()=> {
        let payment=new PaymentPackage('test',10);
        assert.equal(payment.value,10);
        assert.throw(()=>{payment.value='2'},'Value must be a non-negative number');
        assert.throw(()=>{payment.value=undefined},'Value must be a non-negative number');
        assert.throw(()=>{payment.value=-2},'Value must be a non-negative number');
        payment.value=20;
        assert.equal(payment.value,20);
        payment.value=0;
        assert.equal(payment.value,0);
    })
    it ('VAT', ()=> {
        let payment=new PaymentPackage('test',10);
        assert.equal(payment.VAT,20);
        assert.throw(()=>{payment.VAT='2'},'VAT must be a non-negative number');
        assert.throw(()=>{payment.VAT=undefined},'VAT must be a non-negative number');
        assert.throw(()=>{payment.VAT=-2},'VAT must be a non-negative number');
        payment.VAT=30;
        assert.equal(payment.VAT,30);
        payment.VAT=0;
        assert.equal(payment.VAT,0);
    })
    it ('active', ()=> {
        let payment=new PaymentPackage('test',10);
        assert.equal(payment.active,true);
        assert.throw(()=>{payment.active='2'},'Active status must be a boolean');
        assert.throw(()=>{payment.active=undefined},'Active status must be a boolean');
        assert.throw(()=>{payment.active=-2},'Active status must be a boolean');
        payment.active=false;
        assert.equal(payment.active,false);
    })
    it ('toString',()=>{
        
        let payment=new PaymentPackage('test',10);
        let output=`Package: test\n- Value (excl. VAT): 10\n- Value (VAT 20%): ${10 * (1 + 20 / 100)}`;
        assert.equal(payment.toString(),output);
        payment.active=false;
        output=`Package: test (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 20%): ${10 * (1 + 20 / 100)}`;
        assert.equal(payment.toString(),output)
    })
   
})