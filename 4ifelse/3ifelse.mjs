/* 
male=> "He"   if()
female => "She" else if()
other => "They"   else if()  
other than male , female, other => "unknown gender" else
*/

let gender = "a";

if (gender === "male") {
  console.log("He");
} 
else if (gender === "female") {
  console.log("She");
} 
else if (gender === "other") {
  console.log("They");
}
 else {
  console.log("unknown gender");
}
