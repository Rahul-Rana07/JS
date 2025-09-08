let sum = (a,b) => a+b;
console.log(sum(4,3));


let dobule = n => n*2;
console.log(dobule(7));
 
let greet = () => console.log("hello friends");
greet();

let age = 916;
let welcome = (age < 18)     ?
 () => console.log("hello")  : 
 () => console.log("hi");

 welcome(age);

 let mul = (a, b) => {
    let res = a*b;
    return res;
 }

console.log( mul(4,6));

