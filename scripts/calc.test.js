const {test, expect} = require("@jest/globals");
import { Calculator } from "./calc.js"

test("can add 1 + 1?", () => {
    let calc = new Calculator();
    expect(calc.add(1,1)).toBe(2);
});

test("can't add nulls", () => {
    let calc = new Calculator();
    expect(calc.add(null,null)).toBe(0);
});

test("can subtract 1 from 2?", () => {
    let calc = new Calculator();
    expect(calc.subtract(1,2)).toBe(-1);
});

test("can multiply 1 by 1?", () => {
    let calc = new Calculator();
    expect(calc.multiply(1,1)).toBe(1);
});

test("can divide 10 by 5?", () => {
    let calc = new Calculator();
    expect(calc.divide(10,5)).toBe(2);
});