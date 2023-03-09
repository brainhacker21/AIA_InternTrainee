// belajar variabel dengan 3 tipe data (string, int, boolean)

/*var myname = "Auric"
var mynumber = 21
var the_truth = true
*/

// 1. Scope

// Global Scope
var myname = "Auric"
console.log(myname)

//Local Scope

const name = () => {

}
function nama(){
    var mynama;
   mynama = "river"
   return mynama
   console.log(mynama)
}
console.log(nama())

// 2.a. Reassigned
var mynumber;
mynumber = 21 ;
mynumber = 30;
console.log(mynumber)


// 2.b. Redeclared
var mynum = 35 
console.log(mynum) 

// 3. hoisting
the_truth = true
var the_truth;
console.log(the_truth)


var firstname = "Lenovo";
var lastname = "Thinkpad";
console.log(`${firstname} ${lastname}`)