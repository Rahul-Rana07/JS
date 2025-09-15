// ?. use for non existing function and value in ibjecvt 
// ortherwise it will give erroro with this it give thes undefined or null value

let user ={}

console.log(user?.address?.street?.name);
console.log(user.address?.street); // undeifned

// other variant are ?.().  ?.[]

let userAdmin = {
  admin() {
    console.log("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.();


let key = "firstName";

let user1 = {
  firstName: "Rahul"
};

let user2 = null;

console.log( user1?.[key] ); // rahul
console.log( user2?.[key] ); // undefined

// delete user1?.name ;

// user1?.name = "Rohan"
