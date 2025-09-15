// unique identifier with any des for debugging 

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); //false

// symbol cannot auto cionvert to string in alert but converted in log

console.log(id1);
// console.log(id1.toString); foer the alert 
console.log(id1.description);


//******** HIDDEN PROPERTIES***** */

// using symbol it cant be overwrite andbn safe acceidently canot be chnaged understand or more clear with exaspmle

let user = {
    name : "Rahul"
};

let id = Symbol("id");
user[id] = 1;

console.log(user[id]+" : "+user["name"]);

let id3 = Symbol("id");

user[id3] = "Their id value";

console.log(user[id3]);


// written in square brackets in object stymbol

let id4 = Symbol("id");

let user2 = {
    name : "Rohan",
    [id4] : 123
}

// for in loop skips the symbol

let id5 = Symbol("id");

let user3 = {
    name : "Sharad",
    age : 21,
    [id5] : 23,
}

for(let key in user3) {
    console.log(key+ " : "+user3[key]);
}

console.log("direct : " + user3[id5]);

//******* GLOBAL SYMBOL *******/

//sometimes we need to share the same property of symbiol in coide then we user global symbols

let id6 = Symbol.for("id");
let id7 = Symbol.for("id");

console.log(id6 === id7);

//get name by smbol

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));

let id8 = Symbol.for("name"); // global
let id9 = Symbol("name")    // local

console.log( Symbol.keyFor(id8) ); // name, global symbol
console.log( Symbol.keyFor(id9) ); // undefined, not global

console.log( id8.description );

console.log(user3);
