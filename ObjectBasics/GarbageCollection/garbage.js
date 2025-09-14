let user = {
    name : "rana"
}
// there is a refence of user tas a objeet golbal object

user = null;
// now there is nothing cxan access from user it isn now unreachable 
// garabge collcetor automatically free uup ther space by chechking this 



// ******* TWO REFRENCES *********
let user2 = {
    name : "rana"
}

let admin = user2;
// two refernce one from user and other admin bothe delte then free bthe memory by garbage collector

user2 = null ;
// still ome refe of adfmin 
admin = null;
// now clear the memory by garbage collectoer


//********* INTERLINKED REFERNCES */

function marry(man , woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father : man,
        mother : woman
    }
}


let family = marry({
    name : "Rahul"
},
{
    name : "RahulWife"
})

/*               family
                    |
                    object
                    /   \
                   /      \
                father    mother
                 /          \
               /             \
            object  ------>  object
        name : rahul <----  name : rahulwife
*/


// *****. UNREACAHBLE ***** never reach to next step
family = null ;

/*               family
        
                    object
                    /   \
                   /      \
                father    mother
                 /          \
               /             \
            object  ------>  object
        name : rahul <----  name : rahulwife
*/

/* *******INTERNAL ALGORITHM *******
The basic garbage collection algorithm is called “mark-and-sweep”.

The following “garbage collection” steps are regularly performed:

The garbage collector takes roots and “marks” (remembers) them.
Then it visits and “marks” all references from them.
Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
…And so on until every reachable (from the roots) references are visited.
All objects except marked ones are removed.
*/
