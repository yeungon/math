import test from 'ava';
import {random} from './index.js';

test('main', t => {
	t.is(typeof random(), 'number');
});

