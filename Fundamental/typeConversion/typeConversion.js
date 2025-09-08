// 1. STRING CONVERSION
let value = true;
console.log(value + ": "+typeof value);

value = String(value);
console.log( value+ ": "+typeof value);

// example 2 
let num = 123;
console.log(num + ": "+typeof num);

num = String(num);
console.log(num + ": "+typeof num);

// 2. To NUMERIC CONVERSION

// automaTICALLY CONVER INTO NUMBER IF PERFORM AN ARITHEMTIC OPERATION ON STRING IN WHIUCH STRING IS A BNUMBER
 console.log("6"/"3");

 // string to number if in a string is number
 let str ="123";
 console.log(str + ": "+ typeof str);

 str = Number(str);
 console.log(str + ": "+typeof str);
 
 // string to number if string has text => NAN
 let str1 = "Rana";
 console.log(str1+ ": "+typeof str1);

 str1 = Number(str1);
 console.log(str1+ ": "+typeof str1);
  
 //undeifend -> NaN
let age;
console.log( age);

age = Number(age);
console.log( age);
 
//n null -> 0
let a = null;
console.log(a);

a= Number(a);
console.log(a);

// true ->1 and fales = 0
let b1 = true;
let b2 = false;
console.log(b1 +" "+ b2);

b1 = Number(b1);
b2 = Number(b2);
console.log(b1 +"     "+ b2);

 
// 3. BOOLEAN CONVERSION
// false
let c1 = 0;
let c2 = null;
let c3= NaN;
let c4 = undefined;
console.log(c1+"      "+c2+"  "+c3+"  "+ c4);


 c1 = Boolean(c1);
 c2 = Boolean(c2);
 c3 = Boolean(c3);
 c4 = Boolean(c4);
 console.log(c1+" "+c2+" "+c3+" "+ c4);

 //true
let c5 = "0";
let c6 = " ";
let c7= 1;
let c8 = "rana";
console.log(c5+"      "+c6+"     "+c7+"    "+ c8);

 c5 = Boolean(c5);
 c6 = Boolean(c6);
 c7 = Boolean(c7);
 c8 = Boolean(c8);
 console.log(c5+"  "+c6+"  "+c7+"  "+ c8);