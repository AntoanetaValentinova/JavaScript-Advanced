(function solve () {
    Array.prototype.last=function () {
        return this[this.length-1];
    }
    Array.prototype.skip=function(n) {
        let newArr=this.slice(n,this.length);
        return newArr;
    }
    Array.prototype.take=function(n) {
        let newArr=this.slice(0,n);
        return newArr;
    }
    Array.prototype.sum=function() {
        let sum=this.reduce((a,c)=>a+c,0);
        return sum;
    }
    Array.prototype.average=function() {
        let average=this.reduce((a,c)=>a+c,0);
        return average/this.length;
    }
}())

