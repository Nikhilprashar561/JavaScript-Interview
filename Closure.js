// Private Variable in Function

function testing(balance){
  let bal = balance
  return {
    deposite: function(amount){
      bal = bal + amount
      return bal
    },
    withdraw: function(amount){
      if(bal < amount){
        return `Sorry Please add first amount then withdraw`
      } else {
        bal = bal - amount
        return bal
      }
    }
  }
}

const testCheck = testing(1000)
console.log(testCheck.deposite(400))
console.log(testCheck.withdraw(100))


function outer(){
    let name = "Nikhil"

    function inner(){
        // let lastName = "Prashar"
        console.log("This is Outer Function variable", name)
    }
    // console.log("This is inner Function variable", lastName)
    inner()
}
outer()

// Actually Closure Example .

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer(); // Here Your Outer Function is finish but when you are call inside function they 
// access outer function variable and chnage it's value continously, that's why this is called a closure

counter(); // 1
counter(); // 2
counter(); // 3

// A Closure questions 

function createDabbawala(name, area) {
  let deliveries = [];
  let nextId = 1;

  return {
    addDelivery(from, to) {
      if (!from || !to) return -1;

      const delivery = {
        id: nextId,
        from,
        to,
        status: "pending",
      };

      deliveries.push(delivery);
      console.log(deliveries)
      nextId++;

      console.log(delivery.id);
    },

    completeDelivery(id) {
      const found = deliveries.find(d => d.id === id);
      console.log(found)

      if (!found || found.status === "completed") {
        return false;
      }

      found.status = "completed";
      console.log(found)
      return true;
    },

    getActiveDeliveries() {
      console.log(deliveries)
      return deliveries
        .filter(d => d.status === "pending")
        .map(d => ({ ...d }));
    },

    getStats() {
      const total = deliveries.length;
      const completed = deliveries.filter(d => d.status === "completed").length;
      const pending = deliveries.filter(d => d.status === "pending").length;

      let successRate = "0.00%";

      if (total > 0) {
        successRate = ((completed / total) * 100).toFixed(2) + "%";
      }

      return {
        name,
        area,
        total,
        completed,
        pending,
        successRate,
      };
    },

    reset() {
      deliveries = [];
      nextId = 1;
      return true;
    }
  };
}

const checkTest = createDabbawala("Nikhil", "Katra")
const check = createDabbawala("Raja", "Bangluru")


console.log(checkTest.addDelivery("Pathankot", "Dinanagar"))
console.log(checkTest.completeDelivery(1))
console.log(checkTest.getActiveDeliveries())
console.log(checkTest.getStats())

console.log(check.addDelivery("ASR","SBC"))
console.log(check.completeDelivery(1))
console.log(check.getActiveDeliveries())
console.log(check.getStats())

console.log(check.reset())

console.log(checkTest.getStats())

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
