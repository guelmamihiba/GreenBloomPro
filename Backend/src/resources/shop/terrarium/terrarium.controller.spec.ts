import { Test, TestingModule } from '@nestjs/testing';
import { TerrariumsController } from './terrarium.controller';

describe('TerrariumController', () => {
  let controller: TerrariumsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerrariumsController],
    }).compile();

    controller = module.get<TerrariumsController>(TerrariumsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
