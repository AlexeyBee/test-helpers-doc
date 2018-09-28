import { split } from './split'

describe('split', () => {
	it("разбить строку 'foo bar baz'", () => {
		expect(split('foo bar baz')).toEqual(['foo', 'bar', 'baz'])
	})
})
