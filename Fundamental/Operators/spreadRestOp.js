// Spread operator expand aerray and obv

let arr1 = [1,2,3];
let arr2 = [4,5,6,7];
let combo = [...arr1,...arr2];

console.log(combo);


//strinf individual
let str = "rana";
let str2 = "rahul";
let word = [...str,...str2]

console.log(word);

//objects

let obj = {
    a:1,
    b:2
}

let obj2 ={
    c:3,
    d:4
}

let ans = {...obj, ...obj2}
console.log(ans);

// REST OPERATOR

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(10, 20, 3, 4));

//exapmle 2

let [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest); 