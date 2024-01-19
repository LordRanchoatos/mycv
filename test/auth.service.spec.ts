import { Test } from '@nestjs/testing';
import { AuthService } from 'src/users/auth.service';
import { UsersService } from 'src/users/users.service';
// import { UsersService } from 'src/users/users.service';

it('can create an instance of ', async () => {
  // create a fake copy of the users service

  const fakeUsersService = {
    find: () => Promise.resolve([]),
    create: (email: string, password: string) =>
      Promise.resolve({ id: 1, emailL: password }),
  };
  const module = await Test.createTestingModule({
    providers: [
      AuthService,
      {
        provide: UsersService,
        useValue: fakeUsersService,
      },
    ],
  }).compile();

  const service = module.get(AuthService);

  expect(service).toBeDefined();
});
