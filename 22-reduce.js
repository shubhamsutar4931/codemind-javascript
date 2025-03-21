const arr=[5,2,3,1,7];
let sum=0;
const arrNum=arr.reduce((rt,Element)=>{
    return sum=rt+Element;
})
console.log(sum);

// const array = [4, 9, 6, 5, 3, 8, 1];
// const sum1 = array.reduce( (runningTotal, element)=>{
//     return runningTotal + element;
// }, 0);
// console.log(sum1);

const array = [4, 9, 6, 5, 3, 8, 1];
const sum1 = array.reduce( (runningTotal, element)=>{
    return runningTotal + element;
}, 0);
console.log(sum1);

const multiplication = array.reduce( (runningTotal, element)=>{
    return runningTotal * element;
}, 1);
console.log(multiplication);

const arrayOne = [4, 9, 6, 5, 3, 8, 1];
// Sum the even numbers
// const evenArray = arrayOne.filter((element)=>{
//     return element%2==0;
// });
// const sumEven = evenArray.reduce( (runningTotal, element)=>{
//     return runningTotal + element;
// }, 0);
// console.log(sumEven);

const sumEven = arrayOne.filter((element)=>{
    return element%2==0;
}).reduce( (runningTotal, element)=>{
    return runningTotal + element;
}, 0);
console.log(sumEven);