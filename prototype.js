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
console.log(raj);

const ranbir = Object.create(raj);
ranbir.name = "ranbir";
ranbir.generation = "son";
ranbir.makeFilm = function () {
  return `${this.name} directs blockbustur movies`;
};

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

// Object Prototype Inheritance.

const Teaching = {
  name: "Hima",
  lname: "ORG",
  getMethod: function(){
    return `Hey You name Is ${this.name} and ${this.lname}`
  }
}
console.log(Teaching.getMethod())
const Hod = Object.create(Teaching)
console.log(Hod.getMethod())

const p1 = {
  username: "nikhil",
  classes: "BSC",
  // __proto__ : {} // so every object have these property when you try to get any property if they dodn't they then they find 
  // in __proto__ if in that case their not find then the return null
}

const p2 = {
  __proto__ : p1
}
console.log(p1.username)
console.log(p2.username)
p2.username = "dalla"
console.log(p2.username)

// Anything in class or anythink in js reference to __proto__ objects

const t1 = {
  x1: "Hey This is T1",
}
const t2 = {
  x2: "Hey this is T2",
  __proto__: t1
}
const t3 = {
  x3: "Hey this is T3",
  __proto__: t2
}

console.log(t3.x1)
