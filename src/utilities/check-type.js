function checkType(input, type) {
	if (typeof input !== type) {
		throw new TypeError(`Expected a ${type}, got ${typeof input}`);
	}
}

export {checkType};
