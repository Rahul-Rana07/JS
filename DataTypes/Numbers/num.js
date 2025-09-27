// way to written the numnber 

//1 
let num1 = 1000000000 // 1 billion
console.log(num1);

//2
 let num2 = 1_000_000_000;
 console.log(num2);

 //3
 let  num3 = 1e9;
 console.log(num3);
 
 console.log(7.3e9);
 
 console.log(1e3 === 1000);

 console.log(7.3e9 === 7300000000);
 
 let num4 = 1e-3;
 
 let num5 = 0.001;

 console.log(num4 === num5);

 // hex binary oct  numbers in js

 // hex m -color 
 console.log(0xff);
 console.log(0xFF);
 
 // binary

 let a = 0b11111111 // 255
 console.log(a);

 console.log(0b1111);
 

 // octal

 let b = 0o377;
 console.log(b);
 
  //use a method toString(base)

  let num = 255;

  console.log(num.toString(2));
  console.log(num.toString(8));
  console.log(num.toString(16));
  console.log(num.toString(32));

  console.log(1234..toString(2)); // two dots 

  // Rounding 
//ceil  grater
console.log(Math.ceil(3.1));

console.log(Math.ceil(-1.1));

// floor smaller
console.log(Math.floor(3.1));

console.log(Math.floor(-1.1));

//round

console.log(Math.round(3.1));
console.log(Math.round(3.5));
console.log(Math.round(-1.1));

// truc remove all after decimal points

console.log(Math.trunc(3.1));
console.log(Math.trunc(3.5));
console.log(Math.trunc(-1.1));

// TWO Ways to gett a particular digit for ex 1.23435 -> 1.23

// 1. Mulotply and Divide
let c = 1.23456

console.log(Math.round((c*100))/100);

// fixed function. reeturn the string in answer

console.log(c.toFixed(2));
console.log(c.toFixed(4));

// IMPRICISE CALCULATION

console.log(1e500);

//loss percision
console.log(0.1 + 0.2 == 0.3);
console.log(0.1 +  0.2);

// fraction in bits stored inbn unednig forms use round to shoew this 

console.log(0.1.toString(2));

console.log(0.2.toString(2));


// TEST NaN AND INFINITY

console.log(isNaN(NaN));
console.log(isNaN("rana "));

console.log(NaN == NaN);

//finite

console.log(isFinite("7"));
console.log(isFinite("rana"));
console.log(isFinite(Infinity));

//strict vereison

console.log( Number.isNaN(NaN) ); 
console.log( Number.isNaN("str" / 2) ); 

console.log( Number.isNaN("str") ); 
console.log( isNaN("str") );

console.log( Number.isFinite(123) ); 
console.log( Number.isFinite(Infinity) ); 
console.log( Number.isFinite(2 / 0) ); 

console.log( Number.isFinite("123") ); 
console.log( isFinite("123") );

// PARSEINT AND PARSEFLOAT

console.log(parseInt("100px"));
console.log(parseFloat("12.5rem"));
console.log(parseInt("7a"));
console.log(parseInt("14.3px"));
console.log(parseFloat("ad67"));
console.log(parseFloat("12.2.3"));
console.log(parseInt("ff", 16));

// OTHER MATH FUNCTIONS

console.log(Math.random());
console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.max(2,-2 ,45,55));
console.log(Math.min(2,-2 ,45,55));
console.log(Math.pow(2,4));


