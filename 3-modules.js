//Modules = Encapsulated code 
const names = require('./4-mod1')
const sayHi = require('./5-utils')

require('./7-mind-granade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)