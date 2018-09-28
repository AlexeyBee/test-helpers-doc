import sum from './sum'

describe('sum', () => {
	it('3 + 5', () => {
		expect(sum(3, 5)).toEqual(8)
	})
	it('0 + 0', () => {
		expect(sum(0, 0)).toEqual(0)
	})
})
