import {random, checkType} from 'math-generator';

function comparisonFraction(maxValue = 10, format = 'string') {
	checkType(maxValue, 'number');
	const a = random(maxValue);
	let b = random(maxValue);
	const c = random(maxValue);
	let d = random(maxValue);
	while (a === b) {
		b = random(maxValue);
	}

	while (c === d) {
		d = random(maxValue);
	}

	const first = a / b;
	const second = c / d;
	let solution = '';

	if (first > second) {
		solution = '>';
	} else if (first < second) {
		solution = '<';
	} else {
		solution = '=';
	}

	if (format === 'string') {
		return {problem: `Which symbol represents the comparison between ${a}/${b} and ${c}/${d}?`,
			solution,
		};
	}
}

export {comparisonFraction};

