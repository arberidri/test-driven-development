import { isValid } from './isbn13';

describe('isValid', () => {
  test('valid ISBN-13 number', () => {
    expect(isValid('9780306406157')).toBe(true);
  });

  test('invalid ISBN-13 number with wrong checksum', () => {
    expect(isValid('9780306406158')).toBe(false);
  });

  test('valid ISBN-13 number starting with 979', () => {
    expect(isValid('9791234567896')).toBe(true);
  });

  test('invalid ISBN-13 with letters in it', () => {
    expect(isValid('97803A6406157')).toBe(false);
  });

  test('invalid ISBN-13 with wrong length', () => {
    expect(isValid('978030640615')).toBe(false);
  });
});
