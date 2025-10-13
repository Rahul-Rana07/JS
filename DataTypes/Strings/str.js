// quotes in string

const { log } = require("console");

let single = 'Rahul';
let double = "Rana";
let backtick = `Rajput`

console.log(single);
console.log(double);
console.log(backtick);

// back tick e,bed exprerssion and span  lines

function sum(a,b){
    return a+b;
}

console.log(`1 + 2 = ${sum(1,2)}.`);

let guestlist = `Guests:
* RAhul
*Rohan
*Sharad
`;
console.log(guestlist);


// SPECIAL CHARACTERS IN STRING 
// slsh \n \b \t

let list = "Guest : \n RAHUL \n RONNIE \n ROHIT"

console.log(list);

console.log("back xlash : \\");

let a = "hello\nworld";
let b =`hello
world`;

console.log(a == b);


//STRING LENGTH

console.log("My\n".length);
console.log("My name is RAhul".length);

let c = "Ronnie";
console.log(c.length);

// ACCESING CHARACXTER USING AT FUNCTION AND [] BRACKETS

let str = "rahul"

console.log(str[0]);
console.log(str.at(0));

console.log(str[-1]);
console.log(str[str.length-1]);

console.log(str.at(-1));
console.log(str.at(-2));

console.log("for of loop :");

for( char of str) {
    console.log(char);    
}

//STRINGS ARE IMMUTABLE
console.log("Immutable string");

let str2 = "Rohit";
str2[0] = "M";
console.log(str2[0]);

console.log(str2);

str2 = "M" + str2.slice(1)

console.log(str2);

//  CHANGIUNG THE CASES 
console.log("upper to lower and vice versa");

console.log("rahul".toUpperCase());
console.log("RAHUL".toLowerCase());

console.log("Rahul"[0].toLowerCase( ));

// SEARCHING FOR A SUBSTRING

let str3 = "widget with id";
console.log(str3.indexOf("widget"));
console.log(str3.indexOf("id"));

console.log(str3.indexOf("id" , 2));

// iterate all using loop

let str4 = "As sly as a fox, as strong as an ox";

target = "as";
pos = 0;

while(true){
    let foundPos = str4.indexOf(target, pos);
    if(foundPos == -1) break;
    console.log(` Found at: ${foundPos}`);
    pos = foundPos +1;
    
}

// include method to search in a string

console.log("widget".includes("id"));  // true
console.log("hello".includes("BYe")); // false

console.log("widget".includes("id", 2)); // false

// startsaWith or endsWith method to dsearch in a string

console.log("widget".startsWith("wid"));
console.log("wodget".endsWith("get"));

//GETTING A SUBSTRING - slice substr substring
console.log("slice");

 let str5 = "stringify";
 console.log(str5.slice(2,6)); // ring end not include
 console.log(str5.slice(2)); // ringify
 console.log(str5.slice(-4,-1));

 console.log("substring");

 console.log(str5.substring(2,6));
 console.log(str5.substring(6,2));
 console.log(str5.slice(6,2)+"khali");
 
 console.log("substr");
let str6 = "rahul rana"
 console.log(str6.substr(2,4));
 
 
 
 
 
 









