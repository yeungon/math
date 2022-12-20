function random(max = 10) {
	if (typeof max !== 'number') {
		throw new TypeError(`Expected a number, got ${typeof max}`);
	}
	return Math.floor(Math.random() * max);
}

export {random};