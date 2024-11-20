import { Test, TestingModule } from '@nestjs/testing';
import { BotanicalArtService } from './botanical_art.service';

describe('BotanicalArtService', () => {
  let service: BotanicalArtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BotanicalArtService],
    }).compile();

    service = module.get<BotanicalArtService>(BotanicalArtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
