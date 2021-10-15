require('../lib/String-methods')

test('String Reverse', () => {
    var x=["naveen","kumar","hello","nun"]
    expect(x[0].sreverse()).toBe("neevan")
    expect(x[1].sreverse()).toBe("ramuk")
    expect(x[2].sreverse()).toBe("olleh")
    expect(x[3].sreverse()).toBe("nun")
})
test('isEmpty', () => {
    var x=["3","    ","hello","  "]
    expect(x[0].isEmpty()).toBe(false)
    expect(x[1].isEmpty()).toBe(true)
    expect(x[2].isEmpty()).toBe(false)
    expect(x[3].isEmpty()).toBe(true)
})
test('Truncate', () => {
    var x=["naveen","kumar","hello","nun"]
    expect(x[0].truncate(2)).toBe("na")
    expect(x[1].truncate(3)).toBe("kum")
    expect(x[2].truncate(4)).toBe("hell")
    expect(x[3].truncate(1)).toBe("n")
})
test('Swap case', () => {
    var x=["naVeen","KUMAR","HELLO","Nun"]
    expect(x[0].swapcase()).toBe("NAvEEN")
    expect(x[1].swapcase()).toBe("kumar")
    expect(x[2].swapcase()).toBe("hello")
    expect(x[3].swapcase()).toBe("nUN")
})
test('Capitalize', () => {
    var x=["he is a good boy","hello world","deeds defines god","Hi there"]
    expect(x[0].capitalize()).toBe("He is a good boy")
    expect(x[1].capitalize()).toBe("Hello world")
    expect(x[2].capitalize()).toBe("Deeds defines god")
    expect(x[3].capitalize()).toBe("Hi there")
})
test('Camel case', () => {
    var x=["he is a good boy","hello world","deeds defines god","Hi there"]
    expect(x[0].camelCase()).toBe("heIsAGoodBoy")
    expect(x[1].camelCase()).toBe("helloWorld")
    expect(x[2].camelCase()).toBe("deedsDefinesGod")
    expect(x[3].camelCase()).toBe("HiThere")
})
test('Endswith', () => {
    var x=["he is a good boy","hello world","deeds defines god","Hi there"]
    expect(x[0].endsWith("bad")).toBe(false)
    expect(x[1].endsWith("world")).toBe(true)
    expect(x[2].endsWith("deeds")).toBe(false)
    expect(x[3].endsWith("there")).toBe(true)
})
test('Startswith', () => {
    var x=["he is a good boy","hello world","deeds defines god","Hi there"]
    expect(x[0].startsWith("heeeee")).toBe(false)
    expect(x[1].startsWith("word")).toBe(false)
    expect(x[2].startsWith("dee")).toBe(true)
    expect(x[3].startsWith("Hi")).toBe(true)
})
test('casefold', () => {
    var x=["naveen","kumar","HELLO","nun"]
    expect(x[0].casefold()).toBe("naveen")
    expect(x[1].casefold()).toBe("kumar")
    expect(x[2].casefold()).toBe("hello")
    expect(x[3].casefold()).toBe("nun")
})
test('Count', () => {
    var x=["he is a good boy","hello world","deeds defines god","Hi there"]
    expect(x[0].count("he")).toBe(1)
    expect(x[1].count("world")).toBe(1)
    expect(x[2].count("e")).toBe(4)
    expect(x[3].count("e")).toBe(2)
})
test('isAlnum', () => {
    var x=["23","naveen","345","///"]
    expect(x[0].isAlnum()).toBe(true)
    expect(x[1].isAlnum()).toBe(true)
    expect(x[2].isAlnum()).toBe(true)
    expect(x[3].isAlnum()).toBe(false)
})
test('isAlpha', () => {
    var x=["23","naveen","345","///"]
    expect(x[0].isAlpha()).toBe(false)
    expect(x[1].isAlpha()).toBe(true)
    expect(x[2].isAlpha()).toBe(false)
    expect(x[3].isAlpha()).toBe(false)
})
test('isNumeric', () => {
    var x=["23","naveen","345","///"]
    expect(x[0].isNum()).toBe(true)
    expect(x[1].isNum()).toBe(false)
    expect(x[2].isNum()).toBe(true)
    expect(x[3].isNum()).toBe(false)
})
test('isvalid', () => {
    var x=["23","naveen"," "," "]
    expect(x[0].isvalid()).toBe(true)
    expect(x[1].isvalid()).toBe(true)
    expect(x[2].isvalid()).toBe(false)
    expect(x[3].isvalid()).toBe(false)
})