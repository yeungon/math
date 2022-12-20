import {random, checkType} from 'math-generator';

/**
 *
 * Basic_math: Addition
 * @return {total value} .
 * @origin idea https://github.com/lukew3/mathgenerator/blob/main/mathgenerator/funcs/basic_math/addition.py
 * example:  executing addition(10, 10) and get -->
 *
 */

function addition(maxSum = 99, maxAdded = 50, format = 'string') {
	checkType(maxSum, 'number');
	checkType(maxAdded, 'number');
	if (maxAdded > maxSum) {
		maxAdded = maxSum;
	}

	const a = random(maxAdded);
	const b = random(maxAdded);
	const c = a + b;
	if (format === 'string') {
		return {
			problem: `${a} + ${b} =`,
			solution: c,
		};
	}

	if (format === 'plain') {
		return c;
	}
}

export {addition};
