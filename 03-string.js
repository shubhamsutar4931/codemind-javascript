var greet = "Good Morning";

var greetLength = greet.length;
console.log("Total number of characters: ", greetLength);

var charAtIndex0 = greet.charAt(0);
console.log("Character available at index 0 is: ", charAtIndex0);

var lastChar = greet.charAt(11);
console.log("Last char is: ", lastChar);

var lastCharSmartWay = greet.charAt(greet.length-1);
console.log("Last character using smart way is: ", lastCharSmartWay);

var str1="Hello";
var str2=" Good morning"
var resultConcat = str1.concat(str2);
console.log("String one: ", str1, " String two: ", str2, " Concat Result: ",resultConcat );
console.log(` String one: ${str1}, String two: ${str2}, Concat Result:${resultConcat}  `);

// String Template Backtick `, $, {}

 greet = "Good Morning";
var indexOfM = greet.indexOf("M");
console.log(`Index of char M: ${indexOfM}`);

var replaceResult = greet.replace("Morning", "Evening");
console.log(`Replace result is: ${replaceResult}`);

var city = "  Pune  ";
console.log(`Before trim: ${city}, and it's length: ${city.length}`);
var trimResult = city.trim();
console.log(`After trim: ${trimResult}, and it's length: ${trimResult.length}`);
console.log(` Count the total number of spaces available in the start and in the end `);
var totalSpaces = city.length - trimResult.length;
console.log(`Total spaces available: ${totalSpaces}`);

var age = 22;
console.log(` Age ${age}, ${typeof(age)} `);

var ageString = age.toString();// "22"
console.log(` Age string: ${ageString}, data type: ${typeof(ageString)}`);

var str="Good Morning"
console.log(str.slice(0,4));
console.log(str);

var city = "I love Pune";
var splitResult = city.split(" ");
console.log(splitResult);
 
var str = "My inspiration is Ratan Tata Sir";
var result = str.split(" ");
console.log(result);
console.log(`Total words: ${result.length}`);

