// Using Constructor Function and Prototype

// Problem statement there are a lassi stand chain , when we are move at every stand got new lassi stand.

// Our job is that make a constructor function and then create a prototype method.
// with new keyword create a new instance and as we know prototype share new instances.

// 1. Step create a constructor function 

// No Duplicates flavors in menu :- check flaovour by name string
// id autoincrement when method call
// getmenu return a copy not a original array.


function LassiStand(name, city) {
  this.name = name,
  this.city = city,
  this.menu = [],
  this.order = [],
  this._nextOrderId = 1
}

LassiStand.prototype.addFlavor = function(flavor, price) { 
    if(price < 1) return -1;
    if(this.menu.length === 0) return -1;
    const isExist = this.menu.find(e => e.flavor === flavor);
    if(isExist) return -1;
    this.menu.push({flavor, price});
    return this.menu.length;

 }
LassiStand.prototype.takeOrder = function(customerName, flavor, quantity) { 

 }
LassiStand.prototype.completeOrder = function(orderId) { 

 }
LassiStand.prototype.getRevenue = function() { 

 }
LassiStand.prototype.getMenu = function() { 

 };

function isLassiStand(obj) {
  // Your code here
}


const stand = new LassiStand("Sardar ji", "Amritsar");
stand.addFlavor("mango", 40);          // => 1
stand.addFlavor("rose", 35);           // => 2
stand.addFlavor("mango", 45);          // => -1 (duplicate)
stand.takeOrder("Rahul", "mango", 2);  // => 1
stand.takeOrder("Priya", "rose", 1);   // => 2
stand.completeOrder(1);                 // => true
stand.getRevenue();                     // => 80
isLassiStand(stand);                    // => true
isLassiStand({});                       // => false