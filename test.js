// Clousure example

function myFunc() {
  let name = "Nikhil";
  function nikhil() {
    console.log(name);
    let lastname = "Prashar";
    function lname() {
      console.log(`Full name is ${name} ${lastname}`);
    }
    return lname;
  }
  return nikhil;
}

const levelOne = myFunc();
// console.log(levelOne())

const secondLevel = levelOne();
secondLevel();

// Example 2

function ref() {
  function ca(name) {
    console.log(`Your good name is ${name}`);
  }
  return ca;
}

const refCa = ref();
refCa("Chacha");

function eternal(guest) {
  const guestName = guest;
  let count = 0;
  function zomato() {
    console.log(`hi ${guestName} from zomato`);
  }
  function blinkit() {
    if (count === 1) return;
    console.log(`hi ${guestName} from blinkit`);
    console.log(count);
    count++;
    console.log(count);
  }
  return {
    zomato,
    blinkit,
  };
}

const nikhil = eternal("Nikhil");
const raja = eternal("Raja");

nikhil.blinkit();
nikhil.blinkit();
nikhil.blinkit();

const cache = {};
console.log(cache);

function add(a, b) {
  const key = `${a}:${b}`;
  if (cache[key]) {
    return cache[key];
  }
  const result = a + b;
  cache[key] = result;
  return result;
}

console.log(cache);

console.log(add(2, 5));

function createOptimizedVersion(fn) {
  const cache = {};

  return function (...arg) {
    const key = JSON.stringify(arg);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...arg);
    console.log("Yeh Result BC", result);
    cache[key] = result;
    return result;
  };
}

function add(a,b){
  return a + b;
}

function square(a, b){
  return a * b
}

const addOptimize = createOptimizedVersion(add)
const squareOptimize = createOptimizedVersion(square)

add(2,4)

const obj = {
  listner: [],
  addEventListener(cb){
    this.listner.push(cb)
  },
  browserClick: function(){
    for(const fn of this.listner){
      fn()
    }
  }
}

obj.addEventListener
