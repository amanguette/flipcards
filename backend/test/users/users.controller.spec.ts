import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../../src/users/users.controller';
import { UsersService } from '../../src/users/users.service';

describe('UsersController', () => {
  let controller: UsersController;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     controllers: [UsersController],
  //   }).compile();

  //   controller = module.get<UsersController>(UsersController);
  // });

  beforeEach(async () => {
    const mockUsersService = {
      // ajouter des méthodes simulées ici si nécessaire
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
