import { Test, TestingModule } from '@nestjs/testing';
import { HomewareController } from './home_ware_decor.controller';

describe('HomeWareDecorController', () => {
  let controller: HomewareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomewareController],
    }).compile();

    controller = module.get<HomewareController>(HomewareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
