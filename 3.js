const names = require(`./2-firstmodule`);
const sayhi = require(`./secondmodule`);
const data = require(`./alternatemethod`);
require(`./modules2`);


console.log(data.items[0])
console.log(data.singlePerson.name);

console.log(names)
sayhi(names.john);