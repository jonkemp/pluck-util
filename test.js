const assert = require('assert');
const pluck = require('./');

describe('pluck', () => {
	it('should look through the list and return an array of values that matches the key provided', () => {
		const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
		const test = obj => pluck(stooges, obj);
		assert.deepEqual(test('name'), ['moe', 'larry', 'curly']);
		assert.deepEqual(test('age'), [40, 50, 60]);
	});

	it('should return missing properties as undefined', () => {
		const people = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

		assert.deepEqual(pluck(people, 'address'), [void 0, void 0, void 0]);
	});

	it('should handle objects as keys', () => {
		assert.deepEqual(pluck([{'[object Object]': 1}], {}), [1]);
	});
});
