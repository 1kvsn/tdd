export function checkLeapYear(num) {
  if (num < 0) {
    throw new Error("Input must be a positive integer");
  }

  if (num % 4 !== 0) {
    return "not a leap year";
  }
}
