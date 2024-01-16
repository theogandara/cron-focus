import { describe, expect, test } from 'vitest';
import { Stopwatch } from './stopwatch';

describe('Stopwatch', () => {
  test('Its possible create a Stopwatch ', () => {
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

  test('Its possible start the Stopwatch', () => {
    const newStopwatch = new Stopwatch({
      id: '1',
      name: 'Stopwatch',
      start: null,
      finish: null,
      createdAt: new Date()
    });

    newStopwatch.startStopwatch(new Date());
    expect(newStopwatch.start).not.toBeNull();
  });
});
