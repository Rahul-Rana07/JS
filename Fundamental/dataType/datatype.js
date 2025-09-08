// 1. NUmber -> integer floating point
let n = 12;
n = 12.345

// special; numeric infinity NAN
console.log(n);
console.log(1/0);
console.log("hello" /7);


//2. bigint
let big = 1234567890123456789012345678901234567890n ;
console.log(big);

//3. String

 let str = "hello";
 let str2 = 'hello from single quote';
 let phrase = `${str} from backstick`;

 console.log(str);
 console.log(str2);
 console.log(phrase);
 
 let name = "rana";

 console.log(`hello ${name}`);
 console.log(`result: ${1+2}`);
 
 
 //4. boolean 

 let isGreater = 4 >1;
 console.log(isGreater);
 
 //5. null

 let age = null;
 console.log(age);

 //6. undefined dont use this assign the nukl value to variable
 let x;
 console.log(x);
 

 //7. symbol -> The symbol type is used to create unique identifiers for objects.

 let id =Symbol("id");
 console.log(id);
 

 let person = { name: "Rana" };
let id1 = Symbol("id");
let id2 = Symbol("id");

person[id1] = 123;
person[id2] = 456;

console.log(person); 

//example 2

const user = {
    name: "Rahul",
    age: 20
}
 
const id3 = Symbol("id");
user[id] =12345;
console.log(user);
console.log(user[id]);

//same sybol using for
const sym1 = Symbol.for("id");
const sym2 = Symbol.for("id");
console.log(sym1 == sym2);



// type of operator or type of function
let str3 = "Hello";        // String
let num = 42;             // Number
let big1 = 900719925n;     // BigInt
let flag = true;          // Boolean
let nothing = null;       // Null
let notAssigned;          // Undefined
let sym = Symbol("id");   // Symbol
let obj = { a: 1 };       // Object
let arr = [1, 2, 3];      // Array
let greet = () => "Hi"; 


console.log(str3 + ":"      + typeof str3);
console.log(num  + ":"        + typeof num);
console.log(big1  + ":"       + typeof big1);
console.log(flag  + ":"       + typeof flag);
console.log(nothing + ":"     + typeof nothing);
console.log(notAssigned+ ":"  + typeof notAssigned);
console.log(typeof sym);
console.log(obj     + ":"     + typeof obj);
console.log(arr     + ":"     + typeof arr);
console.log(greet    + ":"    + typeof greet);

// non-premitive data types

//object and array 

let obj1 ={
    name: "Rahul Rana",
    age : 20
}

 
 let user1 = {
    name: "rana",
    age: 25,
    isAdmin :true
 }
 console.log(user1);
 
// example 2 new kyword
let obj2 = new Object();
obj2.key= "value";
obj2.age= 20;

console.log(obj2);

// example 3 fxn
function user3 (name, age){
    this.name=name;
    this.age=age;
    console.log(name);
    console.log(age);
    return "all good"
    
}

console.log( user3("Sharad" ,21));

//exampole 4. fxnm in obj

let user4 = {
    name:"Rahul",
    greetUser : function(){
        console.log(`hello ${this.name}`);
    }
    }

    console.log(user4);
    user4.greetUser()
    
 //array

let fruits = ["apple", "banana", "mango"];

// console.log(obj1);
// console.log(fruits);

