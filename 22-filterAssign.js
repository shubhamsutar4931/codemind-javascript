const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19]; 
console.log("==========Find out all the numbers which are greater than 50 and log on console ==========");
let array=arrayNumbers.filter(element=>{
    return element>50;
})
console.log(array);

console.log("========== Find out all the even number and log on console  ==========");
let even=arrayNumbers.filter(element=>{
    return element%2==0;
})
console.log(even);

console.log("========== Find out all the odd number and log on console  ==========");
let odd=arrayNumbers.filter(element=>{
    return element%2!=0;
})
console.log(odd);

console.log("========== Find out all the numbers which are multiple of 5   ==========");
let mulptiple=arrayNumbers.filter(element=>{
    return element%5==0;
})
console.log(mulptiple);

console.log("========== Find out all numbers which are between 20 and 50   ==========");
let range=arrayNumbers.filter(element=>{
    return element>20 &&element<50;
})
console.log(range);



