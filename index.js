// Code your solutions in this file
const countDown = (number) =>  {

 if(number >= 0 || !number.isInteger) {
console.log(" this is not a number");}

for (let i = number; i--; i<=10) {
 console.log(i);
}}
  countDown(10);
