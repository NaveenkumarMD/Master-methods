require('../lib/Number-methods')


//reverse a number

test('Reverse', () => {
    let x=[1234,4567,1111,22222234]
    expect(x[0].reverse()).toBe(4321)
    expect(x[1].reverse()).toBe(7654)
    expect(x[2].reverse()).toBe(1111)
    expect(x[3].reverse()).toBe(43222222)
})
//Odd Number
test('isOdd',()=>{
    let x=[12,23,56,78]
    expect(x[0].isOdd()).toBe(false)
    expect(x[1].isOdd()).toBe(true)
    expect(x[2].isOdd()).toBe(false)
    expect(x[3].isOdd()).toBe(false)
})
//Even Number
test('isEven',()=>{
    let x=[12,23,56,78]
    expect(x[0].isEven()).toBe(true)
    expect(x[1].isEven()).toBe(false)
    expect(x[2].isEven()).toBe(true)
    expect(x[3].isEven()).toBe(true)
})
//Prime Number
test('isPrime',()=>{
    let x=[12,23,56,2]
    expect(x[0].isPrime()).toBe(false)
    expect(x[1].isPrime()).toBe(true)
    expect(x[2].isPrime()).toBe(false)
    expect(x[3].isPrime()).toBe(true)
})
//Composite Number
test('isComposite',()=>{
    let x=[12,23,56,2]
    expect(x[0].isComposite()).toBe(true)
    expect(x[1].isComposite()).toBe(false)
    expect(x[2].isComposite()).toBe(true)
    expect(x[3].isComposite()).toBe(false)
})
//Armstrong Number
test('isArmstrong',()=>{
    let x=[1634,23,56,2]
    expect(x[0].isArmstrong()).toBe(true)
    expect(x[1].isArmstrong()).toBe(false)
    expect(x[2].isArmstrong()).toBe(false)
    expect(x[3].isArmstrong()).toBe(true)
})
//Length 
test('Length',()=>{
    let x=[1634,23,56345678,2]
    expect(x[0].length()).toBe(4)
    expect(x[1].length()).toBe(2)
    expect(x[2].length()).toBe(8)
    expect(x[3].length()).toBe(1)
})

//toRadian
test('toRadian',()=>{
    let x=[90,45,60,340]
    expect(x[0].toRadian()).toBeCloseTo(1.5708)
    expect(x[1].toRadian()).toBeCloseTo(0.785398)
    expect(x[2].toRadian()).toBeCloseTo(1.0472)
    expect(x[3].toRadian()).toBeCloseTo(5.93412)
})

//toDegree
test('toDegree',()=>{
    let x=[1.5708,0.785398,1.0472,5.93412]
    expect(x[0].toDegree()).toBeCloseTo(90)
    expect(x[1].toDegree()).toBeCloseTo(45)
    expect(x[2].toDegree()).toBeCloseTo(60)
    expect(x[3].toDegree()).toBeCloseTo(340)
})



