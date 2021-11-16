
var obj={
    name:"naveenkumar",
    id:2,
    arr:[1,2,3,4,5],
    obj:{
        name:"naveen",
        id:1
    }
}
let values=Object.values(obj)
console.group(values)
console.debug(2 in values)
console.debug([1,2,3,4,5] in values)
console.info('naveenkumar' in values)