// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data
// structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list.


type people = {
    friends:friends[] 

}

type friends ={
    name: string;
    lastname:string;
    id?:number;

}
let friend1 ={
    name:"yasha",
    lastname:"naseer",
    id:123
}
let friend2 ={
    name:"ishrat",
    lastname:"jahan",
    id:456,

}
let friend3 ={
    name:"isra",
    lastname:"naz",
    id:789,

};

let people:people={
    friends:[]
};

people.friends.push(friend1,friend2,friend3);
console.log(people)


//Assignment 2:Manipulating an Array: Rearranging Words
//Objective:
//Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
//Steps:
//1. Scrambled Array:
//o Start with an array of elements in a scrambled order, like:

//const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
//• Modify the Array:
//• Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
//o Convert non-strings (booleans, numbers) to strings if needed.
//o Split elements into character arrays (optional).
//o Rearrange characters or elements in the desired order (modify original array or
//create temporary arrays).

//• Output the Result:
//• Use join() to combine elements back into a single string: "I am a student of GIAIC".

const scrambledArray = ["student","of",true,123,"am","a","GIAIC","I"];
scrambledArray.push();
scrambledArray.splice(2,4);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1,0,"am","a");
const Join = scrambledArray.join(" ");
console.log(Join);

//ASSIGNMENT: 3

// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.


let inventory:Products[] = [];

type Products = {
    name:string;
    model:string;
    cost:number;
    quantity:number;
}
let product1:Products={
    name:"samsung",
    model:"galaxy j7 pro",
    cost:48000,
    quantity:1
}
let product2:Products = {
    name:"laptop",
    model:"lenovo",
    cost:65000,
    quantity:1
}
let product3:Products = {
    name:"samsung",
    model:"note 11",
    cost:110000,
    quantity:1
}
inventory.push(product1,product2,product3)
console.log(`The quantity property of the third product is ${inventory[2].quantity}`)

let product4:Products = {
    name:"laptop",
    model:"dell",
    cost:50000,
    quantity:1
}
inventory.push(product4)
console.log(`The name of first product is ${inventory[0].name}.`);
console.log(`The model of second product is ${inventory[1].model}.`)
console.log(`The cost of forth product is ${inventory[3].cost}.`)


// Assignment 4: Student List Organizer
//Learning Objective: Get comfortable with data structures (objects and arrays) and basic
//functions in TypeScript.
//Tasks:
//1. Student Data: The provided code defines an interface named Student that describes
//student information like name, senior status (true/false), and whether they've completed
//their assignments (true/false).
//o Imagine this as a template for organizing student details.
//2. Student List:
//o An array named students stores information about several students using the
//Student template. Think of this array as your class list!
//3. Find Senior Students with Assignments (Optional):
//o The code (not shown here) has a function that might find students who are seniors
//and have completed their assignments.
//o Can you guess why this information might be helpful?
//4. Class List Update:
//o Imagine you need to update your class list! The code (not shown here) might have
//a function that removes students who haven't completed their assignments
//(assuming only seniors are responsible).
//o Can you think of any reasons why this might be useful (consider limitations)?


interface Student {
    studentInformation:{
        name: string,
        seniorStatus: boolean,
        completedAssign: boolean,
    },
};

let students:Student[]= [
    {studentInformation:{name:"farah", seniorStatus:true, completedAssign:true }},
    {studentInformation:{name:"yasha",seniorStatus:false, completedAssign:true }},
    {studentInformation:{name:"shazia",seniorStatus:true, completedAssign:false }},
    {studentInformation:{name:"ishrat",seniorStatus:false, completedAssign:false }},
    {studentInformation:{name:"isra",seniorStatus:true, completedAssign:true}},
    {studentInformation:{name:"Maham",seniorStatus:true,completedAssign:true}},
];
function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
    return students.filter(student => 
        student.studentInformation.seniorStatus && student.studentInformation.completedAssign
    );
}

const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log('Senior students who have completed their assignments:', seniorStudentsWithAssignments);

function updatedClassList(students:Student[]):Student[]{
    return students.filter(student => student.studentInformation.seniorStatus ||
         student.studentInformation.completedAssign);
}
const updatedClassListResult = updatedClassList(students);
console.log(`student who have'nt complete there assignment`, updatedClassListResult);