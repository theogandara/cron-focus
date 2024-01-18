import { type Stopwatch } from '../entities/stopwatch/stopwatch';

export interface StopwatchGateway {
  createStopwatch: (props: Stopwatch) => Stopwatch
  getStopwatch: (id: string) => Stopwatch | undefined
  startStopwatch: (id: string) => Date
  finishStopwatch: (id: string) => Date
}
