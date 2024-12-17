import { checkLeapYear } from "./checkLeapYear";

describe("check leap year", () => {
  it("should be a positive integer", () => {
    expect(() => checkLeapYear(-1)).toThrow("Input must be a positive integer");
  });

  it("should not be a leap year if num not divisible by 4", () => {
    expect(checkLeapYear(1997)).toBe(false);
  });

  it("should be a leap year if num divisible by 4", () => {
    expect(checkLeapYear(1996)).toBe(true);
  });

  it("should be a leap year if num divisible by 400", () => {
    expect(checkLeapYear(1600)).toBe(true);
  })

  it("should not be a leap year if num divisible by 100 but not by 400", () => {
    expect(checkLeapYear(1800)).toBe(false);
  });
});
