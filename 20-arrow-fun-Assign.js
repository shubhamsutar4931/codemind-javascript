const arr1=()=>{
    console.log("Good Morning,Today is Wednesday");
    ;
}
arr1();

let multi=(n1,n2,n3)=>
{
    let result=n1*n2*n3;
    console.log(`Multiplication:${result}`);
}
multi(5,5,2);

let multi1=(n1,n2,n3=1)=>
    {
        let result=n1*n2*n3;
        console.log(`Multiplication:${result}`);
    }
 multi1(10,4);

let add=(n1,n2,n3,n4,n5)=>
{
    let sum=n1+n2+n3+n4+n5;
    return sum;
}
let addRes=add(100,100,200,349,756);
console.log(addRes);

let addStr=(n1,n2,n3,n4,n5)=>
    {
        let sum=n1+n2+n3+n4+n5;
        return sum;
    }
    let addStrRes=add("I am ","learning ","ES6 ","feature in ","depth");
    console.log(addStrRes);
