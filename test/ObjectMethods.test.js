require('../lib/Object-methods')

test("get Types",()=>{
    var x={a:"naveen",b:"kumar",c:"sethu"}
    var y={a:2,b:3,c:true}
    expect(x.gettypes()).toContain('string')
    expect(y.gettypes()).toContain('boolean')
})

test("Get values",()=>{
    var x={a:"naveen",b:"kumar",c:"sethu"}
    var y={a:2,b:3,c:true}
    console.log(x.keys())
    console.log(x.values())
    expect(x.values()).toContain('a')
})
