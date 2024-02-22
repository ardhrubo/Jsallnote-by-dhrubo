const collect = require('collect.js');



const collection = collect([1, 2, 3, 4, 5, 6, 7]);

const chunks = collection.chunk(4);

console.log(chunks.all());

