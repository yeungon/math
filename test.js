import test from 'ava';
import {random, cubeRoot} from './index.js';

test('main', t => {
	t.is(typeof random(), 'number');
});

test('basic_math', t => {
	t.is(cubeRoot(true, 37), 3.33);
});

