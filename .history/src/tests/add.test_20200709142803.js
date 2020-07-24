const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Should greet user', () => {
    const greeting = generateGreeting('Isabelle');
    expect(greeting).toBe('Hello Isabelle!');
})