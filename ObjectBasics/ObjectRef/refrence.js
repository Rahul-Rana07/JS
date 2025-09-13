let user = {
    naam : "rana"
}

console.log(user);

let malik = user;

console.log(malik);

malik.naam = "Rahul";
// copy cvhnage one effct other reference not value same moemry 
console.log(user.naam);
console.log(malik.naam);



// comparison the object

let a = {};
let b = a;

console.log(a == b);
console.log(a === b);

let c = {};
console.log(a == c);

// ********* cloning and merging*******

let user2 = {
    name : "Rohan",
    age : 27
};

console.log(user2);
console.log(user2.name);


let clone = {};

for( let key in user2){
    clone[key] = user2[key]
}

console.log(clone);
console.log(clone.name);

clone.name = "rahul";

console.log(clone);
console.log(user2);
// clone obbject doees not affrect on the original objext 

// another metyhod to merge the objects

let obj = {
    name : "Rahul"
}

let obj2 = {
    age : 20
}

let obj3 = {
    isAdmin : true
}
console.log(obj);

Object.assign(obj , obj2 , obj3 , {looks : "handsome"})

console.log(obj);


// ******** Nested cloning ************

let user3 = {
    name : "Rohit",
    size : {
        height : 185,
        width : 50
    }
}

console.log(user3.size.width);
console.log(user3);

let clone2 = Object.assign({} , user3)

console.log(clone2);

clone2.size.height = 70;

console.log(clone2.size.height);
console.log(user3.size.height); // afect each other  

console.log(user3.sizes === clone2.sizes);

// structured Clone dosesnot afferct each otgher


let user4 = {
    name : "Sharad",
    size : {
        height : 185,
        width : 55
    }
}

console.log(user4.size.width);
console.log(user4);

let clone3 = structuredClone(user4)

console.log(clone3);

clone3.size.height = 75;

console.log(clone3.size.height);
console.log(user4.size.height);  

console.log(user4.sizes === clone3.sizes);


