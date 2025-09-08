//Comma operator is Z apsecial operator called its own type sequemnce operator

let a =(1,2,3)
console.log(a);

//example 2
let x = 0;
let y = (x += 1, x += 2, x += 3);

console.log(y);

// exapmle 3
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j);
}