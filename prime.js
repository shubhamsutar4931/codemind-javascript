function primeF(n){
    for (let index = 2; index <=n/2; index++) {
        if (n%index==0) {
            return false;
        }
    }
    return true;
}

// var result=primeF(11);
// console.log(`Is 7 prime number ${result}`);
console.log("======Count Prime Numbers======");

const arr=[3,9,7,6,19,29,53];
console.log(`Given array: ${arr}`);

let primeCount=0;
for (const element of arr) {
    if(primeF(element))
    {
        primeCount++;
    }
}
console.log(`Numbers of Prime Number in Array: ${primeCount}`);
console.log(" ");


console.log("======Count numbers of spaces in string======");
function spaceCount(str)
{
    let count=0;
    for (let i = 0; i < str.length; i++) {
        if(str[i]== " ")
        {
            count++;
        }
    }
    return count;
}
 let res=spaceCount("Revision is the mother of success");
console.log("Revision is the mother of success");
console.log(`Total numbers of spaces: ${res}`);
console.log("--------------------------------------------------");

let res1=spaceCount("JavaScript is the language of internet world");
console.log("JavaScript is the language of internet world");
console.log(`Total numbers of spaces: ${res1}`);

