//obj to string and number 

let user = {
  name: "Rahul",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500);


// ****** ToSTRING AND ValueOF **********

//toString return string and valueoF retrurn object both are fxn

let user2 = {
    name :"Sharad"
}

console.log(user2);

console.log(user2.valueOf() === user2);

// toString

let user3 = {
    name : "Rohan",
    money : 1200,
    toString () {
        return`{name: "${this.name}}`;
    },

    valueOf() {
        return this.money
    }
}

console.log(user3); // hint: string -> {name: "John"}
console.log(+user3); // hint: number -> 1000
console.log(user3 + 500);

let user4 = {
    name : "Rohit",

    toString() {
        return this.name;
    }
}

console.log(user4);

console.log(user4 +500);


// futher conversion * myltipopkly + add

let obj = {
  // toString handles all conversions in the absence of other methods
  toString() {
    return "2";
  }
};

console.log(obj * 2); //4

let obj2 = {
  // toString handles all conversions in the absence of other methods
  toString() {
    return "2";
  }
};

console.log(obj2 + 2); //22