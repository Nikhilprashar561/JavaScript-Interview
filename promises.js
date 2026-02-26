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

DishPrepare("Biryani")
  .then((order) => orderPrepare(order))
  .then((order) => DeliveryPrepare(order))
  .catch((err) => console.log(err));
