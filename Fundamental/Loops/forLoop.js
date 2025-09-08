// inlkine varibale in for loop
console.log("inside");

for(let i =0 ; i< 3 ;i++){
    console.log(i);
}

//outside variable in for loop

console.log("outside");

let i = 0;
for(i ; i< 3 ;i++){
    console.log(i);
}

console.log(i);

//skippiung part  for(;;) infiniteb only condiution is nercxessay also skip the begn and step part

//breaking in loop
console.log("break");

for(let i = 0 ; i < 10 ; i++)
{
    if(i==8) break;
    console.log(i);
    
}

//continue 

console.log("continue");


for(let i = 0 ; i < 10 ; i++)
{
    if(i % 2 == 0) continue;
    console.log(i);
}


// FOR IN LOOP MNOSTLY USE FOR TYHE OBJECTS

console.log("For in loop for objects:");

let user ={
    name:"Rahul",
    age: 20,
    city: "Padrana"
}

for(let key in user){
    console.log(key,": ",user[key]);
}

//FOR IN IN ARRAYS USING KEYS AS STRINGS
console.log("for in for arrays:");

let nums = [10, 20, 30];

for (let index in nums) {
  console.log(index, nums[index]);
}

//FOR OF LOOP FOR OBJECTS + ARRAYS + STRINGS + MAP +SETS

console.log("For of loop using in arrays:");

for(let value of nums){
    console.log(value);
}

console.log("for of loop for the objects :");

for(let value of Object.values(user)){
    console.log(value);
}

console.log("for of loop for strings :");
let str ="RANA";

for(let value of str){
    console.log(value);
}