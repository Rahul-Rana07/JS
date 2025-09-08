// ********** FUNCTION EXPRE4SSION *******/


let sayhi = function(){
    console.log("hello  bhai kya haal chal");
   
}

sayhi();
console.log(sayhi);
console.log(sayhi());

let fun = sayhi;
fun();
sayhi();


//********* CALLBACK FUNCTION */. -> passing a fucxntion t to another functiona s an argument


function ask( question , yes , no){
    if(question == "do u agree"){
        yes();
    }
    else{
        no();
    }

}

function showOk(){
    console.log("You agreed");
    
}

function shoeCancel(){
    console.log("you cancel the execution");
    
}
let a = "do u agree"
ask(a, showOk, shoeCancel);


// *****  ANONYMUS FUNCTION ****/
 function ask1 (question, yes , no){
    if(question == "do u agree") yes();
    else no();
 }

 let b = "do u agree";
 ask1(b,
    function () { console.log("app maan gye ho");},
    function () { console.log("apne execution ko cancel kr diya a ");}
 );

 // ***** DIFFERENCE BETWEEN FXN EXPRESSION ABND FXN DECLARATION *****/
 // we can call fxndeclation before its define but not in expression

 greet();
 function greet(){
    console.log("hor sehta kida kaim aa");
    
 }

//  greet2(); // error after define only call

 let greet2 = function(){
    console.log(" kida haal chaal");
    
 }

  greet2();