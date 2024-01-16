import { expect, test } from 'vitest';
import { Stopwatch } from './stopwatch';

test('Stopwatch', () => {
  const newStopwatch = new Stopwatch({
    id: '1',
    name: 'Stopwatch',
    start: null,
    finish: null,
    createdAt: new Date()
  });

  expect(newStopwatch).toBeDefined();
  expect(newStopwatch).toBeInstanceOf(Stopwatch);
});
