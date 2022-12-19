export {random} from './mathgenerator/funcs/algebra/basic-algebra.js';

function mathGenerator(input, { postfix = 'toan' } = {}) {
	if (typeof input !== "string") {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return `${input} & ${postfix}`;
}

export {mathGenerator};
