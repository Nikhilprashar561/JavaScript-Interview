function prepareDish(dish, cb) {
  setTimeout(() => cb(null, { dish, status: "Prepared" }), 100);
}
function prepareOrder(order, cb) {
  setTimeout(() => cb(null, { ...order, status: "Prepared" }), 100);
}
function prepareDelivery(order, cb) {
  setTimeout(() => cb(null, { ...order, status: "Prepared" }), 100);
}

prepareDish("Biryani", (err, dish) => {
  if (err) console.log(err);
  prepareOrder(dish, (err, order) => {
    if (err) console.log(err);
    prepareDelivery(order, (err, order) => {
      if (err) console.log(err);
      console.log(`Finally Your Dish Ready ${order}`);
    });
  });
});

// State in Promises :- "pending" , "full-fill", "rejected"
// properties in promises :- "resolve" ,  "rejected"

function DishPrepare(dish) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!dish) {
        reject(new Error("Nahi Chla Bhai"));
        return;
      }
      console.log(`Yeh Hai dish bhai ${dish}`);
      resolve({ dish, status: "Prepration Mode on" });
    }, 100);
  });
}

function orderPrepare(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Yeh Hai dish bhai ${order}`);
      resolve({ ...order, status: "Prepration Mode on" });
    }, 100);
  });
}
function DeliveryPrepare(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Yeh Hai dish bhai ${order}`);
      resolve({ ...order, status: "Prepration Mode on" });
    }, 100);
  });
}

// DishPrepare("Biryani")
//   .then((order) => orderPrepare(order))
//   .then((order) => DeliveryPrepare(order))
//   .catch((err) => console.log(err));

const promisee = new Promise((res, rej) => {
  setTimeout(() => {
    res("NIKHIL");
    rej(new Error("Abe Chal Nah"));
  }, 2000);
});

// console.log(promisee)

// setTimeout(() => {
//   console.log(promisee)
// }, 3000)

// promisee.then(console.log)
promisee
  .then(
    (data) => console.log(data),
    // (err) => console.log(err), // Then have basically two parameters so that's why you can hanlde a error in second parameter.
  )
  .catch((err) => console.log(err));

// In then we pass a data refernce to other promise , below a implementationn .

promisee
  .then((data) => {
    let newDb = data.toLowerCase();
    return newDb; // if we use return then that data value pass to other next then function otherwise not
  })
  .then((data) => {
    return data + ".com";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err); // if error then print that value
    return "Prashar"; // you can also pass a data in catch .
  })
  .then((data) => console.log("Yeh Value Ayi kya", data));

const vadda = Promise.any([
  // if any one query resolve into array they return or exit not move next one
  Promise.resolve("Hey it's ME"),
  Promise.resolve("Hey it's you"),
]);

vadda.then((data) => console.log(data))

const vaddaRaha = Promise.all([
  // all query resolve into array they return otherwise not
  Promise.resolve("Hey it's ME"),
  Promise.resolve("Hey it's you"),
  // Promise.reject("Reject ho gya")
]);

vaddaRaha.then(console.log).catch((err) => console.log(err))

const vaddaKiya = Promise.allSettled([
  // all inserted query return whatever it is rejected or resolved.
  Promise.resolve("Hey it's ME"),
  Promise.resolve("Hey it's you"),
  Promise.reject("Reject ho gya"),
]);

vaddaKiya.then(console.log)

// Async JavaScript .

const prom = new Promise((res, rej) => {
  setTimeout(() => {
    (res("Hey Async JS"), rej("abe chal nah"));
  });
});

async function hey() {
  try {
    const data = await prom;
    console.log(data);
  } catch (error) {
    console.log("Yaha Error handle hota hai", error);
  }
}

hey();
// console.log()

function boilWater(ms) {
  return new Promise((res, rej) => {
    if (typeof ms !== "number" || ms < 0) {
      rej(new Error("yeh Nahi Chale ga bhai"));
    }
    setTimeout(() => {
      res("Kya hua water boil yah nahi");
    }, ms);
  });
}

boilWater(-1)
  .then((data) => console.log(data))
  .catch((err) => console.log("yeh Error kyu aya ji:-", err));
