import {
	random,
	checkType,
} from 'math-generator';

function getResult(input) {
	checkType(input, 'number');
	let n = input;
	let b = 1;
	if (input >= 1) {
		while (n > 0) {
			b *= n; // Verbose: b = b * n
			n -= 1; // Verbose: n = n - 1
		}
	}

	return b;
}

function factorial(tool = false, maxInput = 6, format = 'string') {
	if (tool) {
		return getResult(maxInput);
	}

	const a = random(maxInput);
	const b = getResult(a);

	if (format === 'string') {
		return {
			problem: `${a}!`,
			solution: b,
		};
	}
}

export {factorial};

