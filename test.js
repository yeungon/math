import test from 'ava';
import {random, cubeRoot, exponentiation, isEmptyObject} from './index.js';

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

