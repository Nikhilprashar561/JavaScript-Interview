
// Symbol it is a way to add a every unique property in data , it is non visible .

const adhaarCard1 = Symbol("adhaar")
const adhaarCard2 = Symbol("adhaar")

console.log(adhaarCard1 === adhaarCard2)
console.log(typeof adhaarCard1)
console.log(adhaarCard1.valueOf())
console.log(adhaarCard1.description)
console.log(adhaarCard1.toString())

const nonIndia = Symbol()
console.log(nonIndia.description)
console.log(typeof nonIndia)

const bloodGroup = Symbol("A+")
const bloodType = Symbol("Donated")

const obj = {
    name: "Nikhil",
    loaction: "Pathankot",
    [bloodGroup]: "A+",
    [bloodType]:  "fjewc"

}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.getOwnPropertySymbols(obj))

const rtiQuery = {
    queries: ["Infra Budget", "Ration Card", "Startup Laws"],
    [Symbol.iterator](){
        let ind = 0
        const queries = this.queries
        return {
            next(){
                if(ind < queries.length){
                    return {value: queries[ind++], done: false}
                }
                return {value: undefined, done: true}
            }
        }
    }
}

for (const element of rtiQuery) {
    console.log(`Yeh Hai Query Boss ${element}`)
}

const govermentScheme = {
    name: "PM Kisan Yojna",
    people: 54,
    [Symbol.toPrimitive](hint){
        if(hint === "string") return this.name
    }
}
