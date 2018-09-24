const add = (a,b) => a + b;

const generateGreeting =(name) => `Hello ${name}!`;


test('must input two numbers',()=>{
    const result = add(3,4);
    expect(result).toBe(7);
})

test('hello',()=>{
    const result = generateGreeting('mike');
    expect(result).toBe('Hello mike!');
})