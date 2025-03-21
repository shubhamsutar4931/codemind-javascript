class Vehicle{
    // Data members
    // Constructor
    constructor(name,color,price, modelNumber, dateOfManufacture){
        this.name = name;
        this.color=color;
        this.price=price;
        this.modelNumber=modelNumber;
        this.dateOfManufacture=dateOfManufacture;
    }

    // Member Function
    details(){
        console.log(`Name: ${this.name}, Color: ${this.color}, Price: ${this.price}, Model Number: ${this.modelNumber}, Year Of Manufacture: ${this.dateOfManufacture}`);
    }
}

console.log("================Task-1================");

const vehScarpio=new Vehicle("Scarpio","Black","2,000,000","MH 10 0001","2024");
vehScarpio.details();

const vehThar=new Vehicle("Thar","Black","1,800,000","MH 10 0002","2025");
vehThar.details();

const vehScoda=new Vehicle("Scoda","White","1,500,000","MH 10 0003","2023");
vehScoda.details();

const vehFortunier=new Vehicle("Fortunier","Black","4,000,000","MH 10 0005","2025");
vehFortunier.details();

const vehBolero=new Vehicle("Bolero","Black","1,200,000","MH 10 0010","2024");
vehBolero.details();

console.log("================Task-2================");
class Student{
    // Data members
    // Constructor
    constructor(name,department, university, location){
        this.name = name;
        this.department =department;
        this.university = university;
        this.location = location;
    }

    // Member Function
    details(){
        console.log(`College Name: ${this.name},Department: ${this.department}, University: ${this.university}, Location: ${this.location}`);
    }
}
const stdJenny = new Student("Wachand college", "CSE", "Shivaji University", "Sangli");
stdJenny.details();

const stdStew = new Student("COEP", "Civil", "SPPU", "Pune");
stdStew.details(); 

const stdElon = new Student("GCK", "Mechanical", "Shivaji University", "Karad");
stdElon.details();

const stdStew1 = new Student("RIT", "ENTC", "Shivaji University", "Islampur");
stdStew1.details(); 

const stdElon2 = new Student("MIT", "Mechanical", "MIT", "Pune");
stdElon2.details();
