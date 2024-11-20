import { Test, TestingModule } from '@nestjs/testing';
import { VasesController } from './vases.controller';

describe('VasesController', () => {
  let controller: VasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VasesController],
    }).compile();

    controller = module.get<VasesController>(VasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
