// Classes in JavaScript 👇


// 1. Basic Class Declaration .

class Cricketer {
    constructor(name, role){
        this.name = name,
        this.role = role,
        this.matchPlay = 0,
        this.area = "India"
    }
    introduce(){
        return `Hi ${this.name} your role is ${this.role} and play a match number ${this.matchPlay} and team is ${this.area}`
    }
}

const player1 = new Cricketer("Virat Kholi", "Opening Batsman")

// console.log(player1)
// console.log(typeof Cricketer)

// Detach Method

class Crick {
    constructor(name){
        this.name = name
    }
    walkOut = () => {
      return `Hi bro ${this.name}`
  }
}

const letMe = new Crick("Nikhil")
const letCode = new Crick("Rajvir")
// console.log(letMe.walkOut === letCode.walkOut)
// console.log(letCode)
// console.log(letMe)


// Private Properties in Class Also Define using #

class Private {
    #balnace = 0
    deposit(amt){
        this.#balnace += amt
    }
    getbal(){
        return this.#balnace
    }
}
const bankAmt = new Private()
// console.log(bankAmt.deposit(20))
// console.log(bankAmt.getbal())

// Static Method in Class , basiaclly they define class access by it-self

class Stats{
    constructor(name, id){
        this.name = name,
        this.id = id
    }
    static add(a, b){ // they created as a object you can access it using , keyword
        return a * b
    }
}

const statMethod = new Stats("Nikhil", "25")
// console.log(Stats.add(2,8)) // You Can Only use with class keyword beacuse it is static method and functions.
// console.log(statMethod)

// Inheritance in classes.

class Parents {
    constructor(father, mother){
        this.father = father,
        this.mother = mother
    }
    inherit(){ // if you create a function then the come with in your object, with every object , 
    // but if you make a method then will not come with every objects they just you can call it and then access it
        return `My Father name ${this.father} and mother name is ${this.mother}`
    }
}
class child extends Parents{
    constructor(father, mother,son){
        super(father, mother),
        this.son = son
    }
    family(){
        return `Father: ${this.father} | Mother: ${this.mother} | and here it's me ${this.son}`
    }
}
const parent = new Parents("Kewal Krishan", "Sudesh")
const children = new child(parent.father, parent.mother, "Nikhil")

console.log(parent)
console.log(children)

console.log(parent.inherit())
console.log(children.family())

