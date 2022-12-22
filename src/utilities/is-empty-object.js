function isEmptyObject(objectCheck) {
	if (objectCheck === null) {
		return true;
	}

	if (typeof objectCheck === 'undefined') {
		return true;
	}

	if (Object.keys(objectCheck).length === 0) {
		return true;
	}

	if (JSON.stringify(objectCheck) === '{}') {
		return true;
	}

	return false;
}

export {isEmptyObject};
