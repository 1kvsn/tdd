import { checkLeapYear } from "./checkLeapYear";

describe("check leap year", () => {
  it("should be a positive integer", () => {
    expect(() => checkLeapYear(-1)).toThrow("Input must be a positive integer");
  });

  it("should not be a leap year if num not divisible by 4", () => {
    expect(checkLeapYear(2001)).toBe("not a leap year");
  });
});
