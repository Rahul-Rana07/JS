//ternary operator

let age = 20;
let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);


let age1= 16;
let accessAllowed1 = (age1 > 18) ? true : false;
console.log(accessAllowed1);

//multiple 

let age2 = 900;

let message = (age2 < 3) ? 'Hi, baby!' :
  (age2 < 18) ? 'Hello!' :
  (age2 < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log( message );
