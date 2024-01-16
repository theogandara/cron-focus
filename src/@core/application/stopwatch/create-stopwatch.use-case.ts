import { Stopwatch } from '../../domain/entities/stopwatch/stopwatch';

interface CreateStopwatchUseCaseRequest {
  name: string
}

type CreateStopwatchUseCaseResponse = Stopwatch;

export class CreateStopwatchUseCase {
  async execute ({ name }: CreateStopwatchUseCaseRequest): Promise<CreateStopwatchUseCaseResponse> {
    return new Stopwatch({
      id: '1',
      name,
      start: null,
      finish: null,
      createdAt: new Date()
    });
  }
}
