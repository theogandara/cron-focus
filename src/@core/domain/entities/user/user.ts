interface UserProps {
  name: string
  email: string
  createdAt: Date
}

export class User {
  public readonly name: string;
  public readonly email: string;
  public readonly createdAt: Date;

  constructor (public props: UserProps) {
    this.name = props.name;
    this.email = props.email;
    this.createdAt = new Date();
  }

  toJSON (): UserProps {
    return {
      name: this.name,
      email: this.email,
      createdAt: this.createdAt
    };
  }
}
