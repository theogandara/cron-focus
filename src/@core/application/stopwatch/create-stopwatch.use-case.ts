import { Stopwatch } from '../../domain/entities/stopwatch/stopwatch';

interface CreateStopwatchUseCaseRequest {
  name: string
  description?: string
}

type CreateStopwatchUseCaseResponse = Stopwatch;

export class CreateStopwatchUseCase {
  async execute ({ name, description }: CreateStopwatchUseCaseRequest): Promise<CreateStopwatchUseCaseResponse> {
    const stopwatch = new Stopwatch({
      id: '1',
      name,
      description: description ?? '',
      start: null,
      finish: null,
      paused: null,
      time: 0,
      isRunning: false,
      isFinished: false,
      createdAt: new Date()
    });

    return stopwatch;
  }
}
