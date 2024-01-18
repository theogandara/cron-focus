import { stopwatches } from '../../database/stopwatches';
import { type StopwatchGateway } from '../../domain/ports/stopwatch.gateway';
import { Stopwatch } from '../../domain/entities/stopwatch/stopwatch';

export class CreateStopwatchInMemoryGateway implements StopwatchGateway {
  createStopwatch (props: Stopwatch): Stopwatch {
    const stopwatch = new Stopwatch(props);
    stopwatches.push(stopwatch);
    return stopwatch;
  }

  getStopwatch (id: string): Stopwatch | undefined {
    return stopwatches.find(stopwatch => stopwatch.id === id);
  };

  startStopwatch (id: string): Date {
    const stopwatch = stopwatches.find(stopwatch => stopwatch.id === id);
    const start = new Date();

    if (stopwatch === undefined) {
      throw new Error('Stopwatch not found');
    }

    stopwatch.start = start;
    return start;
  };

  finishStopwatch (id: string): Date {
    const stopwatch = stopwatches.find(stopwatch => stopwatch.id === id);
    const finish = new Date();

    if (stopwatch === undefined) {
      throw new Error('Stopwatch not found');
    }

    stopwatch.finish = finish;
    return finish;
  };
}
