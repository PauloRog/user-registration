import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user.admin) {
      throw new Error('User is not admin!');
    }

    const users = this.usersRepository.list();

    if (users.length === 0) {
      throw new Error('No users found');
    }

    return users;
  }
}

export { ListAllUsersUseCase };
