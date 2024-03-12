var safeMatch = require ('./index');
var TIMEOUT = 100; //ms

// Bad regex
console.log(safeMatch('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC', new RegExp('^(A+)*B'), TIMEOUT));
var r = new RegExp('A', 'g')

// Doesn't match
console.log(safeMatch('BBB', r, TIMEOUT));

// Matches
for(var i = 0; i < 3; i++) {
    console.log(safeMatch('AAC', r, TIMEOUT));
}
