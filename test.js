import test from 'ava';
import animatedNavMenuSvg from '.';

test('title', t => {
	t.throws(() => {
		animatedNavMenuSvg(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(animatedNavMenuSvg('unicorns'), 'unicorns & rainbows');
});
