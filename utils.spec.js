import { isEmpty } from "./utils.js";

// Contain all test cases for a single function inside a 'describe' block
describe('isEmpty', () => {

  // Contain each test case for a function in a 'test' block
  test('returns true for undefined', () => {
    const result = isEmpty(undefined);
    expect(result).toEqual(true)
  });

  test('returns true for null', () => {
    const result = isEmpty(null);
    expect(result).toEqual(true)
  });

});