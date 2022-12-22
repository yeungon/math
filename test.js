import test from 'ava';
import {random, cubeRoot, exponentiation, isEmptyObject, factorial} from './index.js';

test('utilities', t => {
	t.is(typeof random(), 'number');
	t.is(isEmptyObject(), true);
	t.is(isEmptyObject({}), true);
	t.is(isEmptyObject(null), true);
	t.is(isEmptyObject({key: ''}), false);
	t.is(isEmptyObject({key: 'value'}), false);
});

test('cubeRoot', t => {
	t.is(cubeRoot(true, 37), 3.33);
});

test('exponentiation', t => {
	t.is(exponentiation(true, 5, 2), 25);
});

test('factorial', t => {
	t.is(factorial(true, 5), 120);
	t.is(factorial(true, 7), 5040);
});

