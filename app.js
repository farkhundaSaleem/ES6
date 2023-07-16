
// LET VAR CONST
// 1.
// const pi = 3.16;
// pi = 4.2;
// console.log(pi)


// 2.
function sumOfSquares(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      const square = numbers[i] * numbers[i];
      sum += square;
    }
  
    return sum;
  }
  
  const numbers5 = [1, 2,3,4,5];
  const result = sumOfSquares(numbers5);
  console.log(result); 


// 3.
let clrArray = ["Pink","Orange","Blue","Red","Black"]
function firstLetterOfArray(clrArray) {
   for (let i = 0; i < clrArray.length; i++) {
    var element = clrArray.forEach(value => {
        
        console.log(value[0])
    });
    break;
   } 
    
}
let  new22 = firstLetterOfArray(clrArray)



// 4.
function generateAsterisks(n) {
    const asterisk = '*';
    return asterisk.repeat(n);
  }
  console.log(generateAsterisks(10));  

// 5.
var person9 = {
    name: 'John',
    age: 30
  };
  function generateGreeting() {
    var message = 'Hello, ' + person9.name + '! You are ' + person9.age + ' years old.';
    return message;
  }
  console.log(generateGreeting(person9));

// 6.
function findMaxValue(numbers8) {
    let maxValue =Math.max(...numbers8);
    return maxValue;
  }
  let numbers8 = [50, 100, 20, 80, 30];

console.log(findMaxValue(numbers8));






// TEMPLATE STRINGS
// 1.
function greet(name,age){
    return `Welcome ${name} You are ${age} years old`;
    
}
var greetu = greet('farkhunda',22);
console.log(greetu);



// 2.
function sumAndAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
  
    return `Sum: ${sum}, Average: ${average.toFixed(2)}`;
  }

  const numbers55 = [5, 10, 15, 20, 25];
  const result6 = sumAndAverage(numbers55);
  console.log(result6);


// 3.
function createHTMLElement(tag, text) {
  return `<${tag}>${text}</${tag}>`;
}


const tagName = 'h1';
const text = 'Hello, world!';
const htmlElement = createHTMLElement(tagName, text);
console.log(htmlElement);

// 4.
var carObject = {
      name: 'Honda',
      price: "1300k",
      quantity:1
    };
    function car5(){
      return `The price of the ${carObject.quantity} ${carObject.name} object is ${carObject.price} `

    }
console.log(car5(carObject));


// 5.
function formatDate(date) {

    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    var year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }

  var date = new Date();
const formattedDate = formatDate(date);
console.log(formattedDate);


// // DESTRUCTING
// 1.
function sumArray([num1, num2]) {
    return num1 + num2;
  }
  const numbers88 = [3, 5];
const result55 = sumArray(numbers88);
console.log(result55);




