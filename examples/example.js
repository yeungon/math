import {
	random,
	isEmptyObject,
	addition,
	basicAlgebra,
	absoluteDifference,
	comparisonFraction,
	cubeRoot,
	fractionDivision,
	division,
	exponentiation,
	factorial,
} from 'math-generator';

console.log(random(1));
console.log(random(2));
console.log(basicAlgebra(100));
console.log(absoluteDifference(96, -27));
console.log(addition(100, 10));
console.log(comparisonFraction());
console.log(cubeRoot());
console.log(cubeRoot(true, 80));
console.log(cubeRoot(true, 37));
console.log(fractionDivision());
console.log(division());
console.log(exponentiation());
console.log(isEmptyObject());
console.log(isEmptyObject({}));
console.log(isEmptyObject({key: 'value'}));
console.log(factorial());
console.log(factorial(true, 5));
