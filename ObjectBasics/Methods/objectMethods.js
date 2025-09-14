// method create in object 

let user = {
    name : "Rahul",
    greet : function(){
        console.log("kya haal chal "+ user.name);
        
    }
}

// 1st method
user.sayHi = function() {
    console.log("hello "+user.name);
    
}

user.sayHi();

// 2nd method

function hi() {
    console.log("hi " +user.name);
}

user.Hi = hi;
user.Hi();

//3rd method

user.greet();


//*** THIS KEYWORD */

let user2 = {
  name: "Rohan",
  age: 27,

  sayHi() {
    console.log(this.name);
  }

};

user2.sayHi();

//Thiis key word id using any they have bound 

let user3 = { name: "Rahul" };
let admin2 = { name: "Sharad" };

function sayHi2() {
  console.log( this.name );
}

user3.f = sayHi2;
admin2.f = sayHi2;

user3.f(); // Rahul
admin2.f(); // Sharad

// ******* ARROW FUNCTIONS HAVE NO THIS KEYWORD ******
// they have no their own this key word it use the this keyword of they lexically inherit this from the surrounding scope

// 1 example

const obj = {
  name: "Rohit",
  normalFunc: function () {
    console.log(this.name); // Rohit
  },
  arrowFunc: () => {
    console.log(this.name); // undefined  bcz arrow functyion have bnot own this keyword
  }
};

obj.normalFunc();
obj.arrowFunc();

//exapmle 2

 function Person(name) {
    this.name = name;

    setTimeout(() => {
        console.log(this.name);
    }, 4000);
 }


const p = new Person("vivek");

 console.log(p);
 