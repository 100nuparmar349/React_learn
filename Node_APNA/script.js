// Day 01 
let a=require('./math.js')

// require a built-in function t oinclude external modules that exist in separate files.

let index=require('./fruit/index.js');
console.log(index)
console.log(index[0].fruits);


console.log(a.sum(2,2))
console.log(a.mul(3,4))
console.log(process.argv);