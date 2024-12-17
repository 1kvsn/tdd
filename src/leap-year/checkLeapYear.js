export function checkLeapYear(num) {
	if (num < 0) {
		throw new Error('Input must be a positive integer');
	}

	if (num % 4 !== 0) {
		return false;
	}

	if (num % 100 === 0 && num % 400 !== 0) {
		return false;
	}
	if (num % 400 === 0) {
		return true;
	}
	return true;
}
