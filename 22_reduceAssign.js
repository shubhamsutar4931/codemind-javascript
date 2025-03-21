const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19]; 
console.log("========== Find the sum of all numbers ==========");
const sum1 = array_numbers.reduce( (runningTotal, element)=>{
    return runningTotal + element;
}, 0);
console.log(sum1);

console.log("========== Find the numbers multiple of 5 and then sum it ==========");
const sumOf5Multiple=array_numbers.filter(element=>{
    return element%5==0;
}).reduce( (runningTotal, element)=>{
    return runningTotal + element;
}, 0);
console.log(sumOf5Multiple);
