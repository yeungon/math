// Import {random} from '../../utilities/random.js';

import {
	random,
	checkType,
} from 'math-generator';

function absoluteDifference(maxA = 100, maxB = 100, format = 'string') {
	checkType(maxA, 'number');
	checkType(maxB, 'number');
	const a = random(maxA);
	const b = random(maxB);
	const absDiff = Math.abs(a - b);
	if (format === 'string') {
		return `| ${a} ${b} | = ${absDiff}`;
	}
}

export {absoluteDifference};
