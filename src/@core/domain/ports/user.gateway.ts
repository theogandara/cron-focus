import { type User } from '../entities/user/user';

export interface UserGateway {
  createUser: (props: User) => User
}
