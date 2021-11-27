const { multiply } = require("./../calculator");

describe("Multiply", () => {
    
    test("should multiply two positive integers correctly", () => {
        const result = multiply(2, 5);
        expect(result).toBe(10);
    });

    test("should multiply a negative and a positive integer correctly", () => {
        const result = multiply(-3, 4);
        expect(result).toBe(-12);
    });

    test("should multiply any number and the number 0 with the result 0", () => {
        const result = multiply(5, 0);
        expect(result).toBe(0);
    });
  
});
