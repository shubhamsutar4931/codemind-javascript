const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log("Q1)Log the first and last element on console ");
console.log(`First element of the array:${fruits_seasonal[0]}`);
console.log(`Last element of the array:${fruits_seasonal[fruits_seasonal.length-1]}`);
console.log("======================================");

console.log("Q2)Add element → Papaya before the element 'Banana' and then log array on console ");
fruits_seasonal.unshift("Papaya");
console.log(`After adding:${fruits_seasonal}`);
console.log("======================================");

console.log("Q3)Remove 'Mango' from the array ");
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);
console.log("======================================");

console.log("Q4)Add element or insert an element 'Pineapple' at the last position ");
fruits_seasonal.push("Pineapple")
console.log(fruits_seasonal);
console.log("======================================");


console.log("Q5)Insert an element - 'Dragon Fruit' before 'Water Melon'");
fruits_seasonal.splice(fruits_seasonal.indexOf('Water Melon'), 0, 'Dragon Fruit');
console.log(fruits_seasonal);
console.log("======================================");

console.log("Q6)Replace an element 'Orange' with 'Kiwi' ");
fruits_seasonal.splice(2,1,"Kiwi");
console.log(fruits_seasonal);
console.log("======================================");

console.log("Q7)Log the elements starting from index 1 to 4 ");
console.log(fruits_seasonal.slice(1,4));
console.log("======================================");

console.log("Q8)Only select last 3 element and log on console: Use the length property");
console.log(fruits_seasonal.slice(fruits_seasonal.length-3)
);












