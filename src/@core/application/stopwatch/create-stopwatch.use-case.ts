import { Stopwatch } from '../../domain/entities/stopwatch/stopwatch';

interface CreateStopwatchUseCaseRequest {
  name: string
  description?: string
}

type CreateStopwatchUseCaseResponse = Stopwatch;

export class CreateStopwatchUseCase {
  async execute ({ name, description }: CreateStopwatchUseCaseRequest): Promise<CreateStopwatchUseCaseResponse> {
    return new Stopwatch({
      id: '1',
      name,
      description: description ?? '',
      start: null,
      finish: null,
      createdAt: new Date()
    });
  }
}
