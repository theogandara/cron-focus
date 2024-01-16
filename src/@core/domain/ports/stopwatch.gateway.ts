import { type Stopwatch } from '../entities/stopwatch/stopwatch';

export interface StopwatchGateway {
  // createStopwatch(props: Stopwatch): Stopwatch;
  // startStopwatch(): void;
  // pauseStopwatch(): void;
  // finishStopwatch(): void;
  // deleteStopwatch(id: string): Stopwatch;
  // updateStopwatch(props: Partial<Stopwatch>): Stopwatch;
  // getStopwatch(id: string): Stopwatch;
  getStopwatches: () => Promise<Stopwatch[]>
}
