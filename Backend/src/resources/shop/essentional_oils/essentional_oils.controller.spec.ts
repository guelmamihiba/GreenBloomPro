import { Test, TestingModule } from '@nestjs/testing';
import { EssentionalOilsController } from './essentional_oils.controller';

describe('EssentionalOilsController', () => {
  let controller: EssentionalOilsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EssentionalOilsController],
    }).compile();

    controller = module.get<EssentionalOilsController>(EssentionalOilsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
