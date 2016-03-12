var pingPong = require('./pingPong.js').pingPong;


console.log('Ping-ponging up to 100!');
var result = pingPong(100);
result.forEach(function(element) {
  console.log(element);
});
