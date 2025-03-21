console.log("==========Task1==========");
const arrayNumber = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ]; 
let Addition=arrayNumber.map(element=>{
    return element+10;
})
console.log(Addition);

console.log("==========Task2==========");
const arrayNumber1 = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ]; 
let Multiplication=arrayNumber.map(element=>{
    return element*element*element;
})
console.log(Multiplication);

console.log("==========Task1==========");
const arrayNumber2 = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ]; 
let Addition1=arrayNumber.map((element,index)=>{
    return element+index;
})
console.log(Addition1);