//   2.
function getPersonInfo({ name, age, occupation }) {
    return `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
  }
  const person555 = {
    name: 'ABC',
    age: 30,
    occupation: 'Software Engineer'
  };
  
  const personInfo = getPersonInfo(person555);
  console.log(personInfo);
 





// 3.
function getPersonWithHighestScore(arr) {
    const [firstPerson, ...restOfPersons] = arr;
  
    let highestScore = firstPerson.score;
    let personWithHighestScore = firstPerson.name;
  
    for (const { name, score } of restOfPersons) {
      if (score > highestScore) {
        highestScore = score;
        personWithHighestScore = name;
      }
    }
  
    return personWithHighestScore;
  }


  const people = [
    { name: 'John', score: 80 },
    { name: 'Jane', score: 95 },
    { name: 'Adam', score: 88 },
    { name: 'Emily', score: 92 }
  ];
  
  const personWithHighestScore = getPersonWithHighestScore(people);
  console.log(personWithHighestScore);





// 4.
function getInitials({ firstName = '', lastName = '', middleName = '' }) {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const middleInitial = middleName.charAt(0).toUpperCase();
    const lastInitial = lastName.charAt(0).toUpperCase();
  
    return `${firstInitial}${middleInitial}${lastInitial}`;
  }


  const person5554 = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'Smith'
  };
  
  const initials = getInitials(person5554);
  console.log(initials);
// 5.
function getFirstAndLast(arr) {
    const [first, ...rest] = arr;
    const last = arr[arr.length - 1];
  
    return { first, last };
  }
  
  const strings = ['apple', 'banana', 'cherry', 'date'];
  const result22 = getFirstAndLast(strings);
  console.log(result22);

// DEFAULT, REST & SPREAD:

// 1.
function sumNumbers(num1 = 0, num2 = 0) {
    return num1 + num2;
  }
  console.log(sumNumbers(5, 3));



2.
function collectArguments(...args) {
    return args;
  }
  console.log(collectArguments('a', 'b', 'c', 'd')); 

3.
function findMaxValue(numbers) {
    return Math.max(...numbers);
  }
 var fru = console.log(findMaxValue([10, 5, 8, 20]));
 



// 4.
function far (array1, array2){
    return[...array1, ...array2];
}

console.log(far(['1','2','3'],['4','5','6']));


// 5.
let newObj ={

            name: 'ABC',
            age: 30,
            occupation: 'Software Engineer'
          };
          
function fan(){
    return nreObjj={...newObj,
        id: "233"
    }
}
console.log(fan());



// ARROW FUNCTIONS:

// 1.
let arrow1 = (a)=> a.length;

console.log (arrow1("hello"));


// 2.
let arrow2 = (c,d)=> c*d;
    
    console.log (arrow2(2,5));


// 3.
const calculateAverage = (numbers) => {
    if (numbers.length === 0) {
      return 0;
    }
    
    const sum = numbers.reduce((acc, curr) => acc + curr);
    return sum / numbers.length;
  };
  console.log(calculateAverage([1, 2, 3, 4, 5])); 

  4.
  let greetName=(word)=> console.log( `Hello ${word}`);
  greetName("ABC");


//   5.
  let ran=()=>{
    console.log(Math.floor(Math.random()*2));
  } 
ran();


// PROMISES

// 1.
function prom(number) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            const square = number * number;
            resolve(square);
        }, 1000);
    })
    
}
prom(2)
.then((result)=>{
    console.log(result);
})



// 2.
function resolvePromises(promises) {
    return Promise.all(promises);
  }

  const promise12 = Promise.resolve(1);
const promise25 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

const promises = [promise12, promise25, promise3];

resolvePromises(promises)
  .then((a) => {
    console.log(a); 
  })
  .catch((error) => {
    console.log(error);  
  });

3.
function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
  }
  const url = 'https://api.example.com/data';

fetchData(url)
  .then(data => {
    console.log(data);  // Output: JSON data from the URL
  })
  .catch(error => {
    console.log(error);  // Output: Error message if the request or parsing fails
  });




4.
function sumOfPromises(promise1, promise2) {
  return Promise.all([promise1, promise2])
    .then(([value1, value2]) => value1 + value2);
}
const promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(20), 2000));

sumOfPromises(promise1, promise2)
  .then((sum) => console.log(sum));



5.
function timeoutPromise(promise, timeout) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Promise timed out')), timeout)
    )
  ]);
}
const promise = new Promise((resolve) => setTimeout(() => resolve('Success'), 2000));

timeoutPromise(promise, 1500)
  .then((value) => console.log(value))
  .catch((error) => console.error(error)); 

  const startPromise = Promise.resolve('Start Counting');

function counterm(value) {
  console.log(value);
}

startPromise
  .then(counterm)
  .then(() => 1)
  .then(counterm)
  .then(() => 2)
  .then(counterm)
  .then(() => 3)
  .then(counterm);

// MAP:
1.
function mapToSquares(numbers4) {
  return new Map(numbers4.map((number) => [number, number * number]));
}
const numbers4 = [1, 2, 3, 4, 5];

const squareMap = mapToSquares(numbers4);

console.log(squareMap);




2.
function mapNameToAge(objects) {
  return objects.reduce((map, obj) => {
    map.set(obj.name, obj.age);
    return map;
  }, new Map());
}
const objects = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const nameToAgeMap = mapNameToAge(objects);

console.log(nameToAgeMap);



3.
function mapHasKey(map, key) {
  return map.has(key);
}
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set('city', 'London');

console.log(mapHasKey(myMap, 'age')); // Output: true
console.log(mapHasKey(myMap, 'address')); 


4.
function filterMap(map, callback) {
  const filteredMap = new Map();
  
  map.forEach((value, key) => {
    if (callback(value, key)) {
      filteredMap.set(key, value);
    }
  });
  
  return filteredMap;
}
const myMap1 = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set('city', 'London');

function filterCallback(value, key) {
  return typeof value === 'string';
}

const filteredMap = filterMap(myMap1, filterCallback);

console.log(filteredMap);


5.
function mergeMaps(map1, map2) {
  const mergedMap = new Map(map1);

  map2.forEach((value, key) => {
    mergedMap.set(key, value);
  });

  return mergedMap;
}
const map1 = new Map();
map1.set('name', 'Alice');
map1.set('age', 25);

const map2 = new Map();
map2.set('age', 30);
map2.set('city', 'London');

const mergedMap = mergeMaps(map1, map2);

console.log(mergedMap);



// CLASSES:
1.
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log("Hi there! I'm", this.firstname);
    }
  }
  var person1 = new Person("ABC","XXX");
  var person2 = new Person("DEF","YYY");

  person1.greet();
  person2.greet();


  2.
  class PPerson {
    constructor(name,age){
      this.name = name;
      this.age = age;
    }
    intro() {
      console.log("Hi there! I'm "+ this.name+ " and I'm "+this.age+ " years old.");
    }

  }
  let pp = new PPerson("XYZ","22");
  pp.intro();

  3.
   class Rectangle {
    constructor(width,height){
      this.width = width;
      this.height = height;
    }
    getArea() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }}


    const rectangle1 = new Rectangle(4, 5);


console.log(rectangle1.getArea());
console.log(rectangle1.getPerimeter());


4.
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return 2 * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}
const circle1 = new Circle(5);


console.log(circle1.getDiameter());
console.log(circle1.getCircumference()); 
console.log(circle1.getArea());

5.



class Student extends PPerson {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  introduction() {
    console.log( `Hello, my name is ${this.name}. I am ${this.age} years old and I am studying ${this.course}.`);
  }
}
const student1 = new Student('Alice', 20, 'Computer Science');



student1.introduction();





6.
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }

  getPerimeter() {
    return 4 * this.side;
  }
}
const square1 = new Square(5);


console.log(square1.getArea()); 
console.log(square1.getPerimeter()); 

// HOISTING
1.
function printVariable1() {
  console.log(variable);
  var variable = "Hello, World!";
}
printVariable1();
2.
// function printVariable2() {
//   console.log(variable2);
//   let variable2 = "Hello, World!";

// }
// printVariable2();
3.
// function printVariable3() {
//   console.log(variable3);
//   const variable3 = "Hello, World!";

// }
// printVariable3();
4.
// function printVariable4() {
//   console.log(variable1);
//   variable1 = "Hello, World!";
// }
// printVariable4();
5.
sayHello();

function sayHello() {
  console.log("Hello, World!");
}


// THIS KEYWORD
1.
const person = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};
person.greet();
2.
function Caar(brand) {
  this.brand = brand;
  this.speed = 0;
}

Caar.prototype.accelerate = function(value) {
  this.speed += value;
};

Caar.prototype.printSpeed = function() {
  console.log(`The current speed of the ${this.brand} car is ${this.speed} km/h.`);
};
const car1 = new Caar('Tesla');
car1.accelerate(50);
car1.printSpeed();

3.

const calculator = {
  value: 0,

  add: function(number) {
    this.value += number;
  },

  subtract: function(number) {
    this.value -= number;
  },

  multiply: function(number) {
    this.value *= number;
  },

  printValue: function() {
    console.log(`The current value is: ${this.value}`);
  }
};


calculator.add(5);
calculator.printValue(); 

calculator.subtract(3);
calculator.printValue(); 

calculator.multiply(4);
calculator.printValue(); 



4.
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
  printInfo: function(){
    console.log("Title: " + this.title);
    console.log("Author: " + this.author);
    console.log("Pages: " + this.pages);
  }
  
};

book.printInfo();


5.
function Perrson(name, age) {
  this.name = name;
  this.age = age;


  this.introduction = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  };
}
var p=new Perrson('ABCD','20');
  p.introduction();



6.
let counter={ 
  count: 5,
  increment1: function() {
return this.count++;  
    
  },
  reset:  function() {
    this.count = 0;
  } 
}
console.log(counter.count);
counter.increment1();
console.log(counter.count);
counter.reset();
console.log(counter.count); 


7.
let product ={
  name:'MNO' ,
  price:5000,
  discount: 0.5,
  calculateDiscountedPrice:function() {
    return this.price - (this.price * this.discount);
  }
}
console.log(product.calculateDiscountedPrice())


8.
let game ={
  play: function() {
    console.log("Playing the game...");
  },
  startGame: function() {
    this.play(); 
  }
}
game.startGame();



// FOR OF LOOP

1.
const fruits = ["apple", "banana", "orange", "kiwi", "mango"];

for (const value of fruits) {
  console.log(value);
}

2.
let message1 = "Hi There";
for(let strings of message1){
  console.log(strings);

}
// 3.
// let personn ={
//   name1: "John Doe",
//   age2: 30,
//   country: "USA"
// };
// for (let keys of personn ){
// let valuee = personn[keys];
//   console.log(valuee);
// };

5.
const colors = new Set(["red", "green", "blue"]);

for (const color of colors) {
  console.log(color);
}
6.
let fro =[];
for(i=0;i<=10;i++){
fro.push(i);
};
console.log(fro);
for(i=0;i<fro.length;i++){

  console.log(fro[i])
}
for (const value of fro) {
  console.log(value);
}



// FOR IN LOOP:

1.
const myObject = {
  item1: "Apple",
  item2: "Banana",
  item3: "Orange"
};

for (let key in myObject) {
 
  if (myObject.hasOwnProperty(key)) {
    
    console.log(`Property Name: ${key}, Value: ${myObject[key]}`);
  }
}
var myObject5 = ['Apple','Mango','Orange'];
for(i=0;i<=myObject5.length;i++){
console.log(myObject5[i])
}

2.
let personnn ={
  name1: "John Doe",
  age2: 30,
  country: "USA"
};
for (let keys in personnn ){

    console.log(keys);
}


3.

const numbers = [1, 2, 3, 4, 5];
for(let index in numbers){
  console.log(index)
}


4.
const message = "Hello, world!";
for(let valuesss in message ){
if(message.hasOwnProperty(valuesss)){
  console.log(message[valuesss])
}
}

5.
const scores = new Map();
scores.set("John", 85);
scores.set("Alice", 92);
scores.set("Bob", 78);


for (let [name, score] of scores) {
  console.log(`Name: ${name}, Score: ${score}`);
}



6.

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};
for (let property in car) {
 
  if (car.hasOwnProperty(property)) {
    
    console.log(car[property]);
  }
}


// ASYNC/AWAIT
// 1.
function delayedGreeting(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello, ${name}!`);
    }, 2000);
  });
}

