
// console.log(this) // Global This keyword

function ranveerOnStage(){
    return typeof this
}
// console.log(ranveerOnStage())

function ranveerNoStage(){
    // "use strict" :- if use strict they return undefined if not then they return in node node object , or in browser return windwo object .
    return  this
}
// console.log(ranveerNoStage())


const ranveer = {
    name: "nikhil",
    lead: "Engineer",
    introduce(){
        return `${this.name} is a ${this.lead}`
    }
}
// console.log(ranveer.introduce())

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

// cast.anniunceCast()

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
// filmSet.prepareProps()

const detach = { //  Detach Method
    name: "Ranveer",

    bow(){
        return this.name
    }
}
const checkDetch = detach.bow
console.log(checkDetch())



