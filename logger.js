
// const EventEmitter = require("events");
// const emitter = new EventEmitter(); n

// var url = "http://mylogger.io/log";

// function log(message) {
//   //Send an HTTP request
//   console.log('message');
// }

// module.exports = log;
//  module.exports.url = url;

// module wrapper function
// console.log(__filename);
// console.log(__dirname);
// (function (exports, require, module, __filename, __dirname) {
  var url = "http://mylogger.io/log";
  
//   function log(message) {
//     //Send an HTTP request
//     emitter.emit('messageLogged', /*event argument =>*/ { id: 1, url: 'http://'})
//   }

// module.exports = log;


const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    //Send an HTTP request

    //Raise an event
    this.emitter.emit('messageLogged', /*event argument =>*/ { id: 1, url: 'http://'})
  }
}

module.exports = Logger;