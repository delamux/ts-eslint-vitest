import { expect, test } from 'vitest';

import { sum } from '../core/sum';

test('should sum two numbers', () => {
  const result = sum(1, 4);
  const expected = 5;

  expect(result).toBe(expected);
});
