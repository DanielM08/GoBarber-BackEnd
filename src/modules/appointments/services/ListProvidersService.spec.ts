import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {

  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProviders = new ListProvidersService(fakeUsersRepository);
  })

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@email.com',
      password: '12345'
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Jhon Trê',
      email: 'jhontre@email.com',
      password: '12345'
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Jhon Qua',
      email: 'jhonqua@email.com',
      password: '12345'
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id
    });

    expect(providers).toEqual([user1, user2]);
  });
});
