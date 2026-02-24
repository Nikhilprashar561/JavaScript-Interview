
console.log(this) // Global This keyword

function ranveerOnStage(){
    return typeof this
}
console.log(ranveerOnStage())

function ranveerNoStage(){
    // "use strict" :- if use strict they return undefined if not then they return in node node object , or in browser return windwo object .
    return  this
}
console.log(ranveerNoStage())

const myFunc = function(){
  console.log(this)
}
function my(){
  console.log(this)
}
const myFun = () => {
  console.log(this)
}

const ranveer = {
    name: "nikhil",
    lead: "Engineer",
    introduce(){
        return `${this.name} is a ${this.lead}`
    }
}
console.log(ranveer.introduce())

const cast = {
    movie: "RRR",
    director: "Sanjay Leela Bhansali",
    cast: ["Ranveer", "Depika", "SRK"],

    anniunceCast(){
        this.cast.forEach((acc) => {
            console.log(`${this.director} launch ${this.movie} cast name ${acc}`)
        })
    }
}

cast.anniunceCast()

const filmSet = {
    crew: "Spot Boys",
    prepareProps(){
        console.log("Inside Prepare Props",this.crew)

        function prepare() {
            console.log("Inside prepareProps function", this.crew)
        }
        prepare()

        const arrow = () => { // detach Methods
            console.log("Inside Arrow Functions" , this.crew)
        }
        arrow()
    }
}
filmSet.prepareProps()

const detach = { //  Detach Method
    name: "Ranveer",

    bow(){
        return this.name
    }
}
const checkDetch = detach.bow
console.log(checkDetch())

const obj = {
    name: "Thanos",
    greet: () => {
        console.log(this.name)
    }
}
obj.greet()

const age = 22;
function verifyAge (){
    return this.age;
}
console.log(verifyAge());

// call , Bind and Apply methods 👇

function callMethod(chaiType, style) {
    return `${this.name} the type ${chaiType} add ${style}`
}
const assignNAme = {name: "Chai"}

console.log(callMethod.call(assignNAme,"Masala", "Punjabi"))

const arr = [100,30,150,50]

console.log(...arr)
console.log(Math.max.apply(null, arr))
console.log(Math.max(...arr))

// If you pass value in array then you should use apply method instead if call .

function applyMethod(ingrediant, style){
    return `${this.name} is ${ingrediant} and Style Was ${style}`
}
const objectApply = {name: "Chai-Sutta"}
const applyArr = ["Adark", "Rajasthani"]
console.log(applyMethod.call(objectApply, ...applyArr))
console.log(applyMethod.apply(objectApply, applyArr))
console.log(applyMethod.bind(objectApply, ...applyArr))

const bindApply = applyMethod.bind(objectApply, ...applyArr)
console.log("Yeh hai Bind Apply", bindApply())


function User(name, classes){
    this.name = name
    this.classes = classes
}

User.prototype.method = function () {
    return `${this.name} is the student of ${this.classes}`
}

const User1 = new User("Nikhil", "BSC")
const User2 = new User("Rajvir", "BCA")
const User3 = new User("Yuvraj", "B.COM")
const User4 = new User("Happy", "BA")

console.log(User1.method())
console.log(User2.method())
console.log(User3.method())
console.log(User4.method())

function TataCar(chassisNumber, modelName) {
  
  this.chassisNumber = chassisNumber;
  
  this.modelName = modelName;
  this.fuelLevel = 100;
  
}

TataCar.prototype.status = function () {
  return `Tata ${this.modelName} #${this.chassisNumber} | Fuel: ${this.fuelLevel}`;
};

const car1 = new TataCar("MH-101", "Nexon");
const car2 = new TataCar("DL-202", "Harrier");

console.log(car1.modelName);
console.log(car2.modelName);
console.log(car1.status());
console.log(car2.status());

function createAutoRickshaw(id, route) {
  return {
    id,
    route,
    run() {
      return `Auto ${this.id} running on ${this.route}`;
    },
  };
}

const auto1 = createAutoRickshaw("UP-1", "Lucknow-kanpu");
const auto2 = createAutoRickshaw("UP-2", "Agra-Mathura");

console.log(auto1.run());
console.log(auto2.run());


// Prototype in JS

const prithviraj = {
  name: "Prithviraj",
  generation: "grandfather",
  cookTraditionalDish() {
    return `${this.name} cooks an ancient family recipe`;
  },
};


const raj = Object.create(prithviraj);
raj.name = "raj";
raj.generation = "father";
raj.runBusiness = function () {
  return `${this.name} runs the family business`;
};


const ranbir = Object.create(raj);
ranbir.name = "ranbir";
ranbir.generation = "son";
ranbir.makeFilm = function () {
  return `${this.name} directs blockbustur movies`;
};

console.log(prithviraj)
console.log(raj)
console.log(ranbir)

console.log(ranbir.makeFilm());
console.log(ranbir.runBusiness());
console.log(ranbir.cookTraditionalDish());

Array.prototype.last = function () {
  return this[this.length - 1];
};

Array.prototype.hitesh = "hitesh"


console.log([1, 2, 3].hitesh)

String.prototype.upperCase = function () {
}

console.log([1, 2, 3].last());
console.log(["Ani", "hitesh", "Akash"].last());

Array.prototype.mapTwo = function () {
  this
}


String.prototype.dalla = function (){
    return this[this.length - 1].toUpperCase
}

const chor = "nikhil"

console.log(chor.dalla())

let a1 = [1, 2, 3, 4, 5]
let a2 = [5, 6, 7, 8, 9]
Array.prototype.sum = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        sum += this[i]
    }
    return sum
}
console.log(a1.sum())
console.log(a2.sum())


console.log(a1.pr)

