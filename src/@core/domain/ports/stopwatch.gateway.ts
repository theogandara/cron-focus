import { type Stopwatch } from '../entities/stopwatch/stopwatch';

export interface StopwatchGateway {
  createStopwatch: (props: Stopwatch) => Stopwatch
  getStopwatch: (id: string) => Stopwatch
  startStopwatch: () => void
  finishStopwatch: (id: string) => void
}
