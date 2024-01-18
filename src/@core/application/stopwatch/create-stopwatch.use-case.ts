import { Stopwatch } from '../../domain/entities/stopwatch/stopwatch';
import { type StopwatchGateway } from '../../domain/ports/stopwatch.gateway';

interface CreateStopwatchUseCaseRequest {
  name: string
}

type CreateStopwatchUseCaseResponse = Stopwatch;

export class CreateStopwatchUseCase {
  constructor (private readonly stopwatchGateway: StopwatchGateway) {}

  async execute ({ name }: CreateStopwatchUseCaseRequest): Promise<CreateStopwatchUseCaseResponse> {
    const stopwatch = new Stopwatch({
      id: '1',
      name,
      start: null,
      finish: null,
      createdAt: new Date()
    });

    return this.stopwatchGateway.createStopwatch(stopwatch);
  }
}
