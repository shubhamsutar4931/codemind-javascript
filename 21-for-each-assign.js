console.log("==========Task1==========");

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ]; 
arrayNumbers.forEach((Element,index)=>
{
    console.log(`Index ${index}:${Element}`);
});

console.log("==========Task2==========");
arrayNumbers.forEach((Element)=>
    {
        if(Element>0)
        {
            console.log(`${Element}`);
        }
    });

console.log("==========Task3==========");
// const negativeNumbers = arrayNumbers.filter(num => num < 0);
// console.log(negativeNumbers);
let negativeA=[];
arrayNumbers.forEach((element)=>
{
    if(element<0)
    {
        negativeA.push(element);
    }
}
);
console.log(negativeA);


console.log("==========Task4==========");
arrayNumbers.forEach((element)=>
{
    if(element%2==0)
    {
        console.log(element);
    }
})


console.log("==========Task5==========");
let sum=0;
arrayNumbers.forEach((element)=>
{
    sum=sum+element;
})
console.log(sum);

console.log("==========Task6==========");
arrayNumbers.forEach((element,index)=>
{
    if(index%2==0)
    {
        console.log(element);
    }
})


