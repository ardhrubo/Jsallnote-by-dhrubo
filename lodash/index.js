// Load the full build.
var _ = require('lodash');

// Load the fp build.
var fp = require('lodash/fp');

// The `lodash/map` iteratee receives three arguments:
// (value, index|key, collection)
console.log(_.map(['6', '8', '10'], parseInt));
// ➜ [6, NaN, 2]

// The `lodash/fp/map` iteratee is capped at one argument:
// (value)
console.log(fp.map(parseInt, ['6', '8', '10']));
// ➜ [6, 8, 10]

let chunded = _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
let chunk = _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

console.log(chunded,chunk);