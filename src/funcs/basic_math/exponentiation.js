import {
	random,
	checkType,
} from 'math-generator';

export function exponentiation(tool = false, maxBase = 10, maxExpo = 10, format = 'string') {
	checkType(maxBase, 'number');
	checkType(maxExpo, 'number');
	const base = random(maxBase);
	const expo = random(maxExpo);
	if (tool) {
		return maxBase ** maxExpo;
	}

	if (format === 'string') {
		return {
			problem: `${base}^${expo}`,
			solution: base ** expo,
		};
	}
}
