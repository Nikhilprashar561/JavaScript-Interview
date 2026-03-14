const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 10; // BY Default we have 4 thread so we are increasing a thread number

setTimeout(() => {
  console.log("Hey Guy's from setTimeOut");
}, 0);

setImmediate(() => console.log("Immediate Execute"));

fs.readFile("./sample.txt", "utf-8", (err, res) => {
  //  we have no idea how much file is big and how much time they take.
  console.log("Hello File Read ho gyi guy's");

  setTimeout(() => {
    console.log("Hello Guy's Inside fs 1");
  }, 0);
  setTimeout(() => {
    console.log("Hello Guy's Inside fs 2");
  }, 5 * 1000);
  setImmediate(() => console.log("Immediate Execute 2 "));

  crypto.pbkdf2("hello", "Nikhil", 10000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}Hello Password Generated 1`);
  });

  crypto.pbkdf2("hello", "Nikhil", 10000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}Hello Password Generated 2`);
  });

  crypto.pbkdf2("hello", "Nikhil", 10000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}Hello Password Generated 3`);
  });

  crypto.pbkdf2("hello", "Nikhil", 10000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}Hello Password Generated 4`);
  });

  crypto.pbkdf2("hello", "Nikhil", 10000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}Hello Password Generated 5`);
  });

  crypto.pbkdf2("hello", "Nikhil", 10000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}Hello Password Generated 6`);
  });
});

console.log("Hello From Top level Code");
