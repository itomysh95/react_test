const add = (a,b) => a+b;
const generateGreeting = (name) => `Hello ${name}!`

test('should add two numbers', ()=>{
    const result = add(3,4)
    expect(result).toBe(7)
})

test('should return the',()=>{
    const result = generateGreeting('Thomas')
    expect(result).toBe('Hello Thomas!')
})

test('should generate greeting for no name',()=>{
    const result = generateGreeting('')
    expect(result).toBe('Hello !')
})