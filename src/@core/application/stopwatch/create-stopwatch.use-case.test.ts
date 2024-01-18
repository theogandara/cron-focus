import { describe, it } from 'vitest';
import { CreateStopwatchUseCase } from './create-stopwatch.use-case';
import { CreateStopwatchInMemoryGateway } from '../../infra/adapters/stopwatch-in-memory.gateway';
import { stopwatches } from '../../database/stopwatches';

describe('CreateStopwatchUseCase', () => {
  it('should create a stopwatch', async ({ expect }) => {
    const NAME = 'Stopwatch 1';
    const stopwatchGateway = new CreateStopwatchInMemoryGateway();
    const useCase = new CreateStopwatchUseCase(stopwatchGateway);

    let newStopwatch;

    try {
      newStopwatch = await useCase.execute({ name: NAME });
    } catch (e) {
      console.log(e);
    }

    console.log(newStopwatch?.toJSON());

    expect(stopwatches).toHaveLength(1);
  });
}
);
