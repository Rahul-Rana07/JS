//OR OPERATOR

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log( 'The office is closed.' ); 
}

//AND OPERARTOR

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

let hour1 = 12;
let minute = 30;

if (hour1 == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}

//NOT OPERATOR

console.log( !true ); // false
console.log( !0 ); // true

// NUlL COALESCING

let user;

console.log(user ?? "Anonymous");

//example 2

let user1 = "John";

console.log(user1 ?? "Anonymous");

//exapmle 3
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

//comparison between null and or 

let height = 0;

console.log(height || 100); //100
console.log(height ?? 100); //0

let height1 = null;
let width = null;

//paranthese
let area = (height1 ?? 100) * (width ?? 50);

console.log(area); //5000


// without parentheses
let area1= height ?? 100 * width ?? 50;
console.log(area1);


let area2 = height ?? (100 * width) ?? 50;
console.log(area2);
