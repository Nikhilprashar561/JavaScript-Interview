
// using an array
let s1 = new Set([10, 30, 30, 40, 40]);
console.log(s1);

let s2 = new Set(["gfg", "gfg", "geeks"]);
console.log(s2);

// using string
let s3 = new Set("fooooooood");
console.log(s3);

// an empty set
let s4 = new Set();
console.log(s4);

let s5 = new Set("10","20","30","40")
console.log(s5)


console.log(s1.add(50)) // New Value Added

console.log("Yaha Hai ",s1.has(10))

console.log(s1.delete(10)) // if find and delete, then return true otherwise false .

console.log("Yaha Nahi ",s1.has(10))


console.log(s1)

console.log(s1.size)

console.log(s1.values())

console.log(s1.clear())

console.log(s1)