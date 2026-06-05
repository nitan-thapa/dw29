/*  
   range age 
        0 to 18   (child)  if    
        19 to 60  (adult) else if
        61 to 120 (old)  else if
        else   legend     ele 
        
        */

let age = 200;

if (age >= 0 && age <= 18) {
  console.log("child");
} 
else if (age >= 19 && age <= 60) {
  console.log("adult");
} 
else if (age >= 61 && age <= 120) {
  console.log("old");
} 
else {
  console.log("legend");
}
