import { Test, TestingModule } from '@nestjs/testing';
import { BotanicalArtController } from './botanical_art.controller';

describe('BotanicalArtController', () => {
  let controller: BotanicalArtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BotanicalArtController],
    }).compile();

    controller = module.get<BotanicalArtController>(BotanicalArtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
