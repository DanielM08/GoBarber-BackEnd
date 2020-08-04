import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const createUserService = new CreateUserService(fakeUsersRepository);
    const authenticateUserService = new AuthenticateUserService(
      fakeUsersRepository
    );

    await createUserService.execute({
      name: 'John Doe',
      email: 'email@email.com',
      password: '12345'
    })

    const response = await authenticateUserService.execute({
      email: 'email@email.com',
      password: '12345'
    });

    expect(response).toHaveProperty('token');
  });
});
