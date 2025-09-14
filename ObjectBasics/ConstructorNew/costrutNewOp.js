function User(name) {
    this.name = name ;
    this.isAdmin = false;
}

let user1 = new User("Rahul")
let user2 = new User("Rohan")
let user3 = new User("Sharad") 
console.log(user1);
console.log(user2);
console.log(user3);


 // *** RETURN IN CONSTRUCTOR FUUNCTION ***********

// there is no rertturn statement in constructor funvtion
// only return this keyword and object override thew onl;y objerct return 
// new keyword create ana object and 
// add thius. properties
//this, functions

function BigUser() {
    this.name = "rohit";
    return { name : "Jhotta"}
}

console.log(new BigUser());


//******* This .FUNCTION */
function User4(name) {
    this.name = name
    this.isAdmin = false;
    this.greet = function() {
        console.log("my name is " +this.name);
        
    }
}
let user4 = new User4("sabbi");
user4.greet();
