let professor={
    firstName:"Bill",
    lastName:"Gates",
    age:22,
    Department:"CSE",
    subject:"DBMS",
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        MTech:"CSE"
    },
    certificates:["Hacker Rank Participation","Certification in IFE course","Certification in Adv Programming"],
}
console.log("==========Task 1===========");
console.log(professor)

console.log("==========Task 2===========");
console.log(professor.degrees);

console.log("==========Task 3===========");
console.log(professor.certificates);

console.log("==========Task 4 & 5===========");
professor.totalExperience="14 years";
console.log(`Total Experience: ${professor.totalExperience}`);

console.log("==========Task 6===========");
professor.firstName="Tom";
console.log(professor);

console.log("==========Task 7===========");
professor.certificates.splice(2,0,"Oracle Certificates");
console.log(professor.certificates);

console.log("==========Task 8===========");
console.log(`Last element in certificates:{professor.certificates[professor.certificates.length-1]}`);

console.log("==========Task 9===========");
for (const key in professor) {
        const element = professor[key];
        console.log(`${key}:${element}`);
}