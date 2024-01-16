import { expect, test } from 'vitest';
import { Stopwatch } from './stopwatch';

test('Stopwatch', () => {
  const newStopwatch = new Stopwatch({
    id: '1',
    name: 'Stopwatch',
    description: 'Stopwatch',
    start: null,
    finish: null,
    paused: null,
    time: 0,
    isRunning: false,
    isFinished: false,
    createdAt: new Date()
  });

  expect(newStopwatch).toBeDefined();
  expect(newStopwatch).toBeInstanceOf(Stopwatch);
});
