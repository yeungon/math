import {checkType} from 'math-generator';

function random(max = 10) {
	checkType(max, 'number');
	return Math.floor(Math.random() * max);
}

export {random};
