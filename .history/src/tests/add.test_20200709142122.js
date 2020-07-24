const add = (a, b) => a + b;

test('should add two numbers', () => {
    const result = add(3, 4);

    if (result !== 7) {
        throw new Error(`Incorrect result: you added 4 and 3 and goet ${result} instead of 7`);
    }
}); 