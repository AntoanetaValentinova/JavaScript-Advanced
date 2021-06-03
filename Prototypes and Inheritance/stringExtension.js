(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return `${str}${this}`;
        } else {
            return `${this}`;
        }
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return `${this}${str}`;
        } else {
            return `${this}`;
        }
    }
    String.prototype.isEmpty = function () {
        if (this.trim().length === 0) {
            return true;
        }
        return false;
    }
    String.prototype.truncate = function (n) {
        let string = '';
        if (this.length <= n) {
            string = `${this}`;
        } else if (n < 4) {
            for (let i = 0; i < n; i++) {
                string += '.';
            }
        } else if (this.length > n) {
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if (lastIndex != -1) {
                string = this.toString().substr(0, lastIndex) + "...";
            } else {
                string = this.toString().substr(0, n - 3) + "...";
            }
        }
        return string;
    }
    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            let startIndex = string.indexOf('{');
            let number = Number(string[startIndex + 1]);
            let endIndex = startIndex + 2;
            if (number < params.length) {
                string = string.substring(0, startIndex) + params[number] + string.substring(endIndex + 1, string.length);
            }    
        }
        return string;
    }
}())
let str = 'my string';
str = str.ensureStart('my');
console.log(str)
str = str.ensureStart('hello ');
console.log(str)
str = str.truncate(16);
console.log(str)
str = str.truncate(14);
console.log(str)
str = str.truncate(8);
console.log(str)
str = str.truncate(4);
console.log(str)
str = str.truncate(2);
console.log(str)
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str)
str = String.format('jumps {0} {1}',
    'dog');
console.log(str)

var testString = 'the quick brown fox jumps over the lazy';
var answer = testString.truncate(10);
console.log(answer)