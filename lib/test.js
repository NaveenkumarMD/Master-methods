const { convertToObject, textSpanContainsPosition } = require('typescript')
const {add, roundoff}=require('./Math-methods')

require('./String-methods')
require('./Number-methods')
require('./Array-methods')
require('./Validation-methods')
var str = "+942355";
//console.log(str.isAlnum())
const re=/^[0-9.]+$/i
//console.log(str.isAlnum())
console.log(re.test(str))
console.log(str.validateMobile())