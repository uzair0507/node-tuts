const _ = require('lodash');

const item = [1, 2, ['Uzair', 45, [3]]]
const newitem = _.flattenDeep(item);
console.log(newitem);
console.log("Hello World, My Name is MUF")