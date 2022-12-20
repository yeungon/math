import {
	random,
	checkType,
} from 'math-generator';

function cubeRoot(tool = false, minNo = 1, maxNo = 100, format = 'string') {
	checkType(minNo, 'number');
	checkType(maxNo, 'number');
	if (tool) {
		const cubeRoot = Math.cbrt(minNo);
		return Number(cubeRoot.toFixed(2));
	}

	const a = random(maxNo, minNo);
	const cubeRoot = Math.cbrt(a);
	if (format === 'string') {
		return {
			problem: `What is the cube root of ${a} up to 2 decimal places?`,
			solution: cubeRoot.toFixed(2),
		};
	}
}

export {cubeRoot};
