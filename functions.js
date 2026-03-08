// Higher Order Functions

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(5, 3, add));


function addName(a, b){
    let data = a + b
    console.log("First Data", data)
    return function chor(d){
        console.log(`Yeh Hai Data ${data} | ${d}`)
    }
}

const nam = addName(5, 5)

console.log(nam(25))