async function greet(name) {
  const greeting = await delayedGreeting(name);
  console.log(greeting);
}

greet('John');
// 2.
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: 'Data retrieved successfully' };
      resolve(data);
    }, 3000);
  });
}

async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();
// 3.
function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = ['John', 'Jane', 'Bob'];
      resolve(users);
    }, 4000);
  });
}

async function fetchUsersAsync() {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}

fetchUsersAsync(); 

// 4.
function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: id, message: 'Data retrieved successfully' };
      resolve(data);
    }, 5000);
  });
}
// 5.
async function fetchDataById(id) {
  try {
    const data = await fetchData(id);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchDataById(123);
// 6.
let counter5 = 0;

function timeout(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      counter++;
      resolve({ counter5, value });
    }, 1000);
  });
}

async function outputCounterAndValue(value) {
  const result = await timeout(value);
  console.log(`Counter: ${result.counter5}, Value: ${result.value}`);
  return result;
}

async function runCounterLoop() {
  for (let i = 1; i <= 10; i++) {
    const result = await outputCounterAndValue(i);
    console.log(`Resolved Value: ${JSON.stringify(result)}`);
  }
}

runCounterLoop();



CALLBACKS:

1.
function counter6() {
  let count = 0;
  
  return function() {
    count++;
    console.log(count);
  };
}

const increment = counter6();
increment(); // Logs 1
increment(); // Logs 2
increment(); // Logs 3

2.
function createMultiplier(number) {
  return function(num) {
    return number * num;
  };
}

const multiplyByTwo = createMultiplier(2);
console.log(multiplyByTwo(4)); // Prints 8
console.log(multiplyByTwo(6)); // Prints 12

const multiplyByFive = createMultiplier(5);
console.log(multiplyByFive(3)); // Prints 15
console.log(multiplyByFive(2)); // Prints 10

3.
function secretMessage(string) {
  return function() {
    console.log("Secret message:", string);
  };
}

const revealMessage = secretMessage("I love programming!");
revealMessage(); // Logs "Secret message: I love programming!"




4.
function calculate(num1, num2) {
  return {
    add: function() {
      return num1 + num2;
    },
    multiply: function() {
      return num1 * num2;
    }
  };
}

const calculator6 = calculate(3, 4);
console.log(calculator6.add());      // Prints 7
console.log(calculator6.multiply()); // Prints 12

