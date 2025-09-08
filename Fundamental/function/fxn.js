function message (){
    console.log("hello everyone");
}

message();


//LOCAL VARIABLE
 
function showMessage() {
    let message = "hello , I am Javascript";
    console.log(message);
    
}

showMessage();
// console.log(message); // error

// GLOBAL   -> modifying

let name = "Rahul";

function message1 () {
name= "rana";
console.log("hello "+ name); //rana

}
console.log(name);// rahul

message1();
console.log(name);

//  create another local variavle wirth let

let userName = 'John';

function showMessage1() {
  let userName = "Bob"; 

  let message = 'Hello, ' + userName; // Bob
  console.log(message);
}


showMessage1();

console.log( userName ); // john

//PARAMETERIZED FUNCITONS

function message2(from ,text){
    console.log(from +" : "+ text);
}


message2("Rahul" ,"kese ho bhai");
message2("Sharad" , "Badia bhai app bato");


function showMessage2(from , text ="no text given"){
    console.log(from+" : "+ text);
}

showMessage2("Ronnie");


function showMessage3(from , text ){
    console.log(from+" : "+ text);
}

showMessage3("Rohit");

// RETURNING A VALUE 

function add(a ,b){
    return a+b;
}

let res = add(3,4);
console.log("sum : "+res);

//************ MULTIPLE RETURNS  ************/

function checkAge (age) {
    if(age >=18){
        return  true;
    }
    return false;
}

let age1 = 19;

if(age1 > 18){
    console.log("Access Granted");
}
else{
    console.log("Access Denied");
    
}

// ********** EMPTY RETURN ****/

function showMovie(age){
    if(checkAge(age)){
        return;
    }
    console.log("Showing you the movie");
    
}

showMovie();


function doNothing() { /* empty */ }

console.log(doNothing() === undefined);



// TASKS
let age2 = 20;
function checkAge1 (age2){
    return age2 > 18 ? true : console.log("did yours parents allow");
}

checkAge1(age2);


let age3 = 27;
function checkAge3(age3){
    return (age3 > 18) || console.log("did yours parents allow");
}
checkAge3(age3);


let a = 7 ;
let b = 3 ;

function min(a, b) {
  return a < b ? a : b;
}

let res1 = min(a,b);
console.log(res1);
