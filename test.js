import test from 'ava';
import mathGenerator from './index.js';

test('main', t => {
	t.throws(() => {
		mathGenerator(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number',
	});

	t.is(mathGenerator('unicorns'), 'unicorns & toan');
});
