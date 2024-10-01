namespace MathUtils {
    export const add = (a: number, b: number) => a + b;
    export const subtract = (a: number, b: number) => a - b;
}

// Accessing items from the namespace
const sum = MathUtils.add(5, 3);
console.log(sum);  // Output: 8

export namespace MathUtils2 {
    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }
}