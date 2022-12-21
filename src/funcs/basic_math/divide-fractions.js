import {
	random,
	checkType,
} from 'math-generator';

function findGreatestCommonDivisor(x, y) {
	checkType(x, 'number');
	checkType(y, 'number');
	while (y) {
		x = y;
		y = x % y;
	}

	return x;
}

function fractionDivision(maxValue = 10, format = 'string') {
	checkType(maxValue, 'number');
	const a = random(maxValue);
	let b = random(maxValue);
	while (a === b) {
		b = random(maxValue);
	}

	const c = random(maxValue);
	let d = random(maxValue);
	while (c === d) {
		d = random(maxValue);
	}

	const temporaryN = a * d;
	const temporaryD = b * c;
	const gcd = findGreatestCommonDivisor(temporaryN, temporaryD);
	const solNumerator = temporaryN / gcd;
	const solDenominator = temporaryD / gcd;
	let result = `${solNumerator} / ${solDenominator}`;
	if (temporaryD === 1 || temporaryD === gcd) {
		result = solNumerator;
	}

	if (format === 'string') {
		return {
			problem: `${a}/${b} / ${c}/${d}`,
			solution: result,
		};
	}
}

export {fractionDivision};

