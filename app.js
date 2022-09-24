// using log module in app.js from logger.js

// const logger = require("./logger");

// console.log("message");

// function sayHello(name) {
//     console.log('Hello ' + name);
// }

// sayHello('kehinde')

// console.log(window); it shoots error, this only work in browsers not in node

// module system in node // OS fs events http
// console.log() // global object because it can be accessed anywhere in any file
// setTimeout() call a function after a delay
//clearTimeout()

// setInterval()
// clearInterval()

// objects in browsers
// windows.console.log

//path
//const path = require('path);
//var pathObj = path.parse(__filename);
//console.log(pathObj);

// OS
// const os = require("os");

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log("Total Memory: " + totalMemory);

// //Template string
// // ES6/ ES2015 : ECMAScript 6

// console.log(`Free Memory: ${freeMemory}`);

//Fs in node
// const fs = require("fs");

// const files = fs.readdirSync("./");
// console.log(files);

// fs.readdir("./", function (err, files) {
//   if (err) console.log("Error", err);
//   else console.log("Result", files);
// });

// simulating an error
// fs.readdir("$", function (err, files) {
//     if (err) console.log("Error", err);
//     else console.log("Result", files);
//   });

//EVENTs Module

// const EventEmitter = require("events"); // class // Human

// const emitter = new EventEmitter(); // object // john // instance of the class above

// emitter.emit('messageLogged')
// Emit means Making a noise, produce - siganlling that an event has happened.
//after runnning the event nothing happened because we didnt attatch it to a listener

// Register a listener
// emitter.on('messageLogged', function(arg /* e,eventArg*/) {
//     console.log('Listener called', arg)
// })

//arrow function
// emitter.on('messageLogged', (arg /* e,eventArg*/) => {
//     console.log('Listener called', arg)
// })

// //Raise an event
// emitter.emit('messageLogged', /*event argument =>*/ { id: 1, url: 'http://'})

//1)
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("messageLogged", (arg) => {
//   console.log("Listener called", arg);
// });

// const log = require("./logger");
// log('message');

//2) using class logger
// const EventEmitter = require("events");

// const Logger = require("./logger");
// const logger = new Logger();

// //Register an event
// logger.on("messageLogged", (arg) => {
//   console.log("Listener called", arg);
// });

// console.log("message");

//basic http architecture
// const http = require("http");

// const server = http.createServer();

// server.on('connection', (socket) => {
//     console.log('New connection.....');
// });
// server.listen(3000);

// console.log("Listening on port 3000...");

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000...");
