import { Test, TestingModule } from '@nestjs/testing';
import { EssentionalOilsService } from './essentional_oils.service';

describe('EssentionalOilsService', () => {
  let service: EssentionalOilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EssentionalOilsService],
    }).compile();

    service = module.get<EssentionalOilsService>(EssentionalOilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
