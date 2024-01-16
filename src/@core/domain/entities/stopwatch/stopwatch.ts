interface StopwatchProps {
  id: string
  name: string
  description: string
  createdAt: Date
  start: Date | null
  finish: Date | null
  paused: Date | null
  time: number
  isRunning: boolean
  isFinished: boolean
}

export class Stopwatch {
  public readonly id: string;
  public name: string;
  public description: string;
  public start: Date | null;
  public finish: Date | null;
  public paused: Date | null;
  public time: number;
  public isRunning: boolean;
  public isFinished: boolean;
  public readonly createdAt: Date;

  constructor (public props: StopwatchProps) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.start = props.start;
    this.finish = props.finish;
    this.paused = props.paused;
    this.time = props.time;
    this.isRunning = props.isRunning;
    this.isFinished = props.isFinished;
    this.createdAt = props.createdAt;
  }

  static create (props: StopwatchProps): Stopwatch {
    return new Stopwatch(props);
  }

  toJSON (): StopwatchProps {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      start: this.start,
      finish: this.finish,
      paused: this.paused,
      time: this.time,
      isRunning: this.isRunning,
      isFinished: this.isFinished,
      createdAt: this.createdAt
    };
  }
}
