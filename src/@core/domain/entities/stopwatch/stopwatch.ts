interface StopwatchProps {
  id: string
  name: string
  createdAt: Date
  start: Date | null
  finish: Date | null
}

export class Stopwatch {
  public readonly id: string;
  public name: string;
  public start: Date | null;
  public finish: Date | null;
  public readonly createdAt: Date;

  constructor (public props: StopwatchProps) {
    this.id = props.id;
    this.name = props.name;
    this.start = props.start;
    this.finish = props.finish;
    this.createdAt = props.createdAt;
  }

  startStopwatch (startDate: Date): void {
    this.start = startDate;
  }

  toJSON (): StopwatchProps {
    return {
      id: this.id,
      name: this.name,
      start: this.start,
      finish: this.finish,
      createdAt: this.createdAt
    };
  }
}
