import {
	random,
	checkType,
} from 'math-generator';

export function division(maxValueA = 25, maxValueB = 25, format = 'string') {
	checkType(maxValueA, 'number');
	checkType(maxValueB, 'number');
	const a = random(maxValueA);
	const b = random(maxValueB);
	const divisor = a * b;
	const randomIndex = Math.floor(Math.random() * 2);
	const dataCombined = [a, b];
	const dividend = dataCombined[randomIndex];
	const quotient = Number(divisor / dividend);
	if (format === 'string') {
		return {
			problem: `${divisor}/${dividend}`,
			solution: quotient,
		};
	}
}
