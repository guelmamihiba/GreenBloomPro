import { Test, TestingModule } from '@nestjs/testing';
import { VasesService } from './vases.service';

describe('VasesService', () => {
  let service: VasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VasesService],
    }).compile();

    service = module.get<VasesService>(VasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
