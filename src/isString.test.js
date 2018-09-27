import { isString } from './isString';

describe('isString', () => {
  it('должно вернуть true', () => {
    expect(isString('some string')).toEqual(true);
  });
  it('должно вернуть false', () => {
    expect(isString(5)).toEqual(false);
  });
});

