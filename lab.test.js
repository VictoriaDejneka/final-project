const numberToEnglish = require('./lab');

test('checks only numbers', () => {
  expect(numberToEnglish(4124124)).toBe("four million one hundred and twenty four thousand one hundred and twenty four");
});