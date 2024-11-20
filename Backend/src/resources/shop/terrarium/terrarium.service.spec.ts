import { Test, TestingModule } from '@nestjs/testing';
import { TerrariumsService } from './terrarium.service';

describe('TerrariumService', () => {
  let service: TerrariumsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerrariumsService],
    }).compile();

    service = module.get<TerrariumsService>(TerrariumsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
