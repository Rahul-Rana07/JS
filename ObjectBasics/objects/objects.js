// key value pair key is striung and value can be anything 


// EMPTY OBJECT
 let obj = {};  // object literal

 let obj1 = new Object();

 // object  -> trailing comma to separate

 let user ={
    name : "Rahul",
    age : 20,
    isAdmin  : false,

 };

 console.log(user);
 console.log(user.name);
 console.log(user.age);

 // add value in object
user.isAdmin  = true;

console.log(user);

// delete in obvject

delete user.isAdmin;
console.log(user);

// multiword key in objects

let user1 = {
    name : "Rana",
    age : "21",
    "like birds" : true,
};

console.log(user1);

// SQUARE BRACECTS

let user2 = {}

user2["like animals"] = true; //set
user2["like flowers"] = false;

console.log(user2);

console.log(user2["like animals"]); // get

delete user2["like flowers"];
console.log(user2);


// using variable set a value

let key = "like icecreams";
user2[key] = true;

console.log(user2);

console.log(user2.key); //undefined
console.log(user2[key]);

// acess using variable names keys 
let fruit = "apple";
let fruit2 = "grapes";

let bag = {
    [fruit] : "this is a apple",
    [fruit2] : "there is bunch of grapes",
}

console.log(bag);
console.log(bag.apple);
console.log(bag.fruit2); //undefined
console.log(bag.grapes);



// SHORTHAND

function user3 (name , age) {
    return{
        name,
        age
    };
}

console.log(user3("Ronnie", 27));

// no name limitatiuons

let cal = {
    for : 1,
    let : 2,
    return : 4
}

console.log(cal.for + cal.let + cal.return);


// automatically convert into string keys

let user4 = {
    0 : "Sabi"
}

console.log(user4["0"]);
console.log(user4[0]) // same answer fior boith string and interger ;

//****** proto special keyword */

let obj2 = {};

obj2.__proto__ = 5;
console.log(obj2.__proto__);

obj2.__proto__ = { cusotm : "kya haal hia janeman"}


console.log(obj2.__proto__);

//***** In operator */

let obj3 = {}
console.log(user.exsit === undefined);

// fails in some conition use in operator

let user5 = {
    name : "Sharad",
    age:  21,
    test : undefined
} 

console.log("name" in user5);
console.log("age2" in user5);
console.log("age" in user5);
console.log("test" in user5);

//for in loop  to over come use +
// nont integer orderted
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1": "USA"
};

for (let code in codes) {
    console.log(code);
    console.log(codes[code]);
}


//non integer as per  list \

let user6= {
  name: "Ronnie",
  surname: "Thakur"
};
user6.age = 27; 


for (let prop in user6) {
    console.log(prop);
    console.log(user6[prop]);   
}