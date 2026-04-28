let original = {
    k1: 'kutta1',
    k2: 'Dalla2'
}

let clone = {}

for(let key in original){
    console.log(original[key])
    clone[key] = original[key]
}
console.log(clone)

original.chicago = function (){
    return `Hi ${this.k1} and you guy ${this.k2}`
}

console.log(original.chicago())

let obj_2 = {
 name: "rust",
 fn(){
    console.log(`useful for the system level programming language is ${this.name}`)
 }   
}

const java = obj_2.fn
java.call({}, "java")

// Shallow copy

const ShallowObj = {
  name:"nikhil",
  class:"BSC",
  collegeDetails:{
    roll_no: 2022,
    room_no:2005
  }
}

// const copyShallow = {...ShallowObj}
// copyShallow.name = "dalla"
// copyShallow.collegeDetails.room_no = 205
// console.log(copyShallow)
// console.log(ShallowObj)

// Deep copy.

const deep = {
  name:"Nikhil",
  from:"Pathankot",
  collegeDetails:{
    classes:"BSC",
    room_no:205,
    roll_no:253805
  },
  // data: function(){
  //   return `Hello`
  // }
}

const deepCopy = JSON.parse(JSON.stringify(deep)) // Function not come with this approach
deepCopy.name = "Challa"
deepCopy.collegeDetails.room_no = 107
console.log(deepCopy)
console.log(deep)

const actuallyDeepCopy = structuredClone(deep) // With this method everythink we get into object nestest and not change actual object

console.log(actuallyDeepCopy)
