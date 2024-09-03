// Write in the Missing Code (10 Questions)

// 1. Write the code to declare an array named colors with the elements "red", "green", and "blue". 
// Write code below:
let colors = ["red","green","blue"];


// 2. Write the code to log the value of the city property from the following object:
let person = { name: "Alice", city: "Paris" };
// Write code below:
console.log(person.city);


// 3. Write the code to create a function named greet that takes a name parameter and returns "Hello, name!".
// Write code below:
function greet(name){
    return "Hello," + name + "!";
}


// 4. Write the code to add "mango" to the end of the fruits array.
let fruits = ["apple", "banana"];
// Write code below:
fruits.push("mango")
console.log(fruits)

// 5. Write the code to remove the first element from the tasks array.
let tasks = ["task1", "task2", "task3"];
// Write code below:
tasks.shift("task1")
console.log(tasks)
// 6. Write the code to iterate over the numbers array using a for...of loop and log each number.
let numbers = [1, 2, 3, 4];
// Write code below:
for (let number of numbers){
    console.log(number)
}
// 7. Write the code to define a constant arrow function named multiply that takes two parameters a and b and returns their product. 
// Write code below:
const multiply = (a,b) => a * b;

// 8. Write the code to concatenate the firstName and lastName variables using template literals and assign the result to fullName.
let firstName = "John";
let lastName = "Doe";
// Write code below:
let fullName = `${firstName} ${lastName}`;

// 9. Write the code to create a new array subArray by extracting the second and third elements from the array using the slice() method.
let array = [10, 20, 30, 40];
// Write code below:
let subArray = array.slice(1,3);
console.log(subArray);

// 10. Write the code to create an object car with the properties make, model, and year.
// Write code below:
let car = {
    make: "Toyota",    
    model:"Crown",
    year: 2024
}
console.log(car)