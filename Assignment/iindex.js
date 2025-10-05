function f1() {
    console.log("Task1");
    console.log("Task2");
    console.log("Task3");
}

f1();


// set time out 
console.log("task 2 set time out");

function f2() {
    console.log("Task1");
    setTimeout(() => {
        console.log("Task2")
    },2000)
    console.log("Task3");
}

f2();



setTimeout(()=> {
    console.log("quest 3");
    console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");

}, 3000)


console.log("task 4");

function greet (name) {
    console.log(`hello ${name}`);
}

console.log("Rahul");
console.log("Ronnie");
console.log("Veku");

console.log("task 5");

let setInt = setInterval(()=> {
    console.log("learning Js");
    
},1000)


setTimeout(() => {
    clearInterval(setInt);
    console.log("stop");   
},5000)

console.log("task 6");

const fs  = require('fs');

let content = fs.readFileSync("a.txt", "utf-8")
console.log("file content :"+ content);


 fs.readFile("a.txt", "utf-8" , (err , content)=> {
    if(err){
        console.log("File error ", err);
    }
    else{
        console.log("file content async :", content);
        
    }
 })

