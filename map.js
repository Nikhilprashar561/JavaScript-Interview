
const map = new Map([
    ['name', 'GFG'],
    ['age', 30],
    ['city', 'Noida']
])

console.log(map)

const ma = map.forEach((e) => {
    if(e === 'GFG'){
        console.log('Okay', e)
    }
})

map.set('college', 'SSM') //  adding new key value pair .
map.set('Roll_no', 253905)

console.log(map.get('college')) // for getting a value inside map object .
console.log(map.get('Roll_no'))

console.log("Hai Kya",map.has('college')) // Check if value present in Map object or not ? if then return true 
console.log("Nahi Hai bhai",map.has('ssm')) // if not then return false

console.log("Delete Hua kya",map.delete('ssm'))
console.log("Delete Hua kya",map.delete('age'))

console.log(map)

console.log("Sab Clear Kro", map.clear()) // Delete Every think

console.log(map)
