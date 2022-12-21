import test from 'ava';
import {random, cubeRoot, exponentiation} from './index.js';

test('main', t => {
	t.is(typeof random(), 'number');
});

test('cubeRoot', t => {
	t.is(cubeRoot(true, 37), 3.33);
});

test('exponentiation', t => {
	t.is(exponentiation(true, 5, 2), 25);
});

