import { Test, TestingModule } from '@nestjs/testing';
import { HomewareService } from './home_ware_decor.service';

describe('HomeWareDecorService', () => {
  let service: HomewareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomewareService],
    }).compile();

    service = module.get<HomewareService>(HomewareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
