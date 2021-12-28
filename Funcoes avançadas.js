var sumOld = function(a, b){
    return a + b;
};

// Arrow Functions
var sum = (a, b) => a + b;
var sum2 = (...a) => a;
var sum1 = a => a +5;
console.log(sum(5, 15));

//função construtora
class car {
    constructor() {
        this.foo = 'bar';
    }
}
console.log(new car());