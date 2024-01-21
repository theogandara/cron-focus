import { User } from '../../domain/entities/user/user';
import { type UserGateway } from '../../domain/ports/user.gateway';

interface CreateUserUseCaseRequest {
  name: string
  email: string
}

type CreateUserUseCaseResponse = User;

export class CreateUserUseCase {
  constructor (private readonly userGateway: UserGateway) {}

  async execute ({ name, email }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const user = new User({
      name,
      email,
      createdAt: new Date()
    });

    return this.userGateway.createUser(user);
  }
}
