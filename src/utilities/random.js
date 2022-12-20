import {checkType} from 'math-generator';

function random(max = 10, min = 1) {
	checkType(min, 'number');
	checkType(max, 'number');
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {random};
